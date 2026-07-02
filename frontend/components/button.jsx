import Link from "next/link";

export default function Button({ title, titleClass = "", href, onclick }) {
  const buttonClasses = ` inline-block px-7 py-3 bg-black rounded-3xl m-3 text-white border-4 border-[#e5e7eb] cursor-pointer font-semibold ${titleClass} `;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {title}
      </Link>
    );
  }
  return (
    <button onClick={onclick} className={buttonClasses}>
      {title}
    </button>
  );
}
