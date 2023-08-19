import { useState, useEffect } from 'react';
import Menu from './Menu';
import Content from './Content';

import './style.css'

const MainContainer = () => {
    const [tab, setTab] = useState("category");
    
    useEffect(()=>{
        console.log(tab);
    }, [tab])
    
    return (
        <div className='main-container'>
            <Menu
                className='main-container-left main-container-element'
                tab={tab}
                setTab={setTab}
            />
            <Content
                className='main-container-right main-container-element'
                tab={tab}
                setTab={setTab}
            />
        </div>
    )
}

export default MainContainer;