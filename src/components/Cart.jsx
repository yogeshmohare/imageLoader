import React, { useState, useEffect } from "react";
import Header from "../components/Header";
const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [totalCartValue, setTotalCartValue] = useState(0);
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

  useEffect(() => {
    let totalValue = 0;
    for (let cart of cartData) {
      totalValue += cart.totalPrice;
    }
    setTotalCartValue(totalValue);
  }, [cartData]);

  const addToCartFunct = (id, opr) => {
    const newImgList = imageList.map((img, ind) => {
      if (id === img.id) {
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
          <h5 className="ml-4 my-4 font-semibold text-xl text-center  text-blue-500 ">
            <strong>Shopping</strong> cart
          </h5>
        </div>
        <div className="mb-10 justify-items-center content-start">
          <ul className="w-full	 md:w-3/5 m-auto bg-slate-100 p-2 md:p-5">
            {cartData && cartData.length > 0 ? (
              cartData.map((img, index) => {
                return (
                  <li
                    className="rounded my-2 h-24 overflow-hidden shadow-xl shadow-slate-300 bg-blue-50 
                        border-sky-300 border-l-1  w-full md:w-11/12	 lg:w-3/4 m-auto items-center justify-between px-2 md:px-5
                        cursor-pointer flex"
                    key={index}
                  >
                    <img
                      src={img.url}
                      alt="Image"
                      className="max-h-14  md:max-h-16 w-14 md:w-20 bg-cover rounded-md"
                    />
                    <div className="flex justify-between">
                      <h5 className="mr-3 md:mr-4 mt-4 font-semibold text-sm md:text-base">
                        Total Price {img.totalPrice} ₹
                      </h5>
                      {img.count !== 0 ? (
                        <div className="">
                          <button
                            className="rounded-lg bg-blue-400 p-2 my-1 text-white border-spacing-2 border-solid border-2 border-sky-100 "
                            onClick={() => addToCartFunct(img.id, "-")}
                          >
                            -
                          </button>
                          <span className="mx-2">{img.count}</span>
                          <button
                            className="rounded-lg bg-blue-400 p-2 my-2 text-white border-spacing-2 border-solid border-2 border-sky-100 mr-3"
                            onClick={() => addToCartFunct(img.id, "+")}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          className="rounded-lg bg-blue-400 p-2 my-2 text-white border-spacing-2 border-solid border-2 border-sky-100 mr-3"
                          onClick={() => addToCartFunct(img.id, "+")}
                        >
                          Add to cart
                        </button>
                      )}
                    </div>
                  </li>
                );
              })
            ) : (
              <>
                <h5 className="ml-4 mt-2 font-semibold text-xl text-center text-gray-600">
                  <strong>Cart is empty</strong>
                </h5>
              </>
            )}
            {cartData.length > 0 &&(
              <li
                className="rounded my-2 h-12 overflow-hidden shadow-xl shadow-slate-300 bg-gray-100 
                  border-sky-300 border-l-1  w-full md:w-11/12	 lg:w-3/4 m-auto items-center justify-end pr-5 md:px-5
                  cursor-pointer flex"
              >
                <div className=" text-center">
                  <h5 className="mx-2 font-semibold text-blue-400">
                    Sub-Total :-
                  </h5>
                </div>
                <h5 className=" font-bold">{totalCartValue}₹</h5>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
