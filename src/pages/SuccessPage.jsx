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

            <SuccessCard>
                <Section>
                    <SectionTitle>Filme e sessão</SectionTitle>
                    <Divider />
                    <p>{movie}</p>
                    <p>{date} - {time}</p>
                </Section>

                <Section>
                    <SectionTitle>Ingressos</SectionTitle>
                    <Divider />
                    {seats.map((seat, index) => (
                        <p key={index}>Assento {seat}</p>
                    ))}
                </Section>

                <Section>
                    <SectionTitle>Comprador(a)</SectionTitle>
                    <Divider />
                    <p>Nome: {buyer}</p>
                    <p>CPF: {cpf}</p>
                </Section>
            </SuccessCard>

            <Button onClick={() => navigate('/')}>
                Voltar para a tela inicial
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
        color: #9DB899;
        font-weight: bold;
        font-size: 24px;
        margin-bottom: 30px;
        text-align: center;
    }
`;

const SuccessCard = styled.div`
    width: 100%;
    max-width: 350px;
    background-color: #2B2D36;
    border-radius: 8px;
    padding: 24px;
`;

const Section = styled.div`
    width: 100%;
    margin-bottom: 24px;
    
    &:last-child {
        margin-bottom: 0;
    }
    
    p {
        font-size: 18px;
        color: #FFFFFF;
        margin: 5px 0;
    }
`;

const SectionTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: #EE897F;
    margin-bottom: 10px;
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #4E5A65;
    margin-bottom: 10px;
`;

const Button = styled.button`
    width: 100%;
    max-width: 225px;
    height: 42px;
    background-color: #EE897F;
    border: none;
    border-radius: 3px;
    color: #2B2D36;
    font-size: 18px;
    font-weight: 700;
    margin-top: 30px;
    cursor: pointer;
    
    &:hover {
        filter: brightness(0.95);
    }
`;