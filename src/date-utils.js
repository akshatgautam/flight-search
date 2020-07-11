const dateUtils = {
  dateFormatter(date) {
    if (date instanceof Date) {
      return date.toLocaleDateString().split('/').reverse().join('/');
    } return date;
  },
  getDateAsMilliSeconds(date, time) {
    const dateFields = date ? date.split('/') : null;
    const timeFields = time ? time.split(':') : null;

    if (dateFields && timeFields) {
      return Date.UTC(...dateFields, ...timeFields);
    } if (dateFields) {
      return Date.UTC(...dateFields);
    }
    return null;
  },

  sameDay(d1, d2) {
    return this.getDateAsMilliSeconds(d1) === this.getDateAsMilliSeconds(d2);
  },

  getTimeDifference(d1, t1, d2, t2) {
    const diff = this.getDateAsMilliSeconds(d2, t2) - this.getDateAsMilliSeconds(d1, t1);
    const hourFactor = 60 * 60 * 1000;
    const minFactor = 60 * 1000;
    const minutes = Number((diff % hourFactor) / minFactor).toFixed();
    const hours = Number((diff / hourFactor) - (minutes / 60)).toFixed();
    return { hours, minutes };
  },

  desiredTimeGap(d1, t1, d2, t2, diff) {
    const gap = this.getDateAsMilliSeconds(d2, t2) - this.getDateAsMilliSeconds(d1, t1);
    return this.sameDay(d1, d2) && gap > (diff || (30 * 60 * 1000));
  },
};

export default dateUtils;
