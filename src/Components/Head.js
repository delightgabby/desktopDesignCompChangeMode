import React from "react"
import { BsToggle2Off, BsToggle2On } from "react-icons/bs"
import styled from "styled-components"
import Cardtwo from "..//Components/Cardtwo"
import Cardone from "../Components/Cardone"
import iconfb from "../img/icon-facebook.svg"
import iconfb2 from "../img/icon-facebook.svg"
import iconInsta from "../img/icon-instagram.svg"
import iconInsta2 from "../img/icon-instagram.svg"
import tweet from "../img/icon-twitter.svg"
import tweet2 from "../img/icon-twitter.svg"
import youtube from "../img/icon-youtube.svg"
import youtube2 from "../img/icon-youtube.svg"
import iconfb3 from "../img/icon-facebook.svg"
import tweet3 from "../img/icon-twitter.svg"
import iconInsta3 from "../img/icon-instagram.svg"
import youtube3 from "../img/icon-youtube.svg"



const Head = (props, { theme, setTheme }) =>{
    const changeTheme = () => {
        if (props.theme === "light") {
          props.setTheme("dark");
        } else {
          props.setTheme("light");
        }
      };
    
      const iconSwitch = 
      props.theme === "light" ? (
          <BsToggle2Off fontSize="25px" />
        ) : (
          <BsToggle2On fontSize="25px" />
        );


    return(
        <Container width={props.width} height={props.height} theme={theme} setTheme={setTheme}>
             <Header Innnerbgcolor={props.Innnerbgcolor} Innerheight={props.Innerheight1} >
                 <ihead>
            <h1>Social Media Dashboard</h1>
            <h3>Total Followers: 23,004 </h3>
            </ihead>
            <ModeSwitcher>
          <span>Mode &nbsp;</span>
          <Switch onClick={changeTheme}>{iconSwitch}</Switch>
        </ModeSwitcher>
        </Header>

             <Header displayflex2={props.displayflex2}>
        <Cardone img={iconfb3} text="1987" Secondtext="F&nbsp;O&nbsp;L&nbsp;L&nbsp;O&nbsp;W&nbsp;E&nbsp;R&nbsp;S" Thirdtext="&#9652;12Today" bdcolor="5px solid red"/>
        <Cardone img={tweet3} text="1044" Secondtext="F&nbsp;O&nbsp;L&nbsp;L&nbsp;O&nbsp;W&nbsp;E&nbsp;R&nbsp;S" Thirdtext="&#9652;99Today" bdcolor="5px solid blue"/>
        <Cardone img={iconInsta3} text="1044" Secondtext="F&nbsp;O&nbsp;L&nbsp;L&nbsp;O&nbsp;W&nbsp;E&nbsp;R&nbsp;S" Thirdtext="&#9652;1099 Today" bdcolor="5px solid indigo"/>
        <Cardone img={youtube3} text="1044"  Secondtext="S&nbsp;U&nbsp;B&nbsp;S&nbsp;C&nbsp;R&nbsp;I&nbsp;B&nbsp;E&nbsp;R&nbsp;S" Thirdtext="&#9662;144 Today" bdcolor="5px solid brown"/>
        </Header>
         
         
         
         
         <Header Innerheight3={props.Innerheight3}>
           <h2> Overview - Today</h2>
        </Header>

        <Header Innnerbgcolor={props.Innnerbgcolor} Innerheight={props.Innerheight} displayflex4={props.displayflex4}>
        <Cardtwo text="Page Views" img={iconfb} Numbs="87" Numbsx="&#9652;3%"/>
        <Cardtwo text="Likes" img={iconfb2} Numbs="52"  Numbsx="&#9662;2%"/>
        <Cardtwo text="Likes" img={iconInsta} Numbs="5462" Numbsx="&#9652;2257%"/>
        <Cardtwo text="Profile Views" img={iconInsta2} Numbs="52k" Numbsx="&#9652;1375%"/>
        </Header>
        
        <Header Innnerbgcolor={props.Innnerbgcolor} Innerheight={props.Innerheight} displayflex={props.displayflex}>
        <Cardtwo text="Retweets" img={tweet} Numbs="117" Numbsx="&#9652;303%"/>
        <Cardtwo text="Likes" img={tweet2} Numbs="507" Numbsx="&#9652;553%"/>
        <Cardtwo text="Likes" img={youtube} Numbs="107" Numbsx="&#9662;19%"/>
        <Cardtwo text="Total Views" img={youtube2} Numbs="1407" Numbsx="&#9662;12%"/>
        </Header>
       
       
        
        
        </Container>
        
    )

}

export default Head;

const Container = styled.div`
width: ${(props)=>props.width};
height: ${(props)=>props.height};
background-color: ${(props) => props.theme.pBackground};
display: flex;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
border-radius: 20px;
transition: 0.4s ease-in-out;

`;

const Header = styled.div`
width: 75%;
height: ${(props)=>props.Innerheight}  ${(props)=>props.Innerheight3} ${(props)=>props.Innerheight1};
background-color: ${(props)=>props.Innnerbgcolor};
display: flex;
justify-content:  ${(props)=>props.displayflex} ${(props)=>props.displayflex4} ${(props)=>props.displayflex2};
flex-wrap: wrap;
h1{
    font-family: arial;
    font-size: 25px ;
    line-height: 0px ;
}

h2{
    font-family: arial;
}

h3{
    font-family: arial;
    font-size: 15px ;
}

`;



const Switch = styled.div`
  color: ${(props) => props.theme.butTog};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms;
  cursor: pointer;
`;

const ModeSwitcher = styled.div`
  width: 69%;
  /* background-color: aliceblue; */
  display: flex;
  justify-content: right;
  align-items: center;

  span {
    font-size: 16px;
    font-weight: bolder;
    color: white;
  }
`;