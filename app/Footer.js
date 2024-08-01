import Image from "next/image";
function Footer() {
  return (
    <div className="bg-[#ECF4FF] mt-[4rem] px-[5rem] py-[3rem]">
      <div className="flex ">
        <div className="w-[51px] h-[51px] bg-white rounded-full mr-2 flex justify-center items-center">
          <Image src="/facebook.png" alt="" width="10" height="18" />
        </div>
        <div className="w-[51px] h-[51px] bg-white rounded-full mr-2 flex justify-center items-center">
          <Image src="/google.png" alt="" width="18" height="18" />
        </div>
        <div className="w-[51px] h-[51px] bg-white rounded-full flex justify-center items-center">
          <Image src="/twitter.png" alt="" width="18" height="15" />
        </div>
      </div>
      <p className="mt-5 text-[#667C94]">©2023 - 011BQ </p>
    </div>
  );
}

export default Footer;
