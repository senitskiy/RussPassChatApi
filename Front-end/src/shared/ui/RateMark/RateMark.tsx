import './RateMark.scss';

export const RateMark = ({ rate }: { rate: number }) => {
  return <span className='rate-mark'>{rate}</span>;
};
