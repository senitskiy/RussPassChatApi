import { SelectProps } from 'antd';

const minYearRange = new Date().getFullYear();
const maxYearRange = minYearRange + 20;

export const yearOptions: SelectProps['options'] = [];

for (let i = minYearRange; i <= maxYearRange; i++) {
  yearOptions.push({ value: i, label: i });
}
