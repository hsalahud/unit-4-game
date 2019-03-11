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

// const roster = [
//     {
//         name: "MOSQUITO",
//         health: 100,
//         attack: 10,
//         counterAttack: 15
//     },
//     {
//         name: "MYSTERION",
//         health: 110,
//         attack: 10,
//         counterAttack: 15
//     },
//     {
//         name: "CALL GIRL",
//         health: 100,
//         attack: 15,
//         counterAttack: 20
//     },
//     {
//         name: "CAPTAIN DIABETES",
//         health: 105,
//         attack: 20,
//         counterAttack: 25
//     },
//     {
//         name: "FASTPASS",
//         health: 100,
//         attack: 10,
//         counterAttack: 15
//     },
//     {
//         name: "PROFESSOR TIMMY",
//         health: 110,
//         attack: 10,
//         counterAttack: 15
//     },
//     {
//         name: "SUPER CRAIG",
//         health: 100,
//         attack: 10,
//         counterAttack: 15
//     },
//     {
//         name: "WONDER TWEEK",
//         health: 100,
//         attack: 20,
//         counterAttack: 205
//     },
//     {
//         name: "THE COON",
//         health: 120,
//         attack: 5,
//         counterAttack: 10
//     },
//     {
//         name: "HUMAN KITE",
//         health: 105,
//         attack: 10,
//         counterAttack: 15
//     },
//     {
//         name: "TOOLSHED",
//         health: 105,
//         attack: 10,
//         counterAttack: 105
//     },
//     {
//         name: "TUPPERWARE",
//         health: 100,
//         attack: 10,
//         counterAttack: 15
//     },

// ];




const hoverInfo = () => {

    let characters = document.querySelectorAll(".player")

    for (let i = 0; i < characters.length; i++) {

        characters[i].addEventListener('mouseover', e => {
            

            if (playerSelected === false && opponentSelected === false) {

               

                if (e.target.className.includes('player') && e.target.getAttribute("data-selected") === 'false') {
                    
                    console.log(e.target.getAttribute('value').toUpperCase())
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
                }
                else {
                    null
                }

                console.log(e.target.getAttribute('health'))
            }
            else if (playerSelected === true && opponentSelected === false && e.target.getAttribute("data-selected") === 'false') {
              
                if (e.target.className.includes('player')) {
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
                }
                else {
                    null
                }

            }
            else {
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


        if (playerSelected === false && opponentSelected === false) {




            playerSelected = true


            if (e.target.className.includes('player') && e.target.getAttribute("data-selected") === 'false') {
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

            }

            else {
                null
            }
        }

        else if (playerSelected === true && opponentSelected === false && event.target.className.includes('player') && e.target.getAttribute("data-selected") === 'false') {


            opponentSelected = true;

            console.log(e.target.getAttribute("data-selected"))
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
    let newParent = document.getElementById('computer');

    playerHealthStat2 -= oppCounterAttackStat2

    oppHealthStat2 -= playerAttackStat2

    document.querySelector('#playerHealth').textContent = `Health: ${playerHealthStat2}`

    document.querySelector('#oppHealth').textContent = `Health: ${oppHealthStat2}`

    playerAttackStat2 *= 2
    document.querySelector('#playerAttack').textContent = `Attack: ${playerAttackStat2}`


    console.log(playerHealthStat2)
    console.log(oppHealthStat2)


    if (playerHealthStat2 > 0 && oppHealthStat2 <= 0) {
        opponentSelected = false
        console.log("I am here")


        document.querySelector('#oppHealth').textContent = `Health:`
        document.querySelector('#oppAttack').textContent = `Attack:`
        document.querySelector('#oppCounterAttack').textContent = `Counter-Attack:`



        while (newParent.childNodes.length > 0) {
            newParent.removeChild(newParent.childNodes[0]);
        }
    }

    else if (playerHealthStat2 < 0 && oppHealthStat2 > 0) {
        console.log("game over")
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

}