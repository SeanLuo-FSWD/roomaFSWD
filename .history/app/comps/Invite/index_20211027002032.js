import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display: flex;
flex-direction: column;

`
const Head = styled.p`

`
const Text = styled.p`

`
const Copy = styled.button`

`
const Img = styled.img`
`
const Invite = ({

}) => {
    return <Cont>
        <Head>Invite a member with a link  </Head>
        <Text>Invite a member to join your team from another device. </Text>
        <Copy>
        <Img src="/link.svg">Copy Link</Img>
        </Copy>
    </Cont>
}

export default Invite;