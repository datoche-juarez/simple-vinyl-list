import React from 'react'

export default function Vinyl({ vinyl, toggleVinyl }) {
    function handleVinylClick() {
        toggleVinyl(vinyl.id);
    }
  return (
    <div>
        <label>
            <input type="checkbox" checked={vinyl.complete} onChange={handleVinylClick} />
        {vinyl.name}
        </label>
    </div>
  )
}
