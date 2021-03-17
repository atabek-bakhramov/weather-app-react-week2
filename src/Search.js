import './city-weather.css';

const Search = ({ cityNameFromInput, setCityNameFromInput, setCityNameOnButton, }) => {
  return (
    <div className="search-container">
      <input placeholder="Search City" type="text" value={cityNameFromInput} onChange={(e) => setCityNameFromInput(e.target.value)} /> 
      <button type="button" onClick={() => setCityNameOnButton(cityNameFromInput)}>Get Weather</button>
    </div>
  )
}

export default Search;
