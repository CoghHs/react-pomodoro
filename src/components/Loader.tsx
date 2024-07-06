import styled from "styled-components";

const Loading = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 46px;
  font-weight: bolder;
`;

export default function Loader() {
  return <Loading>Loading</Loading>;
}
