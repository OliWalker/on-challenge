import React from "react";
import Image from "next/image";

import headerStyles from "./header.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Link href="/">
        <a className="removeLineHeight">
          <Image src="/on.svg" alt="On Logo" width={60} height={60} />
        </a>
      </Link>
    </header>
  );
};
