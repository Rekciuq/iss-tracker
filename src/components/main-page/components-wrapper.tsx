"use client";

import { useEffect, useState } from "react";

import { Icons } from "../ui/icons";

import {
  CurrentLocation,
  CurrentTime,
  GoogleMaps,
  ISSTeam,
} from "@/components/main-page";
import { TDateTime } from "@/schemas/date-time.schema";
import { TISSPosition } from "@/schemas/iss-position.schema";
import { TPersonInISS } from "@/schemas/person-in-iss.schema";
import { DateTimeService, MainPageService } from "@/services/main-page-service";

export function ComponentsWrapper() {
  const [peopleInISS, setPeopleInISS] = useState<TPersonInISS[] | null>(null);
  const [ISSPosition, setISSPosition] = useState<TISSPosition | null>(null);
  const [dateTime, setDateTime] = useState<TDateTime | null>(null);

  useEffect(() => {
    const fetchPeopleInISS = () => {
      MainPageService.getPeopleInISS()
        .then((people) => setPeopleInISS(people))
        .catch((error) =>
          console.error("Error fetching people in ISS:", error)
        );
    };
    const fetchISSPosition = () => {
      MainPageService.getISSPosition()
        .then((position) => setISSPosition(position))
        .catch((error) => console.error("Error fetching ISS position:", error));
    };
    const updateDateTime = () => {
      const fullDate = DateTimeService.getCurrentDateTime();
      setDateTime(fullDate);
    };

    fetchPeopleInISS();
    fetchISSPosition();
    updateDateTime();
    const peopleInterval = setInterval(fetchPeopleInISS, 62500);
    const positionInterval = setInterval(fetchISSPosition, 5000);
    const timeInterval = setInterval(updateDateTime, 5000);

    return () => {
      clearInterval(peopleInterval);
      clearInterval(positionInterval);
      clearInterval(timeInterval);
    };
  }, []);

  if (!peopleInISS || !ISSPosition || !dateTime) {
    return (
      <div className="absolute flex h-full w-full items-center bg-background">
        <Icons.loadingSpinner className="mx-auto animate-spin" />
      </div>
    );
  }
  return (
    <div className="container mx-auto grid h-full w-full gap-x-[20px] gap-y-[20px] max-xl:pt-[50px] xl:grid-cols-[minmax(0,_3fr)_minmax(0,_1fr)]">
      <CurrentLocation ISSPosition={ISSPosition} />
      <CurrentTime dateTime={dateTime} />
      <GoogleMaps ISSPosition={ISSPosition} />
      <ISSTeam peopleInISS={peopleInISS} />
    </div>
  );
}
