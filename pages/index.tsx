import type { NextPage } from "next";
import Image from "next/image";
import { ButtonLink } from "../components/Button";

import homeStyles from "../styles/pages/home.module.css";

const Home: NextPage = () => {
  return (
    <section className={`page ${homeStyles.homePage}`}>
      <h1 className={`banner ${homeStyles.header}`}>
        Take the quiz <span className="noWrap">and try your first pair!</span>
      </h1>
      <div className={homeStyles.button}>
        <ButtonLink href="/quiz">Try on Trial</ButtonLink>
      </div>
      <p className="caption">30 Days risk free</p>

      <div className={homeStyles.bannerImage}>
        <Image
          src="/assets/Background Image Start Screen.png"
          alt="Man running on clouds"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default Home;
