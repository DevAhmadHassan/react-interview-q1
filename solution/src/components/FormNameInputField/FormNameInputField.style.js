import styled from 'styled-components';

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.label`
  margin-top: 5px;
  margin-right: 5px;
`;

export const InputAndErrorMessageWrapper = styled.div`
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

export const LoadingMessage = styled.div`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: auto;
`;
