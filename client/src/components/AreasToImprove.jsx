import { AlertCircle } from "lucide-react";

const items = [
  {
    title: "Missing Quantifiable Results",
    description:
      'Add measurable achievements (e.g., “Improved performance by 30%”).',
  },
  {
    title: "Lack of Relevant Keywords",
    description:
      "Include industry-relevant keywords (e.g., React, Node.js, AWS).",
  },
  {
    title: "Inconsistent Formatting",
    description:
      "Use a consistent font, spacing, and date format throughout.",
  },
];

export default function AreasToImprove() {
  return (
    <section className="min-h-0 overflow-hidden border-[2px] border-black bg-[#fff3f4] shadow-[7px_7px_0_#111]">
      <div className="flex items-center justify-between border-b-[2px] border-black bg-[#ffb6c0] px-4 py-2">
        <div className="flex items-center gap-4">
          <div className="grid h-10 w-10 place-items-center bg-[#f23d56] text-white">
            <AlertCircle size={24} strokeWidth={3} />
          </div>

          <h2 className="text-xl font-black">Areas to Improve</h2>
        </div>

        <span className="bg-[#ffcdd4] px-3 py-1 text-sm font-black">
          3
        </span>
      </div>

      <div className="px-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex gap-3 border-b border-black/20 py-1.5 last:border-0"
          >
            <span className="mt-1 text-[#f23d56]">●</span>

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
