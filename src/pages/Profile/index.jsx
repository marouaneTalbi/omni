import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";
import SearchBar from "components/searchBars/searchBars";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProfilePage = () => {

  const getValueOfSearchBar = (c) => {
    console.log(c.target.value)
  }
  return (
    <>
        <div style={{ height:window.innerHeight}}>
            <div style={{padding:20, display:'flex', flexDirection:'column', height:'90%', width:'100%', justifyContent:'space-around'}}>
              <div style={{width:"100%", backgroundColor:'white', borderRadius:20, display:'flex', justifyContent:'space-between', alignItems:'center', padding:20, borderWidth:1}}>
                <Img
                  src="images/img_ellipse1.png"
                  className="h-[170px] md:h-auto md:mt-0 my-0.5 rounded-[50%] w-[170px]"
                  alt="ellipseOne"
                />
                <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[88px]">
                  <Text className="text-gray_900" as="h1" variant="h1">
                    Micheal Morris
                  </Text>
                  <Text
                    className="lowercase text-gray_400"
                    as="h2"
                    variant="h2"
                  >
                    Micheal.Morris@exemple.fr
                  </Text>
                </div>
                <div className="bg-white_A700 border border-gray_400 border-solid flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[188px] md:mt-0 my-[67px] p-2 rounded-[20px] w-[9%] md:w-full">
                  <Img
                    src="images/img_edit.svg"
                    className="h-6 w-6"
                    alt="edit"
                  />
                </div>
              </div>
              <div style={{width:"100%",  borderRadius:20, display:'flex', justifyContent:'space-between', alignItems:'center', padding:20, borderWidth:1}}>
                <div style={{ width:'100%'}}>
                  <Text className="text-gray_900" as="h3" variant="h3">
                    Preferences
                  </Text>
                  <div style={{ display:'flex',  width:'100%',justifyContent:'space-between', height:100, marginTop:10}}>
                    <div  style={{ width:'50%'}}>
                      <Text  className="font-normal text-gray_900_01"  as="h6" variant="h6">
                        Country
                      </Text>
                      <SearchBar width={'50%'}  handleChange={getValueOfSearchBar}  />
                    </div>
                    <div style={{width:'30%'}}>
                      <Text className="font-normal text-gray_900_01" as="h6" variant="h6" >
                        Language
                      </Text>
                      <Input
                        wrapClassName="flex sm:flex-1 sm:w-full"
                        className="font-normal leading-[normal] p-0 placeholder:text-gray_500 text-gray_500 text-left text-sm w-full"
                        name="country_One"
                        placeholder="France"
                        prefix={
                          <Img
                            src="images/img_computer_white_a700.svg"
                            className="mr-2.5 my-[5px]"
                            alt="computer"
                          />
                        }
                        suffix={
                          <Img
                            src="images/img_arrowdown.svg"
                            className="ml-[35px] my-auto"
                            alt="arrow_down"
                          />
                        }
                        shape="CircleBorder21"
                        size="sm"
                        variant="OutlineGray300"
                      ></Input>
              
                    </div>
                  </div>


                </div>
              </div>
              <div className="bg-white_A700 border border-indigo_50 border-solid flex flex-col items-start justify-start p-[31px] sm:px-5 rounded-[20px] w-full">
              <Text className="mt-0.5 text-gray_900" as="h3" variant="h3">
                Account Settings
              </Text>
              <div className="flex flex-row items-start justify-start mt-11 w-[36%] md:w-full">
                <Img src="images/img_lock.svg" className="h-6 w-6" alt="lock" />
                <Text
                  className="font-normal ml-4 text-gray_900_01"
                  as="h6"
                  variant="h6"
                >
                  Change my password
                </Text>
                <div className="flex flex-col h-6 items-center justify-start ml-[38px] w-6">
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-6 w-6"
                    alt="arrowright"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3 items-start justify-start mb-[5px] ml-1 md:ml-[0] mt-[31px] w-[14%] md:w-full">
                <Img
                  src="images/img_refresh.svg"
                  className="h-6 w-6"
                  alt="refresh"
                />
                <a href="javascript:" className="font-medium text-red_400">
                  <Text as="h6" variant="h6">
                    Sign out
                  </Text>
                </a>
              </div>
            </div>
            </div>
          </div>
    </>
  );
};

export default ProfilePage;
