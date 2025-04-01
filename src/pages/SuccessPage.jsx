import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function SuccessPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { movie, date, time, seats, buyer, cpf } = location.state || {};

    if (!location.state) {
        navigate('/');
        return null;
    }

    return (
        <PageContainer>
            <h1>Pedido feito com sucesso!</h1>

            <TextContainer>
                <strong>Filme e sessão</strong>
                <p>{movie}</p>
                <p>{date} - {time}</p>
            </TextContainer>

            <TextContainer>
                <strong>Ingressos</strong>
                {seats.map((seat, index) => (
                    <p key={index}>Assento {seat}</p>
                ))}
            </TextContainer>

            <TextContainer>
                <strong>Comprador</strong>
                <p>Nome: {buyer}</p>
                <p>CPF: {cpf}</p>
            </TextContainer>

            <Button onClick={() => navigate('/')}>
                Voltar para Home
            </Button>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
    
    h1 {
        color: #247A6B;
        font-weight: bold;
        font-size: 24px;
        margin-bottom: 30px;
        text-align: center;
    }
`;

const TextContainer = styled.div`
    width: 100%;
    max-width: 350px;
    margin-bottom: 30px;
    
    strong {
        font-weight: bold;
        font-size: 24px;
        color: #293845;
        margin-bottom: 10px;
        display: block;
    }
    
    p {
        font-size: 22px;
        color: #293845;
        margin: 5px 0;
    }
`;

const Button = styled.button`
    width: 100%;
    max-width: 225px;
    height: 42px;
    background-color: #E8833A;
    border: none;
    border-radius: 3px;
    color: white;
    font-size: 18px;
    margin-top: 50px;
    cursor: pointer;
    
    &:hover {
        background-color: #c97432;
    }
`;