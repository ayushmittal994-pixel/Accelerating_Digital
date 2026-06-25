export default function SectionHeading({
  label,
  title,
  summary,
  center = true,
  labelClass = "",
  titleClass = "",
  summaryClass = "",
  badgeBgClass = "",
}) {
  return (
    //if true than apply all after true or else put all "" means empty
    <div className={center ? "text-center max-w-4xl mx-auto" : ""}>
      <div
        className={`inline-flex items-center gap-2  border-[1]  rounded-xl px-3  ${center ? "justify-center" : ""} ${badgeBgClass}`}
      >
        <span className="text-[#1D252D] text-xl">✦</span>
        <span
          className={`text-[#1D252D]  font-medium text-sm  px-2 tracking-wide ${labelClass}`}
        >
          {label}
        </span>
      </div>
      <h2
        className={`text-2xl md:text-[44px] font-normal font-poppins text-[#1D252D] mt-3 ${titleClass}`}
      >
        {title}
      </h2>
      <span
        className={`text-[#1D252D]  font-medium text-sm  tracking-wide ${summaryClass}`}
      >
        {summary}
      </span>
    </div>
  );
}
