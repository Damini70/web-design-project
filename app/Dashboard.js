import Image from "next/image";
function Dashboard() {
  return (
    <div className="flex lg:flex-row  flex-col justify-between mt-[5rem] items-center">
      <div>
        <p className="font-bold text-2xl">Welcome to MediCare+ Clinic</p>
        <h1 className="md:text-7xl text-[#003B79] mt-5 font-bold">
          Best Specialists
        </h1>
        <p className="text-xl mt-5 font-normal">
          We are on the leading edge of cancer care. Providing the full
          <br />
          continuum of cancer treatments and supportive care services in a<br />
          single convenient location.
        </p>
        <div className="lg:flex mt-7 justify-start">
          <button className="rounded-full px-[3rem] md:p-5 text-white bg-[#007FF4] font-bold  text-[16px] mr-[3rem]">
            Make an Appointment
          </button>
          <button className="rounded-full px-[4rem] md:p-5 bg-white text-[#007FF4] font-bold text-[16px] ">
            Departments
          </button>
        </div>
      </div>
      <div>
        <Image src="/Group29.png" alt="grp" width={574} height={672} />
      </div>
    </div>
  );
}

export default Dashboard;
