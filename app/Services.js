import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

function Services() {
  return (
    <div className="mt-[11rem]">
      <div className="text-center mt-4">
        <h1 className="md:text-[54px] text-[#003B79] font-semibold">
          Our Services
        </h1>
        <p className="text-xl font-normal  mt-[4rem]">
          We provide the most full medical services, so every person could
          <br /> heave the oppurtunity to receive qualitative medical help.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 lg:gap-5 md:grid-cols-2 md:gap-4 xs:grid-cols-1 px-[5rem] mt-[5rem]">
        <div className="w-[273px] h-[323px] rounded-md  shadow-2xl shadow-[#003B79]  drop-shadow-lg bg-white-900 p-10">
          <Image src="/tooth.png" alt="" width={114} height={128} />
          <p className="font-bold mt-[4rem]">Dental care</p>
        </div>
        <div className="bg-[#007FF4] w-[273px] h-[373px] rounded-md shadow-2xl shadow-[#003B79]  drop-shadow-lg bg-white-900 p-10 text-white">
          <Image src="/lungs.png" alt="" width={114} height={128} />
          <p className="font-bold mt-[6rem]">Pulmonary</p>
          <div className="flex mt-[4rem] justify-between">
            <p className="text-xs ">LEARN MORE</p>
            <button>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="w-[273px] h-[323px] rounded-md  shadow-2xl shadow-[#003B79]  drop-shadow-lg bg-white-900 p-10">
          <Image src="/human-brain.png" alt="" width={114} height={128} />
          <p className="font-bold mt-[5rem]">Neurological</p>
        </div>
        <div className="w-[273px] h-[323px] rounded-md  shadow-2xl shadow-[#003B79]  drop-shadow-lg bg-white-900 p-7">
          <Image src="/medical-file.png" alt="" width={114} height={128} />
          <p className="font-bold mt-[3.5rem]">Prediatrics</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
