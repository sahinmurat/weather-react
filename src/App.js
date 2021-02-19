import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
 

  useEffect(() => {

    axios.get('api.openweathermap.org/data/2.5/forecast?id=524901&appid=9ac99c0f34aea6f0ff9722fb838208b2')
      .then((res) => console.log('res', res))
      .catch((err => console.log(err)))
  }, [])

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

    <div className="app warm" >
      <main>
        <div className='search-box'>
          <input
            type='text'
            className='search-bar'
            placeholder='Search....'
          />
        </div>
        <div className='location-box'>
          <div className='location'> Istanbul, Turkey</div>
          <div className='date'> {dateCreater(new Date())}</div>
        </div>
        <div className='weather-box'>
          <div className='temp'>25°C</div>
          <div className='weather'>Sunny</div>
        </div>

      </main>
    </div>
  );
}

export default App;
