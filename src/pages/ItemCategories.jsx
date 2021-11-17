import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductsByCategory } from "../features/shop/productSlice";

const ItemCategories = () => {
  let params = useParams();

  const products = useSelector((state) =>
    selectProductsByCategory(state, params.categoryId)
  );

  return (
    <div className="py-20">
      <h1 className="text-center uppercase font-bold text-gray-800 text-4xl pb-20">
        {params.categoryId}
      </h1>
      <div className="grid grid-cols-3 gap-8 container font-roboto">
        {products.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-md flex flex-col items-center"
          >
            <Link to={`/${params.categoryId}/${item.id}`}>
              <img src={item.image} className="h-40" alt="item picture" />
            </Link>

            <Link
              className="text-center font-bold pt-10 pb-1 text-gray-700 hover:underline transition"
              to={`/${params.categoryId}/${item.id}`}
            >
              {item.title}
            </Link>

            <p className="text-gray-500">$ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCategories;
