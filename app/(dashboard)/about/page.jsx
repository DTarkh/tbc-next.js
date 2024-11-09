import "./AboutPage.css";
import {useTranslations} from 'next-intl';

const AboutPage = () => {
  const t = useTranslations('AboutPage');
  return (
    <>
      <h1 className="about-title">{t('title')}</h1>
      <p className="about-description text-center text-slate-800 dark:text-zinc-200">
        We are committed to providing high-quality services tailored to meet the unique needs of our clients.
        Our team brings expertise, dedication, and passion to every project.
      </p>
      <p className="about-mission text-center text-slate-800 dark:text-zinc-200">
        <strong className = "text-slate-800 dark:text-zinc-200">Our Mission:</strong> To deliver exceptional value and customer satisfaction through our innovative solutions and professional approach.
      </p>
    </>
  );
};

export default AboutPage;