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

const Login = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Inside>
                <Switches>
                    <TopCard>Login</TopCard>
                    <Fields>
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" id="username" placeholder="Enter your username" />
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" placeholder="Enter your password" />
                        <SubmitButton onClick={() => navigate('/dashboard')}>Login</SubmitButton>
                    </Fields>
                <p>Not Registered yet? <span><Link to="/register" >Register</Link></span></p>
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
  margin: 100px auto;
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
        font-family: 'Poppins', sans-serif;
  
  font-weight: 800;
  background: #43766c;
  color: transparent;
  background-clip: text;
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
                <Login />
            </>
        </ThemeProvider>
    );
};

export default App;
