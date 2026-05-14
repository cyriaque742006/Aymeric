// apps/mots_outils.js
const gameData = {
    title: "Mots-Outils CP",
    timerLimit: 100,
    modeObservation: true,
    questions: []
};

// Liste simplifiée pour tester
const listeDeMots = ["dans", "mais", "chez", "pour", "avec", "plus", "elle", "est", "fait", "tout", "aussi", "bien", "faire", "rien", "mon", "ton", "son", "ses", "des", "les"];

listeDeMots.forEach(m => {
    let opts = new Set();
    opts.add(m); // La bonne réponse
    
    // Génération de 2 faux choix simples
    while(opts.size < 3) {
        let faux = m + (Math.random() > 0.5 ? "s" : "e");
        if (faux !== m) opts.add(faux);
    }

    gameData.questions.push({
        q: "Trouve le mot !", // Question par défaut (cachée en mode observation)
        a: m,
        options: Array.from(opts)
    });
});