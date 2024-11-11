import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import "../globals.css"
import {setRequestLocale} from 'next-intl/server';
 
export default async function LocaleLayout({children, params }) {
  const locale = await params.locale;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  setRequestLocale(locale);
  return (
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
  );
}

