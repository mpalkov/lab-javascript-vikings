// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };
    attack() {
        return (this.strength);
    };
    receiveDamage(damage) {
        this.health -= damage;
    };
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0){
            return (`${this.name} has received ${damage} points of damage`);}
        else
            return (`${this.name} has died in act of combat`);
    };
    battleCry() {
        return ("Odin Owns You All!");
    };
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0)
            return (`A Saxon has received ${damage} points of damage`);
        else
            return (`A Saxon has died in combat`);
    };
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(newViking) {
        this.vikingArmy.push(newViking);
    };
    addSaxon() {};
    vikingAttack() {};
    saxonAttack() {};
    showStatus() {};
}

const aSoldier = new Soldier(100, 5);
const aViking = new Viking("Otto", 100, 25);
//console.log(aSoldier, aViking);
console.log(aViking.receiveDamage(5));
//console.log(aViking.receiveDamage(100));
