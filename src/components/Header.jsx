import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { colors } from '../styles/colors';
import logo from '../assets/clapperboard 1.svg';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <HeaderContainer>
            {location.pathname !== '/' && (
                <BackButton onClick={() => navigate(-1)}>
                    ←
                </BackButton>
            )}
            <LogoContainer onClick={() => navigate('/')}>
                <img src={logo} alt="Logo" />
                <h1>Cineflex</h1>
            </LogoContainer>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    background-color: ${colors.headerBg};
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    
    img {
        width: 40px;
        height: 40px;
    }
    
    h1 {
        font-family: 'Raleway', sans-serif;
        font-size: clamp(24px, 5vw, 34px);
        color: #FFFFFF;
        font-weight: 700;
    }
`;

const BackButton = styled.button`
    position: absolute;
    left: 20px;
    background: none;
    border: none;
    color: #FFFFFF;
    font-size: 24px;
    padding: 5px 10px;
    border-radius: 4px;
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;