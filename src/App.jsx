import './App.css'
import DarkMode from './DarkMode/DarkMode.jsx'
import MobileMode from './MobileMode/MobileMode.jsx'
import { Route, Routes, HashRouter } from 'react-router-dom';
import { Home } from './Home/Home.jsx';

function HomePage() {
    return (
        <>
            <Home />
        </>
    )
}

function App() {
    return (
        <HashRouter>
            <div className="setting">
                <div className="MobileMode">
                    <MobileMode />
                </div>
                <div className="darkmode">
                    <DarkMode />
                </div>
            </div>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </HashRouter>
    )
}

export default App;
