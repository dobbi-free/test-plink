import "./App.css";
import Header from "./components/Header/Header";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/context";
import Products from "./components/Products/Products";
import { Route } from "react-router-dom";
import ResultOrder from "./components/ResultOrder/ResultOrder";
import Confirm from "./components/Confirm/Confirm";
import { CSSTransition } from "react-transition-group";

function App() {
  const { store, constants } = useContext(GlobalContext);
  useEffect(() => {
    if (!localStorage.products) {
      localStorage.setItem(
        "products",
        JSON.stringify([
          {
            id: 1,
            name: "Lenovo IC-512",
            sku: "ZC11501",
            ram: 4,
            hdd: 512,
            price: 550,
          },
          {
            id: 2,
            name: "HP Megabook 14",
            sku: "ZC12001",
            ram: 2,
            hdd: 240,
            price: 420,
          },
          {
            id: 3,
            name: "Lenovo IC-520",
            sku: "ZC11205",
            ram: 8,
            hdd: 1024,
            price: 600,
          },
          {
            id: 4,
            name: "Asus ThinkPad 15-1554",
            sku: "ZC11521",
            ram: 16,
            hdd: 1024,
            price: 700,
          },
        ])
      );
      localStorage.setItem("orders", JSON.stringify([{ id: 0 }]));
      store.dispatch({ type: constants.UPDATE_LOCALSTORAGE });
    }
  }, []);
  const routes = [
    { path: "/", Component: Products },
    { path: "/confirm/:productId", Component: Confirm },
    { path: "/order/:orderId", Component: ResultOrder },
  ];
  return (
    <div className="main_wrapper">
      <Header />
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </div>
  );
}

export default App;
