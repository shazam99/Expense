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
                        <IoHome size='30px' />
                    </MenuItem>
                </Link>

                <Link style={{ textDecoration: 'none', color: '#f6f6f6' }} to="/all-expenses">
                    <MenuItem >
                        <IoDocumentText size='30px' />
                    </MenuItem>
                </Link>

                <Link style={{ textDecoration: 'none', color: '#f6f6f6' }} to="/add-expense">
                    <MenuItem>
                        <IoAddCircleOutline size='30px' />
                    </MenuItem>
                </Link>

                <MenuItem onClick={() => alert('logs')}>
                    <IoBarChart size='30px' />
                </MenuItem>
                <MenuItem onClick={() => setFlag(!flag)}>
                    <IoMenu size='30px' />
                    {flag && <Settings>
                        <br />

                        List 1 <br />
                        <hr />
                        List 2 <br />
                        <hr />

                        List 3 <br />
                        <hr />

                        List 4 <br />
                        <hr />

                        List 5 <br />

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
    height: 200px;
    width:200px;
    position: absolute;
    bottom: 60px;
    right:10px;
    border-radius:10px;
    text-align:center;
    align-items:center;
`;

const MenuItem = styled.div`
    margin: 10px;
    height:100%
    align-items:center;
`;

export default Header;
