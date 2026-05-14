const depts = [
    {n:"01",m:"Ain"},{n:"02",m:"Aisne"},{n:"03",m:"Allier"},{n:"04",m:"Alpes-de-H.P."},{n:"05",m:"Hautes-Alpes"},
    {n:"06",m:"Alpes-Marit."},{n:"07",m:"Ardèche"},{n:"08",m:"Ardennes"},{n:"09",m:"Ariège"},{n:"10",m:"Aube"},
    {n:"11",m:"Aude"},{n:"12",m:"Aveyron"},{n:"13",m:"B. du Rhône"},{n:"14",m:"Calvados"},{n:"15",m:"Cantal"},
    {n:"16",m:"Charente"},{n:"17",m:"Charente-M."},{n:"18",m:"Cher"},{n:"19",m:"Corrèze"},{n:"2A",m:"Corse-Sud"},
    {n:"2B",m:"Haute-Corse"},{n:"21",m:"Côte-d'Or"},{n:"22",m:"Côtes-d'Armor"},{n:"23",m:"Creuse"},{n:"24",m:"Dordogne"},
    {n:"25",m:"Doubs"},{n:"26",m:"Drôme"},{n:"27",m:"Eure"},{n:"28",m:"Eure-et-Loir"},{n:"29",m:"Finistère"},
    {n:"30",m:"Gard"},{n:"31",m:"H-Garonne"},{n:"32",m:"Gers"},{n:"33",m:"Gironde"},{n:"34",m:"Hérault"},
    {n:"35",m:"Ille-et-Vil."},{n:"36",m:"Indre"},{n:"37",m:"Indre-et-L."},{n:"38",m:"Isère"},{n:"39",m:"Jura"},
    {n:"40",m:"Landes"},{n:"41",m:"Loir-et-Cher"},{n:"42",m:"Loire"},{n:"43",m:"H-Loire"},{n:"44",m:"Loire-Atl."},
    {n:"45",m:"Loiret"},{n:"46",m:"Lot"},{n:"47",m:"Lot-et-Gar."},{n:"48",m:"Lozère"},{n:"49",m:"Maine-et-L."},
    {n:"50",m:"Manche"},{n:"51",m:"Marne"},{n:"52",m:"H-Marne"},{n:"53",m:"Mayenne"},{n:"54",m:"M. et Moselle"},
    {n:"55",m:"Meuse"},{n:"56",m:"Morbihan"},{n:"57",m:"Moselle"},{n:"58",m:"Nièvre"},{n:"59",m:"Nord"},
    {n:"60",m:"Oise"},{n:"61",m:"Orne"},{n:"62",m:"Pas-de-Calais"},{n:"63",m:"Puy-de-Dôme"},{n:"64",m:"Pyrén.-Atl."},
    {n:"65",m:"H-Pyrénées"},{n:"66",m:"Pyrén.-Or."},{n:"67",m:"Bas-Rhin"},{n:"68",m:"Haut-Rhin"},{n:"69",m:"Rhône"},
    {n:"70",m:"H-Saône"},{n:"71",m:"Saône-et-L."},{n:"72",m:"Sarthe"},{n:"73",m:"Savoie"},{n:"74",m:"H-Savoie"},
    {n:"75",m:"Paris"},{n:"76",m:"Seine-Marit."},{n:"77",m:"Seine-et-M."},{n:"78",m:"Yvelines"},{n:"79",m:"Deux-Sèvres"},
    {n:"80",m:"Somme"},{n:"81",m:"Tarn"},{n:"82",m:"Tarn-et-Gar."},{n:"83",m:"Var"},{n:"84",m:"Vaucluse"},
    {n:"85",m:"Vendée"},{n:"86",m:"Vienne"},{n:"87",m:"H-Vienne"},{n:"88",m:"Vosges"},{n:"89",m:"Yonne"},
    {n:"90",m:"T. de Belfort"},{n:"91",m:"Essonne"},{n:"92",m:"H-de-Seine"},{n:"93",m:"S-Saint-Denis"},{n:"94",m:"Val-de-Marne"},{n:"95",m:"Val-d'Oise"}
];

const gameData = {
    title: "Départs Expert",
    timerLimit: 100,
    modeClavier: true,
    questions: depts.map(d => ({ q: `Numéro du département :<br><strong>${d.m}</strong>`, a: d.n }))
};