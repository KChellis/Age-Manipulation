import { User } from './../src/user.js';

describe("User", function() {
  let today = new Date();
  let birthday = new Date(1985, 10, 17);
  let user = new User("Kristen", birthday, "female", "OR");


  it ("should calculate number of seconds a person has lived", function() {
    let seconds = user.getSeconds();
    expect(seconds).toBeCloseTo(1023177222, -6);
  });

  it ("should calculate number of Mercury years a person has lived", function () {
    let planets = user.planetYears();
    expect(planets[0]).toEqual(134.6);
  });
  
});
