import styled from 'styled-components';

const ContainerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5; 
`;
const ContainerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;
const ContainerModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 3.75rem auto;
  border-radius: 3px;
  max-width: 400px;
  max-height: 6005px;
  padding:  1rem 3rem 3rem 3rem;
`;
const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleComponent = styled.h3`
`;
const CloseButtonComponent = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #5f5570;
  background-color: transparent;
  opacity: .3;
  cursor: pointer;
  border: none;
`;
const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px;
`;
const TextComponent = styled.h5`
  color: #9E9E9E;
  margin-top: 5px;

`;
const TextInput = styled.h5`
  color: #616161;
  margin-top: 5px;
`;
const InputComponent = styled.input`
  color: #9E9E9E; 
  width:  70px;
  height: 30px;
  border-style: solid;
  border-width: 0.1px;
  border-color: #9E9E9E; 
  padding: 0 0 0 3px;
  margin-top: 5px;
  border-radius: 4px;  
`;
const TextPrice = styled.h4`
  color: #616161;
  margin-top: -10px;
`;
const ContainerFooter = styled.div`
  display: flex;
  margin: 5% 0 0 0;
`;
const ButtonSaveComponent = styled.button`
  height: 30px;
  border-width: 0px;
  background-color: #EBB36B;
  border-radius: 4px;  
  color: white;
  width: 100%;
  :disabled {
    background-color: #E7E7E7;
    }
  :hover {
    cursor: pointer;
    }
`;
const ContainerInfoUser = styled.div`
  display: flex;
  flex-direction: column;

`;


export {
  ContainerOverlay,
  ContainerWrapper,
  ContainerModal,
  ContainerHeader,
  TitleComponent,
  CloseButtonComponent,
  ContainerBody,
  TextComponent,
  TextInput,
  InputComponent,
  TextPrice,
  ContainerFooter,
  ButtonSaveComponent,
  ContainerInfoUser,
}; 