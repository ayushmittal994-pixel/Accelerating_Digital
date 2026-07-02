import Button from "@/components/button";

export default function Form() {
  return (
    <form className="max-w-xl mx-auto md:mx-auto flex items-center flex-col gap-6  mt-10 text-black mb-30">
      {/* Row 1: two fields side by side */}
      <div className=" w-full flex flex-col gap-6 bg-white border border-slate-100 shadow-xl shadow-slate-100/50 p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-slate-100">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[16px]">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter full name"
            className="border rounded-xl px-4 py-3 "
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="email" className="text-[16px]">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            className="border rounded-xl px-4 py-3"
          />
        </div>

        {/* Row 2: full-width message */}
        <div className="flex flex-col gap-2 ">
          <label htmlFor="message" className="text-[16px]">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Your message"
            className="border rounded-xl px-4 py-3"
          />
        </div>
        <div className="flex items-center justify-center">
          <Button
            Link
            href={"mailto:hello@acceleratingdigital.ai"}
            title="Submit"
          />
        </div>
      </div>
    </form>
  );
}
