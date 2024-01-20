import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone-uploader';
import Modal from 'react-modal';

const Upload = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/images');
                setImages(response.data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    const handleUploadSuccess = (file, response) => {
        console.log('Image uploaded successfully!');
        // You can update the state or trigger a re-fetch of images if needed
    };

    const getUploadParams = ({ file, meta }) => {
        const body = new FormData();
        body.append('image', file);
        return { url: 'http://localhost:5001/api/upload', body };
    };

    
    return (
        <div>
            <h1>Image Gallery</h1>

            <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleUploadSuccess}
                accept="image/jpeg, image/jpg"
                inputContent="Drag or click to upload JPEG images"
                styles={{
                    dropzone: { borderColor: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '20px', borderRadius: '10px', cursor: 'pointer', transition: 'background-color 0.3s ease' },
                    dropzoneActive: { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
                }}
            />

            
        </div>
    );
};

export default Upload;
