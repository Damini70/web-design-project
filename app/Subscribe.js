import Image from "next/image";
function Subscribe() {
  return (
    <div className="p-[5rem]  mt-[4rem]">
      <div>
        <Image
          src="/circle.png"
          alt="circle"
          width="301"
          height="301"
          className="absolute right-[-10px] top-[265rem] hidden lg:block"
        />
      </div>
      <div className="bg-[#007FF4] rounded-xl text-center p-[5rem] relative mt-[3rem] lg:w-[1198px] h-[478px] text-white">
        <h2 className="lg:text-[48px]">Subscribe to Newsletter</h2>
        <p className="text-[20px]  mt-[2rem]">
          We have a wide experience in experience design and strategy,
        </p>
        <div className="flex justify-center  mt-[3rem]">
          <div className="bg-white md:w-[846px] h-[120px] rounded-xl mt-[2rem] flex justify-between items-center p-5">
            {" "}
            <input type="text" placeholder="Enter your email address" />
            <button className="bg-[#007FF4] rounded-full lg:px-[2rem] md:p-5 md:font-bold p-2">
              Send Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
