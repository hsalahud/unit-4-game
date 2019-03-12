//Player and opponent fighting stats retrieved from div as string
let playerHealthStat1
let playerAttackStat1
let counterAttackStat1
let oppHealthStat1
let oppAttackStat1
let oppCounterAttackStat1

//player and opponent fighting stats when converted to a number
let playerHealthStat2
let playerAttackStat2
let counterAttackStat
let oppHealthStat2
let oppAttackStat2
let oppCounterAttackStat2

//boolean to keep track of whether player and opponent has been selected
let playerSelected = false;
let opponentSelected = false;



/**
 * hoverInfo highlights green when the user is selecting a player
 * highlights blue when the opponent is being selected
 * characters turn gray when no player can be selected
 */
const hoverInfo = () => {

    //Since the character icons are in nested divs, we use querySelectorAll with a for loop to access the icons
    let characters = document.querySelectorAll(".player")

    //i is each of the characters and characters.length is the total number of characters (div is set to array)
    for (let i = 0; i < characters.length; i++) {

        //on mouse over we hover of a character
        characters[i].addEventListener('mouseover', e => {

            //if the condition here is met, that means the user has not selected a player, and the icons have not been selected as fighters, and we can continue in this if statement
            if (playerSelected === false && opponentSelected === false && e.target.className.includes('player') && e.target.getAttribute("data-selected") === 'false') {

                //On hover over we update the player's stats on the left side
                document.querySelector('#playerName').textContent = "Player: " + e.target.getAttribute('value').toUpperCase()
                document.querySelector('#playerAttack').textContent = "Attack: " + e.target.getAttribute('attack')
                document.querySelector('#playerHealth').textContent = "Health: " + e.target.getAttribute('health')
                document.querySelector('#counterAttack').textContent = "Counter-Attack: " + e.target.getAttribute('counter')

                //We also add a green halo to each player when they are selected, and remove it when we hover away from it
                //CREDIT: http://helephant.com/2008/07/12/using-javascript-queryselector/
                
                characters[i].addEventListener("mouseenter", function (e) {
                    this.style.filter = "drop-shadow(8px 8px 10px green)";
                });

                characters[i].addEventListener("mouseleave", function (e) {
                    this.style.filter = "";
                });

            }

            //if the below conditions are met, it means a player is selected and we are now ready to select an opponent
            else if (e.target.className.includes('player') && playerSelected === true && opponentSelected === false && e.target.getAttribute("data-selected") === 'false') {

                //updating opponent stats on the right side
                document.querySelector('#oppName').textContent = "Opponent: " + e.target.getAttribute('value').toUpperCase()
                document.querySelector('#oppAttack').textContent = "Attack: " + e.target.getAttribute('attack')
                document.querySelector('#oppHealth').textContent = "Health: " + e.target.getAttribute('health')
                document.querySelector('#oppCounterAttack').textContent = "Counter-Attack: " + e.target.getAttribute('counter')

                //Hovering over an opponent wil show a red halo
                //CREDIT: http://helephant.com/2008/07/12/using-javascript-queryselector/

                characters[i].addEventListener("mouseenter", function (e) {
                    this.style.filter = "drop-shadow(8px 8px 10px red)";
                });

                characters[i].addEventListener("mouseleave", function (e) {
                    this.style.filter = "";
                });

            }

            //Our else statement indicates both a player and an opponent has been selected
            else {

                //Hover over turns the characters gray meaning they cannot be selected
                //CREDIT: http://helephant.com/2008/07/12/using-javascript-queryselector/
                characters[i].addEventListener("mouseenter", function (e) {
                    this.style.filter = "grayscale(100%)"
                });

                characters[i].addEventListener("mouseleave", function (e) {
                    this.style.filter = "";
                });
  
            }

        })
    }

}

/**
 * selectPlayer is the function to select a player and an opponent
 */
