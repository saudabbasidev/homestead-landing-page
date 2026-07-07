const faqs = [
  {
    title: "I have no idea?",
    content:
      "Our team will guide you through the entire process from start to finish, making everything simple and stress-free.",
  },
  {
    title: "Why should Homestead?",
    content:
      "We provide trusted solutions with a focus on quality, affordability, and customer satisfaction.",
  },
  {
    title: "What benefits can I get?",
    content:
      "You'll receive personalized support, competitive pricing, and long-term value for your investment.",
  },
  {
    title: "The price we give?",
    content:
      "Our pricing is transparent with no hidden fees. Contact us for a personalized quote.",
  },
  {
    title: "What you got?",
    content:
      "We offer everything you need to get started and continue growing with confidence.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-[#014DFE] w-screen mx-auto text-white py-16 lg:py-24 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <h2 className="font-semibold leading-none text-5xl max-sm:text-4xl md:text-7xl">
            Let`s us
            <br />
            listen to your
            <br />
            problems
          </h2>

          <p className="mt-10 max-w-sm text-white/80 text-lg font-light max-sm:text-base  leading-relaxed">
            Made for you convenience for a more beautiful future for you and
            your family
          </p>
        </div>

        {/* Right */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={faq.title}
              className="border-t border-white/40 last:border-b"
            >
              <div className="collapse collapse-arrow rounded-none">
                <input
                  type="radio"
                  name="faq"
                  defaultChecked={index === 0}
                />

                <div className="collapse-title px-0 md:py-8 py-4 max-xs:text-base  text-xl md:text-4xl font-semibold">
                  {faq.title}
                </div>

                <div className="collapse-content px-0 pb-8 text-white/80 max-sm:text-sm max-sm:text-xs">
                  <p>{faq.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow Color */}
      <style>{`
        .collapse-arrow > .collapse-title:after{
          color:white;
          font-size:1.8rem;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;