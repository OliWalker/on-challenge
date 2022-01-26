import React from "react";
import { Header } from "./Header";

import layoutStyles from "./layout.module.css";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className={layoutStyles.body}>
      <Header />
      <main className={layoutStyles.main}>{children}</main>
    </div>
  );
};
