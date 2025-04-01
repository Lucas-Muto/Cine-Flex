import styled from 'styled-components';

export default function Seat({ name, isAvailable, isSelected, onClick }) {
    const handleClick = () => {
        if (!isAvailable) {
            alert("Esse assento não está disponível");
            return;
        }
        onClick();
    };

    return (
        <SeatItem 
            isAvailable={isAvailable}
            isSelected={isSelected}
            onClick={handleClick}
        >
            {isAvailable ? name : ''}
        </SeatItem>
    );
}

const SeatItem = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    cursor: pointer;
    color: #2B2D36;
    
    background-color: ${props => 
        props.isSelected ? '#FADBC5' : 
        props.isAvailable ? '#9DB899' : '#2B2D36'};
    
    border: ${props => 
        props.isSelected ? '2px solid #EE897F' : 'none'};

    &:hover {
        ${props => props.isAvailable && !props.isSelected && `
            filter: brightness(0.95);
        `}
    }
`;