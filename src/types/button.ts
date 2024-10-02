import { ButtonHTMLAttributes, HTMLProps } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  handleClick?: () => void;
  classes?: HTMLProps<HTMLElement>["className"];
}
