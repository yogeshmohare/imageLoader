import React, { useState, useEffect } from "react";
import Header from "../components/Header";
const History = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const Imglist = JSON.parse(localStorage.getItem("imageList"));
    if (Imglist) {
      setImageList(Imglist);
    }
  }, []);
  const clearData = () => {
    localStorage.clear();
    setImageList([]);
  };
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto  px-4 ">
      {/* Header */}
      <Header />
      {/* History  */}
      <div className="">
        <div>
          <button
            className="rounded-lg bg-blue-600 p-2 my-2 text-white border-spacing-2 border-solid border-2 border-sky-100"
            onClick={() => clearData()}
          >
            Clear Data
          </button>
        </div>
        <div className="mb-10 grid md:grid-cols-2 lg:grid-cols-3 lg:gap-3 justify-items-center content-start">
          {imageList &&
            imageList.map((value, index) => {
              return (
                <>
                  <div
                    className="rounded my-2 h-96 overflow-hidden shadow-xl shadow-slate-300 max-w-lg bg-blue-50 min-w-fit border-sky-300 border-l-1 hover:scale-110
                     cursor-pointer"
                    key={index}
                  >
                    <img
                      src={value}
                      alt="Image"
                      className="w-full  bg-cover h-80 pb-2"
                    />
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default History;
