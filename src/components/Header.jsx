import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <h1 onClick={() => navigate('/')}>CINEFLEX</h1>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    background-color: #C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    
    h1 {
        color: #E8833A;
        font-size: 34px;
        cursor: pointer;
    }
`;