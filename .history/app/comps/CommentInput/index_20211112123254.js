import React from 'react'
import styled from 'styled-components'
import Button from '../Button'


const Cont = styled.div`
display:flex;
width: 100%;
align-items:center;
justify-content:center;
`
const Top = styled.div`
display:flex;
width: 100%;
`
const Bot = styled.div`
display:flex;
width: 100%;
`
const ChatInput = styled.input`
padding: 10px 180px 40px 15px;
border-radius: 7px;
border: 1px solid #CACACA;
margin-bottom:30px;

`

const CommentInput = ({
  
  
  
  }) => {

    return <Cont>
            <Top>
            <ChatInput type="text" placeholder="Write a comment..."/>
            </Top>  
            <Bot>
              <Button
              title="Send"
              width="60px"
              height="30px"
              margin="10px"
              borderRadius="5px"
              border="none"
              bgcolor="#724FE9"
              fontcolor="white"
              fontSize="14px"
              fontWeight="100"
              // onClick send the new comments
              //onClick=()=>{}
              />
            </Bot>   
            </Cont>   
}

export default CommentInput;