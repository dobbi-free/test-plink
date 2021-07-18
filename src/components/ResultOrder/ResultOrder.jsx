import style from "./ResultOrder.module.css";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/context";
import { useParams } from "react-router-dom";

const ResultOrder = () => {
  const { orderId } = useParams();
  const { store, constants } = useContext(GlobalContext);
  useEffect(() => {
    const orders = JSON.parse(localStorage.orders);
    const products = JSON.parse(localStorage.products);
    const currentOrder = orders.filter((item) => item.id == orderId);
    const currentProduct = products.filter(
      (item) => item.id == currentOrder[0].productId
    );
    store.dispatch({
      type: constants.SET_CURRENT_ORDER,
      currentOrder: currentOrder[0],
    });
    store.dispatch({
      type: constants.SET_CURRENT_PRODUCT,
      currentProduct: currentProduct[0],
    });
  }, []);
  return (
    <div className={style.order}>
      <h3 className={style.title}>Your order</h3>
      <div className={style.order_block}>
        <div className={style.products_item}>
          <div className={style.products_wrapper}>
            <img
              className={style.products_img}
              src="https://hotline.ua/img/tx/287/2871217745.jpg"
              alt=""
            />
            <div className={style.desc}>
              <span className={style.model}>
                {store.state.currentProduct.name}
              </span>
              <span className={style.desc_item}>
                SKU: {store.state.currentProduct.sku}
              </span>
              <span className={style.desc_item}>
                RAM: {store.state.currentProduct.ram}
              </span>
              <span className={style.desc_item}>
                HDD: {store.state.currentProduct.hdd}
              </span>
              <span className={style.desc_item}>
                Price:{" "}
                <span className={style.price}>
                  {store.state.currentProduct.price}$
                </span>
              </span>
            </div>
          </div>
          <div className={style.order_info}>
            <h4 className={style.order_title}>Order Information</h4>
            <div className={style.desc}>
              <span className={style.desc_item}>
                {store.state.currentOrder.fullName &&
                  "Full name: " + store.state.currentOrder.fullName}
              </span>
              <span className={style.desc_item}>{store.state.currentOrder.email &&
              "Email: " + store.state.currentOrder.email}</span>
              <span className={style.desc_item}>{store.state.currentOrder.country &&
              "Country: " + store.state.currentOrder.country}</span>
              <span className={style.desc_item}>{store.state.currentOrder.address &&
              "Address: " + store.state.currentOrder.address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultOrder;
