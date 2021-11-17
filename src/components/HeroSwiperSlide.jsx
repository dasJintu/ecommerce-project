export default function HeroSwiperSlide({ data }) {
  const { title, par, subHeading, subHeading2, image, background } = data;

  return (
    <section className={"pt-4 h-[480px] " + background}>
      <div className="container flex justify-center items-center">
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="uppercase text-gray-600">{subHeading}</p>
            <p className="uppercase text-gray-800 font-bold text-xl">
              {subHeading2}
            </p>
          </div>
          <h1 className="uppercase text-6xl font-extrabold max-w-lg text-gray-900">
            {title}
          </h1>
          <p className="uppercase max-w-md text-gray-700">{par}</p>
          <button className="underline">Shop Now</button>
        </div>

        <img
          className="hidden md:block h-full w-auto"
          src={image}
          alt="clothing image"
        />
      </div>
    </section>
  );
}
