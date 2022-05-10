import React, { useState, useRef, useEffect } from "react";
import VinylList from "./VinylList";
import { v4 as uuidv4 } from "uuid";
import './App.css';

const LOCAL_STORAGE_KEY = "vinylApp.vinyls";

function App() {
  const [vinyls, setVinyls] = useState([]);
  const vinylNameRef = useRef();

  useEffect(() => {
    const storedVinyls = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedVinyls) setVinyls(storedVinyls);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(vinyls));
  }, [vinyls]);

  function toggleVinyl(id) {
    const newVinyls = [...vinyls];
    const vinyl = newVinyls.find((vinyl) => vinyl.id === id);
    vinyl.complete = !vinyl.complete;
    setVinyls(newVinyls);
  }

  function handleAddVinyl(e) {
    const name = vinylNameRef.current.value;
    if (name === "") return;
    setVinyls((prevVinyls) => {
      return [...prevVinyls, { id: uuidv4(), name: name, complete: false }];
    });
    vinylNameRef.current.value = null;
  }

  function handleClearVinyls() {
    const newVinyls = vinyls.filter(vinyl => !vinyl.complete);
    setVinyls(newVinyls);
  }

  return (
    <>
    <div className="list-container">
      <div className="list-item-container">
      <VinylList vinyls={vinyls} toggleVinyl={toggleVinyl} />
      </div>
      <input ref={vinylNameRef} type="text" />
      <button id="add-album-btn"onClick={handleAddVinyl}>Add Album</button>
      <button id="clear-checked-btn" onClick={handleClearVinyls}>Clear Checked</button>
      {vinyls.filter((vinyl) => !vinyl.complete).length === 1 ? (
        <div>
          {vinyls.filter((vinyl) => !vinyl.complete).length} album left
        </div>
      ) : (
        <div>{vinyls.filter((vinyl) => !vinyl.complete).length} albums left</div>
      )}
      </div>
    </>
  );
}

export default App;
