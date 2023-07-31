import Advice from '../features/advices/Advice';
import Card from '../shared/components/card/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card>
        <Advice/>
      </Card>
    </div>
  );
}

export default App;
