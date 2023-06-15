import React, { useState, useEffect } from "react";
import Header from "../components/Header";
const History = () => {
  const [imageList, setImageList] = useState([]);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const Imglist = JSON.parse(localStorage.getItem("imageList"));
    const cartImglist = JSON.parse(localStorage.getItem("cartImageList"));
    if (Imglist) {
      setImageList(Imglist);
    }
    if (cartImglist) {
      setCartData(cartImglist);
    }
  }, []);
  const clearData = () => {
    localStorage.clear();
    setImageList([]);
  };
  const addToCartFunct = (index, opr) => {
    const newImgList = imageList.map((img, ind) => {
      if (ind === index) {
        opr === "+" && img.count >= 0 ? (img.count += 1) : (img.count -= 1);
      }
      return img;
    });
    // setImageList([]);
    const cartNewData = newImgList.filter((img, ind) => {
      if (img.count > 0) {
        img.totalPrice = img.count * img.price;
        return img;
      }
    });
    setCartData(cartNewData);
    localStorage.setItem("imageList", JSON.stringify(newImgList));
    localStorage.setItem("cartImageList", JSON.stringify(cartNewData));
    setImageList(newImgList);
  };
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto  px-4 scroll-behavior: smooth ">
      {/* Header */}
      <Header />
      {/* History  */}
      <div className="">
        <div>
          {imageList && imageList.length > 0 ? (
            <button
              className="rounded-lg bg-blue-600 p-2 my-2 text-white border-spacing-2 border-solid border-2 border-sky-100"
              onClick={() => clearData()}
            >
              Clear Data
            </button>
          ) : (
            <div className="w-ful m-auto bg-slate-100 p-2 md:p-5">
              <h5 className="ml-4 mt-2 font-semibold text-xl text-center text-gray-600">
                <strong>No history available </strong>
              </h5>
            </div>
          )}
        </div>
        <div className="mb-10 grid md:grid-cols-2 lg:grid-cols-3 lg:gap-3 justify-items-center content-start">
          {imageList &&
            imageList.length > 0 &&
            imageList.map((img, index) => {
              return (
                <>
                  <div
                    className="rounded my-2 h-96 overflow-hidden shadow-xl shadow-slate-300 max-w-lg bg-blue-50 
                      md: w-4/5 border-sky-300 border-l-1 
                     cursor-pointer"
                    key={index}
                  >
                    <img
                      src={img.url}
                      alt="Image"
                      className="w-full  bg-cover h-80 pb-2 md: hover:scale-110"
                    />
                    <div className="flex justify-between">
                      <h5 className="ml-4 mt-4 font-semibold">
                        Price {img.price}₹
                      </h5>
                      {img.count !== 0 ? (
                        <div className="">
                          <button
                            className="rounded-lg bg-blue-400 p-2 my-1 text-white border-spacing-2 border-solid border-2 border-sky-100 mr-1"
                            onClick={() => addToCartFunct(index, "-")}
                          >
                            -
                          </button>
                          <span className="mx-1">{img.count}</span>
                          <button
                            className="rounded-lg bg-blue-400 p-2 my-2 text-white border-spacing-2 border-solid border-2 border-sky-100 mr-3"
                            onClick={() => addToCartFunct(index, "+")}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          className="rounded-lg bg-blue-400 p-2 my-2 text-white border-spacing-2 border-solid border-2 border-sky-100 mr-3"
                          onClick={() => addToCartFunct(index, "+")}
                        >
                          Add to cart
                        </button>
                      )}
                    </div>
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
