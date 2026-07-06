
const FooterSection = () => {
  return (
    <>
      <footer className="bg-[#151515] flex items-center max-md:flex-col gap-10 p-10 justify-between ">
        <a href="/">
          <img src="/logo.avif" alt="" className="h-8" />
        </a>
        <div className="text-white flex gap-5">
          <p>Info@homestead.com</p>
          <p>(505)555-0125</p>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
