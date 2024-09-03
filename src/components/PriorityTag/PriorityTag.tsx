export const PriorityTag = ({ tag }: { tag: string }) => {
  return (
    <div
      className={`${
        tag == "Important"
          ? "bg-red-500"
          : tag == "Medium"
          ? "bg-orange-500"
          : "bg-green-500"
      } px-2 rounded-lg text-white uppercase text-[0.7rem]`}
    >
      {tag}
    </div>
  );
};
