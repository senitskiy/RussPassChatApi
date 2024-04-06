import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../../model/store';

export const useTSelector: TypedUseSelectorHook<RootState> = useSelector;
