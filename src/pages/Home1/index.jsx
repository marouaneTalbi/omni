import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import { videos } from "pages/Searchresult";
import VideoRow from "components/VideosComponents/videoRow";
import SearchBar from "components/searchBars/searchBars";

const Home1Page = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const getValueOfSearchBar = (c) => {
    console.log(c.target.value)
  }

  return (
    <>
      <div style={{padding:30 , width:'100%'}} >

        <div style={{padding:10}}>
          <SearchBar width={'100%'} height={60} handleChange={getValueOfSearchBar} />
        </div>
        <Text className="mt-[67px] text-gray_900" as="h1" variant="h1"> Popular movies</Text>
        <div style={{justifyContent: 'center',  display:'flex'}}>
          <div style={{display:'flex',flexWrap: 'wrap', width:'100%'}} >
            {videos.map((video) => {
              return (<VideoRow video={video} />)
            })}
          </div> 
        </div>
        <Text className="mt-[62px] text-gray_900" as="h1" variant="h1">
          You will love these
        </Text>
        <div style={{justifyContent: 'center',  display:'flex'}}>
          <div style={{display:'flex',flexWrap: 'wrap', width:'100%'}} >
            {videos.map((video) => {
              return (<VideoRow video={video} />)
            })}
          </div> 
        </div>
      </div> 
    </>
  );
};

export default Home1Page;
