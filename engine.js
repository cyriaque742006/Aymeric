let currentQuestion = 0, score = 0, questions = [], timerInterval, timeLeft;
let totalResponseTime = 0; 
let startTime; 

function initGame() {
    // On pioche 20 questions au hasard
    questions = [...gameData.questions].sort(() => 0.5 - Math.random()).slice(0, 20);
    totalResponseTime = 0;
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= 20) { showResults(); return; }
    
    const q = questions[currentQuestion];
    document.getElementById('progress').innerText = `${currentQuestion + 1} / 20`;
    document.getElementById('question-text').innerText = q.q;
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    const shuffledOptions = [...q.options].sort(() => 0.5 - Math.random());
    
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => handleAnswer(btn, opt === q.a);
        container.appendChild(btn);
    });

    startTime = Date.now(); 
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    // 100 par défaut (10s) ou selon gameData
    let limit = gameData.timerLimit || 50; 
    timeLeft = limit;
    
    const bar = document.getElementById('timer-bar');
    timerInterval = setInterval(() => {
        timeLeft--;
        bar.style.width = (timeLeft * (100/limit)) + '%';
        if (timeLeft <= 0) { handleAnswer(null, false); }
    }, 100);
}

function handleAnswer(btn, isCorrect) {
    const endTime = Date.now();
    clearInterval(timerInterval);
    
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(b => b.disabled = true);
    
    if (isCorrect) {
        if(btn) btn.classList.add('correct');
        score++;
        totalResponseTime += (endTime - startTime) / 1000;
    } else {
        if(btn) btn.classList.add('wrong');
        buttons.forEach(b => {
            if(b.innerText === questions[currentQuestion].a) b.classList.add('correct');
        });
    }
    
    document.getElementById('score-display').innerText = `Score: ${score}`;
    setTimeout(() => { currentQuestion++; showQuestion(); }, 1200);
}

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    const res = document.getElementById('result-screen');
    res.classList.remove('hidden');
    
    const moyenne = score > 0 ? (totalResponseTime / score).toFixed(2) : 0;
    
    let message = score >= 18 ? "⭐ CHAMPION ! ⭐" : score >= 14 ? "Très bien !" : "Continue d'apprendre !";
    
    res.innerHTML = `
        <h2>${score} / 20</h2>
        <p style="font-size: 1.1rem; color: #3498db; font-weight: bold;">
            Vitesse moyenne : ${moyenne}s
        </p>
        <h3>${message}</h3>
        <button class="btn-main" onclick="location.reload()">Recommencer</button>
        <button class="btn-main" style="background:#95a5a6; margin-top:10px;" onclick="window.location.href='index.html'">Retour au menu</button>
    `;
}