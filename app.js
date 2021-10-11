var lightEle = document.body.querySelector(".light");

var health = 0;

lightEle.innerHTML = "Dragon Damage: " + health;

function dragonGame(damage, attack){
    if (attack === "poison"){
        health = (health + damage);
        lightEle.innerHTML = "Dragon Damage:" + health;
    }
    else if(attack === "ice"){
        health = (health + damage) + 1;
        lightEle.innerHTML = "Dragon Damage:" + health;
    }
    else if (attack === "fire"){
        health = (health + damage) - 1;
        lightEle.innerHTML = "Dragon Damage:" + health;
    }
    if (health >= 10){
        lightEle.innerHTML = "Dragon = Slayed!! Congrats!!";
    }
}

document.body.querySelector(".poison").addEventListener("click", function (){
    dragonGame(4, "poison")
})
document.body.querySelector(".ice").addEventListener("click", function (){
  dragonGame(1, "ice")
})
document.body.querySelector(".fire").addEventListener("click", function (){
  dragonGame(3, "fire")
})