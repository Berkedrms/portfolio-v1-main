import React from "react";

const Icon = ({
  IconType,
  padding,
  width,
  height,
  flexDirection,
  title,
  titleMargins,
  titleSize,
  marginBottom,
  marginRight,
  textTransform,
  fixedHeight,
}) => {
  if (!IconType) {
    console.error("❌ IconType undefined:", { title });
    return null; // sayfayı çökertmesin
  }

  return (
    <div
      className={`items-center flex justify-start ${padding} ${flexDirection} ${marginBottom} ${marginRight} ${fixedHeight} sm:h-auto`}
    >
      <div className={`${width} ${height} group transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0`}>
        <IconType />
      </div>
      {title ? <></> : null}
    </div>
  );
};

export default Icon;
