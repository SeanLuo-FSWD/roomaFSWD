import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 22%;
  right: 50%;
`;

const Image = styled.img`
  width: 300px;
`;

function LoadingSpinner() {
  return (
    <Container>
      <Image src="/loader.gif" alt="" srcset="" />
    </Container>
  );
}

export default LoadingSpinner;
