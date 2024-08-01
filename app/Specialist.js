function Specialist() {
  return (
    <div className="p-[5rem] text-center">
      <h1 className="md:text-[54px] text-[#003B79] font-semibold md:leading-normal">
        We Have The Best Specialist
      </h1>
      <p className="text-[20px] mt-[4rem] font-normal">
        We have a wide experience in experience design and strategy,
        <br /> with locally-rooted knowledge.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-[5rem]">
        <div className="w-[274px] h-[448px]  rounded-[20px] shadow-2xl shadow-[#003B79]  drop-shadow-lg">
          <div className="w-[274px] h-[324px] bg-[#AED3E2] rounded-t-[20px]"></div>
          <div className="text-left m-5">
            <p className="font-bold">Dr. Awaatif Al</p>
            <p className="mt-4">Dental Care</p>
          </div>
        </div>
        <div className="w-[274px] h-[448px] rounded-[20px] shadow-2xl shadow-[#003B79]  drop-shadow-lg">
          <div className="w-[274px] h-[324px] bg-[#AED3E2] rounded-t-[20px]"></div>
          <div className="text-left m-5">
            <p className="font-bold">Dr. Filipa Gaspar</p>
            <p className="mt-4">Cardiology</p>
          </div>
        </div>
        <div className="w-[274px] h-[448px] rounded-[20px] shadow-2xl shadow-[#003B79]  drop-shadow-lg">
          <div className="w-[274px] h-[324px] bg-[#AED3E2] rounded-t-[20px]"></div>
          <div className="text-left m-5">
            <p className="font-bold">Dr. Sukhmeet Gorae</p>
            <p className="mt-4">Neurological</p>
          </div>
        </div>
        <div className="w-[274px] h-[448px] rounded-[20px] shadow-2xl shadow-[#003B79]  drop-shadow-lg">
          <div className="w-[274px] h-[324px] bg-[#AED3E2] rounded-t-[20px]"></div>
          <div className="text-left m-5">
            <p className="font-bold">Dr. Siri Jakobsson</p>
            <p className="mt-4">Prediatrics</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialist;
