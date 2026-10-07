import { FileText } from "lucide-react";

export default function ScoreCard() {
  return (
    <section className="grid min-h-0 overflow-hidden border-[2px] border-black bg-white shadow-[7px_7px_0_#111] md:grid-cols-[minmax(100px,16%)_1fr]">
      <div className="grid place-items-center bg-[#ddd6ff] p-3">
        <div className="relative grid h-[clamp(72px,11vh,128px)] w-[clamp(72px,11vh,128px)] place-items-center bg-[conic-gradient(#7650ea_0deg_260deg,#bdbec6_260deg_360deg)]">
          <div className="grid h-[78%] w-[78%] place-items-center bg-[#ddd6ff] font-bold">
            72%
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-5 px-5 py-3">
        <div className="border-r border-black/40 pr-8">
          <div className="text-6xl font-black leading-none">
            72<span className="text-3xl align-top">%</span>
          </div>

          <div className="mt-2 text-sm font-bold">
            Overall Resume Score
          </div>
        </div>

        <div className="flex min-w-[250px] flex-1 items-center gap-4">
          <div className="grid h-14 w-14 shrink-0 place-items-center bg-[#d8d0ff]">
            <FileText size={30} />
          </div>

          <p className="text-sm leading-relaxed text-[#303030]">
            Your resume shows relevant skills and experience. Address the
            suggested improvements to further increase your chances of landing
            interviews.
          </p>
        </div>
      </div>
    </section>
  );
}
