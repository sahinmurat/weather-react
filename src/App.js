import React, {useState } from 'react';

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: process.env.REACT_APP_BASEURL
}
console.log(process.env.REACT_APP_API_KEY)
function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = evt => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}q=${query}&appid=${api.key}&units=metric`)
        .then(res => res.json())
        .then((result) => {
          console.log('a', result)
          setWeather(result)
          setQuery('')
          console.log(weather)
          console.log('weather.name', weather.name)
          console.log('weather.sys.country', weather.sys.country)
        })
        .catch((err => console.log(err)))
    }
  }

  const dateCreater = (d) => {
    let months = ['January', 'February', 'March', 'April', 'Mai', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`

  }


  return (

    <div className={weather?.main?.temp > 30 ? 'app' : (weather?.main?.temp > 5 ? 'app warm' : (weather?.main?.temp > 0 ? 'app cold' : 'app xcold'))}   >
      <main>
        <div className='search-box'>
          <input
            type='text'
            className='search-bar'
            placeholder='Search....'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.name != 'undefined') ?
          (
            <div>
              <div className='location-box'>
                <div className='location'> {weather.name}</div>
                <div className='date'> {dateCreater(new Date())}</div>
              </div>
              <div className='weather-box'>
                <div className='temp'>{Math.round(weather?.main?.temp)}°C</div>
                <div className='weather'> {weather.weather[0].main}</div>
              </div>
            </div>) : (<p className='option'>There is no any place! Try again correctly...</p>)}

      </main>
    </div>
  );
}

export default App;
