import style from "./Products.module.css";
import { GlobalContext } from "../../context/context";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Products = () => {
  const { store, constants } = useContext(GlobalContext);
  const history = useHistory();
  useEffect(() => {

    const products = JSON.parse(localStorage.getItem('products'));
    store.dispatch({ type: constants.SET_PRODUCTS, products: products });
  }, [store.state.updateLocalstorage]);
  return (
    <div className={style.content}>
      <h2 className={style.products_title}>Laptops :</h2>
      <div className={style.products_wrapper}>
        {store.state.products?.map((item, i) => (
          <div key={i} className={style.products_item}>
            <img
              className={style.products_img}
              src="https://hotline.ua/img/tx/287/2871217745.jpg"
              alt=""
            />
            <div className={style.desc}>
              <span className={style.model}>{item.name}</span>
              <span className={style.desc_item}>SKU: {item.sku}</span>
              <span className={style.desc_item}>RAM: {item.ram}</span>
              <span className={style.desc_item}>HDD: {item.hdd}</span>
              <span className={style.desc_item}>
                Price: <span className={style.price}>{item.price}$</span>
              </span>
              <button
                onClick={(e) => {
                  store.dispatch({
                    type: constants.SET_CURRENT_PRODUCT,
                    currentProduct: item,
                  });
                  history.push("/confirm/" + item.id);
                }}
                className={style.buy}
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
