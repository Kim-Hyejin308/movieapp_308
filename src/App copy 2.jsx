import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  
  const getMovies=async()=>{
    const response = await fetch("http://localhost:3000/movies")
    const json = await response.json();
    console.log(json);
    setDatas(json);
    setIsLoading(false);

  };
  
  //서버로부터 데이터 딱 한번만 가져오기
  useEffect(() => {
    getMovies();
  }, []);


console.log(datas);

  return (
    <>
      <h1>Movie App !</h1>
      <hr />
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
        {datas.map((data) => (
          <Movie 
            key={data.id}
            poster={data.poster}
            title={data.title}
            genres={data.jangre}
          />
        ))}
      </ul>
      )}
    </>
  );
}
export default App;
