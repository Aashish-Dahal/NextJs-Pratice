import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import React, { FC } from "react";
interface LayoutProps {
  children?: React.ReactNode;
}
export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};
