import { FloatButton, FloatButtonProps } from 'antd';
import { MessageIcon } from '../../shared/icons/MessageIcon';
import './ChatFloatButton.scss';

export const ChatFloatButton = (props: FloatButtonProps) => {
  return (
    <FloatButton
      {...props}
      description={
        <div className='description'>
          <span>Выбрать самое интересное из 4000+ вариантов</span>
          <div className='vertical-divider' /> <MessageIcon />
        </div>
      }
      className='chat-float-btn'
      title='gdsg'
      shape='square'
      body={<>gdgdsgsd</>}
    />
  );
};
