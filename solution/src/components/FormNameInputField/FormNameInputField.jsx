import React from 'react';
import {
    ErrorMessage,
    FormGroup, Input,
    InputAndErrorMessageWrapper,
    InputWrapper,
    Label,
    LabelInputWrapper, LoadingMessage
} from "./FormNameInputField.style";


function FormNameInputField({ name, isLoading, isNameValidated, setName }) {
    return (
        <FormGroup>
            <LabelInputWrapper>
                <Label htmlFor="name">Name:</Label>
                <InputAndErrorMessageWrapper>
                    <InputWrapper>
                        <Input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {isLoading && <LoadingMessage>Loading...</LoadingMessage>}
                    </InputWrapper>
                    {!isNameValidated && !isLoading && (
                        <ErrorMessage>Name is invalid</ErrorMessage>
                    )}
                </InputAndErrorMessageWrapper>
            </LabelInputWrapper>
        </FormGroup>
    );
}

export default FormNameInputField;
