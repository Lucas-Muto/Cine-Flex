import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { api } from '../services/api';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/movies')
            .then(response => {
                setMovies(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao carregar filmes:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <Loading />;

    return (
        <PageContainer>
            <h1>Selecione o filme</h1>
            <MoviesContainer>
                {movies.map(movie => (
                    <MovieCard 
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        posterURL={movie.posterURL}
                    />
                ))}
            </MoviesContainer>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    
    h1 {
        margin: 40px 0;
        font-size: 24px;
    }
`;

const MoviesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding: 0 20px;
    margin-bottom: 40px;
`;