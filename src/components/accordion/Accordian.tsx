import React, { FC, useEffect, useRef } from "react";

import { AccordianProps } from "./types";
import { ChevronDown } from "assets/icons";

const Accordian: FC<AccordianProps> = ({ faq, isOpen, onClick }) => {
  const { text, answer } = faq;
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? contentRef.current.scrollHeight + "px"
        : "0px";
    }
  }, [isOpen]);

  return (
    <div
      className={`flex flex-col w-[50%] text-[#01859A] rounded-md  border-b border-gray-300`}
    >
      <div
        className={`flex p-4 my-2 justify-between items-center w-full cursor-pointer font-bold ${
          isOpen ? "" : "p-4"
        }`}
        onClick={onClick}
      >
        <div>{text}</div>
        <ChevronDown
          className={`${
            isOpen ? "transform rotate-180 " : ""
          } opacity-100 duration-500 `}
        />
      </div>
      <div
        ref={contentRef}
        className={`px-4 overflow-hidden text-[#01859A] duration-300 ease-in-out max-h-0 ${
          isOpen ? "max-h-screen opacity-100 mb-4" : ""
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default Accordian;
