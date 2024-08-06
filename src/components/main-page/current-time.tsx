import { useTranslations } from "next-intl";

import { TDateTime } from "@/schemas/date-time.schema";

interface ICurrentTimeProps {
  dateTime: TDateTime;
}

export function CurrentTime({ dateTime }: ICurrentTimeProps) {
  const t = useTranslations("main-page");
  return (
    <div className="max-lg:flex max-lg:gap-[10px] max-lg:justify-self-center max-md:flex-col lg:justify-self-end xl:justify-self-start">
      <p className="font-bold">{t("time", { time: dateTime.utcTime })}</p>
      <p>
        {dateTime.dayOfTheWeek}, {dateTime.dayOfTheMonth} {dateTime.month}{" "}
        {dateTime.year}
      </p>
    </div>
  );
}
