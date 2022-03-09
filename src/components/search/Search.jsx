import React, {useState} from "react"

const Search = (props)=> {

const[term, setTerm] = useState('');

const handleChange = (e)=> {
    setTerm(e.target.value)
}
const submitHandler = (e)=>{
    e.preventDefault()
    props.onSearch(term)
}
      return(
          <div className="container mt-5">
          <div className="card">
              <div className="card-body">
                  <form onSubmit={submitHandler} >
                    <input type="text" placeholder="Filmo pavadinimas" onChange={handleChange} value={term} classname="form-control"  />
                    <button className="btn btn-primary mt-2">Ieskoti</button>
                  </form>
              </div>
          </div>
          </div>
      )
}

export default Search