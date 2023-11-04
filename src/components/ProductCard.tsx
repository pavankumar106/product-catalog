// import React from 'react'
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cartSlice";
import toast from "react-hot-toast";

interface propsType {
  id: number;
  img: string;
  category: string;
  title: string;
  price: number;
}

const ProductCard = ({ id, img, category, title, price }: propsType) => {
  const dispatch = useAppDispatch();
  const addProductToCart = () => {
    const payload = { id, img, title, price, quantity: 1 };
    dispatch(addToCart(payload));
    toast.success("Added to cart");
  };

  return (
    <div className="border border-gray-200">
      <div className="text-center border-b border-gray-200">
        <img
          className="inline-block w-[120px] h-[160px]"
          src={img}
          alt="product img"
        />
      </div>
      <div className="px-8 py-4 ">
        <p className="text-gray-500 text-[14px] font-medium">{category}</p>
        <h2 className="font-medium ">{title}</h2>
        <div className="my-3 flex text-[#ffb21d] items-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <p className="text-gray-600 text-[14px] ml-2">(3 reviews)</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h2 className="font-medium text-[#343499] text-xl bottom-0">
            ${price}
          </h2>
          <div
            className="flex gap-2 items-center bg-pink bottom-0 text-white px-4 py-2 cursor-pointer bg-[#343499]"
            onClick={addProductToCart}
          >
            <AiOutlineShoppingCart /> Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
