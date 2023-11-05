import { useDispatch } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { removeFromCart } from "../redux/features/cartSlice";

interface propsType {
  id: number;
  img: string;
  title: string;
  price: number;
  quantity: number;
}

const CartProducts: React.FC<propsType> = ({
  id,
  img,
  title,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img className="h-[80px]" src={img} alt={title} />
        <div className="space-y-2">
          <h3 className="font-medium">{title}</h3>
          <p className="text-gray-600 text-[14px]">
            {quantity} x ${price}{" "}
          </p>
        </div>
      </div>
      <RxCross1
        className="cursor-pointer"
        onClick={() => dispatch(removeFromCart(id))}
      />
    </div>
  );
};

export default CartProducts;
