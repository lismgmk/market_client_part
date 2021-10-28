import React from 'react';
import {useLocation} from "react-router-dom";

const Shop = () => {
    const path = useLocation()
    console.log(path)
    return (
        <div>
            shop page5
        </div>
    );
};

export default Shop;