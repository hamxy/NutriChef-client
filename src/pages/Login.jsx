import styled from "styled-components";
import Image from "../components/Common/Image";
import logo from "../assets/images/authPhoto.jpg";
import LoginForm from "../components/FormComponents/LoginForm";

// Define styled components
const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
`;

const Box = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (min-width: 900px) {
    flex-direction: row;
    max-width: 1440px;
  }
`;

const Aside = styled.aside`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
    width: 50vw;
    height: 100vh;
  }
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 900px) {
    width: 50%;
  }
`;

const Heading = styled.h1`
  margin: 0;
  margin-top: 0.5em;
`;

const Paragraph = styled.p`
  margin: 0;
`;

function Login() {
  return (
    <Container>
      <Box>
        <Aside>
          <Image src={logo} styles={{ borderRadius: "15px" }} />
        </Aside>
        <Main>
          <Heading>Welcome back!</Heading>
          <Paragraph>Please sign in to continue</Paragraph>
          <LoginForm />
        </Main>
      </Box>
    </Container>
  );
}

export default Login;
