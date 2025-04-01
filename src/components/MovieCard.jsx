import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function MovieCard({ id, title, posterURL }) {
    const navigate = useNavigate();

    return (
        <MovieContainer onClick={() => navigate(`/sessoes/${id}`)}>
            <img src={posterURL} alt={title} />
        </MovieContainer>
    );
}

const MovieContainer = styled.div`
    width: 145px;
    height: 210px;
    padding: 8px;
    background-color: white;
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.03);
        transition: all 0.3s;
    }
`;