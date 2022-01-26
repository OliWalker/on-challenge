import React from "react";
import Link from "next/link";
import buttonStyles from "./button.module.css";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary";

type BaseButtonProps = {
  variant?: ButtonVariant;
};

type ButtonProps = BaseButtonProps & {
  onClick: () => void;
};

const getVariantStyles = (varaint: ButtonVariant) =>
  `${buttonStyles.button} ${buttonStyles[varaint]} body`;

const buttonHover = { whileHover: { scale: 1.02, y: -5 } };

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <motion.button
      className={getVariantStyles(variant)}
      {...buttonHover}
      {...props}
    >
      {children}
    </motion.button>
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
    <motion.div {...buttonHover}>
      <Link href={href} passHref>
        <a className={getVariantStyles(variant)} {...props}>
          {children}
        </a>
      </Link>
    </motion.div>
  );
};
