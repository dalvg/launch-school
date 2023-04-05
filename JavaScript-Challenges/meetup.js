class Meetup {

  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
    this.date = new Date(this.year, this.month);
    this.firstDay = this.date.getDay();
  }

    static conversion = {
      sunday : 0,
      monday : 1,
      tuesday : 2,
      wednesday : 3,
      thursday : 4,
      friday : 5,
      saturday : 6,
    }

    static descriptor = {
      first : 1,
      second : 2,
      third : 3,
      fourth : 4,
      fifth : 5,
    }

    day(weekday, schedule) {
      let eligibleDates = this.getDates(weekday);
      let result;
      if (Meetup.descriptor[schedule.toLowerCase()]) {
        let index = Meetup.descriptor[schedule.toLowerCase()] - 1;
        result = eligibleDates[index];
      } else if (schedule.toLowerCase() === 'last') {
        return eligibleDates[eligibleDates.length - 1];
      } else {
        for (let idx = 0; idx < eligibleDates.length; idx += 1) {
          if (eligibleDates[idx].getDate() > 12) {
            result = eligibleDates[idx];
            break;
          }
        }
      }

      return result || null;
    }

    getDates(weekday) {
      let weekDayNumber = Meetup.conversion[weekday.toLowerCase()];
      let startDay = this.getStartDay(weekDayNumber);
      let result = [];
      let date = new Date(this.year, this.month, startDay);

      while (date.getMonth() === this.month) {
        result.push(date);
        date = new Date(this.year, this.month, startDay += 7);
      }

      return result;

    }

    getStartDay(weekDayNumber) {
      let startCount = this.firstDay;
      let count = 0;
      while (true) {
        if (startCount === weekDayNumber) break;
        startCount += 1;
        if (startCount > 6) {
          startCount = 0;
        }
        count += 1;
      }
      return count + 1;
    }
}

module.exports = Meetup;