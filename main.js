let temp = parseInt(prompt(`Inserisci la temperatura attuale`));

switch (true) {
    case (temp < 20 && temp >= 0):
        console.log(`ormai non ci sono più le mezze stagioni`);
        break;
    case (temp >= 30 && temp <=45):
        console.log(`'sole, 'o mare, ' vient`);
        break;
    case temp > 45:
        console.log(`chiuditi in casa col condizionatore acceso`);
        break;
    case (temp < 30 && temp >= 20):
        console.log(`mi dia una birra ghiacciata`);
        break;
    case (temp < 0 && temp >= -10):
        console.log(`non è tanto il freddo, quanto l'umidità`);
        break;
    case temp < -10:
        console.log(`cazzo che freddo!!!`);
        break;
    default:
        console.log(`devi inserire un numero`);        
}