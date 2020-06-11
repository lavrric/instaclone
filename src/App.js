import React, { useState, useEffect } from "react";
import "./App.scss";

import Gallery from "./components/gallery/gallery";
import Header from "./components/header/header";
import InfoBlock from "./components/info-block/info-block";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const getObject = {
    method: "GET",
    headers: {
      "Accept-Version": "v1",
      Authorization: "Client-ID jQCuhLXs53-MrOIZJQehnIrUdVLj-25o3vWaoh_mX3A",
    },
  };

  useEffect(() => {
    fetch("https://api.unsplash.com/photos", getObject)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Header />
        <InfoBlock />
        <Gallery items={items} />
      </>
    );
  }
}

export default App;
