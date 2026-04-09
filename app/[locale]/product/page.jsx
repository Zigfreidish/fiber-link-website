import { redirect } from "next/navigation";
import { defaultLocale, supportedLocales } from "../../../src/i18n/strings";

export default async function Product({ params }) {
  const { locale } = await params;
  const safeLocale = supportedLocales.includes(locale) ? locale : defaultLocale;

  redirect(`/${safeLocale}#product-overview`);
}
