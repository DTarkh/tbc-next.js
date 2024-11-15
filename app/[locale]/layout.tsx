import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Inter, Roboto_Serif } from 'next/font/google'
import "../globals.css"

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto_Serif({ subsets: ['latin']})
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <body className={roboto.className}>

        <NextIntlClientProvider  messages={messages}>
          {children}
        </NextIntlClientProvider>
    </body>
  );
}



