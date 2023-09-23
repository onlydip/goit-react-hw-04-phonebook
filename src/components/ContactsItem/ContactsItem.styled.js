import styled from '@emotion/styled';

 const ListItem = styled.li`
  display: flex;
  margin-bottom: 10px;
  font-weight: 500;
  align-items: flex-end;
  font-weight: 600;
  
    text-transform: none;
`;

 const ItemName = styled.p`
  margin-right: 10px;
  display: flex;
  align-items: flex-end;
`;

 const ItemNumber = styled.p`
  margin-right: 30px;
`;

 const DeleteButton = styled.button`
 
                  display: inline-block;
  outline: 0;
  cursor: pointer;
  border-radius: 6px;
  border: 2px solid #ff4742;
  color: #ff4742;
  background: 0 0;
  padding: 0px 10px; 
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1.5px 0px;
  font-weight: 750;
  font-size: 15px;
  height: 25px;
  :hover {
    background-color: #ff4742;
    color: #fff;
                }
                margin-left: auto; 
  }
`;

export { ListItem, ItemName, ItemNumber, DeleteButton };