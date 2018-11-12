(function (){
    /*
    * Version 2.5.2
    */
    //Code for defining Property Objects
var properties = {
    //Start of a coloured properties
    "0001":{
        type: "colour",
        colour: "brown",
        price: 60,
        name: "Brown 1",
        owner: null,
        mortgaged: false,
        houseValue: 50,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 2,
        ownAllOfColour: false,
        rent : {
            0 : 2,
            1 : 10,
            2 : 30,
            3 : 90,
            4 : 160,
            5 : 250
        }
    },

    "0003":{
        type: "colour",
        colour: "brown",
        price: 60,
        name: "Brown 2",
        owner: null,
        mortgaged: false,
        houseValue: 50,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 2,
        ownAllOfColour: false,
        rent : {
            0 : 4,
            1 : 20,
            2 : 60,
            3 : 180,
            4 : 320,
            5 : 450
        }
    },

    "0006":{
        type: "colour",
        colour: "lightblue",
        price: 100,
        name: "Light Blue 1",
        owner: null,
        mortgaged: false,
        houseValue: 50,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
       rent : {
           0 : 6,
           1 : 30,
           2 : 90,
           3 : 270,
           4 : 400,
           5 : 550
       }
    },

    "0008":{
        type: "colour",
        colour: "lightblue",
        price: 100,
        name: "Light Blue 2",
        owner: null,
        mortgaged: false,
        houseValue: 50,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 6,
            1 : 30,
            2 : 90,
            3 : 270,
            4 : 400,
            5 : 550
        }
    },

    "0009":{
        type: "colour",
        colour: "lightblue",
        price: 120,
        name: "Light Blue 3",
        owner: null,
        mortgaged: false,
        houseValue: 50,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 8,
            1 : 40,
            2 : 100,
            3 : 300,
            4 : 450,
            5 : 600
        }
    },

    "0110":{
        type: "colour",
        colour: "pink",
        price: 140,
        name: "Pink 1",
        owner: null,
        mortgaged: false,
        houseValue: 100,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 10,
            1 : 50,
            2 : 150,
            3 : 450,
            4 : 625,
            5 : 750
        }
    },

    "0310":{
        type: "colour",
        colour: "pink",
        price: 140,
        name: "Pink 2",
        owner: null,
        mortgaged: false,
        houseValue: 100,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 10,
            1 : 50,
            2 : 150,
            3 : 450,
            4 : 625,
            5 : 750
        }
    },

    "0410":{
        type: "colour",
        colour: "pink",
        price: 160,
        name: "Pink 3",
        owner: null,
        mortgaged: false,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 12,
            1 : 60,
            2 : 180,
            3 : 500,
            4 : 700,
            5 : 900
        }
    },

    "0610":{
        type: "colour",
        colour: "orange",
        price: 180,
        name: "Orange 1",
        owner: null,
        mortgaged: false,
        houseValue: 100,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 14,
            1 : 70,
            2 : 200,
            3 : 550,
            4 : 750,
            5 : 950
        }
    },

    "0810":{
        type: "colour",
        colour: "orange",
        price: 180,
        name: "Orange 2",
        owner: null,
        mortgaged: false,
        houseValue: 100,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 14,
            1 : 70,
            2 : 200,
            3 : 550,
            4 : 750,
            5 : 950
        }
    },

    "0910":{
        type: "colour",
        colour: "orange",
        price: 200,
        name: "Orange 3",
        owner: null,
        mortgaged: false,
        houseValue: 100,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 16,
            1 : 80,
            2 : 220,
            3 : 600,
            4 : 800,
            5 : 1000
        }
    },

    "1009":{
        type: "colour",
        colour: "red",
        price: 220,
        name: "Red 1",
        owner: null,
        mortgaged: false,
        houseValue: 150,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 18,
            1 : 90,
            2 : 250,
            3 : 700,
            4 : 875,
            5 : 1050
        }
    },

    "1007":{
        type: "colour",
        colour: "red",
        price: 220,
        name: "Red 2",
        owner: null,
        mortgaged: false,
        houseValue: 150,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 18,
            1 : 90,
            2 : 250,
            3 : 700,
            4 : 875,
            5 : 1050
        }
    },

    "1006":{
        type: "colour",
        colour: "red",
        price: 240,
        name: "Red 3",
        owner: null,
        mortgaged: false,
        houseValue: 150,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 20,
            1 : 100,
            2 : 350,
            3 : 750,
            4 : 925,
            5 : 1100
        }
    },
   
    "1004":{
        type: "colour",
        colour: "yellow",
        price: 260,
        name: "Yellow 1",
        owner: null,
        mortgaged: false,
        houseValue: 150,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 22,
            1 : 110,
            2 : 330,
            3 : 800,
            4 : 975,
            5 : 1150
        }
    },

    "1003":{
        type: "colour",
        colour: "yellow",
        price: 260,
        name: "Yellow 2",
        owner: null,
        mortgaged: false,
        houseValue: 150,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 22,
            1 : 110,
            2 : 330,
            3 : 800,
            4 : 975,
            5 : 1150
        }
    },

    "1001":{
        type: "colour",
        colour: "yellow",
        price: 280,
        name: "Yellow 3",
        owner: null,
        mortgaged: false,
        houseValue: 150,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 24,
            1 : 120,
            2 : 360,
            3 : 850,
            4 : 1025,
            5 : 1200
        }
    },

    "0900":{
        type: "colour",
        colour: "green",
        price: 300,
        name: "Green 1",
        owner: null,
        mortgaged: false,
        houseValue: 200,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 26,
            1 : 130,
            2 : 390,
            3 : 900,
            4 : 1100,
            5 : 1275
        }
    },

    "0800":{
        type: "colour",
        colour: "green",
        price: 300,
        name: "Green 2",
        owner: null,
        mortgaged: false,
        houseValue: 200,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 26,
            1 : 130,
            2 : 390,
            3 : 900,
            4 : 1100,
            5 : 1275
        }
    },

    "0600":{
        type: "colour",
        colour: "green",
        price: 320,
        name: "Green 3",
        owner: null,
        mortgaged: false,
        houseValue: 200,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 28,
            1 : 150,
            2 : 450,
            3 : 100,
            4 : 1200,
            5 : 1400
        }
    },

    "0300":{
        type: "colour",
        colour: "blue",
        price: 350,
        name: "Blue 1",
        owner: null,
        mortgaged: false,
        houseValue: 200,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 2,
        ownAllOfColour: false,
        rent : {
            0 : 35,
            1 : 175,
            2 : 50,
            3 : 110,
            4 : 1300,
            5 : 1500
        }
    },

    "0100":{
        type: "colour",
        colour: "blue",
        price: 400,
        name: "Blue 2",
        owner: null,
        mortgaged: false,
        houseValue: 200,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 2,
        ownAllOfColour: false,
        rent : {
            0 : 50,
            1 : 200,
            2 : 600,
            3 : 1400,
            4 : 1700,
            5 : 2000
        }
    },
    //End of all coloured properties
    
    //Start of Railroads

    "0005":{
        type: "railroad",
        price: 200,
        name: "Railroad 1",
        owner: null,
        mortgaged: false,
        boughtFor: null,
        ownAllOfColour: false,
        rent : {
            1 : 25,
            2 : 50,
            3 : 100,
            4 : 200
        }
    },

    "0510":{
        type: "railroad",
        price: 200,
        name: "Railroad 2",
        owner: null,
        mortgaged: false,
        boughtFor: null,
        ownAllOfColour: false,
        rent : {
            1 : 25,
            2 : 50,
            3 : 100,
            4 : 200
        }
    },

    "1005":{
        type: "railroad",
        price: 200,
        name: "Railroad 3",
        owner: null,
        mortgaged: false,
        boughtFor: null,
        ownAllOfColour: false,
        rent : {
            1 : 25,
            2 : 50,
            3 : 100,
            4 : 200
        }
    },

    "0500":{
        type: "railroad",
        price: 200,
        name: "Railroad 4",
        owner: null,
        mortgaged: false,
        boughtFor: null,
        ownAllOfColour: false,
        rent : {
            1 : 25,
            2 : 50,
            3 : 100,
            4 : 200
        }
    },
    //End of Railroads

    //Start of Utilities
    "0210":{
        type: "utility",
        price: 150,
        name: "Utility 1",
        owner: null,
        mortgaged: false,
        boughtFor: null,
        ownAllOfColour: false,
        rent : {
            1 : 4,
            2 : 10
        }
    },

    "1002":{
        type: "utility",
        price: 150,
        name: "Utility 2",
        owner: null,
        mortgaged: false,
        boughtFor: null,
        numberOfUtilities: 0,
        ownAllOfColour: false,
        valueOfDiceRolled: null,
        rent: {
            1 : 4,
            2 : 10
        }
    }
    //End of Utilities
};

    var diceNumbers = {
        1: "images/dice1.png",
        2: "images/dice2.png",
        3: "images/dice3.png",
        4: "images/dice4.png",
        5: "images/dice5.png",
        6: "images/dice6.png"
    };

    var players = []; //Where all the player info is stored
    var turn = 0; //Whose turn it is, based on their position in the players array
    var currentRoll;
    var rolledDouble = false;
    var numPlayers;
    var decidingOnProperty = false;
    var currentAuction = [];
    var currentBidder;
    var currentBid;
    var auctionStarter;
    var walkSound;
    var diceSound;
    var jailDoorCloseSound;

    document.addEventListener("DOMContentLoaded", init, false);

    var rollButton;
    
    var useJailCardButton;
    var dontUseJailCardButton;
    var payFineButton;
    var attemptDoubleButton;
    var buyPropertyButton;
    var auctionPropertyButton;
    var bid1Button;
    var bid10Button;
    var bid100Button;
    var withdrawButton;

    var canButton;
    var burrButton;
    var pastaButton;
    var coffButton;
    var contButton;
    var convButton;
    var pizzaButton;
    var bagButton;

    function init () {
        players.push(player("Player 1"));
        players.push(player("Player 2")); 
        players.push(player("Player 3"));
        players.push(player("Player 4"));
        numPlayers = players.length;
        
        rollButton = document.getElementById("temp");

        canButton = document.getElementById("canButt");
        canButton.addEventListener("click", canPlacement, false);
        burrButton = document.getElementById("burrButt");
        burrButton.addEventListener("click", burrPlacement, false);
        pastaButton = document.getElementById("pastaButt");
        pastaButton.addEventListener("click", pastaPlacement, false);
        coffButton = document.getElementById("coffButt");
        coffButton.addEventListener("click", coffPlacement, false);
        contButton = document.getElementById("contButt");
        contButton.addEventListener("click", contPlacement, false);
        convButton = document.getElementById("convButt");
        convButton.addEventListener("click", convPlacement, false);
        pizzaButton = document.getElementById("pizzaButt");
        pizzaButton.addEventListener("click", pizzaPlacement, false);
        bagButton = document.getElementById("bagButt");
        bagButton.addEventListener("click", bagPlacement, false);
        
      
        useJailCardButton = document.getElementById("jYes");
        dontUseJailCardButton = document.getElementById("jNo");
        payFineButton = document.getElementById("fine");
        attemptDoubleButton = document.getElementById("rd");
        buyPropertyButton = document.getElementById("buy");
        auctionPropertyButton = document.getElementById("auction");
        bid1Button = document.getElementById("1");
        bid10Button = document.getElementById("10");
        bid100Button = document.getElementById("100");
        withdrawButton = document.getElementById("withdraw");
        
        
        
        rollButton.addEventListener("click", normalRoll, false);
        useJailCardButton.addEventListener("click", useJailCardClicked, false);
        dontUseJailCardButton.addEventListener("click", dontUseJailCardClicked, false);
        payFineButton.addEventListener("click", payFineClicked, false);
        attemptDoubleButton.addEventListener("click", attemptDoubleClicked, false);
        buyPropertyButton.addEventListener("click", buyPropertyClicked, false);
        auctionPropertyButton.addEventListener("click", auctionPropertyClicked, false);
        bid1Button.addEventListener("click", bid1Clicked, false);
        bid10Button.addEventListener("click", bid10Clicked, false);
        bid100Button.addEventListener("click", bid100Clicked, false);
        withdrawButton.addEventListener("click", withdrawClicked, false);

        document.getElementById("temp").disabled = true;
        walkSound = document.getElementById("walkSound");
        diceSound = document.getElementById("diceSound");
        jailDoorCloseSound = document.getElementById("jailClose");
    }

    

    function canPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/can.png";
        node.alt = "can";
        players[turn].id = node;
        document.getElementById("canButt").disabled = true;
        document.getElementById("canButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function burrPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/burrito.png";
        node.alt = "burrito";
        players[turn].id = node;
        document.getElementById("burrButt").disabled = true;
        document.getElementById("burrButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function pastaPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/pasta.png";
        node.alt = "pasta";
        node.style.height = "40px";
        node.style.width ="50px";
        players[turn].id = node;
        document.getElementById("pastaButt").disabled = true;
        document.getElementById("pastaButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function coffPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/coffee.png";
        node.alt = "coffee";
        node.style.height = "40px";
        node.style.width ="40px";
        players[turn].id = node;
        document.getElementById("coffButt").disabled = true;
        document.getElementById("coffButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function contPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/controller.png";
        node.alt = "controller";
        node.style.height = "40px";
        node.style.width ="45px";
        players[turn].id = node;
        document.getElementById("contButt").disabled = true;
        document.getElementById("contButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function convPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/shoes.png";
        node.alt = "converse";
        node.style.height = "40px";
        node.style.width ="40px";
        players[turn].id = node;
        document.getElementById("convButt").disabled = true;
        document.getElementById("convButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function pizzaPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/pizza.png";
        node.alt = "pizza";
        node.style.height = "35px";
        node.style.width ="35px";
        players[turn].id = node;
        document.getElementById("pizzaButt").disabled = true;
        document.getElementById("pizzaButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function bagPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/bag.png";
        node.alt = "bagOfCansWithTheLads";
        node.style.height = "35px";
        node.style.width ="35px";
        players[turn].id = node;
        document.getElementById("bagButt").disabled = true;
        document.getElementById("bagButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function startGame() {
        /*
        var bootEle = document.getElementById("bootButt");
        bootEle.parentNode.removeChild(bootEle);
        var carEle = document.getElementById("carButt");
        carEle.parentNode.removeChild(carEle);
        var hatEle = document.getElementById("hatButt");
        hatEle.parentNode.removeChild(hatEle);
        var shipEle = document.getElementById("shipButt");
        shipEle.parentNode.removeChild(shipEle);
        var barrEle = document.getElementById("barrButt");
        barrEle.parentNode.removeChild(barrEle);
        var coneEle = document.getElementById("coneButt");
        coneEle.parentNode.removeChild(coneEle);
        */
        var canEle = document.getElementById("canButt");
        canEle.parentNode.removeChild(canEle);
        var burrEle = document.getElementById("burrButt");
        burrEle.parentNode.removeChild(burrEle);
        var pastaEle = document.getElementById("pastaButt");
        pastaEle.parentNode.removeChild(pastaEle);
        var coffEle = document.getElementById("coffButt");
        coffEle.parentNode.removeChild(coffEle);
        var contEle = document.getElementById("contButt");
        contEle.parentNode.removeChild(contEle);
        var convEle = document.getElementById("convButt");
        convEle.parentNode.removeChild(convEle);
        var pizzaEle = document.getElementById("pizzaButt");
        pizzaEle.parentNode.removeChild(pizzaEle);
        var bagEle = document.getElementById("bagButt");
        bagEle.parentNode.removeChild(bagEle);
        for(var i = 0; i < numPlayers; i++) {
            document.getElementById("0000").appendChild(players[i].id);
        }
        document.getElementById("temp").disabled = false;
        
    }

    async function diceFadeIn(num1, num2) {
        document.getElementById("temp").disabled = true;
        for(var x = 0; x <= 1; x += 0.1) {
            document.getElementById("dicePosition1").style.opacity = x;
            document.getElementById("dicePosition2").style.opacity = x;
            await sleep(100);
        }
    }

    async function diceFadeOut() {
        for(var i = 0.9; i >= 0; i -= 0.1) {
            document.getElementById("dicePosition1").style.opacity = i;
            document.getElementById("dicePosition2").style.opacity = i;
            await sleep(100);
        }
        if(!decidingOnProperty) {
            document.getElementById("temp").disabled = false;
            incrementTurn();
        }
    }

    function useJailCardClicked() {
        players[turn].jail.getOutOfJail--;
        document.getElementById("goojf").style.visibility = "hidden"; //...change goojf
        //Have to put jail card back and shuffle as well
        releaseFromJail();
        normalRoll();
    }

    function dontUseJailCardClicked() {
        jail();
    }

    function payFineClicked() {
        document.getElementById("goojfNo").style.visibility = "hidden";
        //Must take away from capital
        releaseFromJail();
        normalRoll();
    }

    async function attemptDoubleClicked() {
        document.getElementById("goojfNo").style.visibility = "hidden";
        var doubleAttempt = rollDice();
        if(rolledDouble) {
            currentRoll = doubleAttempt[0] + doubleAttempt[1];
            releaseFromJail();
            diceRolled();
        } else {
            await sleep(1000);
            diceFadeOut();
        }
    }

    function buyPropertyClicked() {
        document.getElementById("buyOrAuction").style.visibility = "hidden";
        buy(players[turn], players[turn].position, properties[players[turn].position].price);
        decidingOnProperty = false;
        document.getElementById("temp").disabled = false;
        incrementTurn();
    }

    function auctionPropertyClicked() {
        //Wipe the dictionary in case any palyers hvae been eliminated from the game
        //The first element of currentAuction is the number of players left
        //The second element is the tile to be auctioned
        auctionStarter = players[turn];
        currentAuction = [0, players[turn].position];
        if(turn == numPlayers-1) {
            turn = 0;
        } else {
            turn++
        }
        currentBidder = turn+2;
        currentBid = properties[auctionStarter.position].price * 0.2; //Starting bid is 10% of price
        for(var b = 0; b < players.length; b++) {
            //Putting all the players in the auction
            //The player's stillIn attribute will be set to false when they withdraw from the 
            //auction or they are kicked out
            var tempPlayer = players[b];
            if(tempPlayer.money > currentBid) {
                currentAuction.push({player: tempPlayer, stillIn: true});
                currentAuction[0]++;
            } else {
                currentAuction.push({player: tempPlayer, stillIn: false});
            }
        }

        //Must be +2 to line up with the currentAuction list (cause the first two elements are 
        //taken)
        //Hiding and showing all appropriate GUIs
        document.getElementById("buyOrAuction").style.visibility = "hidden";
        document.getElementById("auctionWindow").style.visibility = "visible";
        document.getElementById("bidder").style.visibility = "visible";
        document.getElementById("currBid").innerHTML = "Current Bid: " + currentBid;
        document.getElementById("madeBid").innerHTML = "Current Bidder: ";
        //Auction checker controls the flow of auctions. Check that function for details
        checkAuctionAtStart();
    }

    function bid1Clicked() {
        //The player clicked the 'Bid 1' button
        auction(1);
    }

    function bid10Clicked() {
        //The player clicked the 'Bid 10' button
        auction(10);
    }

    function bid100Clicked() {
        //The player has clicked the 'Bid 100' button
        auction(100);
    }

    function withdrawClicked() {
        //The player has clicked the 'Withdraw' button
        auction(0);
    }

    function player(name) {//icon, nameTemp) {
        var player = {};
        player.name = name; //done
        player.id = null; //done
        player.position = "0000"; //done
        player.doublesRolled = 0; //The number of doubles the player has rolled in a row
        player.money = 1500; //done
        player.assets = []; //done

        player.properties = {};
        player.properties["brown"] = [];
        player.properties["pink"] = [];
        player.properties["lightblue"] = [];
        player.properties["orange"] = [];
        player.properties["red"] = [];
        player.properties["green"] = [];
        player.properties["blue"] = [];
        player.properties["yellow"] = [];
        player.properties["railroad"] = [];
        player.properties["utilities"] = [];

        player.getOutOfJail = 0;
        player.jail = {};
        player.jail.jailTag = false;
        player.jail.jailRoll = 0;
        player.jail.justReleased = false;

        return player;
    }

    async function normalRoll() {
        await sleep(1000);
        var ro = rollDice(); //Temporary variable to get the two dice rolls
        currentRoll = ro[0] + ro[1];
        diceRolled();
    }

    async function diceRolled() {
        if(players[turn].jail.justReleased) {
            players[turn].jail.justReleased = false;
        }
        //Check for doubles
        if(rolledDouble) {
            players[turn].doublesRolled++
        } else {
            //They didn't roll a double so they don't get to roll again
            players[turn].doublesRolled = 0;
        }
            
        //Move the player
        if(players[turn].doublesRolled == 3) {
            placeInJail();
            await sleep(1000);
            diceFadeOut();
        } else {
            movePlayer(players[turn], currentRoll, turn);
        }
    }

    function incrementTurn() {
        //Only increment if the player didn't roll a double
        if(!rolledDouble) {
            if(turn == numPlayers - 1) {
                turn = 0;
            } else {
                turn++;
            }
        }
        
        //Check if player is in jail here so that if the player is in jail the prompt for either
        //using their jailCard if they have one or to pay fine or roll for a double is automatically
        //shown without them having to click anything
        if(players[turn].jail.jailTag) {
            checkForJailCard();
        } else {
            /*
            * Put a timer here maybe for the length of time the player has to roll until
            * it automatically does it for them
            */
        }
    }

    //The async keyword has to be used when the await() function is used
    async function movePlayer(playerObj, spacesToMove, turn) {
        //Gets first two numbers in the id
        var left = parseInt(playerObj.position.substring(0, 2));
        //Gets the last two numbers in the id
        var right = parseInt(playerObj.position.substring(2, 4));
        var newPosition; //The position they finish on
        //Deciding how the player's icon should move based on their position on the board
        while(spacesToMove > 0) {
            if(left == 0 && right < 10) {
                right++;
            } else if(right == 10 && left < 10) {
                left++;
            } else if(left == 10 && right > 0) {
                right--;
            } else if(right == 0 && left > 0) {
                left--;
            }
            //Getting the player's new position back into the "xxxx" format
            newPosition = positionHack(left, right);
            spacesToMove--;
            //Placing the player's icon on the new tile
            document.getElementById(newPosition).appendChild(playerObj.id);
            //Waiting for half a second so it looks nicer
            await sleep(500);
            if(newPosition == "0000") {
                alert("Player has passed go; collect 200");
            }
        }

        //Updating player's position
        playerObj.position = newPosition;
        //Checking for what tile they land on
        checkTile(newPosition);
        diceFadeOut();
    }

    function checkTile(playerPos) {
        alert("Player position: " + playerPos);
        if(playerPos == "0010" || playerPos == "0000") {
            //This is the jail tile, do nothing
        } else if(playerPos == "0007" || playerPos == "1008" || playerPos == "0400") {
            //Player has landed on chance card
            alert("Draw chance card");
        } else if(playerPos == "0002" || playerPos == "0710" || playerPos == "0700") {
            //Player has landed on community chess
            alert("Draw community chest card");
        } else if(playerPos == "1010") {
            //Player has landed on Free Parking
            alert("Free Parking");
        } else if(playerPos == "1000") {
            //Player is sent to jail
            alert("player is sent to jail");
        } else if(playerPos == "0004" || playerPos == "0200") {
            alert("Player pays a tax");
        } else { 
            isOwned(players[turn], playerPos);
        }
    }

    async function isOwned(playerObj, tileID) {
        //Checking if the tile landed on play 'playr' is owned or naw
        if(properties[tileID].owner == null) {
            decidingOnProperty = true;
            //Buy or Auction GUI visible
            await sleep(1200); //Have to wait so the dice fade out and don't break the game
            document.getElementById("buyOrAuction").style.visibility = "visible";
        } else if(properties[tileID].owner != players[turn]) { //Took out .id here on both
            payRent(playerObj, properties[tileID].owner, tileID);
        }
    }

    function buy(playerObj, tileID, amount) {
        playerObj.money -= amount;
        properties[tileID].owner = playerObj;
        playerObj.assets.push(tileID);
        if(properties[tileID].type == "colour") {
            playerObj.properties[properties[tileID].colour].push(tileID);
        } else if(properties[tileID].type == "railroad") {
            playerObj.properties["railroad"].push(tileID);
        } else if(properties[tileID].type == "utility") {
            playerObj.properties["utilities"].push(tileID);
        }
        console.log(players[turn].properties);
        console.log(players[turn].assets);
        alert(playerObj.name + " bought " + tileID + " for " + amount + ". Player's capital is " + playerObj.money);
    }

    function checkAuctionAtStart() {
        var holder = currentBidder;
        findBidder();
        var tempA = currentBidder;
        findBidder();
        var tempB = currentBidder;
        if(tempA == tempB) {
            currentBidder = holder;
            findBidder();
            endAuction();
        } else {
            currentBidder = holder;
            if(currentAuction[currentBidder].stillIn == false) {
                findBidder();
            }
            auctionChecker();
        }
    }

    function auctionChecker() {
        //This checks criteria for the auction, such as if the curretnt bidder has enough capital
        //or if there are still enough people in the auction
        if(currentAuction[0] > 1) {
            //Checking capital
            if(currentAuction[currentBidder].player.money < currentBid) {
                withdrawFromAuction();
                auctionChecker();
            }
            document.getElementById("bidder").innerHTML = "Player " + (currentBidder-1);
        } else {
            endAuction();
        }
    }

    function endAuction() {
        buy(players[currentBidder-2], currentAuction[1], currentBid);
        document.getElementById("auctionWindow").style.visibility = "hidden";
        document.getElementById("bidder").style.visibility = "hidden";
        document.getElementById("temp").disabled = false;
        decidingOnProperty = false;
        turn = players.indexOf(auctionStarter);
        incrementTurn();
    }

    function findBidder() {
        var numAuctioneers = currentAuction.length - 2;
        //Have to get to the next bidder straight away so it doesn't just stay as the current one
        if(currentBidder < currentAuction.length-1) {
            currentBidder++;
        } else {
            currentBidder = 2;
        }
        //This while loop checks if the player is still in the auction, stopping when it comes
        //to the first one that is
        while(numAuctioneers >= 0) {
            if(currentAuction[currentBidder].stillIn) {
                break;
            } else {
                if(currentBidder < currentAuction.length-1) {
                    currentBidder++;
                } else {
                    currentBidder = 2;
                }
            }
            numAuctioneers--;
        }
    }

    function withdrawFromAuction() {
        //Instead of removing them from the list, it simply sets their stillIn variable to false
        currentAuction[currentBidder].stillIn = false;
        //The number of players still in the auction is held in the first element of teh array
        currentAuction[0]--;
        findBidder();
    }

    function auction(buttonPressed){
        //The button can be them bidding 1, 10, or 100, or them withdrawing
        if(buttonPressed > 0) {
            //Need to error check here for capital
            currentBid += buttonPressed;
            //Just updating the GUI
            document.getElementById("currBid").innerHTML = "Current Bid: " + currentBid;
            document.getElementById("madeBid").innerHTML = "Current Bidder: " + currentAuction[currentBidder].player.name;
            findBidder();
        } else {
            //If buttonPressed is 0 the player has pressed the withdraw button
            withdrawFromAuction();
        }
        
        auctionChecker();
    }

    function placeInJail() {
        //Setting all the appropriate flags for being in jail. Must reset all the vairables to
        //do with rolling a double and the player being released
        players[turn].jail.jailTag = true;
        players[turn].position = "0010";
        players[turn].doublesRolled = 0;
        rolledDouble = false;
        //Putting the player in the jail tile (0010)
        document.getElementById(players[turn].position).appendChild(players[turn].id);
        jailDoorCloseSound.play();
    }

    function checkForJailCard() {
        //This is done at the start of the player's round so they don't have to press anything to 
        //trigger the GUI to pop up
        if(players[turn].getOutOfJail > 0) {
            //If they do have a jailCard they will be asked if they want to use it. If they do,
            //the dice will be rolled automatically and they will be released from jail. They
            //won't be able to roll again if they get a double though. To pop the GUI, the Use
            //Jail Card HTML element needs to be set to visible and the Normal Roll button needs
            //to be disabled
            document.getElementById("goojf").style.visibility = "visible";
            document.getElementById("temp").disabled = false;
        } else {
            //If they don't have a jailCard then the normal jail procedure is run
            jail();
        }
    }

    function jail() {
        //The program comes here if they player is in jail and either doesn't have a jailCard or
        //chooses not to use it
        var jailTime = 3; //How many turns they can stay in jail
        var payOut = 50;
        var diceRollInJail;

        //Have to disable the Normal Roll button, as the dice roll will be controlled by the GUI
        document.getElementById("temp").disabled = true;
        //Increment the number of turns the player has been in jail immediately (before they roll)
        players[turn].jail.jailRoll++;

        //If they have been in jail for 3 turns, they cannot attempt to roll a double and the dice
        //is rolled for them automatically
        if(players[turn].jail.jailRoll == jailTime) {
            releaseFromJail();
            //Must add logic to check if player has enough capital
            players[turn].money -= payOut;
            diceRollInJail = rollDice();
            rolledDouble = false; //Just in case they roll a double after 3 turns
            currentRoll = diceRollInJail[0] + diceRollInJail[1];
            alert("Player pays the toll of 50");
            diceRolled();
        } else {
            //The Pay Fine or Attempt to Roll Double GUI will pop if the player hasn't been in
            //jail for 3 turns and have the option to either pay the fine to get out straight away
            //or to attempt to roll a double and get out for free. For the GUI to pop, the Jail
            //Card GUI must be set to invisible and the Fine or Double GUI must be set to visible

            document.getElementById("goojf").style.visibility = "hidden";
            document.getElementById("goojfNo").style.visibility = "visible";
        }
    }

    function releaseFromJail() {
        //This sets all the appropriate variables to what they should be if the player is released
        //from jail for whatever reason. rolledDouble must be set to false so they don't get to
        //roll again if they were released for rolling a double

        players[turn].jail.jailTag = false;
        players[turn].jail.jailRoll = 0;
        players[turn].jail.justReleased = true;
        rolledDouble = false;
    }

    function positionHack(left, right) {
        //This is just the way to get the player's new position back to the "xxxx" format
        var leftFixed;
        var rightFixed;

        if(left < 10) {
            //If the player's position is less than 10 (the highest it can be), then you need to
            //convert it to a string and concatenate it to "0"
            leftFixed = "0".concat(left.toString());
        } else {
            //If it is not less than 10, then it has to be 10 as that is the highest number it can
            //be, so you simplyneed to convert that to a string
            leftFixed = left.toString();
        }

        if(right < 10) {
            //The same logic for converting the left part of the position
            rightFixed = "0".concat(right.toString());
        } else {
            rightFixed = right.toString();
        }

        //Then you just concatenate the right side onto the left side and return it
        return leftFixed.concat(rightFixed);
    }

    function sleep(ms) {
        //This is the way you make a JS program sleep
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function rollDice() {
        //This simulates the the two dice rolling, return two separate rolls in a list
        var num1 = Math.floor(Math.random() * 6) + 1;
        var num2 = Math.floor(Math.random() * 6) + 1;

        //Checking to see if a double is rolled
        if(num1 == num2 & !players[turn].jail.justReleased) {
            rolledDouble = true;
        } else {
            rolledDouble = false;
        }

        //Placing the number that was rolled into the HTML dice
        document.getElementById("dice1").src = diceNumbers[num1];
        document.getElementById("dice2").src = diceNumbers[num2];
        diceFadeIn();

        return [num1, num2];
    }

    function checkColourSetComplete(playerObj, tileID){
        //Checks if the player has all the properties in the tileID's colour set
        //Used for when the player wants to build a house on a property (tileID)
        var maxNumOfProps = properties[tileID].numberOfColours;
        if(playerObj.properties[properties[tileID].colour].length == maxNumOfProps) {
            return true;
        } else {
            return false;
        }
    }

    function buildHouses(playerObj, tileID){
        var costOfHouse = properties[tileID].houseValue;
    
        if(checkColourSetComplete(playerObj, tileID) && checkForNoMortgageInSet(playerObj, tileID) && checkNumHousesInSet(playerObj, tileID)) {
            //Player can only build a house if they have all properties of that colour, no property
            //of that colour is mortgaged, and they won't make a gap of more than 1 house between
            //the properties
            if(playerObj.money >= costOfHouse) {
                playerObj.money -= costOfHouse;
                properties[tileID].numberOfHouses++;
                if(properties[tileID].numberOfHouses == 5) {
                    //Instead of a hotel flag we're simply saying the 5th house is a hotel
                    alert("The player has built a hotel on " + properties[tileID].name);
                } else {
                    alert("The player has built a house (" + properties[tileID].numberOfHouses + "/4) on " + properties[tileID].name);
                }
            } else {
                alert("Player does not have enough money to build house");
            }
        } else {
            alert("Player does not have a monopoly in this colour set");
        }
    }

    function checkForNoMortgageInSet(playerObj, tileID) {
        //Checks that no property in a colour set (must be complete) is mortgaged
        //Used when the player wants to build a house on a property
        var propColour = properties[tileID].colour;
        for(var i = 0; i < playerObj.properties[propColour].length; i++) {
            if(properties[playerObj.properties[propColour][i]].mortgaged) {
                return false;
            }
        }
        return true;
    }

    function checkIfAllPropsMortgaged(playerObj) {
        //Checks if every property a player owns (regardless of colour) is mortgaged
        //Used when the player lands a fine they can't pay. Ifthis returns false they can mortgage
        //a property to pay the fine, if true then they go bankrupt
        for(var i = 0; i < playerObj.assets.length; i++) {
            //You can probably just change this to the actualy function later
            if(!checkIfPropMortgaged(playerObj.assets[i])) {
                return false;
            }
        }
        return true;
    }

    function checkIfPropMortgaged(tileID) {
        return properties[tileID].mortgaged;
    }

    function checkNumHousesInSet(playerObj, tileID) {
        //Checks if the number of houses the proprty that the player is trying to build on is
        //greater than any other property in the same colour set. If it is it will create a gap
        //greater than 1 which is not allowed
        var propColour = properties[tileID].colour;
        for(var i = 0; i < playerObj.properties[propColour].length; i++) {
            if(playerObj.properties[propColour][i] == tileID) {
                continue;
            } else {
                if(properties[tileID].numberOfHouses > properties[playerObj.properties[propColour][i]].numberOfHouses) {
                    return false;
                }
            }
        }
        return true;
    }

    function payRent(payer, payee, tileID) {
        var capitalAvailable = payer.money;
        var rentDue;
    
        if(properties[tileID].type == "colour") {
            var numOfHouses = properties[tileID].numberOfHouses;
            //If it's a normal property
            rentDue = properties[tileID].rent[numOfHouses];
            if(checkColourSetComplete(payee, tileID) && numOfHouses == 0) {
                //If the player owns all of the properties, any undeveloped (no houses) property
                //has its rent doubled
                rentDue *= 2;
            }
        } else if(properties[tileID].type == "railroad") {
            //Depending on how many railroads the player owns, the rent will be different
            rentDue = properties[tileID].rent[payee.properties["railroad"].length];
        } else if(properties[tileID].type == "utility") {
            //The rent is the dice roll * the number corresponding to the number of utilities owned
            rentDue = currentRoll * properties[tileID].rent[payee.properties["utilities"].length];
        }

        if(rentDue > capitalAvailable) {
            console.log("Allow to mortgage or bankrupt");
        } else {
            payer.money -= rentDue;
            payee.money += rentDue;
            alert(rentDue + " was paid in rent to " + payee.name);
            //Add to owners account
        }
    }
})();