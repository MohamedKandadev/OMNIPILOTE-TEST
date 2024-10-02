import { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeHolder?: string;
  onChange?: any;
  value?: string | number;
  type?: "text" | "password";
  error: string | null;
  id: string;
}
