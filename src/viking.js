// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return (this.strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
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
    }
    battleCry() {
        return ("Odin Owns You All!");
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0)
            return (`A Saxon has received ${damage} points of damage`);
        else
            return (`A Saxon has died in combat`);
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
		this.vikingDeads = [];
		this.saxonDeads = [];
    }
    addViking(newViking) {
        this.vikingArmy.push(newViking);
    }
    addSaxon(newSaxon) {
		this.saxonArmy.push(newSaxon);
	}
    vikingAttack() {
		return (this.attack(this.vikingArmy));		
	}
    saxonAttack() {
		return (this.attack(this.saxonArmy));
	}
	RandomSoldierNbr(army) {
		return (Math.floor(Math.random() * army.length));
	}
	attack(attackerArmy) {
		let victimArmy;
		let victimDeads;
		if (attackerArmy === this.vikingArmy) {
			victimArmy = this.saxonArmy;
			victimDeads = this.saxonDeads;
		}
		else {
			victimArmy = this.vikingArmy;
			victimDeads = this.vikingDeads;
		}
		const randomVictimNbr = this.RandomSoldierNbr(victimArmy);
		const randomVictim = victimArmy[randomVictimNbr];
		const randomAttacker = attackerArmy[this.RandomSoldierNbr(attackerArmy)];
		const attackResult = randomVictim.receiveDamage(randomAttacker.strength);
		if (randomVictim.health <= 0)
			victimDeads.push(victimArmy.splice(randomVictimNbr, 1));
		return (attackResult);
	}
	showStatus() {
		if (this.saxonArmy.length === 0)
			return ("Vikings have won the war of the century!");
		else if (this.vikingArmy.length === 0)
			return ("Saxons have fought for their lives and survived another day...");
		else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0)
			return ("Vikings and Saxons are still in the thick of battle.");
	}
}