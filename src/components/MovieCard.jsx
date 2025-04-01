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
    width: calc(50% - 15px); // Para ter 2 filmes por linha com gap de 30px
    aspect-ratio: 145/210;
    padding: 8px;
    background-color: #2A2B31;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }

    &:hover {
        transform: scale(1.03);
    }
`;