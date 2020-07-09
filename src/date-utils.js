const dateUtils = {
  getDateAsMilliSeconds(date, time) {
    const dateFields = date ? date.split('/') : null;
    const timeFields = time ? time.split(':') : null;

    if (dateFields && timeFields) {
      return Date.UTC(...dateFields, ...timeFields);
    } else if (dateFields) {
      return Date.UTC(...dateFields);
    }
    return null;
  },

  sameDay(d1, d2) {
    return this.getDateAsMilliSeconds(d1) === this.getDateAsMilliSeconds(d2);
  },

  desiredTimeGap(d1, t1, d2, t2, diff) {
    const gap = this.getDateAsMilliSeconds(d2, t2) - this.getDateAsMilliSeconds(d1, t1);
    return this.sameDay(d1, d2) && gap > (diff || (30 * 60 * 1000));
  },
};

export default dateUtils;
