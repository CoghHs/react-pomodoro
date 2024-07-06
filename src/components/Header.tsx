import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  padding: 30px;
  font-size: 36px;
  font-weight: bolder;
  text-align: center;
  color: white;
  span {
    color: white;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <span>Disney Characters</span>
      </Link>
    </Wrapper>
  );
}
