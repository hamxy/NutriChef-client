import styled from "styled-components";
import logo from "../assets/images/authPhoto.jpg";
import Image from "../components/Common/Image";
import RegisterForm from "../components/FormComponents/RegisterForm";

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

  @media (min-width: 900px) {
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

function Register() {
  return (
    <Container>
      <Box>
        <Aside>
          <Image src={logo} styles={{ borderRadius: "15px" }} />
        </Aside>
        <Main>
          <Heading>Create account!</Heading>
          <Paragraph>Please enter your credentials to continue</Paragraph>
          <RegisterForm />
        </Main>
      </Box>
    </Container>
  );
}

export default Register;
