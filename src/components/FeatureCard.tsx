interface propsType {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeatureCard = ({ icon, title, desc }: propsType) => {
  return (
    <div className="flex gap-2 bg-gray-100 px-4 py-6">
      <span className="mt-2">{icon}</span>

      <div>
        <h2 className="font-medium text-xl ">{title}</h2>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
