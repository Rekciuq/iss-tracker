import { useTranslations } from "next-intl";

import { Icons } from "../ui/icons";

import { TPersonInISS } from "@/schemas/person-in-iss.schema";

interface IISSTeamProps {
  peopleInISS: TPersonInISS[];
}

export function ISSTeam({ peopleInISS }: IISSTeamProps) {
  const t = useTranslations("main-page");
  return (
    <div className="flex-col space-y-8 py-[20px] max-xl:col-span-2 max-xl:justify-self-center max-lg:col-span-1">
      {peopleInISS.map((person) => (
        <div className="flex items-center gap-[10px]" key={person.name}>
          <Icons.profileIcon className="h-10 w-10" />
          <p className="text-xl">{person.name}</p>
        </div>
      ))}
      <p className="text-xl">
        {t("total-people-amount", { total: peopleInISS.length })}
      </p>
    </div>
  );
}
