import { Link } from "react-router-dom";
import { ICharacter } from "../utils/type";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CharacterList = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  padding: 10px;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  gap: 5px;
  &:hover {
    background-color: white;
    span {
      color: black;
    }
  }
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
  }
  span {
    color: white;
    font-size: 20px;
  }
`;

export default function Character({ id, imageUrl, name }: ICharacter) {
  return (
    <Wrapper>
      <CharacterList
        to={`/characters/${id}`}
        state={{
          characterName: name,
          characterImageUrl: imageUrl,
        }}
      >
        <img src={imageUrl} alt="character" />
        <span>{name}</span>
      </CharacterList>
    </Wrapper>
  );
}
