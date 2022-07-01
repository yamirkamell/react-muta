import React from 'react';
import {
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
} from './styled';


const EntryComponent = () => {

  return (
    <>
      <ContainerRoot>
        <ContainerEntryData>
          <CheckboxComponent type="checkbox" />
          <span> 6520 </span>
          <span> 1 may 2022 </span>
          <TextComponent> Simon Parrilla </TextComponent>
          <StateText> Recogido </StateText>
          <ContainerMaterials>
            <AcuText> ACU </AcuText>
            <PetText> PET </PetText>
            <PastaText> Pasta </PastaText>
            <TrampaText> Trampa </TrampaText>
          </ContainerMaterials>
          <span> $68.522 </span>
        </ContainerEntryData>
      </ContainerRoot>
    </>

  )
};

export default EntryComponent;