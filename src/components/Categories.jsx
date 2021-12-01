import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    newClass: "bg-men",
    type: "Mens Trend",
    link: "men's clothing"
  },
  {
    id: 2,
    newClass: "bg-women",
    type: "Womens Trend",
    link: "women's clothing"
  },
  {
    id: 3,
    newClass: "md:row-span-2 bg-accessory",
    type: "Accessories",
    link: "jewelery",
  },
  {
    id: 4,
    newClass: "md:col-span-2 bg-electronics",
    type: "Electronics",
    link: "electronics",
  },
];

const Categories = () => {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-3 grid-rows-4 md:grid-rows-2 gap-6">
      {categories.map((category) => {
        const { id, newClass, type, link } = category;
        return (
          <div
            key={id}
            className={`bg-cover rounded-lg shadow-lg space-y-3 pt-10 pb-20 px-4 md:px-8 transition hover:scale-105 ${newClass}`}
          >
            <p className="text-xl font-bold">{type}</p>
            <Link  to={`/${link}`} className="hover:underline">Shop Now</Link>
          </div>
        );
      })}
    </section>
  );
};

export default Categories;
