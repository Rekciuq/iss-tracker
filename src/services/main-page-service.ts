import axios from "axios";

import { TDateTime } from "@/schemas/date-time.schema";
import type { TISSPosition } from "@/schemas/iss-position.schema";
import type { TPersonInISS } from "@/schemas/person-in-iss.schema";
import type { TPersonInSpace } from "@/schemas/person-in-space.schema";

const peopleInSpaceAPI = "/api/iss-data?type=people";
const ISSPositionAPI = "/api/iss-data?type=position";

export const MainPageService = {
  getPeopleInISS: async (): Promise<TPersonInISS[]> => {
    const data = await axios.get(peopleInSpaceAPI);
    const peopleInSpace: TPersonInSpace[] = data.data.people;
    const peopleInISS: TPersonInISS[] = peopleInSpace.filter(isPersonInISS);
    return peopleInISS;
  },
  getISSPosition: async (): Promise<TISSPosition> => {
    const data = await axios.get(ISSPositionAPI);
    return data.data.iss_position;
  },
};

export const DateTimeService = {
  getCurrentDateTime: () => {
    const now = new Date();

    const dayOptions: Intl.DateTimeFormatOptions = { weekday: "long" };
    const monthOptions: Intl.DateTimeFormatOptions = { month: "long" };

    const dayOfTheWeek = now.toLocaleDateString("en-US", dayOptions);
    const dayOfTheMonth = now.getDate().toString().padStart(2, "0");
    const month = now.toLocaleDateString("en-US", monthOptions);

    const utcHour = now.getUTCHours().toString().padStart(2, "");
    const utcMinute = now.getUTCMinutes().toString().padStart(2, "");
    const utcTime = `${utcHour}:${utcMinute}`;
    const year = now.getUTCFullYear();

    const dateTime: TDateTime = {
      utcTime,
      dayOfTheWeek,
      dayOfTheMonth,
      month,
      year,
    };

    return dateTime;
  },
};

const isPersonInISS = (person: TPersonInSpace): person is TPersonInISS => {
  return person.craft === "ISS";
};
