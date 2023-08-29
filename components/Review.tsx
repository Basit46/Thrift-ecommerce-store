import { ReviewPropType } from "@/types";

const Review = ({ review }: ReviewPropType) => {
  return (
    <div
      className={`${
        review.id % 3 == 0
          ? "bg-red-100 text-red-800"
          : review.id % 2 == 0
          ? "bg-green-100 text-green-800"
          : "bg-blue-100 text-blue-800"
      } border-[2px] border-black/50 h-[400px] w-[350px] p-[30px] flex flex-col justify-between`}
    >
      <p className="text-[1.1rem] font-secondary">{review.text}</p>
      <p className="text-black font-bold text-end ">{review.reviewer}</p>
    </div>
  );
};

export default Review;
