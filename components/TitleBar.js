import styled from "styled-components";

const Headline = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f15a00;
  margin: 0;
  padding: 10px;
  text-align: center;
  z-index: 1;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  color: white;
`;

export default function TitleBar() {
  return <Headline>Tourio</Headline>;
}
