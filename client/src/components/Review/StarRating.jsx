import { React, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from "styled-components";

const StyledStarRating = styled.div`
    margin:0px;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const StyledLabel = styled.label`
    margin: 0px ;
    font-size: 4rem;
    cursor: pointer;
    `
const Input = styled.input`
display: none;
`;


const StartRating = ({rating, setRating}) => {
    const [hover, serHover] = useState(null);
    return(
        <StyledStarRating>
            {
                [...Array(5)].map((star,i) => {
                    const ratingValue = i + 1;
                    return (
                        <StyledLabel> 
                            <Input type="radio" name="rating" value={ ratingValue } onClick={ () => setRating(ratingValue)} />
                            <FaStar key={star} color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} size={27} 
                            onMouseEnter={() => serHover(ratingValue)} onMouseLeave={() => serHover(null)} />
                        </StyledLabel>
                    )
                })
            }
        </StyledStarRating>
    )
};

export default StartRating;