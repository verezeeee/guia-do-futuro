export const BannerHome = () => {
  const Separator = () => {
    return <div className="bg-[#690499] h-2 w-full"></div>;
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(/BackgroundBanner.svg)`,
          backgroundSize: "cover",
        }}
        className="h-[400px] flex items-center justify-center bg-contain bg-no-repeat"
      >
        <span className="text-black text-md w-[50%] bg-slate-100 rounded-xl  px-4 py-1.5 font-bold absolute left-24 top-[335px]">
          O digital learning transcende fronteiras, tornando o conhecimento
          acessível a qualquer momento e em qualquer lugar.
        </span>
      </div>
      <Separator />
    </>
  );
};
