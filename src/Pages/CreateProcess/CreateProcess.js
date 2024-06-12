import React, { useState, useEffect } from 'react';
import Header from '../../Components/CommonComponents/Header/Header';
import Footer from '../../Components/CommonComponents/Footer/Footer';
import uploadFile from '../../store/Actions/createPrrocessActions';
import './CreateProcess.css';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Components/CommonComponents/Loader/Loader';
import { Button } from 'antd';


const CreateProcess = () => {
    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState(null);
    const error = useSelector(state => state);
    const success = useSelector(state => state.createProcess);
    const [loading, setLoading] = useState(false);
    const [position, setPosition] = useState('start');

    console.log('success: ', success.uploadedFile)

    const handleFileChange = (event) => {
        setLoading(true);
        try {
            setSelectedFile(event.target.files[0]);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (selectedFile != null) {
            console.log('selectedFile: ', selectedFile.name);
        }

    }, [selectedFile]);

    console.log(success)
    console.log(error)

    const handleUpload = async () => {
        setLoading(true);
        if (selectedFile) {
            try {
                dispatch(uploadFile(selectedFile));
            } catch (error) {
                console.error('Error submitting form:', error);
            }
            setLoading(false);
        }
    };


    return (
        <>
            {loading ? <Loader /> :
                <div className='main-content'
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <h1 className='process-name'>Create Process</h1>
                    <div className="file-upload">
                        <label htmlFor="fileInput" className="file-label">
                            <span className="file-icon">📁</span>
                            <input type="file" accept=".csv" id="fileInput" className="file-input" onChange={handleFileChange} aria-label="Choose file" />
                            <span className="file-text">{selectedFile ? 'Change file' : 'Choose a file'}</span>
                        </label>
                    </div>

                    {selectedFile && success.uploadedFile == null && (
                        <div className='uploaded-file-name'>
                            Uploaded File: {selectedFile.name}
                        </div>
                    )}

                    {error && (
                        <div className='file-text error'>{error.createProcess.error}</div>
                    )}

                    {success.uploadedFile && (
                        <div className='file-text success'>{success.uploadedFile.message}</div>
                    )}

                    {selectedFile && success.uploadedFile == null && (
                        <div>
                            <Button type="primary" loading={loading} iconPosition={position} onClick={handleUpload}>
                                {/* Loading */}
                                {loading ? 'Loading' : 'Upload'}
                            </Button>
                            {/* {!loading ?
                                <button className='upload-btn' onClick={handleUpload}>
                                    Upload
                                </button>
                                :
                                <Button type="primary" loading iconPosition={position}>
                                    Loading
                                </Button>} */}
                        </div>
                    )}
                </div>
            }
        </>

    )
}

export default CreateProcess;