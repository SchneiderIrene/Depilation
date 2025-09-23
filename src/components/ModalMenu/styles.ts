import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  top: 17%;
  left: 78%;
  transform-origin: center;
  width: 151px;
  height: 215px;
  box-sizing: border-box;
  z-index: 1001;
  transform: translate(-50%, -50%);
  background-color: #fefefe;
  border-radius: 5px;
`;
