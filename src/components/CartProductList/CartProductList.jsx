import CartProduct from "./CartProduct/CartProduct";

const CartPoductList = ({ data , code }) => {
  return (
    <>
      {data
        ? data.map((cart) => {
            return <CartProduct cart={cart} codeOffers={code}/>;
          })
        : ""}
    </>
  );
};

export default CartPoductList;