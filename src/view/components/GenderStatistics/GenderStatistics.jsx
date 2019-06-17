import React from "react";

const GenderStatistics = ({ users }) => {
  let maleNum = 0;
  let femaleNum = 0;
  users.forEach(({ gender }) => {
    if (gender === "female") {
      femaleNum++;
    } else {
      maleNum++;
    }
  });
  return (
    <div className="row">
      <span className="badge">
        Male: {maleNum} Female: {femaleNum}
      </span>
    </div>
  );
};

export { GenderStatistics };
