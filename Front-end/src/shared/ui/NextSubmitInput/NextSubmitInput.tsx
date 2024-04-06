import { Input, Button, ButtonProps, InputProps } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './NextSubmitInput.scss';

type NextSubmitInputProps = {
  buttonProps?: ButtonProps;
  inputProps?: InputProps;
};

export const NextSubmitInput = ({ buttonProps, inputProps }: NextSubmitInputProps) => {
  return (
    <div className='next-submit-input-container'>
      <Input {...inputProps} />

      <Button {...buttonProps} type='primary' className='submit-btn'>
        <RightOutlined />
      </Button>
    </div>
  );
};
