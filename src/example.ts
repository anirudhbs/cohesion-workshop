const hero = {
  health: 100,
  attack: 15
}

const monster = {
  health: 80,
  attack: 10
}

function hit() {
  if (hero.health < 0) {
    console.log('winner is monster');
    return;
  }

  if (monster.health < 0) {
    console.log('winner is hero');
    return;
  }

  console.log('Hero attacks!\n')
  monster.health = monster.health - hero.attack
  console.log('Monster\'s health is now ', monster.health)
  hero.health = hero.health - monster.attack
  console.log('Hero\'s health is now ', hero.health)
}

function battle() {
  console.log('A Monster appears!\n')
  console.log(`Hero (HP: ${hero.health}) vs. Monster (HP: ${monster.health})\n`)

  while (monster.health > 0) {
    hit()
  }

  console.log('Monster has been defeated!\nHero wins\nGame Over.')
}

battle()
