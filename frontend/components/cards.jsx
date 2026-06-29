import Image from "next/image";

export default function Cards({
  title,
  titleclass = "",
  items = [],
  name,
  single = false,
  imageSize = 200,
  imageClass = "",
  vertical = false,
}) {
  return (
    <div className="flex flex-col">
      {title && (
        <h3 className=" text-[26px] font-normal font-poppins  text-[#122d25] mt-15 ">
          {title}
        </h3>
      )}
      {vertical ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-5 mt-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-full rounded-3xl overflow-hidden">
                <Image
                  src={item?.icon}
                  alt={item?.title ?? "image"}
                  height={imageSize}
                  width={imageSize}
                  className={`w-full h-72 object-cover ${imageClass}`}
                />
              </div>
              {item?.title && (
                <h4 className="text-[22px] font-medium text-[#122d25] mt-5">
                  {item.title}
                </h4>
              )}
              {item?.subtitle && (
                <p className="text-[16px] text-[#566470] mt-2">
                  {item.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : single ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-5 w-full px-5 mt-8  ">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center rounded-3xl border p-4 h-36"
              >
                <Image
                  src={item?.icon}
                  alt={item?.name ?? "image"}
                  height={imageSize}
                  width={imageSize}
                  className={imageClass}
                />
              </div>
            );
          })}
        </div>
      ) : (
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
              <span className="px-5 text-[20px] text-[#122d25]">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
