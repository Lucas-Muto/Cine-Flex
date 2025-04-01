import styled from 'styled-components';

export default function SuccessPage() {
    return (
        <PageContainer>
            <h1>Pedido feito com sucesso!</h1>
            {/* Detalhes do pedido virão aqui */}
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    
    h1 {
        color: #247A6B;
        font-weight: bold;
    }
`;