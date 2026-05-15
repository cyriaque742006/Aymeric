// apps/mots_outils.js
const gameData = {
    title: "Mots-Outils CP",
    timerLimit: 100,
    modeObservation: true,
    questions: []
};

// Liste simplifiée pour tester
const listeDeMots = ["à travers", "ailleurs", "ainsi", "alors", "après", "auparavant", "auprès", "aussi", "aussitôt", "autant", "autrefois", "avant", "bien", 
                     "bientôt", "cependant", "certes", "combien", "comment", "davantage", "dehors", "déjà", "depuis", "dès que", "désormais", "devant", "dorénavant", 
                     "en", "encore", "ensuite", "entre", "exprès", "fois", "jadis", "jamais", "jusqu'à", "jusque", "lors", "lorsque", "mais", "moins", "néanmoins", "or", 
                     "parce que", "parfois", "partout", "pendant", "plusieurs", "plutôt", "pourtant", "près", "presque", "puis", "puisque", "quelquefois", "seulement", 
                     "sinon", "surtout", "tandis que", "tant", "tellement", "tôt", "toutefois", "vers", "volontiers", "vraiment"];

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
