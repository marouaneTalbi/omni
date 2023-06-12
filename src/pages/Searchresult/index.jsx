import React, { useState } from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import VideoItem from "components/VideosComponents/videoItem";
import SearchBar from "components/searchBars/searchBars";
import Filter from "components/filters/filter";
import DateFilter from "components/filters/dateFilter";
import CheckBoxFilter from "components/filters/checkBoxFilter";

const timeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const durationOptionsList = [
  { label: "Option1", value: "Duration1" },
  { label: "Option2", value: "Duration2" },
  { label: "Option3", value: "Duration3" },
];

export const videos =  [
  {
    src:'images/img_rectangle9_4.png',
    views:'13M',
    title:'Magic of Hong Kong. Mind-blowing cyberpunk drone...',
    date:'3y ago',
    duration:'1h45min',
    actors: ['Scarlet Johanson','Leonardo Dicaprio'],
    producer:'James Cameron'
  },
  {
    src:'images/img_rectangle9_1.png',
    views:'13M',
    title:'Landscapes of Italy, Giau Pass Italia 4K 60fps',
    date:'3y ago',
    duration:'1h45min',
    actors: [' Scarlet Johanson','Leonardo Dicaprio'],
    producer:'James Cameron'
  },
  {
    src:'images/img_rectangle9_2.png',
    views:'13M',
    title:' Magic of Hong Kong. Mind-blowing cyberpunk drone...',
    date:'3y ago',
    duration:'1h45min',
    actors: ['Scarlet Johanson','Leonardo Dicaprio'],
    producer:'James Cameron'
  },

  {
    src:'images/img_rectangle9_2.png',
    views:'13M',
    title:' Magic of Hong Kong. Mind-blowing cyberpunk drone...',
    date:'3y ago',
    duration:'1h45min',
    actors: ['Scarlet Johanson','Leonardo Dicaprio'],
    producer:'James Cameron'
  },
 
]

const SearchresultPage = () => {

  const getValueOfSearchBar = (c) => {
    console.log(c.target.value)
  }
  const getFilterValue = (c) => {
    console.log('====>',c)
  }

  const getDateValue = (c) => {
    console.log('====>',c)
  }

  const getCheckValue = (c) => {
    console.log('====>',c)
  }

  return (
    <>
      <div style={{padding:30}}>
        <div >
        <SearchBar width={'100%'} height={60} handleChange={getValueOfSearchBar} />
          <div className="flex flex-1 flex-col items-start justify-start md:mt-0  w-full">
            <Text className="mt-[21px] text-gray_900" as="h1" variant="h1">
              Search Results
            </Text>

            <div style={{display:'flex', flexDirection:'row', width:'100%', alignItems:'center', justifyContent:'space-around' }}>
              <Filter timeOptionsList={durationOptionsList} label={'Duration'} placeholder={'Duration'} filterValue={getFilterValue} />
              <DateFilter getDates={getDateValue} />
              <CheckBoxFilter checkBoxValue={getCheckValue} checkArray={durationOptionsList} />
            </div>

            <Text className="mt-[35px] text-gray_500" variant="body1">
              120 Videos found
            </Text>

            {
              videos.map((video) =>(
                <VideoItem video={video} />
              ))
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default SearchresultPage;
