import styled from '@emotion/styled';
import { Form, Field } from 'formik';

const Main = styled(Form)`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 30px;
  border: 2px solid #ff55aa;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PhonebookForm = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-weight: 600;
  justify-content: center; 
  align-items: center; 
  margin-bottom: 15px;
  font-size: 18px; /
  text-align: center;
`;

const PhonebookInput = styled(Field)`
  margin-top: 5px;
  padding: 10px;
 width:90%;
  border: 2px solid #ff55aa;
  border-radius: 5px;
  font-size: 16px;
  transition: border 0.2s;
  &:focus {
    outline: none;
  
     border-color: #e77600;
                        box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
  }
`;

const Button = styled.button`
                    outline: 0;
                    grid-gap: 8px;
                    align-items: center;
                    background-color: #ff90e8;
                    color: #000;
                    border: 1px solid #000;
                    border-radius: 4px;
                    cursor: pointer;
                    display: inline-flex;
                    flex-shrink: 0;
                    font-size: 20px;
                    gap: 8px;
font-weight: 600;
                    justify-content: center;
                    line-height: 1.5;
                    overflow: hidden;
                    padding: 12px 16px;
                    text-decoration: none;
                    text-overflow: ellipsis;
                    transition: all .14s ease-out;
                    white-space: nowrap;
                    :hover {
                        box-shadow: 4px 4px 0 #000;
                        transform: translate(-4px,-4px);
                    }
                    :focus-visible{
                        outline-offset: 1px;
                    }
                
}
`;

const Error = styled.p`
  color: #ff0000;
  font-size: 14px;
  margin-top: 5px;
`;

export { Main, PhonebookForm, PhonebookInput, Button, Error };

