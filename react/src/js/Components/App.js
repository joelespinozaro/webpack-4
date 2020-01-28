import React, { useState } from "react";
import data from "./data.json";
import Loader from "./Loader";

function App() {
  const [loaderList, setLoaderList] = useState([]);

  function handleClick() {
    setLoaderList(data.loaders);
  }
  return (
    <div>
      <h1>App list</h1>
      <ul>
        {loaderList.map(item => (
          <Loader data={item} key={item.id} />
        ))}
      </ul>

      <button onClick={handleClick}>Mostrar item</button>
    </div>
  );
}
export default App;
