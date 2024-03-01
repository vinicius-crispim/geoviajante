import ABApolloClient from './components/ABApolloClient';
import Teste from './components/Teste';
import Header from './components/Header';
import EstilosGlobais from './style/GlobalStyle';

function App() {
  return (
    <ABApolloClient>
      <div className="App">
      <EstilosGlobais/>
        <Header/>
        <Teste/>
      </div>
    </ABApolloClient>
  );
}

export default App;
