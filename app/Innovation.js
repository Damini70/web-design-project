import Image from "next/image";

function Innovation() {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center p-[5rem] mt-[12rem]">
      <div>
        <h1 className="text-[#003B79] font-semibold md:text-[54px]">
          Clinic With Innovative
        </h1>
        <p className="text-[20px]  mt-[4rem]">
          We provide the most full medical services, so every person could
          <br /> heave the oppurtunity to receive qualitative medical help.
        </p>
        <button className="text-white font-semibold bg-[#007FF4] rounded-full p-5 px-[3rem]  mt-[4rem]">
          Learn More
        </button>
      </div>
      <div className="hidden md:block md:pl-[7rem] md:pt-[5rem]">
        <div className="w-[282px] h-[242px]  shadow-2xl shadow-[#003B79]  drop-shadow-lg relative right-[18rem] top-[2rem] rounded-lg">
          <Image
            src="/doctor-woman.png"
            alt="woman"
            width="232"
            height="232"
            className="relative bottom-[7rem]"
          />
          <p className="absolute bottom-[4rem] font-semibold ml-6">
            Qualified Doctors
          </p>
        </div>
        <div className="w-[282px] h-[242px]  shadow-2xl shadow-[#003B79]  drop-shadow-lg rounded-lg ml-4">
          <Image
            src="/doctor-man.png"
            alt="man"
            width="232"
            height="232"
            className="relative bottom-[7rem]"
          />
          <p className="relative bottom-[5rem] font-semibold ml-6">
            Emergency Care
          </p>
        </div>
        <div className="w-[282px] h-[242px]   relative right-[18rem] bottom-[2rem] rounded-lg shadow-2xl shadow-[#003B79]  drop-shadow-lg">
          <Image
            src="/van.png"
            alt="van"
            width="232"
            height="232"
            className="relative bottom-[7rem]"
          />
          <p className="absolute bottom-[4rem] font-semibold ml-6">
            24 Hours Service
          </p>
        </div>
      </div>
    </div>
  );
}

export default Innovation;
