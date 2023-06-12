import { Img } from 'components';
import { videos } from 'pages/Searchresult';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import 'react-range-slider-input/dist/style.css';
import { useNavigate } from "react-router-dom";

SearchBar.prototype= {
    ref : PropTypes.object,
    handleChange : PropTypes.func
}

export default function SearchBar({ref, style, height, width, type, handleChange, prefix, restProps}) {

    const [showVideo, setShowVideos] = useState(false)
    const [currentVideos, setCurrentVideos] = useState()
    const navigate = useNavigate();

    const goToSearchResults = () => {
        navigate(`/searchresult`)
      }

    const handleInputChange = (event) => {
        setCurrentVideos(event.target.value);
      };

    const filteredData = videos.filter((item) => {
        return item.title?.toLocaleLowerCase().includes(currentVideos?.toLocaleLowerCase());
    });

    useEffect(() => {
    if(currentVideos && currentVideos !='' && filteredData.length != 0) {
        setShowVideos(true)
    } else {
        setShowVideos(false)
    }
    }, [currentVideos,filteredData])



 

  return (
    <>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center', height:height, width:width,borderWidth:0.5, borderRadius:30, padding:13,...style}}>
            <Img
                src="images/img_iconly_lightoutline_search.svg"
                alt="Iconly/Light-Outline/Search"
            />
            <input
                ref={ref}
                style={{ width:'100%',height:"90%", fontSize:18, marginLeft:10 }}
                type={type}
                onChange={handleInputChange}
                placeholder={'Search..'}
                {...restProps}
            />
        </div>
        {showVideo && <div  style={{width:'75%',borderWidth:0.5,  backgroundColor:'white', zIndex:40000,borderRadius:20, position:'absolute',paddingLeft:10, paddingTop:10}}>
            {
                filteredData.map((video) => {
                    return <div style={{
                        height:50, 
                        width:'99%',
                        padding:10,
                        backgroundColor:'white', 
                        borderBottomWidth:0.5,
                        display:'flex',
                        flexDirection:'column',
                        alignContent:'center',
                        justifyContent:'center'
                    }}onClick={goToSearchResults}> {video.title} </div>
                } )
            }
        </div>}
    </>
);
};





