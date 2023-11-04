import { TbTruckDelivery, TbDiscount2 } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import FeatureCard from "./FeatureCard";

const data = [
  {
    id: 1,
    icon: <TbTruckDelivery className="text-4xl" />,
    title: "Food delivery",
    desc: "Orders from all items",
  },
  {
    id: 2,
    icon: <RiRefund2Fill className="text-4xl" />,
    title: "Return and Refund",
    desc: "Money back guarantee",
  },
  {
    id: 3,
    icon: <TbDiscount2 className="text-4xl" />,
    title: "Member discount",
    desc: "On orders above $99.00",
  },
  {
    id: 4,
    icon: <MdSupportAgent className="text-4xl" />,
    title: "support 24/7",
    desc: "contact us 24hr a day",
  },
];

const Feature = () => {
  return (
    <div className="container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {data.map((item) => (
        <FeatureCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default Feature;
