import { CheckCircle2 } from "lucide-react";

const items = [
  {
    title: "Clear Work Experience",
    description: "Your roles and responsibilities are well-described.",
  },
  {
    title: "Relevant Technical Skills",
    description:
      "Good mix of technical skills aligned with your target roles.",
  },
  {
    title: "Education Details",
    description: "Your educational background is clearly presented.",
  },
  {
    title: "Clean and Professional Layout",
    description: "Overall structure is easy to read.",
  },
];

export default function WorkingWell() {
  return (
    <section className="min-h-0 overflow-hidden border-[2px] border-black bg-[#edfff7] shadow-[7px_7px_0_#111]">
      <div className="flex items-center justify-between border-b-[2px] border-black bg-[#a8f0ce] px-4 py-2">
        <div className="flex items-center gap-4">
          <div className="grid h-10 w-10 place-items-center bg-[#20c679] text-white">
            <CheckCircle2 size={25} strokeWidth={3} />
          </div>

          <h2 className="text-xl font-black">What’s Working Well</h2>
        </div>

        <span className="bg-[#c6f6de] px-3 py-1 text-sm font-black">
          4
        </span>
      </div>

      <div className="px-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex gap-3 border-b border-black/20 py-1.5 last:border-0"
          >
            <span className="mt-1 text-[#20c679]">●</span>

            <div className="min-w-0 flex-1">
              <h3 className="font-black">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#353535]">
                {item.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
