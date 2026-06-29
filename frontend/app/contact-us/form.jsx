export default function Form() {
  return (
    <form className="max-w-2xl mx-auto md:mx-auto flex items-center flex-col gap-6  mt-10 text-black mb-30">
      {/* Row 1: two fields side by side */}
      <div className="flex flex-col w-120 h-140 gap-6 border shadow-sm p-5 rounded-2xl">
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
        <div className="flex flex-col gap-2">
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

        <button
          type="submit"
          className="px-7 py-3 bg-black text-white rounded-2xl  items-center justify-center flex  font-semibold "
        >
          Submit
        </button>
      </div>
    </form>
  );
}
