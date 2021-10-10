import React, {useEffect, useState} from 'react';
import useWindowWidth from "../../hooks/useWindowWidth";

const Header = () => {

    const onSmallScreen =  useWindowWidth(768);

    return (
        <div>
            <p>You Are Browsing {onSmallScreen?"small":"large"} Device</p>
        </div>
    );
};

export default Header;
