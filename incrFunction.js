var version = "V1.0.1"; //Version of the game
var coins = 0; //Currency, and starting coins
var upgrades = {"Tenant" : 10, "Apartment" : 100}; //Upgrades and their prices
var bought = {"Tenant" : 0, "Apartment" : 0}; //Amount of upgrades bought
var increment = 1; //Amount of coins given by each click.
var nextUpgrade = 100; //???
var upgradeIncrement = 100; //Price of upgrading increment

function update() {
    "use strict";
    document.getElementById("coins").innerHTML = coins.toFixed(1) + " coins";
    document.getElementById("CPS").innerHTML = (bought.Tenant * 0.2 + bought.Apartment * 5).toFixed(1) + " Coins Per Second";
    document.getElementById("OTenant").innerHTML = "Tenants Owned: " + bought.Tenant;
    document.getElementById("OApartment").innerHTML = "Apartments Owned: " + bought.Apartment;
}

//Clicks add the value of increment to the coins variable
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

/**Finds amount of coins needed for selected upgrade, and if the amount of coins
are over/equal the price, then the player gets the upgrade plus it increases
by 1.1**/
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
function upgradeClick() {
    "use strict";
    if (coins >= upgradeIncrement) {
        increment *= 3;
        coins -= upgradeIncrement;
        upgradeIncrement *= 5;
        update();
    }
}

//The cheat for a million coins
function infCoins() {
    "use strict";
    coins += 1000000;
    update();
}
