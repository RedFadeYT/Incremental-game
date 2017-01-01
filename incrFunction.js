var version = "V1.0.1";
var coins = 0;
var upgrades = {"Tenant" : 10, "Apartment" : 100};
var bought = {"Tenant" : 0, "Apartment" : 0};
var increment = 1;
var nextUpgrade = 100;
var upgradeIncrement = 100;

function update() {
    "use strict";
    document.getElementById("coins").innerHTML = coins.toFixed(1) + " coins";
    document.getElementById("CPS").innerHTML = (bought.Tenant * 0.2 + bought.Apartment * 5).toFixed(1) + " Coins Per Second";
}

function coinClick() {
    "use strict";
    coins += increment;
    update();
}

function init() {
    "use strict";
    document.getElementById("Title").innerHTML += version;
    setInterval(function () {coins += (bought.Tenant * 0.2 + bought.Apartment * 5); update(); }, 1000);
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
        upgrades[thing] *= 1.1;
        document.getElementById(thing).firstChild.data = "Buy {0} Cost: {1}".format(thing, upgrades[thing].toFixed(1));
        bought[thing] = bought[thing] + 1;
        update();
    }
}

//For upgrade click income
function upgrade() {
    "use strict";
    if (coins >= upgradeIncrement) {
        increment *= 3;
        coins -= upgradeIncremental;
        upgradeIncremental *= 5;
        update();
    }
}

function infCoins() {
    "use strict";
    coins += 1000000;
    update();
}
