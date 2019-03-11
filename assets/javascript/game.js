let playerHealthStat1
let playerAttackStat1
let counterAttackStat1
let oppHealthStat1
let oppAttackStat1
let oppCounterAttackStat1

let playerHealthStat2
let playerAttackStat2
let counterAttackStat
let oppHealthStat2
let oppAttackStat2
let oppCounterAttackStat2

let playerSelected = false;
let opponentSelected = false;




const hoverInfo = () => {

    let characters = document.querySelectorAll(".player")

    for (let i = 0; i < characters.length; i++) {

        characters[i].addEventListener('mouseover', e => {


            if (playerSelected === false && opponentSelected === false && e.target.className.includes('player') && e.target.getAttribute("data-selected") === 'false') {



                // if (e.target.className.includes('player') && e.target.getAttribute("data-selected") === 'false') {

                console.log('hover')
                console.log(playerSelected)
                console.log(opponentSelected)
                console.log(e.target.getAttribute("data-selected"))
                console.log('I am green')

                // console.log(e.target.getAttribute('value').toUpperCase())
                document.querySelector('#playerName').textContent = "Player: " + e.target.getAttribute('value').toUpperCase()
                document.querySelector('#playerAttack').textContent = "Attack: " + e.target.getAttribute('attack')
                document.querySelector('#playerHealth').textContent = "Health: " + e.target.getAttribute('health')
                document.querySelector('#counterAttack').textContent = "Counter-Attack: " + e.target.getAttribute('counter')
                console.log(e)

                //CREDIT: http://helephant.com/2008/07/12/using-javascript-queryselector/

                //for (let i = 0; i < characters.length; i++) {
                characters[i].addEventListener("mouseenter", function (e) {
                    this.style.filter = "drop-shadow(8px 8px 10px green)";
                });
                // }
                // for (let i = 0; i < characters.length; i++) {
                characters[i].addEventListener("mouseleave", function (e) {
                    this.style.filter = "";
                });
                // }
                // }
                // else {
                //     null
                // }

                //console.log(e.target.getAttribute('health'))
            }
            else if (e.target.className.includes('player') && playerSelected === true && opponentSelected === false && e.target.getAttribute("data-selected") === 'false') {
                console.log('hover')
                console.log(playerSelected)
                console.log(opponentSelected)
                console.log(e.target.getAttribute("data-selected"))
                console.log('I am red')
                // if (e.target.className.includes('player')) {
                document.querySelector('#oppName').textContent = "Opponent: " + e.target.getAttribute('value').toUpperCase()
                document.querySelector('#oppAttack').textContent = "Attack: " + e.target.getAttribute('attack')
                document.querySelector('#oppHealth').textContent = "Health: " + e.target.getAttribute('health')
                document.querySelector('#oppCounterAttack').textContent = "Counter-Attack: " + e.target.getAttribute('counter')

                //CREDIT: http://helephant.com/2008/07/12/using-javascript-queryselector/
                // let characters = document.querySelectorAll(".player")
                //for (let i = 0; i < characters.length; i++) {
                characters[i].addEventListener("mouseenter", function (e) {
                    this.style.filter = "drop-shadow(8px 8px 10px red)";
                });
                // }
                //for (let i = 0; i < characters.length; i++) {
                characters[i].addEventListener("mouseleave", function (e) {
                    this.style.filter = "";
                });
                //}
                // }
                // else {
                //     null
                // }

            }
            else {

                console.log('hover')
                console.log(playerSelected)
                console.log(opponentSelected)
                console.log(e.target.getAttribute("data-selected"))
                console.log('I am red')

                //CREDIT: http://helephant.com/2008/07/12/using-javascript-queryselector/
                //let characters = document.querySelectorAll(".player")
                //for (let i = 0; i < characters.length; i++) {
                characters[i].addEventListener("mouseenter", function (e) {
                    this.style.filter = "grayscale(100%)"
                    //this.style.filter = "drop-shadow(8px 8px 10px gray)";
                });
                //  }
                //  for (let i = 0; i < characters.length; i++) {
                characters[i].addEventListener("mouseleave", function (e) {
                    this.style.filter = "";
                });
                //  }
            }

        })
    }

}


