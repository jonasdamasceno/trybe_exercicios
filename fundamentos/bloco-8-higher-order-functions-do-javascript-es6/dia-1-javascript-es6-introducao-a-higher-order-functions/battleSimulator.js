const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonAttack = (dragon) => {
    const minDamageDragon = 15
    const damage = Math.floor(Math.random() * ( dragon.strength  - minDamageDragon + 1) + minDamageDragon); // +1 to make it more likely to hit
    return damage;
  };
  console.log(dragonAttack(dragon));
  const warriorAttack = (warrior) => {
    const minDamageWarrior = warrior.strength
    const maxDamage = minDamageWarrior * warrior.weaponDmg
    const warriorDamage = Math.floor((Math.random() * ( maxDamage - minDamageWarrior + 1)) + minDamageWarrior); // +1 to make it more likely to hit
    return warriorDamage;
  };
  console.log(warriorAttack(warrior));

  const mageAttack = (mage) => {
    const minDamage = mage.intelligence
    const maxDamage = minDamage * 2
    const minSpentMana =  15
    const mageMana = mage.mana
    const turn = {
      manaSpent: 0,
      damageDealt: "Not enough mana",
    }
    if (mageMana > 15) {
    const mageDamage = Math.floor((Math.random() * ( mage.intelligence  - minDamage + 1)) + minDamage);
    turn.manaSpent = 15;
    turn.damageDealt = mageDamage;
  }
    return turn; 
};
console.log(mageAttack(mage));

const gameActions = {
  turnWarrior:  (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    const dragonHealth = dragon.healthPoints - warriorDamage;
    return dragonHealth;
  },
  turnMage: (mageAttack) => {
    const mageDamage = mageAttack(mage);
    mage.damage = mageDamage;
    const dragonHealth = dragon.healthPoints - mageDamage;
    return dragonHealth;
  },
  turnDragon: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    dragon.damage = dragonDamage;
    const warriorHealth = warrior.healthPoints - dragonDamage;
    const mageHealth = mage.healthPoints - dragonDamage;
    return warriorHealth;
    return mageHealth;
  },
  resultado: () => battleMembers,
};
gameActions.turnWarrior(warriorAttack);
gameActions.turnMage(mageAttack);
gameActions.turnDragon(dragonAttack);
console.log(gameActions.resultado());
