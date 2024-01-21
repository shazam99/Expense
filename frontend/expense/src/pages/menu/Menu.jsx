import React, { useEffect } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbError404 } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { MdCategory, MdOutlineLogout } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { HiSquaresPlus } from "react-icons/hi2";
import { FaShareAlt } from "react-icons/fa";
import { RiStickyNoteFill } from "react-icons/ri";
import { IoInvertModeSharp } from "react-icons/io5";
import { PiToggleRightFill } from "react-icons/pi";
import { useLocation } from 'react-router-dom';

const theme = {};

const GlobalStyle = createGlobalStyle`
body {
margin: 0;
padding: 0;
overflow:hidden;
}
`;
const Menu = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <Container>
            <Inside>
                <Top>
                    <FaArrowLeftLong />
                    {/* <marquee behavior="" direction="" > We Reached 100K+ users <LuPartyPopper /></marquee> */}
                    <div>
                        <TbError404 size={25} />
                    </div>
                </Top>
                <Profile>
                    <div>
                        Siddharth Sharma
                        <p style={{ margin: 0, padding: 0 }}>Profile</p>
                    </div>
                    <IoIosArrowForward size={25} />
                </Profile>
                <MenuDiv>
                    <HiSquaresPlus size={30} style={{ padding: '20px' }} />
                    <div className="div">
                        Category
                        <div>
                            20 <IoIosArrowForward size={15} />
                        </div>
                    </div>
                </MenuDiv>
                <MenuDiv><MdCategory size={30} style={{ padding: '20px' }} />
                    <div className="div">
                        SubCategory
                        <div>
                            115 <IoIosArrowForward size={15} />
                        </div>
                    </div>
                </MenuDiv>

                <MenuDiv><RiStickyNoteFill size={30} style={{ padding: '20px' }} />
                    <div className="div">
                        Note
                        <div>
                            <IoIosArrowForward size={15} />
                        </div>
                    </div>
                </MenuDiv>
                <MenuDiv><IoInvertModeSharp size={30} style={{ padding: '20px' }} />
                    <div className="div">
                        Theme
                        <div>
                            <PiToggleRightFill size={35} />
                        </div>
                    </div>
                </MenuDiv>
                <Desc>Made with  <IoMdHeart color='#305750'/>    in Mumbai, IN <br />
                    Copyright 2024 Quantum, Inc. <br />
                    Share & Support
                </Desc>
                <Buttons>
                    <Button>Share <FaShareAlt /></Button>
                    <Button>Logout <MdOutlineLogout /> </Button>
                </Buttons>
            </Inside>
        </Container>
    )
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;
  overflow: scroll;
  background: #58998C;
  font-family: 'Nunito', sans-serif;
   &::-webkit-scrollbar { 
    display: none;
}
`;
const Inside = styled.div`
  color: #f6f6f6;
  overflow-y: hidden;
    &::-webkit-scrollbar { 
    display: none;
}
`;
const Top = styled.div`
    height:50px;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items:center;
`;
const Profile = styled.div`
    height:80px;
    display: flex;
    padding: 0 20px;
    margin: 0 0 20px;
    justify-content: space-between;
    align-items:center;
    font-size:24px;
    font-family: 'Nunito', sans-serif;
    border-bottom: 1px solid rgba(255, 255, 255, 0.30);

    p{
        font-size:12px;
    }
`;
const MenuDiv = styled.div`
    height:80px;
    display: flex;
    // padding: 0 20px;
    align-items:center;
    color: #FFF;
    font-family: 'NTR', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    .div{
        border-bottom: 1px solid rgba(255, 255, 255, 0.30);
        height:80px;
        display: flex;
        padding: 0 20px;
        justify-content: space-between;
        align-items:center;
        width:100%;
    }
    div{
        display: flex;
        align-items:center;
    }
`;
const Desc = styled.div`
    max-width:220px;
    margin:100px auto;
    text-align:center;
    padding:20px;
    font-size:16px;
    @media (max-width: 600px) {
        max-width:200px;
        margin:0 auto;
        text-align:center;
        padding:20px;
        font-size:12px;
    }
     position: relative;

  @keyframes heartbeat {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-2px);
    }
  }

  svg {
    animation: heartbeat 1s infinite;
  }
`;
const Buttons = styled.div`
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Nunito', sans-serif;
    position: fixed;
    bottom: 70px;
    left: 0;
    right: 0;
    max-width:500px;
    margin:0 auto;
`;
const Button = styled.button`
    border-radius: 5px;
    background: #F6F6F6;
    padding: 6px 16px;
    color: #305750;
    font-family: Ubuntu;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
`;






















const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <Menu />
            </>
        </ThemeProvider>
    );
};

export default App;