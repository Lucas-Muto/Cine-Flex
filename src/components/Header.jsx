import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { colors } from '../styles/colors';

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
            <h1 onClick={() => navigate('/')}>CINEFLEX</h1>
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    h1 {
        color: ${colors.primary};
        font-size: clamp(24px, 5vw, 34px);
        cursor: pointer;
        transition: all 0.3s ease;
        
        &:hover {
            transform: scale(1.05);
        }
    }
`;

const BackButton = styled.button`
    position: absolute;
    left: 20px;
    background: none;
    border: none;
    color: ${colors.primary};
    font-size: 24px;
    padding: 5px 10px;
    border-radius: 4px;
    
    &:hover {
        background-color: rgba(232, 131, 58, 0.1);
    }
`;