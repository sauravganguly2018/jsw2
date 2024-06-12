import React, { useState, useEffect } from 'react';
import StepProgressBar from "../../Components/CommonComponents/StepProgressBar/StepProgressBar";
import './Registration.css';

import { getData, handleCurrentInstance, handleNextStep } from '../../store/Actions/registrationProgressAction';

import Header from '../../Components/CommonComponents/Header/Header';
import Footer from '../../Components/CommonComponents/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Components/CommonComponents/Loader/Loader';
import TextInput from '../../Components/CommonComponents/InputFieldValidation/TextInput';
import Dropdown from '../../Components/CommonComponents/InputFieldValidation/Dropdown';


const Registration = () => {
    //////////////
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const Processes = state.registration.data;
    const { currentStep } = useSelector(state => state.registration);
    const [process_name, setProcessName] = useState('');
    const [instance_id, setInstanceId] = useState('');
    const [action_event, setActionEvent] = useState('');
    const [user_id, setUserId] = useState('');
    const [role, setRole] = useState('USER');
    const [loading, setLoading] = useState(false);
    const steps = Processes;

    const roles = [
        { label: 'USER', value: 'USER' },
        { label: 'SYSTEM', value: 'SYSTEM' },
        { label: 'THIRD PARTY', value: 'THIRD PARTY' },
    ];


    const handleRoleChange = (event) => {
        setRole(event);
        // console.log('role: ',role)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const params = {
            process_name: process_name,
            key: 'process_name'
        }
        try {
            await dispatch(getData('knowledgeplane', params));
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        setLoading(false);
    }

    const handleNext = () => {
        setLoading(true);
        var params = {
            instance_id: instance_id,
            user_id: user_id,
            process_name: steps.data[currentStep].process_name,
            role: role,
            action_event: steps.data[currentStep].action_event,
        }

        try {
            dispatch(handleNextStep(steps, currentStep, 'knowledgeinstance', params));
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        setLoading(false);
    };


    const handleCurrentInstant = (event) => {
        console.log(instance_id)
        console.log(action_event)

        setLoading(true);
        event.preventDefault();

        if (instance_id != '') {
            var params = {
                instance_id: instance_id,
                process_name: steps.data[currentStep].process_name,
            }
            console.log('isActiveBtn: ', state.registration.isActiveBtn)
            try {
                dispatch(handleCurrentInstance(steps, currentStep, 'currentinstance', `?process_name=${params.process_name}&instance_id=${instance_id}`));
                console.log('state: ', state)
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
        if (action_event != '') {
            var params = {
                action_event: action_event,
                process_name: steps.data[currentStep].process_name,
            }
            console.log('isActiveBtn: ', state.registration.isActiveBtn)
            try {
                dispatch(handleCurrentInstance(steps, currentStep, 'knowledgeplane', `?process_name=${params.process_name}&action_event=${action_event}`));
                console.log('state: ', state)
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
        setLoading(false);
    }


    return (
        <>
            {/* <div className='container'> */}
            <h1 className='process-name'>Process</h1>
            {loading ? <Loader /> :
                <>
                    {(steps == undefined) && (
                        <div className="form-container"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <form className="form" onSubmit={handleSubmit}>
                                <div className='input-div'>
                                    <label htmlFor="process_name">Process Name:</label>
                                    <div>
                                        <TextInput required={true} value={process_name} onChange={(e) => setProcessName(e)} />
                                    </div>
                                </div><br></br>
                                <div className="submit-button">
                                    <button className='button' type="submit">Next</button>
                                </div>
                            </form>
                        </div>
                    )}
                </>
            }


            {(steps != undefined && steps.data.length != 0) && (
                <>
                    {loading ? <Loader /> :
                        <div className="form-container">
                            <form className="form" onSubmit={handleCurrentInstant}>
                                <div className="grid-item">
                                    {/* {state.registration.isActiveBtn && ( */}
                                    <div className='input-div'>
                                        <label htmlFor="process_name">Instance Id:</label>
                                        <div>
                                            <TextInput value={instance_id} onChange={(e) => setInstanceId(e)} />
                                        </div>

                                    </div>
                                    {state.registration.isActiveBtn && (
                                        <>
                                            <div className='div-or'>Or</div>
                                            <div className='input-div'>
                                                <label htmlFor="action_event">Action Event:</label>
                                                <div>
                                                    <TextInput value={action_event} onChange={(e) => setActionEvent(e)} />
                                                </div>

                                            </div><br></br>
                                        </>
                                    )}


                                    {(!state.registration.isActiveBtn && currentStep < steps.data.length) ? (
                                        <>
                                            <div className='input-div'
                                                data-aos="zoom-in-up">
                                                <label htmlFor="process_name">User Role:</label>
                                                <div>
                                                    <Dropdown options={roles} value={role} onChange={handleRoleChange} />
                                                </div>

                                            </div><div className='input-div'
                                                data-aos="zoom-in-up">
                                                <label htmlFor="process_name">User Id:</label>
                                                <div>
                                                    <TextInput required value={user_id} onChange={(e) => setUserId(e)} />
                                                    {/* <input required type="text" id="user_id" name="user_id" value={user_id} onChange={(e) => setUserId(e.target.value)} /> */}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        steps.data.length === currentStep ? (
                                            <p className='process-end'>The task has been completed! </p>
                                        ) : null
                                    )}
                                </div>
                                {state.registration.isActiveBtn && (
                                    <div className="submit-button">
                                        <button disabled={(instance_id === '' && action_event === '')} className={`btn1 ${(instance_id === '' && action_event === '') ? 'disabled1' : ''}`} type="submit">{loading ? 'Loading...' : 'Submit'}</button>
                                    </div>
                                )}

                            </form>
                        </div>
                    }
                </>
            )}


            <>

                {steps != undefined && (
                    <StepProgressBar
                        steps={steps}
                        currentStep={currentStep}
                    />
                )}

                {(steps != undefined) && (
                    <div className='task-container'>{(currentStep < steps.data.length && steps.data.length != 0) && (
                        <>
                            <p>Action: {steps.data[currentStep].action}</p><br></br>
                            <p>Action Event: {steps.data[currentStep].action_event}</p><br></br>
                            <p>Current State: {steps.data[currentStep].current_state}</p><br></br>
                            <p>To State: {steps.data[currentStep].to_state}</p>
                        </>
                    )}
                        <div>
                            {(steps != undefined && steps.data.length == 0) && (
                                <p><span className='process-notfound'>Process Not Found!</span></p>
                            )}


                            {(currentStep >= steps.data.length && steps.data.length != 0) && (
                                <>
                                    <p><span className='process-end'>Process Stop</span>
                                    </p>
                                </>
                            )}
                        </div>

                    </div>
                )}

                {(steps != undefined) && (
                    <div className='btn-main'>
                        {currentStep < steps.data.length && (
                            <button disabled={(user_id === '' || role === '' || instance_id === '')} className={`btn1 ${(user_id === '' || role === '' || instance_id === '') ? 'disabled1' : ''}`} onClick={handleNext}>{loading ? <Loader /> : 'Next'}</button>
                        )}
                    </div>
                )}
            </>
            {/* </div> */}

        </>
    )
}


export default Registration;

