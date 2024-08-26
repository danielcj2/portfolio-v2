import Timestamp from "../components/Timestamp";

const Home = () => {
  return (
    <div className="flex h-[95vh] w-full flex-1 flex-col justify-between">
      <div></div>
      <h1 className="font-geist-mono text-center">Hello there</h1>
      <div className="flex flex-row items-end gap-5 self-end">
        <Timestamp />
      </div>
    </div>
  );
};

export default Home;
