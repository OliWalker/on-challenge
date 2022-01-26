import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import { slideIn } from "../animations";
import { ButtonLink } from "../components/Button";

import homeStyles from "../styles/pages/home.module.css";

const Home: NextPage = () => {
  return (
    <section className={`page ${homeStyles.homePage}`}>
      <motion.h1
        className={`banner ${homeStyles.header}`}
        {...slideIn({ initialX: -100 })}
      >
        Take the quiz <br />
        and try your first pair!
      </motion.h1>
      <motion.div
        className={homeStyles.button}
        {...slideIn({ initialX: -100, delay: 0.3 })}
      >
        <ButtonLink href="/quiz">Try on Trial</ButtonLink>
      </motion.div>
      <motion.p
        className="caption"
        {...slideIn({ initialX: -100, delay: 0.6 })}
      >
        30 Days risk free
      </motion.p>

      <motion.div
        className={homeStyles.bannerImage}
        {...slideIn({ initialX: 100, delay: 0.9 })}
      >
        <Image
          src="/assets/Background Image Start Screen.png"
          alt="Man running on clouds"
          layout="fill"
          objectFit="contain"
        />
      </motion.div>
    </section>
  );
};

export default Home;
