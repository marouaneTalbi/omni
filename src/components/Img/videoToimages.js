import React, { useEffect, useRef, useState } from 'react';
import { Img } from '.';

export function VideoThumbnailCapture({ videoUrl, getImageUrl }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [image, setImage] = useState('');

  const getURL = (image) => {
    return getImageUrl(image)
  }

    useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    video.addEventListener('loadedmetadata', () => {
        const intervalInSeconds = Math.ceil(video.duration / 10);; // Capture frames every 60 seconds
        let currentTime = 0;
        // console.log(video.duration)
        const capturedImages = [];
        const captureFrame = () => {
        video.currentTime = currentTime;
        video.onseeked = () => {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const thumbnailUrl = canvas.toDataURL('image/jpeg');
            capturedImages.push(thumbnailUrl);
            currentTime += intervalInSeconds;

            if (currentTime >= video.duration) {
            setImages(capturedImages);  
            return;
            }
            captureFrame();
        };
        };
        captureFrame();
    });
    video.src = videoUrl;

    }, [videoUrl]);

    useEffect(() => {
        if(images.length !== 0){
            combineImages(images).then((e) => {
                setImage(e)
            });
        }
    }, [images])

    useEffect(() => {
        if(image){
            getURL(image);
        }
    }, [image])

  const combineImages = async (images) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let totalWidth = 0;
    let maxHeight = 0;
  
    const loadedImages = await Promise.all(
      images.map((base64Data) => {
        return new Promise((resolve) => {
          const image = new Image();
          image.src = base64Data;
  
          image.onload = () => {
            totalWidth += image.width;
            maxHeight = Math.max(maxHeight, image.height);
            resolve(image);
          };
        });
      })
    );
  
    canvas.width = totalWidth;
    canvas.height = maxHeight;
  
    let x = 0;
    loadedImages.forEach((image) => {
      context.drawImage(image, x, 0);
      x += image.width;
    });
  
    const combinedImageData = canvas.toDataURL('image/jpeg');
    setImage(combinedImageData);

    return canvas.toDataURL('image/jpeg');
  };


  return (
    <div>
      <video ref={videoRef} style={{ display: 'none' }}></video>
      <canvas ref={canvasRef}  style={{ display: 'none', width:'20%' }}></canvas>
      {/* <div style={{display:'flex', height:100, width:'100%', backgroundColor:'red'}}>
            {
                image && <img src={image} alt="img" style={{height:'100%', width:'100%'}} />
            }
      </div> */}
  
    </div>
  );
}

