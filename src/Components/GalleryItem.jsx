import React, { useState } from 'react'

function GalleryItem(props) {
    let [viewDetails, setViewDetails] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${props.item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailedView = () => {
        return (
            <div style={detailStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }
    

    return (
        <div onClick={() => setViewDetails(!viewDetails)} style={{display: "inline-block"}}>
            { viewDetails ? detailedView() : simpleView() }
        </div>
    )
}

export default GalleryItem