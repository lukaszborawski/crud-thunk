import styled from "styled-components";

interface ModalProps {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {

  return (
    <>
      <Backdrop>
        <ModalBackground>
          {children}
        </ModalBackground>
      </Backdrop>

    </>
  )
}

export default Modal

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackground = styled.div`
  background-color: white;
  margin: 0 15px;
  padding: 20px;
  border-radius: 10px;
`;