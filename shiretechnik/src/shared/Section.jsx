const Section = ({ children, className = "", id, ...props }) => {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-16 sm:py-24 lg:py-32 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;