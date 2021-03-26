import React from "react";
import AppRouter from "./src/router/AppRouter";

export default function App() {
  // eslint-disable-next-line no-undef
  console.log("ENV =>>" + process.env.API_URL);
  return (
    <div className="container">
      <AppRouter />
    </div>
  );
}
