import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { MdFastfood, MdReceipt, MdTrain } from "react-icons/md";
import OneWeekCalendar from '../../../components/calendar/OneWeekCalendar';
import Charts from '../../../components/charts/Charts';
import { IoCalendarNumberOutline, IoSunny } from 'react-icons/io5';
import { GiNightSleep } from "react-icons/gi";
import { NavLink, Route, Routes } from 'react-router-dom';



const theme = {};

const GlobalStyle = createGlobalStyle`
body {
margin: 0;
padding: 0;
overflow:hidden;
}
`;

const Dashboard = () => {
    // Get the current hour from the local time
    const currentHour = new Date().getHours();

    // Determine whether it's day time (between 5 AM and 6 PM)
    const isDayTime = currentHour >= 5 && currentHour < 18;
    console.log(currentHour)

    return (
        <div>
            <Inside>
                <TwoCards>
                    <TopCard>
                        <p className='head' style={{ marginBottom: 0 }}>Today</p>
                        <p style={{ margin: '5px 0 0 0', fontSize: '16px', fontWeight: '600' }}>₹148</p>
                        <LeftIcon >
                            {isDayTime ? <IoSunny className='rotate' size={40} /> : <GiNightSleep className='rotate'  size={40} />}
                        </LeftIcon>
                    </TopCard>
                    <TopCard>
                        <p className='head' style={{ marginBottom: 0 }}>Jannuary</p>
                        <p style={{ margin: '5px 0 0 0', fontSize: '16px', fontWeight: '600' }}>₹6098</p>
                        <LeftIcon>
                            <IoCalendarNumberOutline size={40} />
                        </LeftIcon>
                    </TopCard>
                </TwoCards>
                <Calendar>
                    <OneWeekCalendar />
                </Calendar>
                <Switches>
                    <p style={{ margin: 0 }}>
                        <NavLink to="" end className="nav-switch">
                            Expenses
                        </NavLink>
                    </p>
                    <p style={{ margin: 0 }}>
                        <NavLink to="analysis" className="nav-switch">
                            Analysis
                        </NavLink>
                    </p>
                </Switches>
                <List>
                    <Routes>
                        <Route path=""         element={<ExpenseLists />} />
                        <Route path="analysis" element={<Charts data={chartData} />} />
                    </Routes>
                </List>
            </Inside>
        </div>
    )
}



