import React from 'react'
import styled from 'styled-components'
import Chat from '../../pages/chat'

const Cont = styled.div`
display:flex;
align-items:center;

`
const ChatInput = styled.input`
width: 100%;

`

const Input = ({
  
  
  
  }) => {

    return <Cont>
                
            <ChatInput type="text" placeholder="Write a message..."/>
                  
                    
            </Cont>   
}

export default Input;
