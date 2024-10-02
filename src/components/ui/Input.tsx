import { IInput } from "@/types/input";
import React, { FC } from "react";

type Props = {};

const MainInput: FC<IInput> = ({
  label,
  placeHolder = label,
  value,
  type = "text",
  error,
  onChange,
  ...props
}) => {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-2 font-MabryPro">{label}</label>
      <input
        type={type}
        placeholder={placeHolder}
        className="py-3 pl-5 pr-7 bg-[#F5F5F5] border-[#87868636] border-[1px] rounded-md outline-none"
        value={value}
        onChange={onChange}
        {...props}
      />
      {error != null && <p className="text-red-400">{error}</p>}
    </div>
  );
};

export default MainInput;
