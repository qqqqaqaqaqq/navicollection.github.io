import { isMobile } from 'react-device-detect';

export function MobilMode() {

    return (
        <div className='mobilemode'>
            <>
                {isMobile ? <MobileComponent /> : <DesktopComponent />}
            </>
        </div>
    )
}