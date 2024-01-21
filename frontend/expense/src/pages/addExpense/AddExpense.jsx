import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Select from 'react-select';
import { useLocation } from 'react-router-dom';

const categoryOptions = [
    { value: 'food', label: 'Food' },
    { value: 'clothing', label: 'Clothing' },
    // Add more category options as needed
];

const subCategoryOptions = [
    { value: 'vegetables', label: 'Vegetables' },
    { value: 'shirts', label: 'Shirts' },
    // Add more sub-category options as needed
];


const GlobalStyle = createGlobalStyle`
body {
margin: 0;
padding: 0;
overflow:hidden;
}
`;

const AddExpense = () => {
    const [dateAndTime, setDateAndTime] = useState(new Date().toISOString().slice(0, 16));

    const handleDateAndTimeChange = (e) => {
        setDateAndTime(e.target.value);
    };

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Inside>
                <FormSection>
                    <Switches>Add Expense</Switches>
                    <FormFields>
                        <FormField>
                            <Label>Category*:</Label>
                            <Select options={categoryOptions} placeholder="Select category" />
                        </FormField>
                        <FormField>
                            <Label>Sub Category*:</Label>
                            <Select options={subCategoryOptions} placeholder="Select subcategory" />
                        </FormField>
                        <FormField>
                            <Label>Description:</Label>
                            <Input type="text" placeholder="Enter description" />
                        </FormField>
                        <FormField>
                            <Label>Amount:</Label>
                            <Input type="number" placeholder="Enter amount" />
                        </FormField>
                        <FormField>
                            <Label>Date & Time:</Label>
                            <Input
                                type="datetime-local"
                                value={dateAndTime}
                                onChange={handleDateAndTimeChange}
                            />
                        </FormField>
                    </FormFields>
                </FormSection>
                <SubmitButton>
                    Save
                </SubmitButton>
            </Inside>
        </>
    );
};

const Inside = styled.div`
  max-width: 600px;
  height: calc(100vh - 50px);
  margin: 0 auto;
  padding: 10px 10px 100px 10px;
  background: #fff;
  overflow-y:scroll;
`;


const FormSection = styled.div`
  max-width: 600px;
  margin: 10px;
`;

const Switches = styled.div`
  margin: 10px;
  font-size: 20px;
  font-weight: 800;
  padding: 10px 0;
  color: #305750;
    font-family: 'Poppins', sans-serif;
`;

const FormFields = styled.div`
  margin: 10px;
    font-family: 'Nunito', sans-serif;

`;

const FormField = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
  color: #58998C;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  margin: 0 10px 50px;
  color:white;
  background:#58998C;
  padding: 8px 30px;
  font-size:16px;
  border-radius:5px;
  float:right;
  border:none;
  border-right:  1px solid #305750;  /* Add right border */
  border-bottom: 1px solid #305750; /* Add bottom border */
`;

// export default AddExpense;


const theme = {};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <AddExpense />
            </>
        </ThemeProvider>
    );
};

export default App;