import style from "./Confirm.module.css";
import { useContext, useEffect, useState } from "react";
import { useHistory,useParams } from "react-router-dom";
import { GlobalContext } from "../../context/context";

const Confirm = () => {
  const { store, constants } = useContext(GlobalContext);
  const { productId } = useParams();
  const [form, setForm] = useState({
    id: store.state.orders.length + 1,
    productId: productId,
  });
  const history = useHistory();

  useEffect(() => {
    const orders = JSON.parse(localStorage.orders);
    store.dispatch({
      type: constants.SET_ORDERS,
      orders: orders,
    });
  }, []);
  return (
    <div className={style.confirm}>
      <h3 className={style.title}>Confirm your order</h3>
      <form className={style.form}>
        <div className={style.input_wrapper}>
          <input
            className={style.input}
            value={form.fullName}
            placeholder={"Full Name"}
            onChange={(e) => {
              setForm({ ...form, fullName: e.target.value });
            }}
          />
          <p className={style.label}>Full name</p>
        </div>
        <div className={style.input_wrapper}>
          <input
            className={style.input}
            value={form.email}
            placeholder={"Email"}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
          />
          <p className={style.label}>Email</p>
        </div>
        <div className={style.input_wrapper}>
          <input
            className={style.input}
            value={form.country}
            placeholder={"Country"}
            onChange={(e) => {
              setForm({ ...form, country: e.target.value });
            }}
          />
          <p className={style.label}>Country</p>
        </div>
        <div className={style.input_wrapper}>
          <input
            className={style.input}
            value={form.city}
            placeholder={"City"}
            onChange={(e) => {
              setForm({ ...form, city: e.target.value });
            }}
          />
          <p className={style.label}>City</p>
        </div>
        <div className={style.input_wrapper}>
          <input
            className={style.input}
            value={form.address}
            placeholder={"Address"}
            onChange={(e) => {
              setForm({ ...form, address: e.target.value });
            }}
          />
          <p className={style.label}>Address</p>
        </div>
        <button
          className={style.button_confirm}
          onClick={(e) => {
            const orders = JSON.parse(localStorage.orders);
            orders.unshift(form);
            localStorage.setItem("orders", JSON.stringify(orders));
            history.push("/order/" + form.id);
          }}
        >
          Confirm order
        </button>
      </form>
    </div>
  );
};

export default Confirm;
