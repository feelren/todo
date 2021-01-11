import s from "./styles/dist/App.module.css";
import React from "react";
import Form from "./components/Form";

function App() {
      return (
            <div className={s.wrapper}>
                  <Form />
                  <div></div>
            </div>
      );
}

export default App;
