import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    try {
      console.log("영화 상세 정보 가져오는 중...");
      const response = await fetch("http://localhost:3000/movies");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log("가져온 영화 데이터:", json);
      
      // id에 해당하는 영화 찾기
      const foundMovie = json.find(m => m.id === id);
      console.log("찾은 영화:", foundMovie);
      
      setMovie(foundMovie);
      setLoading(false);
    } catch (error) {
      console.error("영화 정보 가져오기 오류:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);
  
  return (
    <div>
      <h1>Movie detail {id}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>감독: {movie.director}</p>
          <p>장르: {movie.jangre ? movie.jangre.join(', ') : '정보 없음'}</p>
          {movie.casting && movie.casting.length > 0 && (
            <p>출연진: {movie.casting.join(', ')}</p>
          )}
          {movie.poster && (
            <img src={movie.poster} alt={movie.title} width="300" />
          )}
        </div>
      ) : (
        <p>영화 정보를 찾을 수 없습니다.</p>
      )}
    </div>
  );
}

export default Detail;