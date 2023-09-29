import React from "react";
import styled from "styled-components";
import Cocktail  from './Cocktail';

const Cocktails = ({data}) => {
  return(  
    <Wrapper>
      { data.map((cocktail)=>{
        return (
        <Cocktail 
        {...cocktail} 
        key={cocktail.idDrink}
        />
        )
      })}
    </Wrapper>
  )
};

const Wrapper = styled.section`
  margin-top: 3rem;
  min-height: 20vh;
  display: grid;
  place-items: center;
  gap: 2rem;
  @media screen and (min-width: 753px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default Cocktails;
