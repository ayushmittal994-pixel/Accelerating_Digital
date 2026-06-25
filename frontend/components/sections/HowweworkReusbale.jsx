import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
export default function HowweworkReusable({
  label,
  title,
  text,
  items = [],
  image,
  imageElement,

  imageside = "right",
}) {
  const content = (
    <div className={`flex-1 `}>
      {label && (
        <span
          className={`inline-block text-[#122d25] bg-[#fefefe] rounded-xl px-5  border-gray-300 font-poppins py-2 }`}
        >
          {label}
        </span>
      )}
      <h3 className="font-poppins text-[26px] font-medium leading-relaxed mt-3 text-[#122d25]">
        {title}
      </h3>
      <p className="text-[#485661] text-[16px] font-poppins mt-3 ">{text}</p>
      <ul className="flex flex-col gap-5 mt-8">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-4">
            <span className="h-6 w-6 rounded-full bg-black flex items-center justify-center text-white shrink-0">
              <FaCheck height={24} width={24} />
            </span>
            <span className="text-[16px] text-[#122d25]">{item}</span>
          </li>
        ))}
      </ul>
      <button className="px-7 py-3 bg-black  font-semibold text-white hover:bg-gray-700 rounded-2xl cursor-pointer transition-colors mt-5">
        Get Started
      </button>
    </div>
  );

  const picture = (
    <div className="flex-1 flex justify-center">
      <div className="bg-white w-full rounded-3xl">
        {imageElement ? (
          imageElement
        ) : (
          <Image
            src={image}
            alt={title}
            height={400}
            width={400}
            className="h-auto"
          /> // How We Work uses this!
        )}
      </div>
    </div>
  );

  return (
    <div
      className={` flex flex-col md:flex-row items-center gap-10 bg-[#f3f6fa] rounded-3xl p-2 md:p-6 `}
    >
      {imageside === "left" ? (
        <>
          {picture}
          {content}
        </>
      ) : (
        <>
          {content}
          {picture}
        </>
      )}
    </div>
  );
}
