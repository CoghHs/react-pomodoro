import styled from "styled-components";

const Title = styled.header`
  padding: 30px;
  font-size: 36px;
  font-weight: bolder;
  text-align: center;
`;

function Header() {
  return <Title>Disney Characters</Title>;
}

export default Header;
