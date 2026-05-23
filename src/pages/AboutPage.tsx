import Footer from "../components/Footer";
import MagneticButton from "../components/MagneticButton";

interface Props {
  navigate: (r: string) => void;
}

export default function AboutPage({ navigate }: Props) {
  return (
    <div className="page max-w-300 mx-auto">
      <section className="pt-10">
        <div className="flex justify-between items-center flex-wrap gap-4 mb-10">
          <span className="eyebrow">About</span>
          <MagneticButton className="btn-ghost" onClick={() => window.print()}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M8 1V10M8 10L4 6M8 10L12 6" strokeLinecap="round" />
              <rect x="2" y="12" width="12" height="2" rx="1" />
            </svg>
            Download PDF
          </MagneticButton>
        </div>
        <div className="grid grid-cols-[1.2fr_1fr] gap-15 items-start mt-15 max-[900px]:grid-cols-1">
          <div>
            <h2 className="text-[clamp(40px,5vw,84px)] tracking-[-0.04em] leading-none mb-8">
              Engineer who build
              <br />
              products that feel right.
            </h2>
            <p className="text-[17px] leading-[1.65] mb-5 max-w-[50ch] text-(--fg-dim)">
              Software Engineer building scalable, high-performance applications
              with architectures and exceptional user experiences.
            </p>
          </div>
          <div className="flex flex-col gap-4 sticky top-27.5">
            <div className="avatar" />
          </div>
          <div className="flex flex-col flex-wrap gap-3">
            <div className="info-card">
              <span className="eyebrow mb-3.5 block">Reach me</span>
              <div className="row flex justify-between items-center py-2.5 text-sm">
                <span className="label text-[11px] tracking-widest uppercase">
                  Email
                </span>
                <span className="value">alguadeb@gmail.com</span>
              </div>
              <div className="row flex justify-between items-center py-2.5 text-sm">
                <span className="label text-[11px] tracking-widest uppercase">
                  GitHub
                </span>
                <span className="value">@Ali7U</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer navigate={navigate} />
    </div>
  );
}
