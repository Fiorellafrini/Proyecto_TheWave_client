import axios from 'axios';
import { React, useState } from "react";
import { useSelector } from 'react-redux';
import styled from "styled-components";
import StartRating from './StarRating';

const Review = ({ onChange }) => {
    const { logUser: globalUser } = useSelector((state) => state.logUser);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

    /* const handleRatingChange = (event) => {
        const newRating = Number(event.target.value);
        setRating(newRating);
        if (typeof onChange === 'function') {
            onChange(newRating);
        }
        }; */
    const handleChange = event => {
        setComment( event.target.value);
    };
    const handleSubmit = event =>{
        event.preventDefault();
        axios.post(`http://localhost:3000/comment`,{user_id:globalUser.id,rating,comment})
        setComment('');
    }
  
    return (
        <ReviewContainer onSubmit={handleSubmit}>
      
        <Label>Valora tu experiencia:</Label>
        <StartRating rating={rating} setRating={setRating}/>
        <TextArea
            name="comment"
            value={comment}
            onChange={e => handleChange(e)}
            placeholder="Cuentale a los demas usuarios como fue tu experiencia... "
        />
        <br/>
        <SubmitButton type='submit' >Enviar</SubmitButton>
        </ReviewContainer>
    
    )
};
const ReviewContainer = styled.form`
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.3);
`;

const Label = styled.p`
    display: flex;
    flex-direction:column;
    justify-content: center
    align-items: center;
    font-size: 18px;
    font-weight: bold;
`;



const TextArea = styled.textarea`

  margin-top: 20px;
  height: 100px;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid rgba(0,0,0,0.1);
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  background-color: #008CBA;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #0077A3;
  }
`;
export default  Review;
