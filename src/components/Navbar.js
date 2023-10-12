import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="navbar-bg bg-red-700 text-red-50 h-20 flex justify-center items-center">
      <div className="navbar container mx-auto flex items-center justify-between">
        <div className="left">
          <span className="text-xl font-semibold">
          🛍️<span className="text-gray-300">Techi</span>
          </span>
        </div>
        <div className="right flex items-center gap-5">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/cart" className="cart-icon relative">
            <BsCart3 size={30} />
              <span className="cart-counter absolute z-[1] -top-3 -right-3 text-xs bg-yellow-600 h-5 w-5 rounded-full flex items-center justify-center font-medium">
                {cartItems.length}
              </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
