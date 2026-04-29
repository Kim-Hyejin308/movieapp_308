import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  const getMovies = async () => {
    try {
      console.log("영화 데이터 가져오는 중...");
      const response = await fetch("./db.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log("가져온 데이터:", json);
      setDatas(json);
      setIsLoading(false);
    } catch (error) {
      console.error("데이터 가져오기 오류:", error);
      setIsLoading(false);
    }
  };

  // 서버로부터 데이터 딱 한번만 가져오기
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h1>Movie json-server API</h1>
      <hr />
      {isLoading ? <p>IsLoading...</p> : null}
      <div>
        {datas.map((data) => (
          <div key={data.id}>
            <Movie
              id={data.id}
              poster={data.poster}
              genres={data.jangre}
              title={data.title}
            />
          </div>
        ))}
      </div>
      <ul></ul>
    </>
  );
}

export default Home;