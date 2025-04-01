import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { api } from '../services/api';
import SessionDay from '../components/SessionDay';
import Loading from '../components/Loading';
import { colors } from '../styles/colors';

export default function SessionsPage() {
    const { idFilme } = useParams();
    const [sessions, setSessions] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`/movies/${idFilme}/showtimes`)
            .then(response => {
                setSessions(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao carregar sessões:', error);
                setLoading(false);
            });
    }, [idFilme]);

    if (loading) return <Loading />;

    return (
        <PageContainer>
            <h1>Selecione o horário</h1>
            <SessionsContainer>
                {sessions.days.map(day => (
                    <SessionDay 
                        key={day.id}
                        weekday={day.weekday}
                        date={day.date}
                        showtimes={day.showtimes}
                    />
                ))}
            </SessionsContainer>
            <FooterContainer>
                <MovieInfo>
                    <PosterContainer>
                        <img src={sessions.posterURL} alt={sessions.title} />
                    </PosterContainer>
                    <MovieTitle>{sessions.title}</MovieTitle>
                </MovieInfo>
            </FooterContainer>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    padding-bottom: 120px;
    
    h1 {
        margin: 40px 0;
        font-size: 28px;
        font-weight: 700;
        color: ${colors.text};
    }
`;

const SessionsContainer = styled.div`
    width: 100%;
    max-width: 800px;
    padding: 0 20px;
`;

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #2B2D36;
    border-top: 1px solid #4E5A65;
    display: flex;
    align-items: center;
    padding: 14px 10px;
    position: fixed;
    bottom: 0;
`;

const MovieInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
`;

const PosterContainer = styled.div`
    width: 64px;
    height: 89px;
    padding: 8px;
    background: #212226;
    border-radius: 2px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2px;
    }
`;

const MovieTitle = styled.p`
    font-size: 26px;
    color: ${colors.text};
`;