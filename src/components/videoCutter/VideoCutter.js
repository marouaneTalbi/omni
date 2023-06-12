import { useEffect, useRef, useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import MultiRangeSlider from "multi-range-slider-react";
import { VideoThumbnailCapture } from 'components/Img/videoToimages';

export default function VideoCutter({video, getVideoCutterData}) {
  const rangeSliderRef = useRef(null);
  const videoRef = useRef(null);
  const [videoDuration, setVideoDuration] = useState(0);
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState();
  const [image, setImg] = useState([]);


  useEffect(() => {
    
    videoRef.current.src = video;
  }, [video]);


  useEffect(() => {
    if( maxValue){
      getVideoData(minValue, maxValue);
    }
  }, [maxValue, minValue]);

  const getVideoData = (minValue, maxValue) => {
   return getVideoCutterData(minValue, maxValue);
  };

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  useEffect(() => {
    const handleLoadedMetadata = () => {
      setVideoDuration(videoRef.current.duration)
      set_maxValue(videoRef.current.duration);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    };
  }, [videoRef]);

  const handleCapture = (e) => {
    console.log('///////////////////////',e)
    setImg(e);
    // return image
  };

  // useEffect(() => {
  //   console.log('VideoCutter',image)
  // }, [])

  var footerStyle = {
    backgroundImage: `url(${image})`,
    borderRadius:10,
    padding:0,
    width:'100%', 
  };

  return (
    <>
      <video ref={videoRef} style={{display: 'none'}}></video>

      <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
        <VideoThumbnailCapture videoUrl={video} getImageUrl={handleCapture} /> 

        <MultiRangeSlider
          ref={rangeSliderRef}
          style={footerStyle}
          step={0.1}
          ruler={false}
          label={false}
          preventWheel={false}
          minValue={0}
          maxValue={maxValue}
          duration={maxValue}
          onInput={(e) => {
          handleInput(e);
          }}
        />

      </div>
    </>
  );
};





