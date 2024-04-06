export type Event = {
  objectId: string;
  objectType: string;
  imageUrl: string;
  popularity: number;
  russpassRecommendation: boolean;
  title: string;
  type: string;
  isCanBuy: boolean;
  price: number;
  hasAudioGuide: boolean;
  address: string;
  description: string;
  cardUrl: string;
  working_time: null | {
    days: Partial<{
      Mon: DayTime;
      Tue: DayTime;
      Wed: DayTime;
      Thu: DayTime;
      Fri: DayTime;
      Sat: DayTime;
      Sun: DayTime;
    }>;
  };
};

type DayTime = Partial<{
  closed: boolean;
  startTime: string;
  endTime: string;
  breaks: [];
}>;
