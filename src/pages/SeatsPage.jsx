import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { api } from '../services/api';
import Seat from '../components/Seat';
import Legend from '../components/Legend';
import Loading from '../components/Loading';

export default function SeatsPage() {
    const { idSessao } = useParams();
    const navigate = useNavigate();
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [buyerName, setBuyerName] = useState("");
    const [buyerCPF, setBuyerCPF] = useState("");

    useEffect(() => {
        api.get(`/showtimes/${idSessao}/seats`)
            .then(response => {
                setSession(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao carregar assentos:', error);
                setLoading(false);
            });
    }, [idSessao]);

    const handleSeatClick = (seat) => {
        setSelectedSeats(prevSeats => {
            const isSelected = prevSeats.some(s => s.id === seat.id);
            if (isSelected) {
                return prevSeats.filter(s => s.id !== seat.id);
            } else {
                return [...prevSeats, seat];
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedSeats.length === 0) {
            alert("Selecione pelo menos um assento!");
            return;
        }

        const body = {
            ids: selectedSeats.map(seat => seat.id),
            name: buyerName,
            cpf: buyerCPF
        };

        api.post('/seats/book-many', body)
            .then(() => {
                navigate('/sucesso', { 
                    state: { 
                        movie: session.movie.title,
                        date: session.day.date,
                        time: session.name,
                        seats: selectedSeats.map(s => s.name),
                        buyer: buyerName,
                        cpf: buyerCPF
                    }
                });
            })
            .catch(error => {
                console.error('Erro ao reservar assentos:', error);
                alert("Erro ao fazer a reserva!");
            });
    };

    if (loading) return <Loading />;

    return (
        <PageContainer>
            <h1>Selecione o(s) assento(s)</h1>
            
            <SeatsContainer>
                {session.seats.map(seat => (
                    <Seat
                        key={seat.id}
                        name={seat.name}
                        isAvailable={seat.isAvailable}
                        isSelected={selectedSeats.some(s => s.id === seat.id)}
                        onClick={() => handleSeatClick(seat)}
                    />
                ))}
            </SeatsContainer>

            <Legend />

            <FormContainer onSubmit={handleSubmit}>
                <label>
                    Nome do Comprador:
                    <input
                        required
                        placeholder="Digite seu nome..."
                        value={buyerName}
                        onChange={e => setBuyerName(e.target.value)}
                    />
                </label>

                <label>
                    CPF do Comprador:
                    <input
                        required
                        placeholder="Digite seu CPF..."
                        value={buyerCPF}
                        onChange={e => setBuyerCPF(e.target.value)}
                    />
                </label>

                <button type="submit">Reservar assento(s)</button>
            </FormContainer>

            <FooterContainer>
                <div>
                    <img src={session.movie.posterURL} alt={session.movie.title} />
                </div>
                <div>
                    <p>{session.movie.title}</p>
                    <p>{session.day.weekday} - {session.name}</p>
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

const SeatsContainer = styled.div`
    width: 100%;
    max-width: 350px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 7px;
    margin-bottom: 20px;
`;

const FormContainer = styled.form`
    width: 100%;
    max-width: 350px;
    margin-top: 20px;
    
    label {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
        
        input {
            height: 40px;
            padding: 0 10px;
            border: 1px solid #D4D4D4;
            border-radius: 3px;
            
            &::placeholder {
                color: #AFAFAF;
            }
        }
    }
    
    button {
        width: 100%;
        height: 40px;
        background-color: #E8833A;
        border: none;
        border-radius: 3px;
        color: white;
        font-size: 18px;
        margin-top: 20px;
        
        &:hover {
            background-color: #c97432;
        }
    }
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