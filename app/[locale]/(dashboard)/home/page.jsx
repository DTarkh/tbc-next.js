import "./HomePage.css";
import { useTranslations } from "next-intl";
import Button from "../../Components/Button";
import image from "@/public/images/e-commerce.webp";
import Image from "next/image";

const HomePage = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="home-container">
      <div className="w-[50%] flex flex-col justify-start pl-52">
        <h1 className=" text-[#4B0082] dark:text-[#ff9900] text-7xl font-bold">{t("heading")}</h1>
        <h2 className="home-title text-gray-800 dark:text-slate-300 whitespace-pre-wrap">
          {t("title")}
        </h2>
        <p className="home-description text-center text-gray-600 dark:text-slate-400 mb-10 w-[80%] whitespace-pre-wrap">
          {t("description")}
        </p>
        <Button href="/about" name={t("button")} />
      </div>
      <div className="w-[50%] pr-52">
        <Image src={image} alt="shopping image" className="rounded-3xl shadow-2xl h-[45vh] object-cover"/>
      </div>
    </div>
  );
};

export default HomePage;
