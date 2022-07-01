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


const EntryComponent = (props) => {

  const { item } = props;

  return (
    <>
      <ContainerRoot>
        <ContainerEntryData>
          <CheckboxComponent type="checkbox" />
          <span> {item.id} </span>
          <span> {item.fecha} </span>
          <TextComponent> {item.cliente} </TextComponent>
          <StateText> {item.estado} </StateText>
          <ContainerMaterials>
            <AcuText> ACU </AcuText>
            <PetText> PET </PetText>
            <PastaText> Pasta </PastaText>
            <TrampaText> Trampa </TrampaText>
          </ContainerMaterials>
          <span> {item.pago} </span>
        </ContainerEntryData>
      </ContainerRoot>
    </>

  )
};

export default EntryComponent;