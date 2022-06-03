import React, { Children } from 'react';
import Navigation from '../component/Navigation/Navigation';
import Footer from '../component/Footer/Footer';

const Base = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    )
}

export default Base;
