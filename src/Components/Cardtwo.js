import React from "react"
import styled from "styled-components"



const Cardtwo = (props) =>{
    return(
        <Card>
            <Section>
            <Pagespan>{props.text}</Pagespan>
            <span><img src={props.img} alt=""/></span>
            </Section>

            <Section>
            <Numb>{props.Numbs}</Numb>
            <Percent>{props.Numbsx}</Percent>
            </Section>

        </Card>
    )

}

export default Cardtwo;

const Card = styled.div`
width: 23%;
height: 15vh;
background-color:${(props) => props.theme.butTog};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 5px;
transition: 0.4s ease-in-out;
cursor: pointer;

&:hover{
    background-color: white;
}

`;

const Section = styled.div`
width: 85%;
height: 7vh;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Numb = styled.div`
font-size: 30px;
font-weight: bolder;
font-family: arial;
`;

const Pagespan = styled.div`
font-size: 12px;
font-weight: bolder;
font-family: arial;
`;

const Percent = styled.div`
font-size: 12px;
font-weight: bolder;
font-family: arial;
`;