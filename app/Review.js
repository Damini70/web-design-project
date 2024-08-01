"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

function Review() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState([]);

  useEffect(() => {
    function random(arr) {
      const update = [];
      while (update.length < 2) {
        let index = Math.floor(Math.random() * arr.length);
        console.log("Random index:", index, "Value:", arr[index]);
        if (!update.includes(arr[index])) {
          update.push(arr[index]);
        }
      }
      return update;
    }

    if (data.length > 0) {
      const randomReviews = random(data);
      setShow(randomReviews);
    }
  }, [data]);
  useEffect(() => {
    async function api() {
      try {
        const res = await axios.get(
          "https://admin.tomedes.com/api/v1/get-reviews?page=1"
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    api();
  }, []);
  return (
    <div className="p-[5rem]  mt-[4rem]">
      <h1 className="md:text-[54px] text-[#003B79] font-semibold">
        What Our Customers Say
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap:4 mt-[7rem]">
        {show.length > 0 ? (
          <>
            {show.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="md:w-[577px] h-[294px] shadow-2xl shadow-[#003B79]  drop-shadow-lg rounded-2xl bg-white-800 p-[3rem]"
                >
                  <Image
                    src="/review.png"
                    alt="review"
                    width="84"
                    height="89"
                    className="absolute top-[-38px] right-[-19px]"
                  />
                  <div>{item["Reviews"]}</div>
                  <div className="flex justify-start absolute bottom-[3rem] ">
                    <div className="rounded-full ">
                      <Image
                        src="/profile.png"
                        alt="profile"
                        width="59"
                        height="59"
                      />
                    </div>
                    <div className="ml-[3rem]  ">
                      <p className="font-semibold text-[24px]">
                        {item["Name"]}
                      </p>
                      <p>Patient</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Review;
