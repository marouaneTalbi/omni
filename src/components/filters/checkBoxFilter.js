import { Button, Img, Input, Line, SelectBox, Text } from "components";
import { useState } from "react";

const CheckBoxFilter = ({checkBoxValue, checkArray}) => {

    const [hidden, setHidden] = useState(false)
    const [checkboxValue, setCheckboxValue] = useState('')


    const getFilterValue = (value) => {
        setCheckboxValue(value)
        return checkBoxValue(value)
    }

    return (
        <>
            <div style={{width:'20%', padding:20}} >
                <div style={{ height:40, padding:5}}>
                    <Text className="font-normal text-gray_900_01" style={{fontSize:17}} variant="body2">
                        {'Filter'}
                    </Text>
                </div>
                {! hidden &&  
                    <div onClick={() => setHidden(true)} style={{width:'100%', backgroundColor:'white', height:45, borderRadius:25, borderWidth:0.5,padding:12 }}>
                        <Text className="font-normal text-gray_900_01" style={{fontSize:17}} variant="body2">
                            {checkboxValue !== '' ? checkboxValue : 'Filter'}
                        </Text>
                    </div>
                }
                { hidden && <div  style={{width:'100%', height:45, borderRadius:25}}>
                    <div style={{borderWidth:0.5, borderRadius:20, padding:5, backgroundColor:'white', position:'absolute', minWidth:'14%'}} >
                        <div style={{display:'flex', justifyContent:'flex-end', padding:5}} onClick={() => setHidden(false)}>
                            <Button className="font-normal text-gray_900_01" 
                                style={{
                                    fontSize:17,
                                    height:30,
                                    width:30,
                                    borderRadius:15,
                                    display:'flex',
                                    justifyContent:'center',
                                    textAlign:'center',
                                    alignItems:'center',
                                    borderWidth:1,
                                    borderColor:'black',
                                }} >
                                {'X'}
                            </Button>
                        </div>
                        {checkArray.map((item, index) => {
                            return (
                                <div key={index} 
                                    style={{
                                    backgroundColor:'white',
                                    height:45,
                                    padding:5,
                                    display:'flex',
                                    alignItems:'center',
                                    }}>
                                    <input
                                        type="checkbox"
                                        checked={item.checked}
                                        onChange={()=> getFilterValue(item.value)}
                                    />
                                    <label style={{marginLeft:10}}>{item.label}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>

                }
            </div>
        </>
    )
}

export default CheckBoxFilter;
