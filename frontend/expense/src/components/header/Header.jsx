import React from 'react';
import styled from 'styled-components';
import { IoAddCircleOutline, IoBarChart, IoHome} from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Header = () => {
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
                        {/* <IoDocumentText size='25px' /> */}
                        <TbListDetails size='25px' />
                        {/* TbListDetails  */}
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
                <Link style={{ textDecoration: 'none', color: '#f6f6f6' }} to="/menu">
                    <MenuItem>
                        <CircularImage src="user.jpg" alt="Alt Text" width="25px" />
                    </MenuItem>
                </Link>
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
    z-index:5;
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
`;
const MenuItem = styled.div`
    margin: 10px;
    height:100%
    align-items:center;
`;

export default Header;
