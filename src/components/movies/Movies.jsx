import React, {useState, useEffect} from "react"
import Search from "../search/Search"


const Movies = () => {
    const [movies, setMovies] = useState ([] )
    const [search, setSearch] = useState ( '' )


   const handleSearch = (term)=> {
         setSearch(term)
    }

    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?t=${search}&a[ikey=e4db3ced'`)
        .then(response=>response.json())
        .then(data=>setMovies(data))

    },[search])
    return(
        <div className="container mt-4">
            <Search onSearch ={handleSearch} />
           <h2>Informacija apie ieskoma filma</h2>
                <div className="row">
                    {movies.map()}
                </div>
        </div>
    )
}

export default Movies