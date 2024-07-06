import { useQuery } from "react-query";
import { fetchCharacters } from "../utils/api";
import { ICharacter } from "../utils/type";
import Character from "../components/Character";
import Loader from "../components/Loader";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 30px;
`;

function Home() {
  const { isLoading, data } = useQuery<ICharacter[]>(
    ["characters"],
    fetchCharacters
  );
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Wrapper>
          {data?.map((character) => (
            <Character
              id={character.id}
              name={character.name}
              imageUrl={character.imageUrl}
            />
          ))}
        </Wrapper>
      )}
    </>
  );
}

export default Home;
