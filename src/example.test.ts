import { Battle, Character } from "./example";

describe("Character", () => {
  it("should have initial values", () => {
    const result = new Character("Hero", 100, 15);

    expect(result.name).toEqual("Hero");
    expect(result.health).toEqual(100);
    expect(result.attackPower).toEqual(15);
  });

  it("isAlive return true", () => {
    const hero = new Character("Hero", 100, 15);

    const result = hero.isAlive;
    expect(result).toBeTruthy;
  });

  it("isAlive return false", () => {
    const hero = new Character("Hero", 0, 15);

    const result = hero.isAlive;
    expect(result).toBeFalsy;
  });

  it("takeDamage changes the health", () => {
    const hero = new Character("Hero", 100, 15);

    expect(hero.health).toEqual(100);

    hero.takeDamage(10);
    expect(hero.health).toEqual(90);
  });

  it("attack changes the health of defending Char", () => {
    const monster = new Character("Monster", 80, 10);
    const hero = new Character("Hero", 100, 15);

    hero.atack(monster);
    expect(monster.health).toEqual(65);
  });
});

describe("Battle", () => {
  it("should initialises the characters correctly", () => {
    const hero = new Character("Hero", 100, 15);
    const monster = new Character("Monster", 80, 10);

    const result = new Battle(hero, monster);

    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    result.announceStart();

    expect(consoleSpy).toHaveBeenCalledWith(
      "A Monster appears! Hero (HP: 100) vs. Monster (HP: 80)"
    );

    consoleSpy.mockRestore();
  });
});
