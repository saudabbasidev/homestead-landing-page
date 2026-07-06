const HeroSection = () => {
  return (
    <>
      <section className="mx-auto py-2 bg-[#014DFE] max-w-400  text-white sm:py-16 lg:px-20 sm:px-2 selection:bg-black selection:text-white">
        <h1 className="font-semibold max-xs:text-4xl text-8xl max-sm:p-2 max-md:text-[76px] xl:text-9xl max-sm:text-6xl ">
          We create your <br /> future residence
        </h1>

        <section className="flex justify-between max-md:flex-col gap-3">
          <div className="md:w-[35%] max-md:p-2 lg:py-10 p-2 ">
            <p className="lg:text-2xl text-lg font-light text-wrap max-md:w-1/2 max-xs:text-base">
              Made for you convenience for a more beautiful future for you and
              your family
            </p>

            <div className="flex py-10 gap-6 ">
              <div>
                <p className="font-semibold text-2xl lg:text-4xl"> 2.5M+</p>
                <p className="font-light lg:text-xl">Capital raised</p>
              </div>
              <div>
                <p className="font-semibold text-2xl lg:text-4xl"> 8K+</p>
                <p className="font-light lg:text-xl">Happy Customers</p>
              </div>
            </div>

            <a
              href=""
              className="btn rounded-full text-xl sm:py-6 sm:font-bold shadow-none max-sm:text-base "
            >
              Get Started
            </a>
          </div>

          <div className=" flex items-center w-full justify-center max-md:px-3 max-sm:p-0 ">
            <img
              src="/hero.png"
              alt=""
              className=" max-h-[700px] object-contain max-md:rounded-xl brightness-90"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default HeroSection;
