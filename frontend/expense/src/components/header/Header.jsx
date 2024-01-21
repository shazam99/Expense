import React, { useState } from 'react';
import styled from 'styled-components';
import { IoAddCircleOutline, IoBarChart, IoDocumentText, IoHome, IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
    const [flag, setFlag] = useState(false);
    return (
        <Head>
            <Menu>
                <Link style={{ textDecoration: 'none', color: '#f6f6f6' }} to="/dashboard">
                    <MenuItem>
                        <IoHome size='25px' />
                    </MenuItem>
                </Link>

                <Link style={{ textDecoration: 'none', color: '#f6f6f6' }} to="/all-expenses">
                    <MenuItem >
                        <IoDocumentText size='25px' />
                    </MenuItem>
                </Link>

                <Link style={{ textDecoration: 'none', color: '#f6f6f6' }} to="/add-expense">
                    <MenuItem>
                        <IoAddCircleOutline size='25px' />
                    </MenuItem>
                </Link>
                    <MenuItem>
                        <IoBarChart size='25px' />
                    </MenuItem>

                <MenuItem onClick={() => setFlag(!flag)}>
                    <CircularImage src="user.jpg" alt="Alt Text" width="25px" />
                    {flag && <Settings>
                        <br />

                        Profile <br />
                        <hr />

                        Theme <br />
                        <hr />

                        
                        sub category <br />
                        <hr />

                        <Link to='/login'>Logout</Link> <br />

                    </Settings>}
                </MenuItem>
            </Menu>
        </Head>
    );
}

const Head = styled.div`
    height: 50px;
    position: fixed;
    bottom: 0;
    width: 100vw;
    background: #305750;
`;
const CircularImage = styled.img`
  border-radius: 50%;
  width: 25px; /* Adjust the width as needed */
  height: 25px; /* Adjust the height as needed */
  object-fit: cover; /* Ensures the image maintains its aspect ratio */
  border: 2px solid #f6f6f6;
  background:#f6f6f6;
`;
const Menu = styled.div`
    background: #305750;
    height: 50px;
    max-width: 600px;
    margin: 0 auto;
    color: #F6F6F6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;
const Settings = styled.div`
    background: #305750;
    height: 170px;
    width: 170px;
    position: absolute;
    bottom: 60px;
    right:10px;
    border-radius:10px;
    text-align:center;
    align-items:center;
    z-index:5;
`;

const MenuItem = styled.div`
    margin: 10px;
    height:100%
    align-items:center;
`;

export default Header;
