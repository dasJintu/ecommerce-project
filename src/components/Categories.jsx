const categories = [
  {
    id: 1,
    newClass: "bg-men",
    type: "Mens Trend",
  },
  {
    id: 2,
    newClass: "bg-women",
    type: "Womens Trend",
  },
  {
    id: 3,
    newClass: "md:row-span-2 bg-accessory",
    type: "Accessories",
  },
  {
    id: 4,
    newClass: "md:col-span-2 bg-electronics",
    type: "Electronics",
  },
];

const Categories = () => {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-3 grid-rows-4 md:grid-rows-2 gap-6">
      {categories.map((category) => {
        const { id, newClass, type } = category;
        return (
          <div
            key={id}
            className={`bg-cover rounded-lg shadow-lg space-y-3 pt-10 pb-20 px-4 md:px-8 transition hover:scale-105 ${newClass}`}
          >
            <p className="text-xl font-bold">{type}</p>
            <button className="hover:underline">Shop Now</button>
          </div>
        );
      })}
    </section>
  );
};

export default Categories;
