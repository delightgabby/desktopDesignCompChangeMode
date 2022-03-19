import React from "react"
import styled from "styled-components"


const Cardone = (props) =>{
    return(
        <Card bdcolor={props.bdcolor}>
            <Spanone><img src={props.img} alt=""/>@nathanf</Spanone>
            <Spantwo>{props.text}</Spantwo>
            <Spanthree>{props.Secondtext}</Spanthree>
            <Spanfour>{props.Thirdtext}</Spanfour>

        </Card>
    )

}

export default Cardone;

const Card = styled.div`
width: 23%;
height: 25vh;
background-color:${(props) => props.theme.butTog};
display: flex;
justify-content: left;
align-items: center;
flex-direction: column;
border-radius: 5px;
border-top: ${(props)=>props.bdcolor};
transition: 0.4s ease-in-out;
cursor: pointer;
font-family: arial;
flex-wrap: wrap;

&:hover{
    background-color: white;
}
`;

const Spanone = styled.div`
width: 45%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 25px;
`;

const Spantwo = styled.div`
font-size: 40px;
font-weight: bolder;
font-family: arial;
margin-top: 23px;
`;

const Spanthree = styled.div`
font-size: 12px ;
font-weight: bolder;
`;

const Spanfour = styled.div`
font-size: 12px ;
font-weight: bolder;
margin-top: 18px;
`;