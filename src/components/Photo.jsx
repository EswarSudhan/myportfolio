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

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('https://myportfolioapi-delta.vercel.app/api/images');
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
        return { url: 'https://myportfolioapi-delta.vercel.app/api/upload', body };
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
           
        

            <div className="photo-containera">
                {images.map((image) => (
                    <div key={image._id} className="image-containera">
                        <img
                            src={`https://myportfolioapi-delta.vercel.app${image.path}`}
                            alt={image.filename}
                            className="image-thumbnail"
                            onClick={() => handleImageClick(image)}
                        />
                        {/* SaveAltIcon and other icons if needed */}
                    </div>
                ))}
            </div>

            {/* Modal for displaying the selected image */}
            <Modal
                isOpen={!!selectedImage}
                onRequestClose={handleModalClose}
                contentLabel="Enlarged Image"
            >
                {selectedImage && (
                    <img
                        src={`https://myportfolioapi-delta.vercel.app/${selectedImage.path}`}
                        alt={selectedImage.filename}
                        className="enlarged-image"
                    />
                )}
            </Modal>
        </div>
    );
};

export default Photos;
