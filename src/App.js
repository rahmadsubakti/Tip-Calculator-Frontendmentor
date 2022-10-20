import './styles/style.scss';
import MainApp from 'components/MainApp';

import logo from 'assets/images/logo.svg';

function App() {
  let bill = 142.55;
  let tip = 15;
  let numPeople = 5;
  return (
    <main>
      <img src={logo} alt="" className="logo"/>
      <MainApp />
    </main>
  );
}

export default App;
