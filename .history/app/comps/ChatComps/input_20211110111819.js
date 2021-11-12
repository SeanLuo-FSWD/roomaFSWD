import React from 'react'
import styled from 'styled-components'
import Chat from '../../pages/chat'

const Cont = styled.div`
display:flex;
align-items:center;
margin: 60px;

`
const ChatInput = styled.input`


`

const Input = ({
  
  
  
  }) => {

    return <Cont>
                
            <ChatInput type="text" placeholder="Write a message..."/>
                  
                    
            </Cont>   
}

export default Input;
