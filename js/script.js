/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week2 Day5 Daily Challenge 99 Bottles Of Beer
 */

//1- Prompt the user for a number to begin counting down bottles.

//2- In the song, everytime a bottle drops,
// the subtracted number should go up by 1.

let nbBottle;
let nbBottleDown = 0;
do {
    nbBottle = prompt("Combien de bieres pour le depart ?");
} while (nbBottle == null || isNaN(nbBottle));

/**
 * Recupère et affiche le nombre de bouteilles de bière retirées
 * @param nbBottleDown 
 * @returns 
 */
function bottlesDownSentence(nbBottleDown) {
    let sentence = "Take " + nbBottleDown + " down, ";
    sentence += nbBottleDown == 1 ? "pass it around" : "pass them around";
    return sentence;
}

/**
 * Recupère et affiche le nombre de bouteille de bière sur le mur
 * @param nbBottle 
 * @returns 
 */
function bottlesOfBeerOnTheWallSentense(nbBottle) {
    let bottleWord = nbBottle <= 1 ? " bottle" : " bottles";
    let sentence = nbBottle + bottleWord + " of beer on the wall";
    return sentence;
}

/**
 * Recupère et affiche le nombre de bouteilles de bière
 * @param nbBottle 
 * @returns 
 */
function bottlesOfBeerSentense(nbBottle) {
    let bottleWord = nbBottle == 1 ? " bottle" : " bottles";
    let sentence = nbBottle + bottleWord + " bottles of beer";
    return sentence;
}

function main() {
    while (nbBottle > 0) {
        console.log(bottlesOfBeerOnTheWallSentense(nbBottle));
        console.log(bottlesOfBeerSentense(nbBottle));
        nbBottleDown++;
        console.log(bottlesDownSentence(nbBottleDown));
        nbBottle -= nbBottleDown;
        if (nbBottle < 0) nbBottle = 0;
        console.log(bottlesOfBeerOnTheWallSentense(nbBottle));
        console.log("\n");
    }
}

main();