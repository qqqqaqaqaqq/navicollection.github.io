import './Home.css';
import { useState } from 'react';
import { Navibar } from '../NavBar1/Navibar.jsx';

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
