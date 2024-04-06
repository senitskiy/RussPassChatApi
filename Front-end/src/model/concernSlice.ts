import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// @ts-ignore
import dayjs from 'dayjs';

export type ConcernStateType = {
  currentStep: 'select-tag' | 'select-date' | 'select-community' | 'result-page';
  interestPromt: string;
  checkedConcernTags: string[];
  date: string;
  datePromt: string;
  checkedCommunityTags: string[];
  communityPromt: string;
};

const initialState: ConcernStateType = {
  currentStep: 'select-tag',
  interestPromt: '',
  checkedConcernTags: [],
  date: dayjs(new Date()).format('DD.MM.YYYY'),
  datePromt: '',
  checkedCommunityTags: [],
  communityPromt: '',
};

export const concernSlice = createSlice({
  name: 'concernSlice',
  initialState,
  reducers: {
    addConcernTag: (state, payload: PayloadAction<string>) => {
      const { payload: concernTag } = payload;

      const concernSet = new Set(state.checkedConcernTags);

      concernSet.add(concernTag);

      state.checkedConcernTags = [...concernSet];
    },

    deleteConcernTag: (state, payload: PayloadAction<string>) => {
      const { payload: concernTag } = payload;

      const concernSet = new Set(state.checkedConcernTags);

      concernSet.delete(concernTag);

      state.checkedConcernTags = [...concernSet];
    },

    setCurrentStep: (state, payload: PayloadAction<ConcernStateType['currentStep']>) => {
      const { payload: step } = payload;
      state.currentStep = step;
    },

    setInterestPromt: (state, payload: PayloadAction<string>) => {
      state.interestPromt = payload.payload;
    },

    setDate: (state, payload: PayloadAction<string>) => {
      state.date = payload.payload;
    },

    setDatePromt: (state, payload: PayloadAction<string>) => {
      state.datePromt = payload.payload;
    },

    addCommunityTag: (state, payload: PayloadAction<string>) => {
      const { payload: communityTag } = payload;

      const communitySet = new Set(state.checkedCommunityTags);

      communitySet.add(communityTag);

      state.checkedCommunityTags = [...communitySet];
    },

    deleteCommunityTag: (state, payload: PayloadAction<string>) => {
      const { payload: communityTag } = payload;

      const communitySet = new Set(state.checkedCommunityTags);

      communitySet.delete(communityTag);

      state.checkedCommunityTags = [...communitySet];
    },

    setCommunityPromt: (state, payload: PayloadAction<string>) => {
      state.communityPromt = payload.payload;
    },
  },
});

export const concernSliceActions = concernSlice.actions;

export const concernSliceReducer = concernSlice.reducer;
