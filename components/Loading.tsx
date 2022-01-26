import Image from "next/image";
import React from "react";

import loadingStyles from "./loading.module.css";

export const Loading = () => {
  return (
    <div className={loadingStyles.loader}>
      <Image src="/assets/loader.gif" alt="Loading" width={80} height={80} />
      <p className={`caption ${loadingStyles.text}`}>
        We&apos;re running to get your results.
      </p>
    </div>
  );
};
