import styled from 'styled-components';

export default function Legend() {
    return (
        <LegendContainer>
            <LegendItem>
                <SeatExample isSelected={true} />
                <p>Selecionado</p>
            </LegendItem>
            <LegendItem>
                <SeatExample isAvailable={true} />
                <p>Disponível</p>
            </LegendItem>
            <LegendItem>
                <SeatExample />
                <p>Indisponível</p>
            </LegendItem>
        </LegendContainer>
    );
}

const LegendContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 20px 0;
`;

const LegendItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    
    p {
        font-size: 13px;
        color: #FFFFFF;
    }
`;

const SeatExample = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    
    background-color: ${props => 
        props.isSelected ? '#FADBC5' : 
        props.isAvailable ? '#9DB899' : '#2B2D36'};
    
    border: ${props => 
        props.isSelected ? '2px solid #EE897F' : 'none'};
`;