import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { colors } from '../styles/colors';

export default function SessionDay({ weekday, date, showtimes }) {
    const navigate = useNavigate();

    return (
        <SessionContainer>
            <DateInfo>
                {weekday}, {date}
            </DateInfo>
            <Divider />
            <ButtonsContainer>
                {showtimes.map(session => (
                    <TimeButton 
                        key={session.id}
                        onClick={() => navigate(`/assentos/${session.id}`)}
                    >
                        {session.name}
                    </TimeButton>
                ))}
            </ButtonsContainer>
        </SessionContainer>
    );
}

const SessionContainer = styled.div`
    background-color: #2B2D36;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 24px;
`;

const DateInfo = styled.h2`
    font-size: 20px;
    color: ${colors.text};
    margin-bottom: 12px;
    text-align: center;
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #4E5A65;
    margin: 16px 0;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
`;

const TimeButton = styled.button`
    width: 83px;
    height: 43px;
    border: 1px solid ${colors.primary};
    border-radius: 3px;
    background: transparent;
    color: ${colors.primary};
    font-size: 18px;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: rgba(238, 137, 127, 0.1);
    }
`;