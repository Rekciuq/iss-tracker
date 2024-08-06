import { useTranslations } from "next-intl";

import { TISSPosition } from "@/schemas/iss-position.schema";

interface ICurrentLocationProps {
  ISSPosition: TISSPosition;
}

export function CurrentLocation({ ISSPosition }: ICurrentLocationProps) {
  const t = useTranslations("main-page.location");
  return (
    <div className="max-lg:flex max-lg:justify-center max-lg:gap-[10px] max-lg:justify-self-center max-md:flex-col">
      <p className="font-bold max-lg:text-center">{t("header")}</p>
      <p className="max-sm:whitespace-pre-wrap">
        {t("location", {
          long: ISSPosition.longitude,
          lat: ISSPosition.latitude,
        })}
      </p>
    </div>
  );
}
