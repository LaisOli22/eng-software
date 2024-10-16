import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Challenge from './pages/Challenge';
import Code from './pages/Code';
import Explain from './pages/Explain';
import Study from './pages/Study';
import TopicSelection from './pages/TopicSelection';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/desafio" element={<Challenge />} />
                <Route path="/codigo" element={<Code />} />
                <Route path="/explique" element={<Explain />} />
                <Route path="/estudar" element={<Study />} />
                <Route path="/selecionar" element={<TopicSelection />} />
            </Routes>
        </Router>
    );
}

export default App;