const ExpenseLists = () => {
    return (
        <>
            <EachList>
                <div style={{ margin: '10px 10px 10px 15px', color: '#305750', borderRadius: '8px', border: '1px solid #58998C', width: '40px', height: '40px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MdFastfood size='30px' />
                </div>
                <div style={{ margin: '10px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    Breakfast
                </div>
                <div style={{ margin: '10px 15px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    ₹75
                </div>
            </EachList>

            <EachList>
                <div style={{ margin: '10px 10px 10px 15px', color: '#305750', borderRadius: '8px', border: '1px solid #58998C', width: '40px', height: '40px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MdTrain size='30px' />
                </div>
                <div style={{ margin: '10px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    MetroCard
                </div>
                <div style={{ margin: '10px 15px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    ₹75
                </div>
            </EachList>

            <EachList>
                <div style={{ margin: '10px 10px 10px 15px', color: '#305750', borderRadius: '8px', border: '1px solid #58998C', width: '40px', height: '40px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MdFastfood size='30px' />
                </div>
                <div style={{ margin: '10px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    Lunch
                </div>
                <div style={{ margin: '10px 15px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    ₹75
                </div>
            </EachList>

            <EachList>
                <div style={{ margin: '10px 10px 10px 15px', color: '#305750', borderRadius: '8px', border: '1px solid #58998C', width: '40px', height: '40px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MdFastfood size='30px' />
                </div>
                <div style={{ margin: '10px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    Breakfast
                </div>
                <div style={{ margin: '10px 15px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    ₹75
                </div>
            </EachList>

            <EachList>
                <div style={{ margin: '10px 10px 10px 15px', color: '#305750', borderRadius: '8px', border: '1px solid #58998C', width: '40px', height: '40px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MdTrain size='30px' />
                </div>
                <div style={{ margin: '10px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    MetroCard
                </div>
                <div style={{ margin: '10px 15px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    ₹75
                </div>
            </EachList>

            <EachList>
                <div style={{ margin: '10px 10px 10px 15px', color: '#305750', borderRadius: '8px', border: '1px solid #58998C', width: '40px', height: '40px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MdFastfood size='30px' />
                </div>
                <div style={{ margin: '10px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    Lunch
                </div>
                <div style={{ margin: '10px 15px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    ₹75
                </div>
            </EachList>

            <EachList>
                <div style={{ margin: '10px 10px 10px 15px', color: '#305750', borderRadius: '8px', border: '1px solid #58998C', width: '40px', height: '40px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MdReceipt size='30px' />
                </div>
                <div style={{ margin: '10px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    Electricity
                </div>
                <div style={{ margin: '10px 15px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    ₹75
                </div>
            </EachList>

            <EachList>
                <div style={{ margin: '10px 10px 10px 15px', color: '#305750', borderRadius: '8px', border: '1px solid #58998C', width: '40px', height: '40px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MdFastfood size='30px' />
                </div>
                <div style={{ margin: '10px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    Dinner
                </div>
                <div style={{ margin: '10px 15px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    ₹75
                </div>
            </EachList>

            <EachList style={{ margin: '0 0 60px 0' }}>
                <div style={{ margin: '10px 10px 10px 15px', color: '#305750', borderRadius: '8px', border: '1px solid #58998C', width: '40px', height: '40px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MdFastfood size='30px' />
                </div>
                <div style={{ margin: '10px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    Sweets
                </div>
                <div style={{ margin: '10px 15px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                    ₹75
                </div>
            </EachList>
        </>
    )
}

const chartData = [
    { value: 10000, name: 'Rent' },
    { value: 6000, name: 'Food' },
    { value: 1100, name: 'Travel' },
    { value: 1500, name: 'Online' },
]

const Inside = styled.div`
    max-width: 600px;
    height: calc(100% - 50px);
    margin: 0 auto;
    padding: 10px;
`;
const TwoCards = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
`;
const TopCard = styled.div`
    width: 200px;
    height: 80px;
    margin:10px;
    border-radius: 10px;
    background: linear-gradient(105deg, #43766C 2.89%, #2F2F2F 99.09%);
    color: #F6F6F6;
    padding: 0 0 0 10px;
    position:relative;
    overflow:hidden;
    font-family: 'Ubuntu', sans-serif;

    .head{
        font-family: 'Poppins', sans-serif !important;
        font-size:14px;
    }
`;
const LeftIcon = styled.div`
    position:absolute;
    right:10px;
    top:20%;
    color:#43766C;
    opacity:0.5

    display: flex;
    align-items: center;

    /* Add keyframe animation for rotation */
    @keyframes rotate {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
    }

    /* Apply the rotation animation to the icon */
    .rotate {
        animation: rotate 30s linear infinite; /* Adjust duration and timing function as needed */
    }
`;
const Calendar = styled.div`
    max-width: 600px;
    height: auto;
    margin:10px;
    border-radius: 10px;
    background: #FFF;
    text-align: center;
    color:#c0c0c0;
    color:#808080;
    font-family: 'Ubuntu', sans-serif;
`;
const Switches = styled.div`
    max-width: 600px;
    margin:10px;
    display:flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight:800;
    padding: 10px 0;
    color: #c0c0c0;
    font-family: 'Poppins', sans-serif;
`;
const List = styled.div`
    height: 500px;
    overflow-y:auto;
     &::-webkit-scrollbar { 
    display: none;
}
    @media (max-width: 600px) {
        height: 350px;
    }
`;
const EachList = styled.div`
    max-width: 600px;
    height: 60px;
    border-radius: 10px;
    background: #FFF;
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin: 10px 0;
    font-family: 'Nunito', sans-serif;
`;


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <Dashboard />
            </>
        </ThemeProvider>
    );
};

export default App;