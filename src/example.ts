export class Character {
  name: string;
  health: number;
  attackPower: number;

  constructor(name: string, health: number, attackPower: number) {
    this.name = name;
    this.attackPower = attackPower;
    this.health = health;
  }

  isAlive(): boolean {
    return this.health > 0;
  }

  takeDamage(damage: number) {
    this.health -= damage; 
  }

  atack(monster: Character): void {
    console.log('Hero attacks!\n');
    monster.takeDamage(this.attackPower);
  }
}
// export class Monster {
//   name = 'Monster'
//   health = 80;
//   attackPower = 10;

//   takeDamage(damage: number) {
//     this.health -= damage; 
//   }

//   atack(heroHealth: number): void {
//     console.log('Monster attacks!\n');
//     heroHealth -= this.attackPower;
//   }
// }

// function hit() {
//   if (hero.health < 0) {
//     console.log('winner is monster');
//     return;
//   }

//   if (monster.health < 0) {
//     console.log('winner is hero');
//     return;
//   }

//   console.log('Hero attacks!\n')
//   monster.health = monster.health - hero.attack
//   console.log('Monster\'s health is now ', monster.health)
//   hero.health = hero.health - monster.attack
//   console.log('Hero\'s health is now ', hero.health)
// }

export function battle(hero: Character, monster: Character) {
  console.log(`A ${monster.name} appears!\n`)
  console.log(`Hero (HP: ${hero.health}) vs. Monster (HP: ${monster.health})\n`)

  while (monster.isAlive()) {
    hero.atack(monster)
  }

  console.log('Monster has been defeated!\nHero wins\nGame Over.')
}

// battle()
