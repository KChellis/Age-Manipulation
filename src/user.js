class User {
  constructor(name, birthday, sex, state) {
    this.name = name;
    this.birthday = birthday;
    this.sex = sex;
    this.state = state;
    this.today = new Date();
  }
  getSeconds() {
    let milliseconds =this.today.getTime() - this.birthday.getTime();
    let seconds = milliseconds / 1000
    return seconds;
  }
  planetYears() {
    let planets = [];
    const secondsInYear = (365 * 24 * 60 * 60);
    let planetToEarth = [.24, 0.62, 1, 1.88, 11.86, 29.4, 84.3, 164.79, 248.09];
    let years = this.getSeconds() / secondsInYear;
    for (var i = 0; i < 9; i++) {
      planets.push(years/planetToEarth[i]);
    }
    return planets;
  }
}
export { User };
