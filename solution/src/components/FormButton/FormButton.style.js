import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  flex: 1;
  border: ${(props) => (props.cancel ? '1px solid #ccc' : 'none')};
  background-color: ${(props) =>
    props.disabled ? '#ccc' : props.cancel ? 'transparent' : '#4caf50'};
  color: ${(props) => (props.cancel ? '#4caf50' : '#fff')};

  &:hover {
    background-color: ${(props) =>
    props.disabled ? '#ccc' : props.cancel ? '#e0e0e0' : '#45a049'};
  }
`;
