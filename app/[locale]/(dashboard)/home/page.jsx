
import "./HomePage.css";
import {useTranslations} from 'next-intl';
import Button from "../../Components/Button"

const HomePage = () => {
  const t = useTranslations('HomePage');
  return (
    <>
      <h1 className="home-title text-slate-100">{t('title')}</h1>
      <p className="home-description text-center text-slate-800 dark:text-slate-100 mb-3">{t('description')}</p>
      <Button href="/about" name={t('button')}/>
    </>
  );
};

export default HomePage;