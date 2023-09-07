import Image from "next/image";

const CoverPage = () => {
  return (
    <div className="cover-page fixed top-0 left-0 z-[21] bg-black h-screen w-full flex flex-col items-center gap-[20px] justify-center">
      <Image
        src="/gandhi.jpg"
        height={300}
        width={350}
        className="h-fit w-full vsm:w-fit"
        alt="Gandhi meme"
      />
      <h1 className="text-[2rem] text-center text-white">Loading...</h1>
    </div>
  );
};

export default CoverPage;
