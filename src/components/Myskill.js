import React from "react";

const Myskill = (props) => {
  return (
    <div className="mx-2">
      <img
        alt="project"
        src={props.src}
        style={{ height: "90px", width: "90px", display: "-ms-inline-grid" }}
      />
    </div>
  );
};

export default Myskill;
