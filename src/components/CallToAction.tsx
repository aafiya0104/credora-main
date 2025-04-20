import starsBg from "@/assets/images/stars.png";
import gridLines from "@/assets/images/grid-lines.png";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-black md:py-24">
      <div className="container">
        <div
          className="border border-white/15 py-24 rounded-2xl overflow-hidden relative backdrop-blur-md shadow-[0_0_60px_#6b21a8aa]"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(107,33,168,0.2) 0%, #000 80%), url(${starsBg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* Gridlines overlay */}
          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: `url(${gridLines.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto font-medium tracking-tighter text-center text-white">
              AI-driven Invoice generation
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Achieve clear, impactful results without the complexity
            </p>
            <div className="flex justify-center mt-8">
              <button className="px-8 py-3 bg-white text-purple-700 hover:bg-gray-100 font-medium rounded-lg shadow-[0_0_10px_#6b21a8,0_0_25px_#6b21a8]">
                Join waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
