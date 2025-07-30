import './Home.css';
import { useState, useEffect } from 'react';
import { Navibar } from '../NavBar1/Navibar.jsx';
import { isMobile } from 'react-device-detect';
function RenderComponent({ toggle }) {
    switch (toggle) {
        case "0":
            return null;
        case "1":
            return <Navibar />;
        default:
            return null;
    }
}

export function Home() {
    const [toggle, settoggle] = useState("");
    const [MobileMode] = useState(() => {
        const saved = sessionStorage.getItem('isMobile');
        return saved !== null ? saved === 'true' : isMobile;
    });

    console.log(MobileMode);
    useEffect(() => {
        if (MobileMode === true) {
            import('./HomeMobile.css');
        }
    }, [MobileMode])

    return (
        <>
            {<RenderComponent toggle={toggle} />}

            <div className='nav-collection'>
                <div
                    className="button-collection"
                >
                    <button
                        onClick={() => {
                            settoggle("1");
                        }}
                    >
                        Navibar
                    </button>
                    <button
                        onClick={() => {
                            settoggle("0");
                        }}
                    >
                        Work in progress...
                    </button>
                </div>
            </div>
        </>
    )
}
