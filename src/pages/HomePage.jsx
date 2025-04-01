import styled from 'styled-components';

export default function HomePage() {
    return (
        <PageContainer>
            <h1>Selecione o filme</h1>
            <MoviesContainer>
                {/* Lista de filmes virá aqui */}
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
`;