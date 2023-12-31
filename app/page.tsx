import AnimatePage from "@/components/AnimatePage";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Review from "@/components/Review";
import { featuredProducts } from "@/data/products";
import { reviews } from "@/data/reviews";
import Link from "next/link";

export default function Home() {
  return (
    <AnimatePage>
      <div>
        <Hero />
        <section className="py-[50px] px-[20px] xmd:px-[60px]">
          <div className="md:flex justify-between items-center">
            <h1 className="font-braahOne text-[2rem] vsm:text-[3rem] mb-[10px] leading-[1]">
              Featured Products
            </h1>
            <Link href="/" className="text-blue-500 underline text-[1.5rem]">
              View All
            </Link>
          </div>
          <div className="mt-[40px] md:mt-0 flex flex-wrap gap-[40px] justify-center">
            {featuredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </section>
        <section className="w-full my-[50px] ">
          <h1 className="text-center font-braahOne text-[3rem]">
            People stories
          </h1>
          <div className="mt-[30px] w-full flex flex-wrap gap-[20px] justify-center ">
            {reviews?.map((review) => (
              <Review key={review.id} review={review} />
            ))}
          </div>
        </section>
      </div>
    </AnimatePage>
  );
}
