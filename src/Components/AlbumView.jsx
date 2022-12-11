import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function AlbumView() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [ albumData, setAlbumData ] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
        }
        fetchData()
    }, [id])

    const renderSongs = albumData.filter(entry => entry.wrapperType === 'track').map((song, i)=>{
        return(
            <div key={i}>
                <p>{song.trackName}</p>
            </div>
        )
    })

    return (
        <div>
            <div>
                <button onClick={()=>navigate(-1)}>Back</button>
                <button onClick={()=>navigate('/')}>Home</button>
            </div>
            <p>{renderSongs}</p>
        </div>
    )
}

export default AlbumView
