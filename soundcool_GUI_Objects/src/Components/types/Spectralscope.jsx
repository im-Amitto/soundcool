import React from "react";
import store from "../../index";

const Spectralscope = ({ blockInfo }) => {
  let {} = blockInfo;
  return (
    <React.Fragment>
      <div
        className=""
        style={{
          width: "308px",
          height: "188px",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "293px",
            height: "168px",
            top: "10px",
            left: "10px",
            backgroundColor: "#DCDEE0"
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default Spectralscope;