const selectPlayer = () => {

    document.addEventListener("click", e => {


        if (playerSelected === false && opponentSelected === false && e.target.className.includes('player') && e.target.getAttribute("data-selected") === 'false') {




            playerSelected = true




            // if () {
            console.log(e.target.getAttribute("data-selected"))
            e.target.setAttribute("data-selected", "true")
            document.querySelector('#playerName').textContent = "Player: " + e.target.getAttribute('value').toUpperCase()
            document.querySelector('#playerAttack').textContent = "Attack: " + e.target.getAttribute('attack')
            document.querySelector('#playerHealth').textContent = "Health: " + e.target.getAttribute('health')
            document.querySelector('#counterAttack').textContent = "Counter-Attack: " + e.target.getAttribute('counter')

            let newParent = document.getElementById('user');
            let oldParent = document.getElementById(e.target.parentElement.id);

            while (oldParent.childNodes.length > 0) {
                newParent.appendChild(oldParent.childNodes[0]);

            }

            playerHealthStat1 = parseInt(document.querySelector('#playerHealth').textContent.substring(8, 11))
            playerAttackStat1 = parseInt(document.querySelector('#playerAttack').textContent.substring(8, 10))
            counterAttackStat1 = parseInt(document.querySelector('#counterAttack').textContent.substring(16, 18))

            playerHealthStat2 = playerHealthStat1
            playerAttackStat2 = playerAttackStat1
            counterAttackStat2 = counterAttackStat1

            // }

            // else {
            //     null
            // }
        }

        else if (playerSelected === true && opponentSelected === false && event.target.className.includes('player') && e.target.getAttribute("data-selected") === 'false') {


            opponentSelected = true;

            //console.log(e.target.getAttribute("data-selected"))
            //refactor this part
            if (event.target.className.includes('player') && e.target.getAttribute("data-selected") === 'false') {

                e.target.setAttribute("data-selected", "true")

                let newParent = document.getElementById('computer');
                let oldParent = document.getElementById(e.target.parentElement.id);

                while (oldParent.childNodes.length > 0) {
                    newParent.appendChild(oldParent.childNodes[0]);
                }

                // console.log(e)
                // console.log('no, I am here ' + playerSelected + opponentSelected)

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
            // else {
            //     console.log(e.target)
            // }
        }
        else {
            null
        }

    })

}



const attack = () => {
    let youLose
    let youWin
    let totalEnemies = 11

    if (document.getElementById('computer').childNodes.length > 0 && document.getElementById('user').childNodes.length > 0) {

        let newParent = document.getElementById('computer');
        let userParent = document.getElementById('user');

        playerHealthStat2 -= oppCounterAttackStat2

        oppHealthStat2 -= playerAttackStat2

        document.querySelector('#playerHealth').textContent = `Health: ${playerHealthStat2}`

        document.querySelector('#oppHealth').textContent = `Health: ${oppHealthStat2}`

        playerAttackStat2 *= 2
        document.querySelector('#playerAttack').textContent = `Attack: ${playerAttackStat2}`


        console.log(playerHealthStat2)
        console.log(oppHealthStat2)


        if (playerHealthStat2 > 0 && oppHealthStat2 <= 0) {
            totalEnemies-=1
            opponentSelected = false
            console.log("I am here")


            document.querySelector('#oppHealth').textContent = `Health:`
            document.querySelector('#oppAttack').textContent = `Attack:`
            document.querySelector('#oppCounterAttack').textContent = `Counter-Attack:`



            while (newParent.childNodes.length > 0) {
                newParent.removeChild(newParent.childNodes[0]);
            }

            if (totalEnemies<=0){
            youWin = document.createElement('h1')
            youWin.textContent = 'YOU WIN!'

            document.getElementById('winLost').appendChild(youWin)

            }

    
            
        }

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

    document.getElementById('winLost').removeChild(document.getElementById('winLost').childNodes[0])


    resetImages()

}

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

// const playerOppSelected = () =>{
//     console.log(playerSelected)
//     console.log(opponentSelected)
// }