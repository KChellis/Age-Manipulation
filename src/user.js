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
    let years = this.getSeconds() / secondsInYear;
    planets.push(years/.24);
    return planets;
  }
}
export { User };
