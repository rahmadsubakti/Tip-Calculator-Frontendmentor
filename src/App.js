import './styles/style.scss';
import MainApp from 'components/MainApp';

import logo from 'assets/images/logo.svg';

function App() {
  return (
    <main>
      <div className="logo">
        <img src={logo} alt="" className="logo"/>
      </div>
      <MainApp />
    </main>
  );
}

export default App;
