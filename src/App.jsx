import './App.css';
import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import Jokes from './components/jokes/Jokes';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Categories />
      <Jokes />
    </div>
  );
}

export default App;
