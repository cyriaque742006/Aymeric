let currentQuestion = 0, score = 0, questions = [], timerInterval, timeLeft;
let totalResponseTime = 0, startTime, currentInput = "";

function initGame() {
    questions = [...gameData.questions].sort(() => 0.5 - Math.random()).slice(0, 20);
    currentQuestion = 0; score = 0; totalResponseTime = 0;
    gameData.modeObservation ? showObservation() : showQuestion();
}

function showObservation() {
    if (currentQuestion >= 20) return showResults();
    const q = questions[currentQuestion];
    document.getElementById('timer-container').style.visibility = 'hidden';
    document.getElementById('progress').innerText = `Lecture`;
    document.getElementById('question-text').innerHTML = `Lit à voix haute :<br><strong style="font-size:3rem; margin:15px 0; display:block;">${q.a}</strong>`;
    const container = document.getElementById('options-container');
    container.innerHTML = `<button class="btn-main" onclick="showQuestion()">C'est fait !</button>`;
}

function showQuestion() {
    if (currentQuestion >= 20) return showResults();
    const q = questions[currentQuestion];
    currentInput = "";
    document.getElementById('timer-container').style.visibility = 'visible';
    document.getElementById('progress').innerText = `Question ${currentQuestion + 1} / 20`;
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    if (gameData.modeClavier) {
        document.getElementById('question-text').innerHTML = q.q;
        const display = document.createElement('div');
        display.id = "input-display"; display.innerText = "__";
        container.appendChild(display);
        const grid = document.createElement('div');
        grid.className = "keyboard-grid";
        "1234567890AB".split('').forEach(key => {
            const b = document.createElement('button'); b.innerText = key;
            b.onclick = () => {
                if(currentInput.length < 2) {
                    currentInput += key; display.innerText = currentInput;
                    if(currentInput.length === 2) handleAnswer(null, currentInput.toUpperCase() === q.a.toUpperCase());
                }
            };
            grid.appendChild(b);
        });
        container.appendChild(grid);
    } else {
        document.getElementById('question-text').innerHTML = gameData.modeObservation ? "Où était le mot ?" : q.q;
        [...q.options].sort(() => 0.5 - Math.random()).forEach(opt => {
            const b = document.createElement('button'); b.innerText = opt;
            b.onclick = () => handleAnswer(b, opt === q.a);
            container.appendChild(b);
        });
    }
    startTime = Date.now(); startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    let limit = gameData.timerLimit || 100;
    timeLeft = limit;
    const bar = document.getElementById('timer-bar');
    timerInterval = setInterval(() => {
        timeLeft--;
        bar.style.width = (timeLeft * (100 / limit)) + '%';
        if (timeLeft <= 0) handleAnswer(null, false);
    }, 100);
}

function handleAnswer(btn, isCorrect) {
    clearInterval(timerInterval);
    const q = questions[currentQuestion];
    const allBtns = document.querySelectorAll('#options-container button');
    allBtns.forEach(b => b.disabled = true);

    if (isCorrect) {
        score++;
        if(btn) btn.classList.add('correct');
        if(gameData.modeClavier) document.getElementById('input-display').className = 'correct-text';
        totalResponseTime += (Date.now() - startTime) / 1000;
    } else {
        if(btn) btn.classList.add('wrong');
        if(gameData.modeClavier) {
            const d = document.getElementById('input-display');
            d.className = 'wrong-text'; d.innerText = q.a;
        }
        allBtns.forEach(b => { if(b.innerText === q.a) b.classList.add('correct'); });
    }

    document.getElementById('score-display').innerText = `Score: ${score}`;
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion >= 20) showResults();
        else gameData.modeObservation ? showObservation() : showQuestion();
    }, 1500);
}

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    const res = document.getElementById('result-screen');
    res.classList.remove('hidden');
    
    let msg = "Continue tes efforts ! 💪";
    if(score === 20) msg = "PARFAIT ! Tu es un génie ! 🏆";
    else if(score >= 15) msg = "Bravo ! C'est super ! ⭐";

    res.innerHTML = `<h2>${score} / 20</h2><p>${msg}</p>
        <button class="btn-main" onclick="location.reload()">Recommencer</button><br>
        <button class="btn-main" style="background:#95a5a6;margin-top:10px" onclick="window.location.href='index.html'">Menu</button>`;
}