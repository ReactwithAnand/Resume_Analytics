import { Lightbulb } from "lucide-react";

const suggestions = [
  {
    title: "Add a Strong Summary",
    description:
      "Include a brief professional summary highlighting your key strengths.",
  },
  {
    title: "Showcase Projects",
    description:
      "Add relevant personal or academic projects with links (e.g., GitHub).",
  },
  {
    title: "Tailor for Each Job",
    description:
      "Customize your resume for each job application using relevant keywords.",
  },
  {
    title: "Include Certifications",
    description:
      "Add relevant certifications to boost credibility (e.g., AWS, Google, Microsoft).",
  },
];

export default function Suggestions() {
  return (
    <section className="overflow-hidden border-[2px] border-black bg-[#fffef0] shadow-[7px_7px_0_#111]">
      <div className="flex items-center justify-between border-b-[2px] border-black bg-[#ffe889] px-4 py-2">
        <div className="flex items-center gap-4">
          <div className="grid h-10 w-10 place-items-center bg-[#ffe03f]">
            <Lightbulb size={23} />
          </div>

          <h2 className="text-xl font-black">Suggestions</h2>
        </div>

        <span className="bg-[#fff1ad] px-3 py-1 text-sm font-black">
          4
        </span>
      </div>

      <div className="px-5">
        {suggestions.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 border-b border-black/20 py-1.5 last:border-0"
          >
            <span className="text-[#e7c100]">●</span>

            <h3 className="w-[220px] shrink-0 font-black">{item.title}</h3>

            <p className="flex-1 text-sm text-[#353535]">
              {item.description}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}
