import { unstable_setRequestLocale } from "next-intl/server";

import { ComponentsWrapper } from "@/components/main-page";

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <ComponentsWrapper />;
}
