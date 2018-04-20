import { User } from './../src/user.js';

describe("User", function() {
  let today = new Date();
  let birthday = new Date(1985, 10, 17);
  let user = new User("Kristen", birthday, "female", "OR");


  it ("should calculate number of seconds a person has lived", function() {
    let seconds = user.getSeconds();
    expect(seconds).toBeCloseTo(1023177222, -6);
  });

  it ("should calculate number of planet years a person has lived", function () {
    let planets = user.planetYears();
    let pyears = [134.6, 52.7, 32.4, 17.2, 2.7, 1.1, 0.38, 0.19, 0.13];
    for (var i = 0; i < 9; i++) {
      expect(planets[i]).toBeCloseTo(pyears[i], -1);
    }
  });

});
