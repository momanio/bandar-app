const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" font-[IBMPlexSansArabic] text-[42px] font-bold leading-[1.5] text-right text-white pb-11">
      {children}
    </div>
  );
};

export default Title;
