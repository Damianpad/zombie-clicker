document.querySelector('#purchaseMedicine').addEventListener('click', purchaseMedicine)
document.querySelector('#upgradeWeapon').addEventListener('click', upgradeWeapon)

// Currency
document.querySelector('#dollars')

//counter that spawns 10 zombies per second
document.querySelector('#clicker').addEventListener('click', counter)
let dollars = 100;
let zombie = 50;
let seconds = 0;
let treated = 0;
let kills = 0;
let medicineCounter = 0;
let weaponUpgrader = 0;
let killsPerClick = 1;
let dollarsPerClick = 10;

function purchaseMedicine(){
    zombie -= 20
    treated += 20
    medicineCounter += 1
    dollars -= 100
    document.querySelector('#treated').innerText = `${treated} treated`
    document.querySelector('#dollars').innerText = `$ ${dollars}`
    document.querySelector('#zombies').innerText = `${zombie} Zombies`
    document.querySelector('#medicine').innerText = medicineCounter
}

function upgradeWeapon() {
    weaponUpgrader += 1;
    killsPerClick += 1
    dollarsPerClick = dollarsPerClick * killsPerClick;
    dollars -= 500;
    document.querySelector('#dollars').innerText = `$ ${dollars}`
    document.querySelector('#weaponUpgrade').innerText = weaponUpgrader
    document.querySelector('#killsPerClick').innerText = `${killsPerClick} kills per click`
}

function counter(){
    
    kills += killsPerClick;
    zombie -= killsPerClick;
    dollars += dollarsPerClick;
    document.getElementById("dollars").innerHTML = `$ ${dollars}`;
    document.querySelector('#zombies').innerText = `${zombie} Zombies`;
    document.querySelector('#kills').innerText = `${kills} kills`
}


window.setInterval(
    function () {
        zombie = zombie + 10;
        document.getElementById("zombies").innerHTML = `${zombie} Zombies`;



    }, 1000);

// window.setInterval(
//     function () {
//         dollars = dollars + 10;
//         document.getElementById("dollars").innerHTML = `$ ${dollars}`;

//     }, 1000);


