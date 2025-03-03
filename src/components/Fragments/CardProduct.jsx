import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
  const { children } = props;

  return (
    <div className="w-full max-w-60 bg-gray-800 border border-gray-500 rounded-lg shadow-2xl mx-4 my-4 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="product"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="font-semibold text-xl tracking-tight text-white">
          {name.substring(0, 20)} ...
        </h5>
        <p className="text-sm text-gray-400">{children.substring(0, 100)}...</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price,  id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 py-5">
      <span className="text-base font-bold text-white">
        ${" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </span>
      <Button classname="bg-blue-700" onClick={() => dispatch(addToCart({id, qty : 1}))}>
        Add
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
