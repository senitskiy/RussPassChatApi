export type Restaurant = {
  objectId: string;
  objectType: string;
  imageUrl: string;
  popularity: number;
  russpassRecommendation: boolean;
  title: string;
  isCanBuy: boolean;
  price: number;
  hasAudioGuide: boolean;
  cuisines: string[];
  address: string;
  hasCompliment: boolean;
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
