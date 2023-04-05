class Clock {

  constructor(minutes) {
    this.minutes = minutes;
  }

  static at(hour, min = 0) {
    let totalMinutes = (hour * 60) + min;
    return new Clock(totalMinutes);
  }

  toString() {
    let hours = parseInt(this.minutes / 60, 10);
    let minutes = this.minutes % 60;
    let displayHour = String(hours).length === 1 ? `0${hours}` : hours;
    let displayMinutes = String(minutes).length === 1 ? `0${minutes}` : minutes;
    return `${displayHour}:${displayMinutes}`;
  }

  add(min) {
    let totalMinutes = (min + this.minutes) % 1440;
    return new Clock(totalMinutes);
  }

  subtract(min) {
    let totalMinutes = (this.minutes - min) % 1440;
    if (totalMinutes < 0) totalMinutes = 1440 + totalMinutes;
    return new Clock(totalMinutes);
  }

  isEqual(otherClock) {
    return this.minutes === otherClock.minutes;
  }
}

module.exports = Clock;