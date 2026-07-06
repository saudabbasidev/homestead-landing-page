const AboutSection = () => {
  return (
    <>
      <section className="sm:p-10 mt-10 flex justify-between max-md:flex-col gap-10 px-2 py-10 my-30  selection:bg-blue-600 selection:text-gray-50">
        <h1 className="font-semibold text-6xl max-sm:text-5xl lg:text-7xl">
          Satisfaction <br /> is the key
        </h1>

        <p className="w-70 space-y-1">
          <h2 className="font-semibold text-2xl">More about us</h2>
          <p className="font-light text-lg text-wrap max-md:text-sm">
            {" "}
            Satisfaction is the key to our success. We strive to ensure every
            customer leaves happy with our quality service and attention to
            detail. Your satisfaction is our priority.
          </p>
        </p>
      </section>

      <section className="bg-[#151515] p-5 text-white flex max-md:flex-col selection:bg-[#ebebeb] selection:text-[#252525] rounded-2xl">
        <div className="md:w-1/2 ">
          <img src="/2im.png" alt="imgage" className="max-h-[771px] object-contain rounded-xl "/>
        </div>
        <div className="md:w-1/2 flex flex-col justify-between p-5 gap-10 py-10">
          <h1 className="lg:text-5xl text-3xl max-xs:text-2xl font-semibold">
            Your ideal, your dreams all you want, we created it.
          </h1>
          <p className="lg:text-lg font-light">
            We are here to make your dream comes true, no matter how crazy,
            whatever you want we make can create to full fill your dream home.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
