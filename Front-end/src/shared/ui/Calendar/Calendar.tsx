import { Calendar as BaseCalendar, CalendarProps } from 'antd';
import { CalendarHeader } from './ui/CalendarHeader';
import locale from 'antd/locale/ru_RU';
import './Calendar.scss';

export const Calendar = (props: CalendarProps<any>) => {
  return (
    <BaseCalendar
      {...props}
      className='custom-calendar'
      headerRender={CalendarHeader}
      fullscreen={false}
      locale={locale.DatePicker}
      disabledDate={(date) => {
        const isToday = date.isSame(new Date(), 'days');
        return !isToday && date.isBefore();
      }}
    />
  );
};
