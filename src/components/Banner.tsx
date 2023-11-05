// import React from 'react'

const Banner = () => {
  return (
    <div className="container mt-32">
      <div className="grid lg:grid-cols-[66%,34%] gap-4 pr-[15px]">
        <div className="h-[200px] md:h-[260px] bg-[url(https://thebravecoders-ecommerce-electronic.netlify.app/product-banner-1.jpg)]  rounded-xl p-8 md:p-16">
          <p className="text-[#021d35] text-xl font-medium">
            sale 20% off all stores
          </p>
          <h2 className="text-[#021d35] font-bold text-xl sm:text-3xl max-w-[240px]">
            smartphone BLU G91 Pro 2023
          </h2>
          <a href="#" className="inline-block mt-6 text-[#021d35] font-medium ">
            Shop Now
          </a>
        </div>
        <div className="h-[260px] bg-right bg-[url(https://thebravecoders-ecommerce-electronic.netlify.app/product-banner-2.jpg)]  rounded-xl hidden lg:block"></div>
      </div>
    </div>
  );
};

export default Banner;
