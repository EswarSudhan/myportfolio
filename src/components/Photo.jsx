// Photos.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone-uploader';
import Modal from 'react-modal';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import './pho_sty.css';

const Photos = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const imgurl1= process.env.PUBLIC_URL + './img/gif.gif'

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

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleModalClose = () => {
        setSelectedImage(null);
    };

    const history = useNavigate();
 
  const redirectToPage = (pageUrl) => {
    history(pageUrl);}

    return (
        <div>
            <div className="navbar" >
          
        
          <h1 className="navbar-title" onClick={() => redirectToPage("/")}><ArrowBackIosNewIcon/>Back</h1>
          
        </div>
        <div className='gif'>
            <img src={imgurl1} alt="Under Construction" />
        </div>
           
        
{/*
            <div className="photo-containera">
                {images.map((image) => (
                    <div key={image._id} className="image-containera">
                        <img
                            src={`http://localhost:5001${image.path}`}
                            alt={image.filename}
                            className="image-thumbnail"
                            onClick={() => handleImageClick(image)}
                        />
                        
                    </div>
                ))}
            </div>

            
            <Modal
                isOpen={!!selectedImage}
                onRequestClose={handleModalClose}
                contentLabel="Enlarged Image"
            >
                {selectedImage && (
                    <img
                        src={`http://localhost:5001${selectedImage.path}`}
                        alt={selectedImage.filename}
                        className="enlarged-image"
                    />
                )}
            </Modal>*/}
        </div>
    );
};

export default Photos;
