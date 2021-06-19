import React from "react";

const Info = ({ infos, deleteInfo }) => {
  //   const infoList = infos.map((info) => {
  //     if (info.age < 30) {
  //       return (
  //         <div className="info" key={info.id}>
  //           <div>Name: {info.name}</div>
  //           <div>Age: {info.age}</div>
  //         </div>
  //       );
  //     } else {
  //       return null;
  //     }
  //   });
  //   const infoList = infos.map((info) => {
  //     return info.age > 29 ? (
  //       <div className="info" key={info.id}>
  //         <div>Name: {info.name}</div>
  //         <div>Age: {info.age}</div>
  //       </div>
  //     ) : null;
  //   });
  return (
    <div className="info-list">
      {infos.map((info) => {
        return info.age > 29 ? (
          <div className="info" key={info.id}>
            <div>Name: {info.name}</div>
            <div>Age: {info.age}</div>
            <button
              onClick={() => {
                deleteInfo(info.id);
              }}
            >
              Delete
            </button>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Info;
