import React, { useState } from "react";

const InputText = ({
  onChange,
  type,
  value,
  placeHolder,
  icon,
}: {
  onChange: () => void;
  value: string | number;
  type: string;
  placeHolder: string;
  icon: React.ReactNode;
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <div
      className={`py-4 px-3 flex gap-4 bg-black-950 rounded-[1.25rem] border-white ${
        isFocus && "border"
      }`}
    >
      {icon}
      <input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={onChange}
        // value={value}
        type={type}
        style={{
          width: "100%",
          background: "unset",
          border: "none",
          outline: "none",
          fontSize: "1rem",
          color: "#9EA0A5",
        }}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default InputText;
