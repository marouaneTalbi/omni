import React, { useState } from "react";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Button, Img, Input, SelectBox, Text } from "components";

export default function Nav() {
  const [hideSideBar, setSideBar] = useState(false)

  return (
    <>
      {hideSideBar && <div 
              style={{
                display: !hideSideBar ? 'none' : 'block',
                width:60,
                height:50,
                padding:5, 
                transition: 'width 0.8s ease-out'
              }}
            >
              <Button
                  onClick={()=>setSideBar(false)}
                  size="mdIcn"
                  variant="icbFillWhiteA700e5"
                  style={{width:'100%'}}
                  >
                  <Img src="images/hum.png" alt="play" />
              </Button>
            </div>
        }
      <Sidebar
        className="bg-gray_300 flex h-screen " 
        style={{
          width: hideSideBar ? '0' : '400px',
          display: 'flex',
          height: 'auto',
          transition: 'width 0.3s ease-out'
        }}>
          <div >
            <div 
              style={{
                width:60,
                height:50,
                display: hideSideBar ? 'none' : 'block',
                padding:5, 
                transition: 'width 0.3s ease-out'
              }}
            >
              <Button
                  onClick={()=>setSideBar(true)}

                  size="mdIcn"
                  className="bg-gray_300  " 
                  variant="icbFillWhiteA700e5"
                  style={{width:'100%'}}
                  >
                  <Img src="images/hum.png" alt="play" />
              </Button>
            </div> 
            <div style={{ marginTop:50, display:'flex',  justifyContent:'center', }}>
              <div style={{ display:'flex',  alignItems:'center', justifyContent:'space-around',width:'50%'}}>
                <div className="bg-gradient1  h-[52px] rounded-[50%] w-[52px]"></div>
                  <Text className="text-gray_900" as="h3" variant="h3">
                    OmniVOD
                  </Text>
              </div>
            </div>
          </div>
          <Menu
            menuItemStyles={{
              button: {
                padding: 10,
                gap: "16px",
                "margin-top": "2px",
                "padding-bottom": "20px",
                "padding-left": "64px",
                "padding-right": "35px",
                "font-weight": 500,
              },
            }}
            style={{marginTop:'50%'}}
          >
            <MenuItem
              active={window.location.pathname === "/dhiwise-dashboard"}
              href="/dhiwise-dashboard"
            >
              <div className="h-[65px] relative w-full">
                <div className="h-[65px] m-auto overflow-hidden w-full">
                  <div className="w-full h-full absolute bg-black_900_05"></div>
                  {
                  window.location.pathname == '/dhiwise-dashboard' &&  <>
                  <div className="w-full h-full absolute bg-black_900_05"></div>
                  <div  className="h-full absolute bg-red_A200" style={{ width: "2%" }}></div></> 
                }
                </div>
                <div className="absolute flex flex-row gap-4 h-max inset-y-[0] items-start justify-center left-[21%] my-auto w-[34%]">
                  <Img
                    src="images/img_home_gray_600.svg"
                    className="h-[30px] w-[30px]"
                    alt="computer"
                  />
                  <Text className="text-gray_900" as="h6" variant="h6">
                  Home
                  </Text>
                </div>
              </div>
            </MenuItem>
            <MenuItem
              active={window.location.pathname === "/profile"}
              href="/profile"
            >
              <div className="h-[65px] relative w-full">
                <div className="h-[65px] m-auto overflow-hidden w-full">
                {
                  window.location.pathname == '/profile' &&  <>
                  <div className="w-full h-full absolute bg-black_900_05"></div>
                  <div  className="h-full absolute bg-red_A200" style={{ width: "2%" }}></div></> 
                }
                </div>
                <div className="absolute flex flex-row gap-4 h-max inset-y-[0] items-start justify-center left-[21%] my-auto w-[34%]">
                  <Img
                    src="images/img_computer.svg"
                    className="h-[30px] w-[30px]"
                    alt="computer"
                  />
                  <Text className="text-gray_900" as="h6" variant="h6">
                    Profile
                  </Text>
                </div>
              </div>
            </MenuItem>

            <MenuItem
              active={window.location.pathname === "/editvideo"}
              href="/editvideo"
            >
              <div className="h-[65px] relative w-full">
                <div className="h-[65px] m-auto overflow-hidden w-full">
                {
                  window.location.pathname == '/editvideo' &&  <>
                  <div className="w-full h-full absolute bg-black_900_05"></div>
                  <div  className="h-full absolute bg-red_A200" style={{ width: "2%" }}></div></> 
                }
                </div>
                <div className="absolute flex flex-row gap-4 h-max inset-y-[0] items-start justify-center left-[21%] my-auto w-[34%]">
                  <Img
                    src="images/img_svg8.svg"
                    className="h-[30px] w-[30px]"
                    alt="computer"
                  />
                  <Text className="text-gray_900" as="h6" variant="h6">
                  Editing
                  </Text>
                </div>
              </div>
            </MenuItem>


            {/* <MenuItem
              active={window.location.pathname === "searchresult"}
              href="/searchresult"
            >
              <div className="h-[65px] relative w-full">
                <div className="h-[65px] m-auto overflow-hidden w-full">
                
                {
                  window.location.pathname == '/searchresult' &&  <>
                  <div className="w-full h-full absolute bg-black_900_05"></div>
                  <div  className="h-full absolute bg-red_A200" style={{ width: "2%" }}></div></> 
                }
                

                </div>
                <div className="absolute flex flex-row gap-4 h-max inset-y-[0] items-start justify-center left-[21%] my-auto w-[34%]">
                  <Img
                    src="images/img_svg8.svg"
                    className="h-[30px] w-[30px]"
                    alt="computer"
                  />
                  <Text className="text-gray_900" as="h6" variant="h6">
                    Results
                  </Text>
                </div>
              </div>
            </MenuItem> */}
          </Menu>
      </Sidebar> 
    </>
  )
}