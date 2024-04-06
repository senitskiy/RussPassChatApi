import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../model/store';

export const useTDispatch: () => AppDispatch = useDispatch;
