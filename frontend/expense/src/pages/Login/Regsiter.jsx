import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Link, useNavigate } from 'react-router-dom';


const theme = {};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    // background: #58998C;
  }
`;

const Register = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Inside>
                <Switches>
                    <TopCard>Register</TopCard>
                    <Fields>
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" id="username" placeholder="Enter your username" />
                        <Label htmlFor="email">Password</Label>
                        <Input type="email" id="email" placeholder="Enter your Email" />
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" placeholder="Enter your password" />
                        <SubmitButton onClick={() => navigate('/login')}>Regsiter</SubmitButton>
                    </Fields>
                <p>Already a user?<span><Link to="/login">Login</Link></span></p>
                </Switches>
            </Inside>
        </Container>
    );
};

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  background: #f6f6f6;
        font-family: 'Nunito', sans-serif;


  @media (max-width: 600px) {
    height: auto;
    overflow: auto;
  }
`;

const Inside = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: #f6f6f6;
  color: #000;
`;

const Switches = styled.div`
  max-width:500px;
  margin:10px auto;
`;

const TopCard = styled.div`
  margin: 30px 0;
  border-radius: 10px;
  color: #fff;
  position: relative;
  overflow: hidden;
  font-size: 40px;
  font-weight: 800;
  background: #43766c;
  color: transparent;
  background-clip: text;
        font-family: 'Poppins', sans-serif;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
        font-family: 'Ubuntu', sans-serif;

`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 400;
  color:#808080;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #58998c;
  }
`;


const SubmitButton = styled.button`
  padding: 10px;
  background: #43766c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #305750;
  }
`;

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <Register />
            </>
        </ThemeProvider>
    );
};

export default App;
