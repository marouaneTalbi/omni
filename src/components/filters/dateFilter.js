import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { Button, Img, Input, Line, SelectBox, Text } from "components";


export default function DateFilter({getDates}) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    if(startDate && endDate)
    getDates([startDate, endDate])
  }, [startDate, endDate])

  return (
    <div style={{width:'20%', padding:20}}>
     <div style={{ height:40, padding:5}}>
        <Text className="font-normal text-gray_900_01" style={{fontSize:17}} variant="body2">
        {'Date'}
        </Text>
      </div>
      <div style={{
        backgroundColor:'white',
        height:45,
        display:'flex',
        alignItems:'center',
        borderWidth:0.5,
        borderRadius:25,
      }}>
        <div style={{display:'flex', justifyContent:'center', alignContent:'center', padding:4}}>
          <DatePicker
            selectsEnd
            selected={endDate}
            onChange={date => setEndDate(date)}
            endDate={endDate}
            startDate={startDate}
            minDate={startDate}
            placeholderText="Start Date"
          />
        </div>
        <Text  style={{fontSize:30, fontColor:'red'  }} variant="body2">
        {'|'}
        </Text>
        <div style={{ textAlign:'center', padding:4}}>
          <DatePicker
            selectsStart
            selected={startDate}
            onChange={date => setStartDate(date)}
            startDate={startDate}
            placeholderText="End Date"
          />
        </div>
      
      </div>
    </div>
  );
}