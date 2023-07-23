import Home, { createHomePageContent } from './home'; // Importe a função "createHomePageContent" corretamente


const App = () => {
  return (
    <Router>
      <div>
        {/* Barra inferior com os links para as páginas */}
        <nav style={{ backgroundColor: '#202024', position: 'fixed', bottom: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '10px 0' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Menu</Link>
          <Link to="/home" style={{ color: 'white', textDecoration: 'none' }}>Início</Link>
          <Link to="/bonus" style={{ color: 'white', textDecoration: 'none' }}>Bônus</Link>
        </nav>

        {/* Rotas das páginas */}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/bonus" component={Bonus} />
          {/* Rota padrão, redireciona para a Home */}
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
