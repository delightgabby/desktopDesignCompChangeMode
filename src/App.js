import React, {useState} from "react"
import Head from "./Components/Head"
import {ThemeProvider} from "styled-components"
// import pix1 from "./img/sdc.jpg"




// const lightTheme = {
//     <img src={pix1}/>,
//     butTog={}
// }



const lightTheme = {
    pBackground: "#c99402",
    butTog: "lightblue",
}

const darkTheme = {
    pBackground: "#0073ff",
    butTog: "gold",
}

const themes ={
    light: lightTheme,
    dark: darkTheme
}


const App = () => {

    const [theme, setTheme] = useState("light")
    return(
        <ThemeProvider theme={themes[theme]}>
        <Head theme={theme} setTheme={setTheme}  width="100%" height="97vh" Innnerbgcolor="" Innerheight1="12vh" Innerheight3="10vh" Innerheight="18vh" displayflex2="space-between" displayflex4="space-between" displayflex="space-between"/>
        </ThemeProvider>
    )

}

export default App;

