const ScrollIndicator = ({ isMounted, delay = 1000 }: {isMounted: boolean, delay: number}) => {
  return (
    <div
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
        isMounted ? "opacity-100" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="animate-bounce w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
