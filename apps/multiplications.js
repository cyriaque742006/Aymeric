const gameData = {
    title: "Multiplications",
    timerLimit: 100,
    questions: []
};

for (let i = 2; i <= 10; i++) {
    for (let j = 2; j <= 10; j++) {
        const res = i * j;
        let opts = new Set([res.toString()]);
        while(opts.size < 3) {
            let f = res + (Math.random() > 0.5 ? i : j) * (Math.random() > 0.5 ? 1 : -1);
            if(f > 0 && f !== res) opts.add(f.toString());
        }
        gameData.questions.push({ q: `${i} x ${j} = ?`, a: res.toString(), options: Array.from(opts) });
    }
}