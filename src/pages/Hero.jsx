import Timestamp from "../components/Timestamp";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex h-screen w-full flex-1 flex-col justify-between px-8 py-5"
    >
      <h1 className="text-center font-geist-mono">Hello there</h1>
      <div className="flex flex-row items-end gap-5 self-end px-3">
        <Timestamp />
      </div>
    </section>
  );
};

export default Hero;
