import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function SessionDay({ weekday, date, showtimes }) {
    const navigate = useNavigate();

    return (
        <SessionContainer>
            <h2>{weekday} - {date}</h2>
            <ButtonsContainer>
                {showtimes.map(session => (
                    <button 
                        key={session.id}
                        onClick={() => navigate(`/assentos/${session.id}`)}
                    >
                        {session.name}
                    </button>
                ))}
            </ButtonsContainer>
        </SessionContainer>
    );
}

const SessionContainer = styled.div`
    margin-bottom: 30px;
    
    h2 {
        font-size: 20px;
        margin-bottom: 15px;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
    
    button {
        background-color: #E8833A;
        border: none;
        border-radius: 3px;
        color: white;
        padding: 10px 20px;
        font-size: 18px;
        
        &:hover {
            background-color: #c97432;
        }
    }
`;