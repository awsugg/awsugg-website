import React from "react";

function CenteredImage() {
  return (
    <div className="flex justify-center items-center w-full bg-[#131118]">
      <img style={{ maxHeight: "40rem", minWidth: "80%" }}
        src="/img/IMG_8885.png"
        alt="AWS User Group Guatemala"
        className=""
      />
    </div>
  );
}

export default CenteredImage;
