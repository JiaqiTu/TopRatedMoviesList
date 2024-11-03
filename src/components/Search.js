const handleSearchBox {
  setSearch((movie) => [...movie, setSearch])
}

function SearchBox{
  return (
  <>
    <input 
    type="text"
    onClick={handleSearchBox}
    />
    <div>{movie.title}</div>
  </input>
  )
}
export default SearchBox;