import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { React, useState } from 'react';

function LandingPage() {
    const [displayFooter, setDisplayFooter] = useState(true);

    const setLandingPageFooterDisplayFalse = () => setDisplayFooter(false);

    return(
        <>
            <Header></Header>
            <SearchBar
                setLandingPageFooterDisplayFalse={setLandingPageFooterDisplayFalse}>
            </SearchBar>
            {displayFooter &&
                <Footer></Footer>
            }
        </>
    )
}

export default LandingPage;