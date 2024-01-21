import React from 'react'
import { MdFastfood } from 'react-icons/md';
import styled from 'styled-components';

const AllExpenses = () => {
    return (
            <Inside>
                <Head>
                    All Transactions
                </Head>
                <Transactions>
                    <Txn>
                        <DateHead>
                            19 Jannuary, 2024
                        </DateHead>
                        <DateTxns>
                            <div className="icon-container">
                                <div className="icon">
                                    <MdFastfood size='30px' />
                                </div>
                                <div>
                                    <div className="text">Breakfast</div>
                                    <div className="text" style={{ color: "#58998C" }}>8:00 AM</div> {/* Replace with the actual time */}
                                </div>
                            </div>
                            <div className="amount">₹75</div>
                        </DateTxns>
                        <DateTxns>
                            <div className="icon-container">
                                <div className="icon">
                                    <MdFastfood size='30px' />
                                </div>
                                <div>
                                    <div className="text">Breakfast</div>
                                    <div className="text" style={{ color: "#58998C" }}>8:00 AM</div> {/* Replace with the actual time */}
                                </div>
                            </div>
                            <div className="amount">₹75</div>
                        </DateTxns>
                    </Txn>
                    <Txn>
                        <DateHead>
                            18 Jannuary, 2024
                        </DateHead>
                        <DateTxns>
                            <div className="icon-container">
                                <div className="icon">
                                    <MdFastfood size='30px' />
                                </div>
                                <div>
                                    <div className="text">Breakfast</div>
                                    <div className="text" style={{ color: "#58998C" }}>8:00 AM</div> {/* Replace with the actual time */}
                                </div>
                            </div>
                            <div className="amount">₹75</div>
                        </DateTxns>
                        <DateTxns>
                            <div className="icon-container">
                                <div className="icon">
                                    <MdFastfood size='30px' />
                                </div>
                                <div>
                                    <div className="text">Breakfast</div>
                                    <div className="text" style={{ color: "#58998C" }}>8:00 AM</div> {/* Replace with the actual time */}
                                </div>
                            </div>
                            <div className="amount">₹75</div>
                        </DateTxns>
                        <DateTxns>
                            <div className="icon-container">
                                <div className="icon">
                                    <MdFastfood size='30px' />
                                </div>
                                <div>
                                    <div className="text">Breakfast</div>
                                    <div className="text" style={{ color: "#58998C" }}>8:00 AM</div> {/* Replace with the actual time */}
                                </div>
                            </div>
                            <div className="amount">₹75</div>
                        </DateTxns>
                        <DateTxns>
                            <div className="icon-container">
                                <div className="icon">
                                    <MdFastfood size='30px' />
                                </div>
                                <div>
                                    <div className="text">Breakfast</div>
                                    <div className="text" style={{ color: "#58998C" }}>8:00 AM</div> {/* Replace with the actual time */}
                                </div>
                            </div>
                            <div className="amount">₹75</div>
                        </DateTxns>
                    </Txn>
                    <Txn>
                        <DateHead>
                            17 Jannuary, 2024
                        </DateHead>
                        <DateTxns>
                            <div className="icon-container">
                                <div className="icon">
                                    <MdFastfood size='30px' />
                                </div>
                                <div>
                                    <div className="text">Breakfast</div>
                                    <div className="text" style={{ color: "#58998C" }}>8:00 AM</div> {/* Replace with the actual time */}
                                </div>
                            </div>
                            <div className="amount">₹75</div>
                        </DateTxns>
                        <DateTxns>
                            <div className="icon-container">
                                <div className="icon">
                                    <MdFastfood size='30px' />
                                </div>
                                <div>
                                    <div className="text">Breakfast</div>
                                    <div className="text" style={{ color: "#58998C" }}>8:00 AM</div> {/* Replace with the actual time */}
                                </div>
                            </div>
                            <div className="amount">₹75</div>
                        </DateTxns>
                        <DateTxns>
                            <div className="icon-container">
                                <div className="icon">
                                    <MdFastfood size='30px' />
                                </div>
                                <div>
                                    <div className="text">Breakfast</div>
                                    <div className="text" style={{ color: "#58998C" }}>8:00 AM</div> {/* Replace with the actual time */}
                                </div>
                            </div>
                            <div className="amount">₹75</div>
                        </DateTxns>
                        <DateTxns>
                            <div className="icon-container">
                                <div className="icon">
                                    <MdFastfood size='30px' />
                                </div>
                                <div>
                                    <div className="text">Breakfast</div>
                                    <div className="text" style={{ color: "#58998C" }}>8:00 AM</div> {/* Replace with the actual time */}
                                </div>
                            </div>
                            <div className="amount">₹75</div>
                        </DateTxns>
                    </Txn>
                </Transactions>
            </Inside>
    )
}
const Inside = styled.div`
    max-width: 600px;
    height: 100%;
    // height: calc(100vh - 50px);

    margin: 0 auto;
    padding:  0 10px;
    background: #fff;
`;
const Head = styled.div`
  font-size: 20px;
  font-weight: 800;
  padding: 30px 20px;
//   margin-top:10px;
  color: #305750;
  position: sticky;
  background:#fff;
  backdrop-filter: blur(10px);
  top:0;
  z-index:2;
    font-family: 'Poppins', sans-serif;
`;
const Transactions = styled.div`
  margin:10px;
  margin-bottom:100px;
`;
const Txn = styled.div`
margin: 0 10px 20px;
`;
const DateHead = styled.p`
 color:#c0c0c0;
 font-size:14px;
 margin:5px 5px 10px;
 font-family: 'Ubuntu', sans-serif;

`;
const DateTxns = styled.div`
  max-width: 600px;
  height: 100%;
  border-radius: 10px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
    font-family: 'Nunito', sans-serif;


  .icon-container {
    display: flex;
    // flex-direction: column;
    align-items: center;
  }

  .icon {
    margin: 5px 20px 5px 5px;
    color: #305750;
    border-radius: 8px;
    border: 1px solid #58998C;
    width: 40px;
    height: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    margin: 2px;
    color: #305750;
    text-align: center;
    font-size: 14px;
    @media (max-width: 600px) {
        height: auto;
        overflow: auto;
        font-size: 12px;
    }
    }

  .amount {
    margin: 10px 15px;
    color: #305750;
    text-align: right;
    font-size: 16px;
    font-weight: 600;
  }
`;

export default AllExpenses;