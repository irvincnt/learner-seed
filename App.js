import React from "react";
import { AppRouter } from "./src/router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  // eslint-disable-next-line no-undef
  console.log("ENV =>>" + process.env.API_URL);

  return (
    <div className="container">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}
