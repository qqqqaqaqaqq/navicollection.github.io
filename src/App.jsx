import './App.css'
import DarkMode from './DarkMode/DarkMode.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
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
        <BrowserRouter basename="/navicollection.github.io">
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
