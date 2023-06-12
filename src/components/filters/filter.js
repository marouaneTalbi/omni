import { Button, Img, Input, Line, SelectBox, Text } from "components";

const Filter = ({timeOptionsList, label, placeholder, filterValue}) => {

    const getFilterValue = (value) => {
        return filterValue(value)
    }

    return (
        <>
            <div style={{width:'20%', padding:20}}>
                <div style={{ height:40, padding:5}}>
                    <Text className="font-normal text-gray_900_01" style={{fontSize:17}} variant="body2">
                        {label}
                    </Text>
                </div>
            
                <SelectBox
                    className="sm:flex-1 font-normal leading-[normal] text-gray_500 text-left text-sm w-[100%] sm:w-full"
                    placeholderClassName="text-gray_500"
                    size="sm"
                    isSearchable={false}
                    placeholder={placeholder}
                    shape="CircleBorder20"
                    isMulti={false}
                    options={timeOptionsList}
                    onChange={getFilterValue}
                    name="time"
                    variant="OutlineGray300"
                    indicator={
                        <Img
                            src="images/img_arrowdown.svg"
                            className="h-6 mr-[0] w-6"
                            alt="arrow_down"
                        />
                    }
                />
            </div>
        </>
    )
}

export default Filter;
