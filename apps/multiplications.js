const gameData = {
    title: "Tables de Multiplication",
    timerLimit: 100, // 10 secondes
    questions: []
};

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        const result = i * j;
        let options = new Set([result.toString()]);
        
        while(options.size < 3) {
            let offset = Math.floor(Math.random() * 5) + 1;
            let fake = Math.random() > 0.5 ? result + offset : result - offset;
            if(fake > 0 && fake !== result) options.add(fake.toString());
        }

        gameData.questions.push({
            q: `${i} x ${j} = ?`,
            a: result.toString(),
            options: Array.from(options)
        });
    }
}