import TitleBar from "./TitleBar.js";
import styled from "styled-components";
import Head from "next/head.js";

const Main = styled.main`
  display: grid;
  gap: 0.3rem;
  margin-top: 3.5rem;
  padding: 0.5rem;
  position: relative;
  width: 100%;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tourio</title>
      </Head>
      <TitleBar />
      <Main>{children}</Main>
    </>
  );
}
