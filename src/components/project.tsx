const ProjectSection = () => {
  const data = [
    {
      name: "Pennsylvania apartment",
      p: " 3891 ranchew Dr Richardson, calfornia",
      img: "2.png",
    },
    {
      name: "California to housing",
      p: "3891 ranchew Dr Richardson, calfornia",
      img: "1.png",
    },
    {
      name: "Hawai Tower",
      p: " 4516 w. Gray,Utica Pennsylvania",
      img: "3.png",
    },
  ];
  return (
    <>
      <section className="sm:p-10 mt-10 flex justify-between max-md:flex-col gap-10 px-2 py-10 mt-50  selection:bg-blue-600 selection:text-gray-50">
        <h1 className="font-semibold text-6xl max-xs:text-5xl lg:text-7xl max-md:px-15 max-sm:px-5 ">
          Top Grade <br /> Building
        </h1>

        <p className="w-70 space-y-1 max-md:px-15 max-sm:px-5">
          <h2 className="font-semibold text-2xl">Our projects</h2>
          <p className="font-light text-lg text-wrap max-md:text-sm">
            "Discover exceptional living with our real estate project. Tailored
            to fit your lifestyle, our properties offer timeless elegance and
            modern amenities in a prime location."
          </p>
        </p>
      </section>

      <section className="flex max-md:flex-col gap-5  justify-center max-md:items-center  mt-20 px-10">
        {data.map((i, index) => (
          <div
            className="max-xl:w-[33%] max-md:w-3/4 max-sm:w-full"
            key={index}
          >
            <div className="">
              <img src={i.img} alt="house" className="w-screen" />
            </div>
            <div className="flex justify-between p-5">
              <h1 className="font-semibold max-lg:text-lg max-md:text-xl lg:text-2xl w-50">
                {i.name}
              </h1>
              <p className="text-right lg:text-lg max-lg:text-xs max-md:text-sm w-32">
                {i.p}{" "}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProjectSection;
