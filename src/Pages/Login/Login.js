import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/Actions/authActions';
import './Login.css';

//Dialog
import MessageDialog from '../../Components/CommonComponents/Dialog/MessageDialog';
import Button from '@mui/material/Button';
import ConfirmDialog from '../../Components/CommonComponents/Dialog/ConfirmDialog';
//
//Validation input
import NumberInput from '../../Components/CommonComponents/InputFieldValidation/NumberInput';
import TextInput from '../../Components/CommonComponents/InputFieldValidation/TextInput';
import Dropdown from '../../Components/CommonComponents/InputFieldValidation/Dropdown';
import MultiSelectDropdown from '../../Components/CommonComponents/InputFieldValidation/MultiSelectDropdown';
import Autocomplete from '../../Components/CommonComponents/InputFieldValidation/Autocomplete';
//

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //Dialog
    const [openMsgDialog, setOpenMsgDialog] = useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    //
    //Validation Input
    const [number, setNumber] = useState('');
    const [text, setText] = useState('');
    //Dropdown
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedMultiOptions, setSelectedMultiOptions] = useState([]);
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    //AutoComplete
    const suggestions = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango', 'Grapes'];
    //
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    console.log('auth: ', auth.isLoggedIn);

    if (auth.isLoggedIn) {
        localStorage.setItem('isLoggedIn', auth.isLoggedIn);
        navigate('/home');
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await dispatch(loginUser({ username, password }));

        } catch (error) {
            console.error('Login error:', error);
        }
    };

    //Dialog
    const handleOpenDialog = () => {
        setOpenMsgDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenMsgDialog(false);
    };

    const handleOpenConfirmDialog = () => {
        setOpenConfirmDialog(true);
    };

    const handleCloseConfirmDialog = () => {
        setOpenConfirmDialog(false);
    };

    const handleConfirmAction = () => {
        // Your confirm action logic here
        console.log('Action confirmed');
        setOpenConfirmDialog(false);
    };
    //

    //Validation Input
    const handleNumberChange = (newValue) => {
        setNumber(newValue);
    };

    const handleTextChange = (newValue) => {
        setText(newValue);
    };

    const handleDropdownChange = (newValue) => {
        setSelectedOption(newValue);
    };

    const handleDropdownMultiChange = (selectedMultiOptions) => {
        setSelectedMultiOptions(selectedMultiOptions);
    };
    //AutoComplete
    const handleAutocompleteSelect = (selectedValue) => {
        console.log('Selected:', selectedValue);
    };
    //

    return (
        <>
            <div className='container'>
                <h1 className='process-name'>Login Process</h1>
                <div className='form-content'>
                    <form onSubmit={handleLogin}>
                        <div>
                            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>




                <div style={{ textAlign: 'center' }}>
                    <h1>Reusable Message Dialog</h1>
                    <Button variant="contained" onClick={handleOpenDialog}>
                        Open Message Dialog
                    </Button>
                    <MessageDialog
                        open={openMsgDialog}
                        onClose={handleCloseDialog}
                        message="Hello, World!"
                        btnName="Ok"
                    />
                </div>


                <div style={{ textAlign: 'center' }}>
                    <h1>Reusable Confirm Dialog</h1>
                    <Button variant="contained" onClick={handleOpenConfirmDialog}>
                        Open Confirm Dialog
                    </Button>
                    <ConfirmDialog
                        open={openConfirmDialog}
                        onClose={handleCloseConfirmDialog}
                        onConfirm={handleConfirmAction}
                        title="Confirm Action"
                        message="Are you sure you want to perform this action?"
                        btnCancle='Cancle'
                        btnConfirm='ok'
                    />
                </div>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <h1>Number Input Validation</h1>
                    <NumberInput value={number} onChange={handleNumberChange} />
                </div>

                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <h1>Text Input Validation</h1>
                    <TextInput value={text} onChange={handleTextChange} />
                </div>

                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <h1>Reusable Dropdown</h1>
                    <Dropdown options={options} value={selectedOption} onChange={handleDropdownChange} />
                </div>

                {/* <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Reusable Multiple Select Dropdown</h1>
                <MultiSelectDropdown options={options} selectedValues={selectedMultiOptions} onChange={handleDropdownMultiChange} />
                <p>Selected Options: {selectedMultiOptions.join(', ')}</p>
            </div> */}

                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <h1>Reusable Autocomplete</h1>
                    <Autocomplete suggestions={suggestions} onSelected={handleAutocompleteSelect} />
                </div>
            </div>


        </>
    )
}

export default Login;

