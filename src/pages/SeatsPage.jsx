import styled from 'styled-components';

export default function SeatsPage() {
    return (
        <PageContainer>
            <h1>Selecione o(s) assento(s)</h1>
            <SeatsContainer>
                {/* Mapa de assentos virá aqui */}
            </SeatsContainer>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const SeatsContainer = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 0 20px;
`;