import styled from 'styled-components';

const ContainerRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  margin-top: -10px;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  height: 45px;
  padding: 0px 10px;
  @media (max-width: 960px) {
    width: 120%;
  } 
  @media (max-width: 830px) {
    width: 160%;
  } 
  @media (max-width: 630px) {
    width: 220%;
  } 
  @media (max-width: 440px) {
    width: 280%;
  }   
`;
const ContainerEntryData = styled.div`
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: space-between; 
  flex: 1; 
  margin-top: -10px;
`;
const CheckboxComponent = styled.input`
  width: 20px; 
  height: 15px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
    }
`;
const TextComponent = styled.h5`
`;
const ContainerMaterials = styled.div`
  display: flex; 
  flex-direction: row; 
`;
const StateText = styled.h5`
  color: #2DDD6A; 
  border: 1px solid #C1B4A2; 
  border-radius: 4px;
  padding: 2px 8px;
`;
const AcuText = styled.h5`
  color: #EBB36B; 
  border: 1px solid #EBB36B; 
  border-radius: 4px;
  padding: 2px 8px;
  margin-left: 2px;
`;
const PetText = styled.h5`
  color: #557CE6; 
  border: 1px solid #557CE6; 
  border-radius: 4px;
  padding: 2px 8px;
  margin-left: 2px;
`;
const PastaText = styled.h5`
  color: #2DDD6A; 
  border: 1px solid #C1B4A2; 
  border-radius: 4px;
  padding: 2px 8px;
  margin-left: 2px;
`;
const TrampaText = styled.h5`
  color: #424242; 
  border: 1px solid #424242; 
  border-radius: 4px;
  padding: 2px 8px;
  margin-left: 2px;
`;

export {
  ContainerRoot,
  ContainerEntryData,
  CheckboxComponent,
  TextComponent,
  ContainerMaterials,
  StateText,
  AcuText,
  PetText,
  PastaText,
  TrampaText
}; 