const selectPlayer = () => {

    document.addEventListener("click", e => {

        //If this condition is met, it means that a player has not been selected and the icons we hover over are not selected either
        if (playerSelected === false && opponentSelected === false && e.target.className.includes('player') && e.target.getAttribute("data-selected") === 'false') {

            //by clicking on the first icon, we have selected a player
            playerSelected = true

            //setting this attribute to true ensures that a selected character cannot be selected as an opponent
            e.target.setAttribute("data-selected", "true")

            //Update fighting stats on the left side
            document.querySelector('#playerName').textContent = "Player: " + e.target.getAttribute('value').toUpperCase()
            document.querySelector('#playerAttack').textContent = "Attack: " + e.target.getAttribute('attack')
            document.querySelector('#playerHealth').textContent = "Health: " + e.target.getAttribute('health')
            document.querySelector('#counterAttack').textContent = "Counter-Attack: " + e.target.getAttribute('counter')

            //This method takes our player icon from the middle to the left side
            let newParent = document.getElementById('user');
            let oldParent = document.getElementById(e.target.parentElement.id);

            while (oldParent.childNodes.length > 0) {
                newParent.appendChild(oldParent.childNodes[0]);

            }

            //We take our player stats from the HTML DOM and store them into variables to be manipulated in another function
            playerHealthStat1 = parseInt(document.querySelector('#playerHealth').textContent.substring(8, 11))
            playerAttackStat1 = parseInt(document.querySelector('#playerAttack').textContent.substring(8, 10))
            counterAttackStat1 = parseInt(document.querySelector('#counterAttack').textContent.substring(16, 18))

            //These are the player stats that we will do math on.
            playerHealthStat2 = playerHealthStat1
            playerAttackStat2 = playerAttackStat1
            counterAttackStat2 = counterAttackStat1
        }

        //This block is a repetition of the above, instead for selecting an opponent
        else if (playerSelected === true && opponentSelected === false && event.target.className.includes('player') && e.target.getAttribute("data-selected") === 'false') {

            opponentSelected = true;

            if (event.target.className.includes('player') && e.target.getAttribute("data-selected") === 'false') {

                e.target.setAttribute("data-selected", "true")

                let newParent = document.getElementById('computer');
                let oldParent = document.getElementById(e.target.parentElement.id);

                while (oldParent.childNodes.length > 0) {
                    newParent.appendChild(oldParent.childNodes[0]);
                }

                document.querySelector('#oppName').textContent = "Opponent: " + e.target.getAttribute('value').toUpperCase()
                document.querySelector('#oppAttack').textContent = "Attack: " + e.target.getAttribute('attack')
                document.querySelector('#oppHealth').textContent = "Health: " + e.target.getAttribute('health')
                document.querySelector('#oppCounterAttack').textContent = "Counter-Attack: " + e.target.getAttribute('counter')

                oppHealthStat1 = parseInt(document.querySelector('#oppHealth').textContent.substring(8, 11))
                oppAttackStat1 = parseInt(document.querySelector('#oppAttack').textContent.substring(8, 10))
                oppCounterAttackStat1 = parseInt(document.querySelector('#oppCounterAttack').textContent.substring(16, 18))

                oppHealthStat2 = oppHealthStat1
                oppAttackStat2 = oppAttackStat1
                oppCounterAttackStat2 = oppCounterAttackStat1

            }

        }
        //Once a player and opponent is selected, we don't want to do anything with the click events
        else {
            null
        }

    })

}

/**
 * This function calculates the attack statistics
 */
const attack = () => {
    //variables needed to determine whether we win or lose
    let youLose
    let youWin
    let totalEnemies = 11

    //If a player and opponent is selected, then we continue with the below
    if (document.getElementById('computer').childNodes.length > 0 && document.getElementById('user').childNodes.length > 0) {

        //setting computer and user divs in variables
        let newParent = document.getElementById('computer');
        let userParent = document.getElementById('user');

        //Adjusting health stats per click and showing it in the DOM
        playerHealthStat2 -= oppCounterAttackStat2

        oppHealthStat2 -= playerAttackStat2

        document.querySelector('#playerHealth').textContent = `Health: ${playerHealthStat2}`

        document.querySelector('#oppHealth').textContent = `Health: ${oppHealthStat2}`

        //Changing player attack stats and appending it to the playerAttack DOM
        playerAttackStat2 += playerAttackStat2
        document.querySelector('#playerAttack').textContent = `Attack: ${playerAttackStat2}`

        //If the player beats an enemy, update the DOMS and reduce totalEnemies by one
        if (playerHealthStat2 > 0 && oppHealthStat2 <= 0) {
            totalEnemies -= 1
            opponentSelected = false
    
            document.querySelector('#oppName').textContent = "Opponent: "
            document.querySelector('#oppHealth').textContent = `Health:`
            document.querySelector('#oppAttack').textContent = `Attack:`
            document.querySelector('#oppCounterAttack').textContent = `Counter-Attack:`

            while (newParent.childNodes.length > 0) {
                newParent.removeChild(newParent.childNodes[0]);
            }

            //We win the game if we defeat all the enemies
            if (totalEnemies <= 0) {
                youWin = document.createElement('h1')
                youWin.textContent = 'YOU WIN!'

                document.getElementById('winLost').appendChild(youWin)

            }
        }
        //if player's health is 0 or below, we lose and update the DOMs
        else if (playerHealthStat2 <= 0) {

            youLose = document.createElement('h1')
            youLose.textContent = 'YOU LOST!'

            document.getElementById('winLost').appendChild(youLose)

            while (userParent.childNodes.length > 0) {
                userParent.removeChild(userParent.childNodes[0]);
            }

        }
    }
    else {
        null
    }
}

/**
 * reset brings all the elements we are modifying to their original state
 */
