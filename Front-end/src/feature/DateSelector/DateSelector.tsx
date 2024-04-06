import { TagSpace } from '../../shared/ui/TagSpace/TagSpace';
import { NextSubmitInput } from '../../shared/ui/NextSubmitInput/NextSubmitInput';
import { useConcernFormViewModel } from '../ConcernFormViewModel/ConcernFormViewModel';
import { Calendar } from '../../shared/ui/Calendar/Calendar';
import { InputProps } from 'antd';
//@ts-ignore
import dayjs from 'dayjs';
import './DateSelector.scss';

export const DateSelector = () => {
  const {
    checkedConcernTags,
    handleSelectStep,
    date,
    handleSelectDate,
    handleChangeDatePromt,
    datePromt,
  } = useConcernFormViewModel();

  const handleGaBackToTags = () => {
    handleSelectStep('select-tag');
  };

  const handleDateChange = (date: string) => {
    handleSelectDate(date);
  };

  const handleTypeDatePromt: InputProps['onChange'] = (event) => {
    handleChangeDatePromt(event.target.value);
  };

  const handleGoNextToCommunity = () => {
    handleSelectStep('select-community');
  };

  return (
    <div className='date-space concern-form-space'>
      <div className='tag-info-container'>
        <TagSpace tags={checkedConcernTags} checkedTags={checkedConcernTags} />
      </div>

      <h5 tabIndex={0} className='go-back-link' onClick={handleGaBackToTags}>
        Изменить
      </h5>

      <div className='divider' />

      <div className='calendar-info-container'>
        <h4>Подскажите дату</h4>
        <h5>А еще можете уточнить время в сообщении</h5>
      </div>

      <Calendar
        value={dayjs(date, 'DD.MM.YYYY')}
        onChange={(date) => handleDateChange(date.format('DD.MM.YYYY'))}
      />

      <NextSubmitInput
        inputProps={{
          placeholder: 'Можете уточнить время тут...',
          value: datePromt,
          onChange: handleTypeDatePromt,
        }}
        buttonProps={{
          onClick: handleGoNextToCommunity,
        }}
      />
    </div>
  );
};
