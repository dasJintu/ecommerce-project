import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductById } from "../features/shop/productSlice";
import { addToCart } from "../features/shop/cartSlice";

export default function ProductDetail() {
  let params = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    selectProductById(state, parseInt(params.productId))
  );

  return (
    <div>
      <section className="py-16 grid grid-cols-2 gap-10 container font-roboto">
        <div className="grid place-content-center">
          <img src={product.image} alt="" className="rounded-md h-72" />
        </div>
        <div className="space-y-8">
          <h1 className="text-3xl font-black text-gray-900">{product.title}</h1>
          <p className="text-gray-500 max-w-md">{product.description}</p>
          <p className="text-2xl text-red-600 font-bold">$ {product.price}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="transition text-white hover:text-gray-100 bg-gray-800 hover:bg-gray-600 px-8 py-2 uppercase text-sm font-bold tracking-widest"
          >
            Add to cart
          </button>
        </div>
      </section>
    </div>
  );
}
