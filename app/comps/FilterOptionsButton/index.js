import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';


const Button = styled.div`
display:flex;
flex-direction: row;
width: 135.99px;
height: 52.81px;
box-shadow: 0 4px 17px 0 rgba(0, 0, 0, 0.2);
border-radius: 8px;
justify-content: space-between;
justify-content: center;
padding: 15px;
margin-top:-20px;

`

const Image = styled.img`
width: 20px;
height: 12px;
margin-top: 7px;
margin-right: 9px;

`

const Text = styled.div`
font-size: 18.7px;
font-weight:600;
color: #7751E7;

`


const FilterOptionsButton = ({
    onFilterButtonClick=()=>{},

}) => {
    return <Button onClick={onFilterButtonClick}>
                <Image src="/FilterIcon.svg"></Image>
                <Text className="opensans">Filters</Text>

        </Button>
}

export default FilterOptionsButton;