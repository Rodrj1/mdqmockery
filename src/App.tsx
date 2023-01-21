import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import WorkoutContainer from "./components/WorkoutContainer/WorkoutContainer";
import Shop from "./components/Shop/Shop";
import "./App.scss";
import ItemDetail from "./components/Shop/ItemDetail/ItemDetail";
import Header from "./components/Header/Header";
import Cart from "./components/Shop/Cart/Cart";
import { useState } from "react";
import Wishlist from "./components/Shop/Wishlist/Wishlist";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const [headerName, setHeaderName] = useState("MDQ CLOTHING SHOP");
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Header name={headerName} />
            <Switch>
              <Route path="*" element={<h1>THIS PAGE DOES NOT EXIST!</h1>} />
              <Route path="/item/:itemId" element={<ItemDetail />} />
              <Route
                path="/home"
                element={<Shop setHeaderName={setHeaderName} />}
              />
              <Route
                path="/wishlist"
                element={<Wishlist setHeaderName={setHeaderName} />}
              />
              <Route
                path="/cart"
                element={<Cart setHeaderName={setHeaderName} />}
              />
              <Route
                path="/notes"
                element={<NoteContainer setHeaderName={setHeaderName} />}
              />
              <Route
                path="/workout"
                element={<WorkoutContainer setHeaderName={setHeaderName} />}
              />
              <Route
                path="/"
                element={<Shop setHeaderName={setHeaderName} />}
              />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
