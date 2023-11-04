const Hero = () => {
  return (
    <div className="bg-[#e3edf6] mt-4">
      <div className="container grid md:grid-cols-2 py-8">
        <div className="flex items-center">
          <div className="max-w-[450px] space-y-4">
            <p className="text-[#010f1c]">
              starting At <span className="font-bold">$999.00</span>{" "}
            </p>
            <h2 className="text-[#010f1c] font-bold text-4xl md:text-5xl">
              The best notebook collection 2023
            </h2>
            <h3 className="text-2xl ">
              Exclusive offer <span className="text-red-600">10% </span>off this
              week
            </h3>
            <a
              href="#"
              className="duration-200 inline-block bg-white rounded-md px-6 py-3 hover:bg-[#343499] hover:text-white"
            >
              Shop Now
            </a>
          </div>
        </div>
        {/* <img className="ml-auto" src="../assets/hero.PNG" alt="image" /> */}
      </div>
    </div>
  );
};

export default Hero;
