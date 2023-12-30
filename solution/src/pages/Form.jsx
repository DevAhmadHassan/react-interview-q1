import React, { useEffect, useState } from 'react';
import { isNameValid, getLocations } from '../mock-api/apis';
import FormNameInputField from '../components/FormNameInputField/FormNameInputField';
import FormSelectComponent from '../components/FormSelectComponent/FormSelectComponent';
import FormButton from '../components/FormButton/FormButton';
import FormTable from '../components/FormTable/FormTable';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 10px auto;
`;

function Form() {
    const [name, setName] = useState('');
    const [isNameValidated, setIsNameValidated] = useState(true);
    const [country, setCountry] = useState('');
    const [data, setData] = useState([]);
    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Fetch country options when the component mounts
        getLocations().then((options) => setLocations(options));
    }, []); // Empty dependency array ensures this effect runs only once

    useEffect(() => {
        const timeoutId = setTimeout(async () => {
            if (name.trim() !== '') {
                setIsLoading(true);

                // Check if the name is valid using the API
                const isValid = await isNameValid(name);
                setIsNameValidated(isValid);

                setIsLoading(false);
            }
        }, 500);

        // Cleanup function to clear the timeout on each keystroke
        return () => clearTimeout(timeoutId);
    }, [name]);

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handleAddClick = () => {
        if (name && country && isNameValidated) {
            setData([...data, { id:Math.random()*10, name, country }]);
            setName('');
            setCountry('');
        }
    };

    const handleCancelClick = () => {
        setName('');
        setCountry('');
        setIsNameValidated(true); // Reset the validation when canceling
    };

    return (
        <Container>
            <FormNameInputField
                name={name}
                isLoading={isLoading}
                isNameValidated={isNameValidated}
                setName={setName}
            />

            <FormSelectComponent
                country={country}
                handleCountryChange={handleCountryChange}
                locations={locations}
            />

            <FormButton
                handleAddClick={handleAddClick}
                handleCancelClick={handleCancelClick}
                isNameValidated={isNameValidated}
            />

            <FormTable data={data} />
        </Container>
    );
}

export default Form;
