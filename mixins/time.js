
import date from 'date-and-time';

export default  {

  computed : {
    time(){
      const pattern = date.compile('MMM D YYYY');
      return  date.format(new Date(), pattern);
    }
  }
}
