import { IButton } from "@/types/button";
import Link from "next/link";
import React, { FC } from "react";

type Props = {};

const MainButton: FC<IButton> = ({ handleClick, title, classes, ...props }) => {
  return (
    <button
      className={`bg-primary-100 text-white py-3 px-6 rounded font-ChakraPetch text-nowrap ${classes}`}
      onClick={handleClick}
      {...props}
    >
      {title}
    </button>
  );
};

export default MainButton;
