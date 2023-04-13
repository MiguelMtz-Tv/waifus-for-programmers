import { useState } from "react";
import Content from "./layout/Content";
import Sidebar from "./layout/Sidebar";

function App(){
    const [lang, setlang] = useState('Javascript');

    const setLangs = (data) => {
        setlang(data);
    }

    return(
        <div>
            <Sidebar onData={setLangs}/>
            <Content lang={lang}/> 
        </div>
    )
}

export default App;
