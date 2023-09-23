import styled from '@emotion/styled';

 const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 600;
   text-transform: uppercase;
  

`;

const FilterInput = styled.input`
 
  margin-top: 5px;
                    background-color: #fff;
                    height: 31px;
                    padding: 3px 7px;
                    line-height: normal;
                    border: 1px solid #a6a6a6;
                    border-top-color: #949494;
                    border-radius: 3px;
                    box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;
                    outline: 0;
                    color: #111;
                    font-size: 25px;
                    :focus{
                        border-color: #e77600;
                        box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
                    }
                 


  border: 2px solid #ff55aa;
  border-radius: 5px;
`;


export{FilterLabel,FilterInput }