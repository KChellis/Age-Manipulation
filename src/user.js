class User {
  constructor(name, birthday, sex, index) {
    this.name = name;
    this.birthday = birthday;
    this.sex = sex;
    this.index = index;
    this.today = new Date();
    this.years;
  }

  getSeconds() {
    let milliseconds =this.today.getTime() - this.birthday.getTime();
    let seconds = milliseconds / 1000;
    return seconds.toFixed();
  }
  planetYears() {
    let planets = [];
    const secondsInYear = (365 * 24 * 60 * 60);
    let planetToEarth = [.24, 0.62, 1, 1.88, 11.86, 29.4, 84.3, 164.79, 248.09];
    this.years = this.getSeconds() / secondsInYear;
    for (var i = 0; i < 9; i++) {
      planets.push((this.years/planetToEarth[i]).toFixed(2));
    }
    return planets;
  }
  lifeExpectancy() {
    let male = [72.6, 76.3, 77.2, 73.1, 78.3, 77.8, 78.6, 75.9, 76.6, 74.6, 78.0, 77.4, 76.4, 75.1, 77.3, 76.3, 73.4, 72.7, 76.8, 76.1, 78.1, 75.7, 78.7, 71.9, 74.9, 76.4, 77.7, 75.6, 78.0, 77.8, 75.6, 77.9, 75.1, 76.9, 75.2, 73.3, 77.2, 75.8, 77.2, 74.0, 76.6, 73.5, 76.0, 78.3, 78.2, 76.6, 77.8, 72.8, 77.5, 76.0];
    let female = [78.2, 80.4, 82.1, 78.8, 83.1, 82.2, 82.9, 80.7, 82.3, 79.7, 84.7, 81.6, 81.4, 80.0, 82.0, 81.0, 78.5, 78.6, 81.5, 81.3, 82.7, 80.7, 83.3, 78.0, 80.1, 80.6, 81.9, 80.6, 82.5, 82.5, 81.3, 82.8, 80.4, 82.3, 80.2, 78.5, 81.8, 81.1, 82.3, 79.8, 82.4, 79.0, 80.8, 82.1, 82.6, 81.3, 82.0, 78.1, 82.4, 80.8];
    let timeLeft;
    if(this.sex === "male") {
      timeLeft = male[this.index] - this.years;
    }else {
      timeLeft = female[this.index] - this.years;
    }
    return timeLeft.toFixed(1);
  }
  animalLife() {
    let lifeExpectancies = [11.5, 15.1, 9.51294e-6, 20, 29, 50, 100];
    let lifetimes = [];
    for (var i = 0; i < lifeExpectancies.length; i++) {
      lifetimes.push((this.years/lifeExpectancies[i]).toFixed(2));
    }
    return lifetimes;
  }

}
export { User };
