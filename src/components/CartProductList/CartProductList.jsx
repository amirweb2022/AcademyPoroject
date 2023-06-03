import CartProduct from "./CartProduct/CartProduct";

const CartPoductList = ({ data }) => {
  return (
    <>
      {data
        ? data.map((cart) => {
            return <CartProduct cart={cart} />;
          })
        : ""}
    </>
  );
};

export default CartPoductList;