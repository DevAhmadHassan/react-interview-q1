import React from 'react';
import {
    FormGroup,
    Label,
    LabelInputWrapper,
    Select
} from "./FormSelectComponent.style";

function FormSelectComponent({ country, handleCountryChange, locations }) {
    return (
        <FormGroup>
            <LabelInputWrapper>
                <Label htmlFor="country">Country:</Label>
                <Select id="country" value={country} onChange={handleCountryChange}>
                    <option value="">Select Country</option>
                    {locations.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Select>
            </LabelInputWrapper>
        </FormGroup>
    );
}

export default FormSelectComponent;
