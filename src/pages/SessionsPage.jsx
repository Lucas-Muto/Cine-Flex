import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { api } from '../services/api';
import SessionDay from '../components/SessionDay';
import Loading from '../components/Loading';

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
                <div>
                    <img src={sessions.posterURL} alt={sessions.title} />
                </div>
                <div>
                    <p>{sessions.title}</p>
                </div>
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
        font-size: 24px;
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
    background-color: #DFE6ED;
    border-top: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    padding: 14px 10px;
    position: fixed;
    bottom: 0;

    div:first-child {
        background: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        padding: 8px;
        margin-right: 14px;
        
        img {
            width: 48px;
            height: 72px;
            object-fit: cover;
        }
    }

    div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        p {
            font-size: 26px;
            color: #293845;
        }
    }
`;