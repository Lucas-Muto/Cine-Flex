import styled from 'styled-components';

export default function SessionsPage() {
    return (
        <PageContainer>
            <h1>Selecione o horário</h1>
            <SessionsContainer>
                {/* Lista de sessões virá aqui */}
            </SessionsContainer>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const SessionsContainer = styled.div`
    width: 100%;
    max-width: 800px;
    padding: 0 20px;
`;