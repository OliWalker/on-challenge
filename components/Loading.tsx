import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { slideIn } from "../animations";

import loadingStyles from "./loading.module.css";

export const Loading = () => {
  return (
    <motion.div className={loadingStyles.loader} {...slideIn({ initialY: 50 })}>
      <Image src="/assets/loader.gif" alt="Loading" width={80} height={80} />
      <p className={`caption ${loadingStyles.text}`}>
        We&apos;re running to get your results.
      </p>
    </motion.div>
  );
};
