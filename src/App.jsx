import { useState, useRef, Fragment } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Gallery from './Components/Gallery.jsx'
import SearchBar from './Components/SearchBar.jsx'
import { DataContext } from './Context/DataContext.jsx'
import { SearchContext } from './Context/SearchContext.jsx'
import AlbumView from './Components/AlbumView';
import ArtistView from './Components/ArtistView';

function App() {
  let [message, setMessage] = useState('Search for Music!');
  let [data, setData] = useState([]);
  let searchInput = useRef ('');

  const API_URL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
      document.title = `${term} Music`
      const response = await fetch(API_URL + term)
      const resData = await response.json()
      if (resData.results.length > 0) {
        return setData(resData.results)
      } else {
        return setMessage("Not found.")
      }
    }
    fetchData()
  }

  return (
    <div className="app">
      {message}
      <Router>
        <Routes>
          <Route path="/" element={
            <Fragment>
              <SearchContext.Provider value={{
                term: searchInput,
                handleSearch: handleSearch
              }}>
                <SearchBar/>
              </SearchContext.Provider>
              <DataContext.Provider value={data}>
                <Gallery />
              </DataContext.Provider>
            </Fragment>
          }/>
          <Route path='/album/:id' element={<AlbumView/>} />
          <Route path='/artist/:id' element={<ArtistView/>} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
