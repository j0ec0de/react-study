import { useState } from "react"


function Favourites () {
    const [favourite, setFavourite] = useState('')

    return(
        <div className="favourites-empty">
            <h2>No favourite movie Yet</h2>
            <p>Start adding movies to your favourites and they wil appear here.</p>
        </div>
    )
}

export default Favourites