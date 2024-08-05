import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

import { WelcomeBlock } from "@/components/main-page";

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <WelcomeBlock />;
}
