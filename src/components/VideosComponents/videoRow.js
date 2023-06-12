import { Button, Img, Input, Line, SelectBox, Text } from "components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VideoRow({video}) {
  const navigate = useNavigate();
  const [currentWidth, setCurrentWidth] = useState(window.innerHeight)

  const editVideo = () => {
    navigate('/editvideo')
  }

  useEffect(() => {

    if(window.innerWidth >=1300  ){
      setCurrentWidth(230)
    } else {
      setCurrentWidth(400)

    }
    console.log(window.innerWidth)

  }, [window.innerWidth])



  return (
    // <div style={{height:200, width:200, flexBasis: '30%', backgroundColor:'red', borderWidth:1, padding:10}}></div>



  <div  style={{width:200,height:350,  flexBasis: '33%',padding:10, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
      <div className="h-[205px] relative w-full">
          <Img
              src={video.src}
              className="h-[205px] m-auto object-cover rounded-[20px] w-full"
              alt="rectangleNine"
          />
          <Button
              className="absolute flex h-9 inset-[0] items-center justify-center m-auto rounded-[50%] w-9"
              size="mdIcn"
              variant="icbFillWhiteA700e5"
          >
              <Img src="images/img_play.png" alt="play" />
          </Button>
      </div>
      <Text style={{padding:10}} as="h5" variant="h5">
          {video.title}
      </Text>


      <div style={{ padding:1, display:'flex', justifyContent: 'space-between', }}>
        <div style={{ display:'flex', padding:7, alignItems:'center' }} >
          <Img
            src="images/img_play_gray_600.svg"
            className="h-[13px] mt-1 w-3"
            alt="play_One"
          />
          <Text
            className="font-medium text-gray_600"
            variant="body2"
          >
          {video.views}
          </Text>
          <div className="bg-gray_600 h-0.5 my-2.5 rounded-[50%] w-0.5"></div>
          <Text
            className="font-medium text-gray_600"
            variant="body2"
          >
          {video.date}
          </Text>
        </div>
        <div style={{display:'flex', justifyContent:'flex-end'}}>
            <Img
            src="images/img_download.svg"
            className="h-4 ml-[133px] my-[9px] w-4"
            alt="download"
            />
            <Button
            className="flex h-[34px] items-center justify-center ml-4 w-[34px]"
            shape="icbCircleBorder18"
            size="smIcn"
            variant="icbFillGray10001"
            onClick={editVideo}
            >
            <Img
                src="images/img_svg8_red_a200.svg"
                className="h-[18px]"
                alt="svgEight"
            />
            </Button>
        </div>

      </div>
     </div> 
  )
}