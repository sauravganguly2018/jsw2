import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './CreateProcessManualy.css';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Components/CommonComponents/Loader/Loader';
import CreateProcessManualyAction from '../../store/Actions/CreateProcessManualyAction';

export default function CreateProcessManualy() {
    const [loading, setLoading] = useState(false);
    const [process_name, setProcessName] = useState('');
    // const [role, setRole] = useState(null);
    const [current_state, setCurrentState] = useState('');
    const [to_state, setToState] = useState('');
    const [action_event, setActionEvent] = useState('');
    const [action, setAction] = useState('');
    const [routing, setRouting] = useState('');
    const [max_frequency, setMaxFrequency] = useState('');
    // const [max_time_limit, setMaxTimeLimit] = useState('');
    const [start_date, setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log('state: ', state)


    const handleSubmit = (event) => {
        const params = {
            process_name: process_name,
            role: ["USER", "SYSTEM", "THIRD PARTY"],
            current_state: current_state,
            to_state: to_state,
            action_event: action_event,
            pre_condition: "",
            post_condition: "",
            action: action,
            routing: routing,
            max_frequency: max_frequency,
            // max_time_limit: "(* * * * 3)",
            start_date: start_date,
            end_date: end_date,
            is_active: true,
            version: "1",
            description: ""
        }
        event.preventDefault();
        setLoading(state.CreateProcessManualy.isLoggedIn);
        try {
            dispatch(CreateProcessManualyAction(params));
            setProcessName('');
            setCurrentState('');
            setToState('');
            setActionEvent('');
            setAction('');
            setRouting('');
            setMaxFrequency('');
            setStartDate('');
            setEndDate('');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        console.log('state: ', state)
        setLoading(state.CreateProcessManualy.isLoggedIn);

    };
    return (
        <>
            {/* <Header /> */}
            <div className='main-content'
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <h1 className='process-name'>Create Process</h1>
                {loading ? (<Loader />) : (
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className='main-input'>
                                    <label>Process Name:</label><br></br>
                                    <input required type="text" value={process_name} onChange={(e) => setProcessName(e.target.value)} />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className='main-input'>
                                    <label>Current State:</label><br></br>
                                    <input required type="text" value={current_state} onChange={(e) => setCurrentState(e.target.value)} />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className='main-input'>
                                    <label>To State:</label><br></br>
                                    <input required type="text" value={to_state} onChange={(e) => setToState(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className='main-input'>
                                    <label>Action Event:</label><br></br>
                                    <input required type="text" value={action_event} onChange={(e) => setActionEvent(e.target.value)} />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className='main-input'>
                                    <label>Action:</label><br></br>
                                    <input required type="text" id="action" name="action" value={action} onChange={(e) => setAction(e.target.value)} />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className='main-input'>
                                    <label>Routing:</label><br></br>
                                    <input required type="text" value={routing} onChange={(e) => setRouting(e.target.value)} />
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className='main-input'>
                                    <label>Max Frequency:</label><br></br>
                                    <input required type="text" value={max_frequency} onChange={(e) => setMaxFrequency(e.target.value)} />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className='main-input'>
                                    <label>Start Date:</label><br></br>
                                    <input required type="date" value={start_date} onChange={(e) => setStartDate(e.target.value)} />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className='main-input'>
                                    <label>End Date:</label><br></br>
                                    <input required type="date" value={end_date} onChange={(e) => setEndDate(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        {state.CreateProcessManualy.success && (<p className='success'>Data submitted successfully..!</p>)}
                        {state.CreateProcessManualy.error && (<p className='error'>Please contact administrator..!</p>)}

                        <div className="submit-button">
                            <button className='button' type="submit">Submit</button>
                        </div>
                    </form>
                )}
            </div >
            {/* <Footer /> */}
        </>
    )
}
