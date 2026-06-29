export default function TestimonialCard({
  quote,
  name,
  role,
  nameClass = "",
  bgclass = "",
  quoteclass = "",
}) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-2xl p-6 h-full flex flex-col ${bgclass}`}
    >
      <p
        className={` text-[#122D25]  text-center font-[16px] font-poppins leading-relaxed ${quoteclass} `}
      >
        {quote}
      </p>
      <div className="mt-auto p-4 ">
        <div className={`text-[16px] text-[#1D252D] ${nameClass}`}>{name}</div>
        <div className=" text-[16px]text-sm font-normal text-[#122d25]">
          {role}
        </div>
      </div>
    </div>
  );
}
