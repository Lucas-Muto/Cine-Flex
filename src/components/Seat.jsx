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
            {name}
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
    
    background-color: ${props => 
        props.isSelected ? '#1AAE9E' : 
        props.isAvailable ? '#C3CFD9' : '#FBE192'};
    
    border: 1px solid ${props => 
        props.isSelected ? '#0E7D71' : 
        props.isAvailable ? '#808F9D' : '#F7C52B'};

    &:hover {
        ${props => props.isAvailable && !props.isSelected && `
            filter: brightness(0.9);
        `}
    }
`;