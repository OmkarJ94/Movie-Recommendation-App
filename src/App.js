import React, { useEffect, useState } from 'react';

import './App.css';
import Loading from "./Loading"
function App() {
  const [title, setTitle] = useState('the avengers');
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    let url = `https://omdbapi.com/?t=${title}&apikey=${process.env.REACT_APP_APIKEY}`;
    setLoading(true)
    const data = await fetch(url)
    const result = await data.json()
    setData(result)
    setLoading(false)
  }
  return (
    <>
      <div className=" container">
        <div className="card" style={{ width: "60rem" }}>
          <div className="input-group mt-4" style={{ width: "75%", alignSelf: "center" }}>
            <input type="text" className="form-control inp" placeholder="Movie Name" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => {
              setTitle(e.target.value)
            }} />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => { fetchData() }}>Submit</button>
          </div>
          {loading && <Loading />}
          {data?.Response === 'True' ?
            <div className="card-body">
              <div className="row">
                <div className="col first">
                  <img src={data?.Poster} alt={data?.Title} />
                </div>
                <div className="col">
                  <h5><b>Movie Name</b>:-{data?.Title}</h5>
                  <h5><b>Relesed Date</b>:-{data?.Released}</h5>
                  <h5><b>Time Period</b>:-{data?.Runtime}</h5>
                  <h5><b>Director</b>:-{data?.Director}</h5>
                  <h5><b>Writer</b>:-{data?.Writer}</h5>
                  <h5><b>Actors</b>:-{data?.Actors}</h5>
                  <h5><b>Boxoffice</b>:-{data?.BoxOffice}</h5>
                  <h5><b>Show Type</b>:-{data?.Type}</h5>
                  <h5><b>Language</b>:-{data?.Language}</h5>
                  <h5><b>ImdbRating</b>:-{data?.imdbRating}</h5>
                  <h5><b>Awards</b>:-{data?.Awards}</h5>
                  <h5><b>description</b>:-{data?.Plot}</h5>

                </div>
              </div>
            </div>
            : <h1>Movie Not Found...!</h1>
          }
        </div>
      </div>



    </>
  );
}

export default App;
