import { User } from './../src/user.js';

describe("User", function() {
  let birthday = new Date(1985, 10, 17);
  let user = new User("Kristen", birthday, "female", 37);


  it ("should calculate number of seconds a person has lived", function() {
    let seconds = user.getSeconds();
    expect(seconds).toBeCloseTo(1023994937, -6);
  });

  it ("should calculate number of planet years a person has lived", function () {
    let planets = user.planetYears();
    let pyears = [135.2, 52.3, 32.4, 17.2, 2.7, 1.1, 0.38, 0.19, 0.13];
    for (var i = 0; i < 9; i++) {
      expect(planets[i]).toBeCloseTo(pyears[i], -1);
    }
  });

  it ("should calculate person's life expectancy", function() {
    let life = user.lifeExpectancy();
    expect(life).toBeCloseTo(49.4, -1);
  });

  it ("should calculate number of other animal lifetimes user has lived", function() {
    let goal = [2.8, 2.1, 3413315, 1.6, 1.1, 0.65, 0.324];
    let lifetimes = user.animalLife();

    for (var i = 0; i < lifetimes.length; i++) {
      let precision;
      if (lifetimes[i] >100000) {
        precision = -5;
      }else if (lifetimes[i] > 1) {
        precision = 1;
      }else {
        precision = 2;
      }
      expect(lifetimes[i]).toBeCloseTo(goal[i], precision);
    }
  });

});
