import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { Button, Img, SeekBar, Text } from "components";
import VideoCutter from "components/videoCutter/VideoCutter";

const EditVideoPage = () => {
  const navigate = useNavigate();
  const video = "videos/name.mp4"

const getVideoData = (e,d) => {
  console.log(e,d)
}
  return (
    <>
        <div style={{padding:30}} >

          <div className="">
            <div style={{padding:20}}>
              <Text className="text-gray_900" as="h1" variant="h1">
                Landscapes of Italy, Giau Pass Italia 4K 60fps
              </Text>
            </div>
            <video  controls className="h-[514px] m-auto object-cover rounded-[20px] w-full" style={{backgroundColor:'red'}}>
              <source src={video} type="video/mp4"/>
            </video>
            <SeekBar
              inputValue={[76.44]}
              trackColors={["", "#7fffffff"]}
              thumbClassName="h-5 bg-white_A700 w-5 flex absolute justify-center items-center rounded-[50%] outline-none"
              className="absolute bottom-[9%] flex h-5 inset-x-[0] mx-auto rounded w-[94%]"
              trackClassName="h-[5px] flex absolute rounded w-full"
            />{" "}
          </div>
          <div style={{ marginTop:5,padding:0, display:'flex', flexDirection:'row',  justifyContent:"space-between",}}>
            <VideoCutter video={video} getVideoCutterData={getVideoData} />
            <div style={{padding:10}} >
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[188px] text-[22px] text-center sm:text-lg text-white_A700 md:text-xl"
                shape="RoundedBorder20"
                size="sm"
                variant="GradientAmber600PinkA200"
              >
                Export
              </Button>
            </div>
          
          </div>
          <div style={{width:1000}}>
          <Text className="mt-[34px] text-gray_900" as="h4" variant="h4">
            Transcript
          </Text>
          <Text
            className="leading-[173.50%] mt-3 text-gray_500 w-[61%] sm:w-full"
            variant="body1"
          >
            Non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem
            rerum facilis est et expedita distinctio. Nam libero tempore,
            cum soluta nobis est eligendi optio cumque nihil impedit quo
            minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis debitis aut rerum necessitatibus saepe
            eveniet ut et voluptates repudiandae sint et molestiae non
            recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
            ut aut reiciendis voluptatibus maiores alias consequatur aut
            perferendis doloribus asperiores repellat.
          </Text>
          </div>



        </div>
    </>
  );
};

export default EditVideoPage;
// import { useEffect, useRef } from 'react';
// import RangeSlider from 'react-range-slider-input';
// import 'react-range-slider-input/dist/style.css';

// export default function EditVideoPage({}) {

//   const rangeSliderRef = useRef(null);

//   return (
//     <>
//       <RangeSlider id="range-slider" style={{height:500}}  ref={rangeSliderRef} />
//     </>
//   );
// };