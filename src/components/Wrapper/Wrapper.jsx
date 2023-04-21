const Wrapper = ({ children }) => {
  return (
    <main className="w-full">
      <section className="container xl:max-w-screen-xl top-0 py-4 md:py-4 md:px-0 mx-auto">
        <div className="w-full">{children}</div>
      </section>
    </main>
  );
};

export default Wrapper;