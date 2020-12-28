import React, {useState, useEffect} from "react";
 

const CitySelector= () =>{
    const [city, setCity] = useState('');
    const [search, setSearch] = useState("Bangalore");
    const [clicked, setClicked] = useState('false');
    const api_key = process.env.REACT_APP_API_KEY;



    useEffect(() => {
      
        const fetchData = async () =>{
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${api_key}`
          const res =  await fetch(url);
          const resJson = await res.json();
          console.log(resJson);
          setCity(resJson.main);
        };  
        fetchData();
      }, [search])

    return (
      <>
        <div>
            <h2>Search your city</h2>
            <div>
            <input type = "search" name = "city" placeholder = "city"
            onChange = {e => setSearch(e.target.value)}/>
            </div>

         {
         !city ? 
          (
           <p>No Data Found</p>
          ): 
            (
              <div>
                  <div><h2>{search}</h2></div>
                  <div className = "block">
                    <i className="far fa-clock fa-10x">
                    </i>
                  </div>
                  <div><h2>{city.temp}<sup>o</sup>C</h2></div>
                  <div><h2>{new Date().toString().split(' ')[0]}&nbsp;{new Date().toISOString().split('T')[0]}</h2></div>
              </div> 
           )
         }   
      </div>
      </>
    );
  }
  export default CitySelector;