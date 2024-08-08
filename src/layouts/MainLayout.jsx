import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Layout/Header/Header";
import { useMediaQuery } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
`;

const Header = styled.header`
  width: ${(props) => (props.isDesktop ? "200px" : "0px")};
  background-color: #ffc145;
  flex-shrink: 0;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  padding: 5em 7em;
`;

function MainLayout() {
  const isDesktop = useMediaQuery("(min-width: 900px)");

  return (
    <Container isDesktop={isDesktop}>
      <Header isDesktop={isDesktop}>
        <MainNavigation />
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}

export default MainLayout;
