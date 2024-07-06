import { useQuery } from "react-query";
import { fetchCharactersDetail } from "../utils/api";
import { useLocation, useParams } from "react-router-dom";
import { ICharacterDetail, IRouteState } from "../utils/type";
import Loader from "../components/Loader";
import styled from "styled-components";

const Character = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 30px;
    margin-bottom: 20px;
    color: white;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
  }
`;

const FilmList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  justify-content: center;
  align-items: center;
`;

const Film = styled.span`
  background-color: white;
  color: black;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 15px;
  border-radius: 8px;
  font-size: 20px;
`;

function Detail() {
  const { state } = useLocation() as IRouteState;
  const { id } = useParams();
  const { isLoading, data } = useQuery<ICharacterDetail>(
    ["characterDetail"],
    () => fetchCharactersDetail(Number(id))
  );
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Character>
          <img src={data?.imageUrl} alt="characterDetail" />
          <h1>{state?.name || data?.name}</h1>
          <FilmList>
            {data?.films.map((film, index) => (
              <Film key={index}>{film}</Film>
            ))}
          </FilmList>
        </Character>
      )}
    </>
  );
}

export default Detail;
