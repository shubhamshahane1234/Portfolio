import React from "react";

const Myskill = (props) => {
  return (
    <div
      className="mx-2 flex flex-col  justify-center items-center
   "
    >
      <img
        alt="project"
        src={props.src.link}
        style={{
          width: "clamp(4rem,8vw,5rem)",
          aspectRatio: "3/2",
          objectFit: "contain",
        }}
      />
      <h1 className="font-serif text-[clamp(0.5rem,2vw,1rem)]  text-center ">
        {props.src.name}
      </h1>
    </div>
  );
};

export default Myskill;
