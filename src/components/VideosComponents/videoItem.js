import { Button, Img, Input, Line, SelectBox, Text } from "components";
import { useNavigate } from "react-router-dom";

export default function VideoItem({video}) {
  const navigate = useNavigate();
  const editVideo = () => {
    navigate(`/editvideo`)
  }
  return (
    <div className="flex flex-col items-center justify-start mt-[26px] w-[91%] md:w-full">
    <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
      <div className="h-[205px] relative w-[35%] md:w-full">
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
      <div className="flex md:flex-1 flex-col gap-[23px] items-start justify-start w-[62%] md:w-full">
        <Text
          className="text-gray_900 w-[95%] sm:w-full"
          as="h5"
          variant="h5"
        >
            {video.title}
        </Text>
        <div className="flex sm:h-[302px] h-[71px] justify-end relative w-full">
          <Img
            src="images/img_download.svg"
            className="h-4 mb-[9px] mt-auto w-4"
            alt="download"
          />
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
              <div className="flex sm:flex-1 flex-col gap-[15px] justify-start w-[21%] sm:w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    src="images/img_play_gray_600.svg"
                    className="h-[13px] mt-1 w-3"
                    alt="play_One"
                  />
                  <Text
                    className="font-medium text-gray_600"
                    variant="body2"
                  >
                    {/* 13M */}
                    {video.views}

                  </Text>
                  <div className="bg-gray_600 h-0.5 my-2.5 rounded-[50%] w-0.5"></div>
                  <Text
                    className="font-medium text-gray_600"
                    variant="body2"
                  >
                    {video.date}
                    {/* 3y ago */}
                  </Text>
                </div>
                <Button
                  className="flex h-[34px] items-center justify-center ml-8 md:ml-[0] mr-[45px] w-[34px]"
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
              <div className="flex flex-col gap-2 items-center justify-start sm:ml-[0] ml-[74px]">
                <Text
                  className="font-semibold text-gray_900_01"
                  variant="body2"
                >
                  Duration
                </Text>
                <Text
                  className="font-medium text-gray_600_01"
                  variant="body2"
                >
                    {video.duration}
                  {/* 1h45min */}
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start ml-5 sm:ml-[0]">
                <Text
                  className="font-semibold text-gray_900_01"
                  variant="body2"
                >
                  Actors
                </Text>
                <Text
                  className="font-medium text-gray_600_01"
                  variant="body2"
                >
                  <>
                    {video.actors.map((actor) => actor)}
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start ml-5 sm:ml-[0]">
                <Text
                  className="font-semibold text-gray_900_01"
                  variant="body2"
                >
                  Producer
                </Text>
                <Text
                  className="font-medium text-gray_600_01"
                  variant="body2"
                >
                {video.producer}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}