import './App.css';
import Header from './Header';
import Navbar from './Navbar';
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
