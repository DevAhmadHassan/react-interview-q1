import React from 'react';
import {ButtonContainer, StyledButton} from "./FormButton.style";

function FormButton({ handleAddClick, handleCancelClick, isNameValidated }) {
    return (
        <ButtonContainer>
            <StyledButton onClick={handleAddClick} disabled={!isNameValidated}>
                Add
            </StyledButton>
            <StyledButton onClick={handleCancelClick} cancel>
                Cancel
            </StyledButton>
        </ButtonContainer>
    );
}

export default FormButton;
