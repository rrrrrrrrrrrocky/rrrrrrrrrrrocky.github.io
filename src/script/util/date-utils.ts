import dayjs, { Dayjs } from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

export const getKoreaTimeDayjs = (date?: dayjs.ConfigType): Dayjs => {
  dayjs.locale("ko");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  return dayjs(date).tz("Asia/Seoul");
};
