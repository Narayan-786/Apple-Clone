import './App.css';
import ScrollSection from './Components/examples';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='overflow-hidden'>
        <ScrollSection />
      </div>
    </>
  );
}

export default App;
