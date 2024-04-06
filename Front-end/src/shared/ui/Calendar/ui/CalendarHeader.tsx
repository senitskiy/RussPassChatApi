import { Select, Button, CalendarProps } from 'antd';
import { LeftOutlined } from '../../../icons/LeftOutlined';
import { RightOutlined } from '../../../icons/RightOutlined';
import { months } from '../constants/months';
import { yearOptions } from '../constants/years';

export const CalendarHeader: CalendarProps<any>['headerRender'] = ({
  value: currentDate,
  onChange,
}) => {
  return (
    <div className='calendar-header'>
      <Button
        type='text'
        className='prev-month-btn'
        onClick={() => onChange(currentDate.add(-1, 'months'))}
      >
        <LeftOutlined />
      </Button>

      <Select
        value={currentDate.get('M')}
        options={months}
        onChange={(month) => onChange(currentDate.set('months', month))}
      />

      <Select
        value={currentDate.get('y')}
        options={yearOptions}
        onChange={(year) => onChange(currentDate.set('y', year))}
      />

      <Button
        type='text'
        className='next-month-btn'
        onClick={() => onChange(currentDate.add(1, 'months'))}
      >
        <RightOutlined />
      </Button>
    </div>
  );
};
