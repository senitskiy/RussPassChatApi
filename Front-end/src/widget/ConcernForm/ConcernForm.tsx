import { useTSelector } from '../../shared/hooks/useTSelector';
import { ConcernTagSelector } from '../../feature';
import { Progress } from 'antd';
import { DateSelector } from '../../feature';
import { CommunitySelector } from '../../feature';
import { ConcernStateType } from '../../model/concernSlice';
import { TourList } from '../../feature';
import { CloseButton } from '../../shared/ui/CloseButton/CloseButton';
import './ConcernForm.scss';

const persentValueOfStep: { [p in ConcernStateType['currentStep']]: number } = {
  'select-tag': 25,
  'select-date': 50,
  'select-community': 75,
  'result-page': 100,
};

export const ConcernForm = ({ handleClose }: { handleClose: () => void }) => {
  const currentStep = useTSelector((state) => state.concern.currentStep);

  return (
    <div className='chat-window'>
      <Progress
        className='progress-circle'
        type='circle'
        percent={persentValueOfStep[currentStep]}
        size='small'
        strokeLinecap='butt'
        showInfo={false}
        strokeWidth={50}
        trailColor='#62C55433'
        strokeColor='#62C554'
      />

      <CloseButton onClick={handleClose} />

      {currentStep === 'select-tag' && <ConcernTagSelector />}
      {currentStep === 'select-date' && <DateSelector />}
      {currentStep === 'select-community' && <CommunitySelector />}
      {currentStep === 'result-page' && <TourList />}
    </div>
  );
};
