const Container = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;