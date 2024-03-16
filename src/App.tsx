import ABApolloClient from './components/ABApolloClient';
import EstilosGlobais from './style/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './rotas';

function App() {
  return (
    <ABApolloClient>
        <div className="App">
          <EstilosGlobais />
          <BrowserRouter>
            <Rotas />
          </BrowserRouter>
        </div>
    </ABApolloClient>
  );
}

export default App;
