import Image from "next/image";

export default function Cards({ title, titleclass = "", items = [], name }) {
  return (
    <div className="flex flex-col">
      <h3 className=" text-[26px] font-normal font-poppins  text-[#122d25] mt-15 ">
        {title}
      </h3>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 rounded-2xl px-5">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-6 border-2 bg-[#f3f6fa] p-6 rounded-3xl mt-3"
          >
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0  ">
              <Image
                src={item.icon}
                alt={item.name}
                height={200}
                width={200}
                className="w-full h-auto "
              />
            </div>
            <span className="px-5 text-[20px] text-[#122d25]">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
