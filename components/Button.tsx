import React from "react";
import Link from "next/link";
import buttonStyles from "./button.module.css";

type ButtonVariant = "primary" | "secondary";

type BaseButtonProps = {
  variant?: ButtonVariant;
};

type ButtonProps = BaseButtonProps & {
  onClick: () => void;
};

const getVariantStyles = (varaint: ButtonVariant) =>
  `${buttonStyles.button} ${buttonStyles[varaint]} body`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <button className={getVariantStyles(variant)} {...props}>
      {children}
    </button>
  );
};

type ButtonLinkProps = BaseButtonProps & {
  href: string;
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  variant = "primary",
  href,
  ...props
}) => {
  return (
    <Link href={href}>
      <a className={getVariantStyles(variant)} {...props}>
        {children}
      </a>
    </Link>
  );
};
