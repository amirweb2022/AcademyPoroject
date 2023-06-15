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
export const WrapperUserPanel = ({ children }) => {
  return (
    <main className="bg-gray-100/60 rounded-tr-3xl p-4 md:p-6 lg:p-10 flex-1 overflow-y-auto">
      <div className="xl:max-w-screen-xl">{children}</div>
    </main>
  );
};