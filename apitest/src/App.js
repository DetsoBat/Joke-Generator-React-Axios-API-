import "./App.css";
import Axios from "axios";
import React, {useEffect, useState} from "react";


function App() {
  const [api, setApi] = useState({})

  const getApi = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => {
        console.log(res.data);
        setApi(res.data);
      })
      .catch((err) => {
        console.log(err)
      });
  };
  console.log({api})

  useEffect(() => {
    getApi()
  }, [])

  return (
    <div className="App">
      <p>Random Jokes</p>
      <p><button onClick={() => getApi()}>Refresh</button></p>
      <pre style={{textAlign:'left'}}>{JSON.stringify(api, null, 2)}</pre>
      {/* {api} */}
    </div>
  );
}

export default App;
