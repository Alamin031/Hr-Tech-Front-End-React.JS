import './App.css';
import Header from './Layout/Header';
import Navbar from './Layout/Navbar';
import Offer from './offer'; 
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        {/* Add your main content here */}
        <Offer />
      </main>
    </div>
  );
}

export default App;
