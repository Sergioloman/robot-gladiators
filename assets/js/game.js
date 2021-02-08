// var playerName = 'Clank McKrank';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;



var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);

// fight function
var fight = function (enemyNames) {
  while(enemyHealth > 0 && playerHealth > 0) {
    //ask player FIGHT OR RUN
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  // if player choses to fight, fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
      //confirm if player wants to skio
    // if player choses to skip confirm and stop lopp
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney);
      break;
    }  
  }



    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyNames + " has died!");

    //award player money for winning
    playerMoney = playerMoney + 20;
    //leave while()loop since enemy is dead  
      break;
    } else {
      window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }
    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
  };
  
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
    // if player did not chose 1 or 2 in prompt
  else {
    window.alert("You need to pick a valid option. Try again!");
  }
};
//end fight function


//end while loop
if (enemyHealth > 0)

  for (var i = 0; i < enemyNames.length; i++) {
    
    //call fight function with enemy robot
    if (playerHealth > 0){
      window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));

      var pickedEnemyName = enemyName[i];
      enemyHealth +50;
      debugger;
    }

    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
    fight(pickedEnemyName);

  }
// run fight function to start game
//fight();

