import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import Button from "../button";
export default function HowweworkReusable({
  label,
  title,
  text,
  items = [],
  image,
  imageElement,
  bgcontent,
  labelclass = "",
  imageside = "right",
  titleclass = "",
  textclass = "",
  showButton = true,
  
}) {
  const content = (
    <div className={`flex-1 `}>
      {label && (
        <span
          className={`inline-block text-[#122d25] bg-[#fefefe] rounded-xl px-5  border-gray-300 font-poppins py-2 } ${labelclass}`}
        >
          {label}
        </span>
      )}
      <h3
        className={`font-poppins text-[26px] font-medium leading-relaxed mt-3 text-[#122d25] ${titleclass}`}
      >
        {title}
      </h3>
      <p
        className={`text-[#485661] text-[16px] font-poppins mt-3 ${textclass}`}
      >
        {text}
      </p>
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
      {showButton && <Button title="Get started"></Button>}
    </div>
  );

  const picture = (
    <div className="flex-1 flex justify-center">
      <div className="bg-white w-full rounded-3xl">
        {imageElement ? (
          imageElement
        ) : image ? (
          <Image
            src={image}
            alt={title}
            height={400}
            width={400}
            className="h-auto"
          /> // How We Work uses this!
        ) : null}
      </div>
    </div>
  );

  return (
    <div
      className={` flex flex-col md:flex-row items-center gap-10 bg-[#f3f6fa] rounded-3xl p-2 md:p-6  ${bgcontent}`}
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
