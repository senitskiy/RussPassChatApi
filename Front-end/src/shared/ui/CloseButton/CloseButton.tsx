import { Button, ButtonProps } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './CloseButton.scss';

export const CloseButton = (props: ButtonProps) => {
  return (
    <Button {...props} type='text' className='close-btn'>
      <CloseOutlined />
    </Button>
  );
};
