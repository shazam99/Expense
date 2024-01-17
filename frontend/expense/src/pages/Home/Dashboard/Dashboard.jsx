import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../../../components/header/Header';
import { MdFastfood, MdReceipt, MdTrain } from "react-icons/md";
import OneWeekCalendar from '../../../components/calendar/OneWeekCalendar';
import Charts from '../../../components/charts/Charts';




const Dashboard = () => {
    const [flag,setFlag] = useState(true);
    return (
        <div>
            <Inside>
                <TwoCards>
                    <TopCard>
                        <p style={{ marginBottom: 0 }}>Today</p>
                        <p style={{ margin: '5px 0 0 0', fontSize: '20px', fontWeight: '700' }}>₹148</p>
                    </TopCard>
                    <TopCard>
                        <p style={{ marginBottom: 0 }}>Jannuary</p>
                        <p style={{ margin: '5px 0 0 0', fontSize: '20px', fontWeight: '700' }}>₹6098</p>
                    </TopCard>
                </TwoCards>
                <Calendar>
                    <OneWeekCalendar />
                </Calendar>
                <Switches>
                    <p style={{ margin: 0, color: flag ? '#305750' : '#c0c0c0' }} onClick={() => setFlag(true)}  >Expenses</p>
                    <p style={{ margin: 0, color: !flag ? '#305750' : '#c0c0c0' }}                   onClick={() => setFlag(false)} >Analysis</p>
                </Switches>
                <List>
                    {flag && (<>
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

                    <EachList style={{margin:'0 0 60px 0'}}>
                        <div style={{ margin: '10px 10px 10px 15px', color: '#305750', borderRadius: '8px', border: '1px solid #58998C', width: '40px', height: '40px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <MdFastfood size='30px' />
                        </div>
                        <div style={{ margin: '10px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                            Dinner
                        </div>
                        <div style={{ margin: '10px 15px', color: '#305750', textAlign: 'center', fontSize: '14px' }}>
                            ₹75
                        </div>
                    </EachList></>)}

                    {!flag && (<>
                        <Charts />
                    </>)}

                </List>
            </Inside>
            <Header />
        </div>
    )
}


const Inside = styled.div`
    max-width: 600px;
    height: 100%;
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
`;
const Switches = styled.div`
    max-width: 600px;
    margin:10px;
    display:flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight:800;
    padding: 10px 0;
`;
const List = styled.div`
    height: 350px;
    overflow-y:scroll;
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
`;

export default Dashboard