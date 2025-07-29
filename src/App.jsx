import './App.css'
import DarkMode from './DarkMode/DarkMode.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from './Home/Home.jsx';
import { isMobile } from 'react-device-detect';


function HomePage() {
    return (
        <>
            <Home />
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <div className="darkmode">
                <DarkMode />
            </div>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
