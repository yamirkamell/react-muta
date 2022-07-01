import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../../redux/user/actions';
import {
  ContainerOverlay,
  ContainerWrapper,
  ContainerModal,
  ContainerHeader,
  TitleComponent,
  CloseButtonComponent,
  ContainerBody,
  SelectComponent,
  TextComponent,
  ContainerData,
  ContainerDataPay,
  TextInput,
  TextInputTitle,
  SpanInput,
  InputComponent,
  TextPrice,
  ContainerFooter,
  ButtonSaveComponent,
  ContainerInfoUser,
  ContainerPay
} from './styled';

const ModalComponent = ({ isShowing, hide, title, id, userSelected }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [idClient, setIdClient] = useState(0);
  const [acu, setAcu] = useState("");
  const [pet, setPet] = useState("");
  const [pasta, setPasta] = useState("");
  const [trampa, setTrampa] = useState("");
  const [activeButton, setActiveButton] = useState(true);
  const userInfo = user.filter(user => user.id == idClient);
  const [itemSelected, setItemSelected] = useState('0');

  useEffect(() => {
    console.log(idClient);
    if (user.length != 0) {
      if (user[0].id == idClient) {
        setItemSelected(userInfo[0]);
        setActiveButton(false);
      }
    }
  }, [userInfo, idClient]);

  const onPressEditUser = () => {
    dispatch(editUser({
      id: idClient,
      cliente: itemSelected.cliente,
      fecha: itemSelected.fecha,
      estado: itemSelected.estado,
      pago: itemSelected.pago,
      acu: acu,
      pet: pet,
      pasta: pasta,
      trampa: trampa,
    }));
    setAcu('');
    setPasta('');
    setTrampa('');
    setPet('');
    setActiveButton(true);
    setIdClient(0);
    hide();
  }

  return isShowing ? (
    <>
      <ContainerOverlay />
      <ContainerWrapper>
        <ContainerModal>
          <ContainerHeader>
            <TitleComponent>{title == 'Nueva Entrada' ? title : userSelected.fecha}</TitleComponent>
            <CloseButtonComponent onClick={() => { setActiveButton(true); setIdClient(0); hide(); }}>
              <span>&times;</span>
            </CloseButtonComponent>
          </ContainerHeader>
          {title == 'Nueva Entrada' ?
            <>
              <ContainerBody>
                <TextComponent>Cliente</TextComponent>
                <SelectComponent onChange={event => setIdClient(event.target.value)} >
                  <option value="" disabled selected hidden>Selecciona un cliente...</option>
                  {user.map(item =>
                    <option key={item.id} value={item.id}>{item.cliente}</option>
                  )};
                </SelectComponent>
                <div style={{ marginTop: 30 }}>
                  <TextComponent>Recolección</TextComponent>
                  <ContainerData>
                    <TextInput>Aceite Cocina Usado</TextInput>
                    {idClient != 0 ?
                      <InputComponent type='text' defaultValue={itemSelected.acu} onChange={event => setAcu(event.target.value)} />
                      :
                      <InputComponent type='text' defaultValue={acu} onChange={event => setAcu(event.target.value)} />
                    }
                  </ContainerData>
                  <ContainerData>
                    <TextInput>Trampa de grasa</TextInput>
                    {idClient != 0 ?
                      <InputComponent type='text' defaultValue={itemSelected.trampa} onChange={event => setTrampa(event.target.value)} />
                      :
                      <InputComponent type='text' defaultValue={trampa} onChange={event => setTrampa(event.target.value)} />
                    }
                  </ContainerData>
                  <ContainerData>
                    <TextInput>Pimpina Pasta</TextInput>
                    {idClient != 0 ?
                      <InputComponent type='text' defaultValue={itemSelected.pasta} onChange={event => setPasta(event.target.value)} />
                      :
                      <InputComponent type='text' defaultValue={pasta} onChange={event => setPasta(event.target.value)} />
                    }
                  </ContainerData>
                  <ContainerData>
                    <TextInput>Pimpina PET</TextInput>
                    {idClient != 0 ?
                      <InputComponent type='text' defaultValue={itemSelected.pet} onChange={event => setPet(event.target.value)} />
                      :
                      <InputComponent type='text' defaultValue={pet} onChange={event => setPet(event.target.value)} />
                    }
                  </ContainerData>
                </div>
                <ContainerDataPay>
                  <TextComponent>Pago</TextComponent>
                  <TextPrice>{idClient != 0 ? itemSelected.pago : ''}</TextPrice>
                </ContainerDataPay>
              </ContainerBody>
              <ContainerFooter>
                <ButtonSaveComponent disabled={activeButton} onClick={() => { onPressEditUser() }}> Crear</ButtonSaveComponent>
              </ContainerFooter>
            </>
            :
            <ContainerInfoUser>
              <h2>C{userSelected.id}</h2>
              <TextComponent>Usuario</TextComponent>
              <TitleComponent style={{ marginTop: -15 }}>{userSelected.cliente}</TitleComponent>
              <div style={{ marginTop: 20 }}>
                <TextComponent>Material Recolectado</TextComponent>
                <ContainerData>
                  <TextInputTitle>Aceite Cocina Usado</TextInputTitle>
                  <SpanInput> {userSelected.acu} Kg </SpanInput>
                </ContainerData>
                <ContainerData>
                  <TextInputTitle>Trampa de grasa</TextInputTitle>
                  <SpanInput> {userSelected.trampa} Kg </SpanInput>
                </ContainerData>
                <ContainerData>
                  <TextInputTitle>Pimpina Pasta</TextInputTitle>
                  <SpanInput> {userSelected.pasta} </SpanInput>
                </ContainerData>
                <ContainerData>
                  <TextInputTitle>Pimpina PET</TextInputTitle>
                  <SpanInput> {userSelected.pet} </SpanInput>
                </ContainerData>
              </div>
              <ContainerPay>
                <TextComponent>Pago</TextComponent>
                <TextPrice>{userSelected.pago}</TextPrice>
              </ContainerPay>
            </ContainerInfoUser>
          }
        </ContainerModal>
      </ContainerWrapper>
    </>
  ) : null

}


export default ModalComponent;