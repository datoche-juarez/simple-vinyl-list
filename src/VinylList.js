import React from "react";
import Vinyl from "./Vinyl";
import './VinylList.css'

// export default function VinylList({ vinyls, toggleVinyl }) {
//   return vinyls.map((vinyl) => {
//     return <Vinyl key={vinyl.id} toggleVinyl={toggleVinyl} vinyl={vinyl} />;
//   });
// }

export default function VinylList({ vinyls, toggleVinyl }) {
  return vinyls.map((vinyl) => {
    
    return <div className="list-item"> 
    <Vinyl key={vinyl.id} toggleVinyl={toggleVinyl} vinyl={vinyl} />
    </div>
  });
}
