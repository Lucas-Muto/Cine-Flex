import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div>
        {/* Aqui virão as rotas */}
      </div>
    </BrowserRouter>
  );
}

export default App;