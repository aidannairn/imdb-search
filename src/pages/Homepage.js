import { useEffect, useState } from "react"
import axios from "axios"

import Navbar from "../components/Navbar"
import Search from "../components/Search"
import ResultsList from "../components/ResultsList"

const Homepage = () => {
  const [searchStr, setSearchStr] = useState('Shrek')
  const [resultsList, setResultsList] = useState([])

  const {
    REACT_APP_IMDB_URL: url,
    REACT_APP_IMDB_HOST: host,
    REACT_APP_IMDB_API_KEY: apiKey
  } = process.env

  const options = {
    method: 'GET',
    url,
    params: {
      s: searchStr, 
      r: 'json', 
      page: '1'
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': host
    }
  }

  useEffect(() => {
    axios.request(options)
    .then(res => {
      setResultsList(res.data.Search)
    })
    .catch(err => {
      console.error(err)
    })
  }, [searchStr])
  
  return (
    <div>
      <Navbar setSearchStr={setSearchStr} />
      <Search />
      <ResultsList results={resultsList} />
    </div>
  )
}

export default Homepage