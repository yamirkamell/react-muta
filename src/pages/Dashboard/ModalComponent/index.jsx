import React from 'react';
import {
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
} from './styled';

const ModalComponent = ({ isShowing, hide }) => {


  return isShowing ? (
    <>
      <ContainerOverlay />
      <ContainerWrapper>
        <ContainerModal>
          <ContainerHeader>
            <TitleComponent>Nueva Entrada</TitleComponent>
            <CloseButtonComponent onClick={hide}>
              <span>&times;</span>
            </CloseButtonComponent>
          </ContainerHeader>
          {//title !== '' ?
            <>
              <ContainerBody>
                <TextComponent>Cliente</TextComponent>
                <select style={{ height: 30, border: '1px solid #9E9E9E', borderRadius: 4, padding: '5px 0px 5px 10px', color: '#9E9E9E', marginTop: -15 }}>
                  <option value="" disabled selected hidden>Selecciona un cliente...</option>
                  <option></option>
                </select>
                <div style={{ marginTop: 30 }}>
                  <TextComponent>Recolección</TextComponent>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput>Aceite Cocina Usado</TextInput>
                    <InputComponent />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput>Trampa de grasa</TextInput>
                    <InputComponent />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput>Pimpina Pasta</TextInput>
                    <InputComponent />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput>Pimpina PET</TextInput>
                    <InputComponent />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: 30 }}>
                  <TextComponent>Pago</TextComponent>
                  <TextPrice>$ 68,522</TextPrice>

                </div>
              </ContainerBody>
              <ContainerFooter>
                <ButtonSaveComponent> Crear</ButtonSaveComponent>
              </ContainerFooter>
            </>/*
            :
            <ContainerInfoUser>
              <h2>C6520</h2>
              <TextComponent>Usuario</TextComponent>
              <TitleComponent style={{ marginTop: -15 }}>Simon Parrila Sur</TitleComponent>
              <div style={{ marginTop: 20 }}>
                <TextComponent>Material Recolectado</TextComponent>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TextInput style={{ marginTop: -10 }}>Aceite Cocina Usado</TextInput>
                  <span style={{ marginTop: -10 }}> 18, 4 Kg </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TextInput style={{ marginTop: -10 }}>Trampa de grasa</TextInput>
                  <span style={{ marginTop: -10 }}> 20, 1 Kg </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TextInput style={{ marginTop: -10 }}>Pimpina Pasta</TextInput>
                  <span style={{ marginTop: -10 }}> 1 </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TextInput style={{ marginTop: -10 }}>Pimpina PET</TextInput>
                  <span style={{ marginTop: -10 }}> 6 </span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
                <TextComponent>Pago</TextComponent>
                <TextPrice>$ 68,522</TextPrice>
              </div>
            </ContainerInfoUser>*/
          }
        </ContainerModal>
      </ContainerWrapper>
    </>
  ) : null

}


export default ModalComponent;