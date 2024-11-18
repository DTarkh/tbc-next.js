import "./HomePage.css";
import { useTranslations } from "next-intl";
import Button from "../../Components/Button";
import image from "@/public/images/cart.jpg";
import Image from "next/image";

const HomePage = () => {
  const t = useTranslations("HomePage");
  return (
    <div className=" md:flex md:items-center md:justify-between w-full pl-[10%] pr-[10%]">
      <div className="md:w-1/2 space-y-4">
        <h1 className=" text-[#FCA311] dark:text-[#ff9900] text-7xl font-bold">
          {t("heading")}
        </h1>
        <h2 className="home-title text-[#14213D] dark:text-[#FFFFFF] whitespace-pre-wrap">
          {t("title")}
        </h2>
        <p className="home-description text-center text-[#14213D] dark:text-[#FFFFFF] mb-10 w-[80%] whitespace-pre-wrap pb-6">
          {t("description")}
        </p>
        <Button href="/about" name={t("button")} />
      </div>

      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
        <Image
          src={image}
          alt="Product Showcase"
          width={700}
          height={800}
          className="w-full h-[50vh] rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default HomePage;
