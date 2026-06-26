import Image from "next/image";

export default function ServiceCard({ title, text, images, gradient }) {
  return (
    <div
      className={`bg-linear-to-br ${gradient} border-4 border-slate-100 shadow-lg  bg-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow h-[412px] flex flex-col`}
    >
      <div className="w-14 h-14  bg-white flex items-center  rounded-2xl justify-center text-[#1D252D] text-xl mb-4">
        <Image src={images} alt={title} width={44} height={44} />
      </div>

      <div className="mt-auto">
        <h3 className="text-[28px] font-normal text-[#1D252D]">{title}</h3>
        <p className="text-[16px] text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
