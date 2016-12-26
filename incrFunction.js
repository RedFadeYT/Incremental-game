let version = "V1.0.1";
let coins = 0;
let upgrades = {"House" : 50, "Apartment" : 100};
let bought = {"House" : 0, "Apartment" : 0};
let increment = 1;
let nextUpgrade = 100;
function update() {
    "use strict";
    document.getElementById("coins").innerHTML = coins.toFixed(1) + " coins";
}

function coinClick() {
    "use strict";
    coins += increment;
    update();
}

function init() {
    "use strict";
    document.getElementById("Title").innerHTML+= version;
    setInterval(function(){coins+= (bought["House"] * 0.1 + bought["Apartment"] * 5); update();}, 1000)
    update();
}

function getYouWin() {
    "use strict";
    return "WIN!";
}

function buy(thing) {
    "use strict";
    if (coins >= upgrades[thing]) {
        coins -= upgrades[thing];
        upgrades[thing] *= 0.2;
        bought[thing] = bought[thing] + 1;
        update();
    }
}