const reset = () => {

    let newParent1 = document.getElementById('user');
    let newParent2 = document.getElementById('computer');

    document.querySelector('#playerName').textContent = "Player: "
    document.querySelector('#playerHealth').textContent = `Health:`
    document.querySelector('#playerAttack').textContent = `Attack:`
    document.querySelector('#counterAttack').textContent = `Counter-Attack:`

    document.querySelector('#oppName').textContent = "Opponent: "
    document.querySelector('#oppHealth').textContent = `Health:`
    document.querySelector('#oppAttack').textContent = `Attack:`
    document.querySelector('#oppCounterAttack').textContent = `Counter-Attack:`

    while (newParent1.childNodes.length > 0) {

        newParent1.removeChild(newParent1.childNodes[0]);
    }

    while (newParent2.childNodes.length > 0) {
        newParent2.removeChild(newParent2.childNodes[0]);
    }

    playerSelected = false;
    opponentSelected = false;

    if (document.getElementById('winLost').childNodes.length > 0) {
        document.getElementById('winLost').removeChild(document.getElementById('winLost').childNodes[0])
    }

    resetImages()

}

/////////Variables to reset images of players////////
let parentMosquito = document.getElementById('mosquito')
let imageMosquito = `<img class="responsive-img player" data-position="0" value="mosquito" data-selected="false" attack="10" health="110" counter="15" src="./assets/images/mosquito.png">`

let parentMysterion = document.getElementById('mysterion')
let imageMysterion = `<img class="responsive-img player" data-position="1" value="mysterion" data-selected="false" attack="10" health="110"
counter="15" src="./assets/images/mysterion.png">`

let parentCallGirl = document.getElementById('call-girl')
let imageCallGirl = `<img class="responsive-img player" data-position="2" value="call girl" data-selected="false" attack="15" health="100"
counter="20" src="./assets/images/superheroes-call-girl.png">`

let parentCaptainDiabetes = document.getElementById('captain-diabetes')
let imageCaptainDiabetes = `<img class="responsive-img player" data-position="3" value="captain diabetes" data-selected="false" attack="20"
health="105" counter="25" src="./assets/images/superheroes-captain-diabetes.png">`

let parentFastPass = document.getElementById('fastpass')
let imageFastPass = `<img class="responsive-img player" data-position="4" value="fastpass" data-selected="false" attack="10" health="100"
counter="15" src="./assets/images/superherores-fastpass.png">`

let parentProfessorTimmy = document.getElementById('prof-timmy')
let imageProfessorTimmy = `<img class="responsive-img player" data-position="5" value="professor timmy" data-selected="false" attack="10"
health="110" counter="15" src="./assets/images/superherores-prof-timmy.png">`

let parentSuperCraig = document.getElementById('super-craig')
let imageSuperCraig = `<img class="responsive-img player" data-position="6" value="super craig" data-selected="false" attack="10" health="100"
counter="15" src="./assets/images/superherores-super-craig.png">`

let parentWonderTweek = document.getElementById('wonder-tweek')
let imageWonderTweek = `<img class="responsive-img player" data-position="7" value="wonder tweek" data-selected="false" attack="20" health="100"
counter="25" src="./assets/images/superherores-wonder-tweek.png">`

let parentTheCoon = document.getElementById('the-coon')
let imageTheCoon = ` <img class="responsive-img player" data-position="8" value="the coon" data-selected="false" attack="5" health="120"
counter="10" src="./assets/images/the-coon.png">`


let parentHumanKite = document.getElementById('human-kite')
let imageHumanKite = ` <img class="responsive-img player" data-position="9" value="human kite" data-selected="false" attack="10" health="105"
counter="15" src="./assets/images/the-human-kite.png">`

let parentToolShed = document.getElementById('toolshed')
let imageToolShed = `<img class="responsive-img player" data-position="10" value="toolshed" data-selected="false" attack="10" health="105"
counter="15" src="./assets/images/toolshed.png">`

let parentTupperware = document.getElementById('tupperware')
let imageTupperware = `<img class="responsive-img player" data-position="11" value="tupperware" data-selected="false" attack="10" health="100"
counter="15" src="./assets/images/tupperware.png">`

/**
 * function to bring all the player icons into the center area
 */
const resetImages = () => {

    parentMosquito.innerHTML = imageMosquito
    parentMysterion.innerHTML = imageMysterion
    parentCallGirl.innerHTML = imageCallGirl
    parentCaptainDiabetes.innerHTML = imageCaptainDiabetes
    parentFastPass.innerHTML = imageFastPass
    parentProfessorTimmy.innerHTML = imageProfessorTimmy
    parentSuperCraig.innerHTML = imageSuperCraig
    parentWonderTweek.innerHTML = imageWonderTweek
    parentTheCoon.innerHTML = imageTheCoon
    parentHumanKite.innerHTML = imageHumanKite
    parentToolShed.innerHTML = imageToolShed
    parentTupperware.innerHTML = imageTupperware
}