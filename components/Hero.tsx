import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-[-12vh] pt-[12vh]  relative w-full h-[100vh]">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/test4.jpg"
          fill
          alt="Cloth Store"
          priority
          className="object-cover"
        />
      </div>
      <div className="relative w-full h-full backdrop-blur-[5px] xl:backdrop-blur-none text-white px-[5px] xl:px-[60px] pt-[100px] vsm:pt-[50px] xl:pt-0">
        <h1 className="font-braahOne text-center vsm:text-left text-[3rem] vsm:text-[3.5rem] sm:text-[5rem] xmd:text-[7rem] xl:text-[10rem] leading-[1]">
          THRIFT * STORE
        </h1>
        <p className="mt-[20px] xl:mt-0 text-[1rem] vsm:text-[1.2rem] pl-[20px] font-medium text-center xl:text-left mx-auto xl:mx-0 w-[90%] xmd:w-[70%] xl:w-[40%]">
          ~Explore a Curated Collection of Vintage Clothing and Preloved Gems,
          Uncover Unique Styles with a Sustainable Touch. Shop Now for
          Affordable Elegance!~
        </p>
      </div>
    </section>
  );
};

export default Hero;
