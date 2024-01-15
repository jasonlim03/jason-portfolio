export const Wraper = (props) => {
  const { children, style, ...rest } = props;

  return (
    <section
      style={{
        zIndex: "1",
        width: "100vw",
        height: "100vh",
        maxWidth : "700px",
        margin : "auto",
        ...style,
      }}
    >
      {children}
    </section>
  );
};

