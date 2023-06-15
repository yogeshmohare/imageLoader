import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

const Home = () => {
  const baseUrl = "https://dog.ceo/api/breeds/image/random";
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    fetchImageData();
  }, []);

  const fetchImageData = async () => {
    try {
      const result = await axios.get(baseUrl);
      const imgUrl = result.data.message;
      setImageUrl(imgUrl);
      const Imglist = JSON.parse(localStorage.getItem("imageList"));
      // pricing
      let price = Math.floor(Math.random() * 50 + 1);
      const imgDetails = {
        isAdd: false,
        price: price,
        count: 0,
        totalPrice: 0,
        id: Date.now(),
      };
      if (Imglist) {
        imgDetails["url"] = imgUrl;
        Imglist.push(imgDetails);
        localStorage.setItem("imageList", JSON.stringify(Imglist));
      } else {
        localStorage.clear();
        const newImgList = [];
        imgDetails["url"] = imgUrl;
        newImgList.push(imgDetails);
        localStorage.setItem("imageList", JSON.stringify(newImgList));
      }
    } catch (err) {
      console.error();
    }
  };
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto  px-4 ">
      {/* Header */}
      <Header />
      {/* Home  */}
      <div className="">
        <div className="bg-gradient-to-r from-blue-100 to-blue-300">
          {imageUrl && (
            <img className="mx-auto h-80 bg-cover" src={imageUrl} alt="" />
          )}
        </div>
        <button
          className="rounded-lg bg-blue-600 p-2 my-2 text-white border-spacing-2 border-solid border-2 border-sky-100 float-right"
          onClick={() => fetchImageData()}
        >
          New image
        </button>
      </div>
    </div>
  );
};

export default Home;
