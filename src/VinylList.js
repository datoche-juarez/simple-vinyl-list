import React from "react";
import Vinyl from "./Vinyl";

export default function VinylList({ vinyls, toggleVinyl }) {
  return vinyls.map((vinyl) => {
    return <Vinyl key={vinyl.id} toggleVinyl={toggleVinyl} vinyl={vinyl} />;
  });
}
