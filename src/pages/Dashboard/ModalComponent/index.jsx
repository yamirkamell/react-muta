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
  TextComponent,
  TextInput,
  InputComponent,
  TextPrice,
  ContainerFooter,
  ButtonSaveComponent,
  ContainerInfoUser,
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
                <select style={{ height: 30, border: '1px solid #9E9E9E', borderRadius: 4, padding: '5px 0px 5px 10px', color: '#9E9E9E', marginTop: -15 }}
                  onChange={event => setIdClient(event.target.value)} >
                  <option value="" disabled selected hidden>Selecciona un cliente...</option>
                  {user.map(item =>
                    <option key={item.id} value={item.id}>{item.cliente}</option>
                  )};
                </select>
                <div style={{ marginTop: 30 }}>
                  <TextComponent>Recolección</TextComponent>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput>Aceite Cocina Usado</TextInput>
                    {idClient != 0 ?
                      <InputComponent type='text' defaultValue={itemSelected.acu} onChange={event => setAcu(event.target.value)} />
                      :
                      <InputComponent type='text' defaultValue={acu} onChange={event => setAcu(event.target.value)} />
                    }
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput>Trampa de grasa</TextInput>
                    {idClient != 0 ?
                      <InputComponent type='text' defaultValue={itemSelected.trampa} onChange={event => setTrampa(event.target.value)} />
                      :
                      <InputComponent type='text' defaultValue={trampa} onChange={event => setTrampa(event.target.value)} />
                    }
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput>Pimpina Pasta</TextInput>
                    {idClient != 0 ?
                      <InputComponent type='text' defaultValue={itemSelected.pasta} onChange={event => setPasta(event.target.value)} />
                      :
                      <InputComponent type='text' defaultValue={pasta} onChange={event => setPasta(event.target.value)} />
                    }
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput>Pimpina PET</TextInput>
                    {idClient != 0 ?
                      <InputComponent type='text' defaultValue={itemSelected.pet} onChange={event => setPet(event.target.value)} />
                      :
                      <InputComponent type='text' defaultValue={pet} onChange={event => setPet(event.target.value)} />
                    }
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: 30 }}>
                  <TextComponent>Pago</TextComponent>
                  <TextPrice>{idClient != 0 ? itemSelected.pago : ''}</TextPrice>

                </div>
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
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TextInput style={{ marginTop: -10 }}>Aceite Cocina Usado</TextInput>
                  <span style={{ marginTop: -10 }}> {userSelected.acu} Kg </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TextInput style={{ marginTop: -10 }}>Trampa de grasa</TextInput>
                  <span style={{ marginTop: -10 }}> {userSelected.trampa} Kg </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TextInput style={{ marginTop: -10 }}>Pimpina Pasta</TextInput>
                  <span style={{ marginTop: -10 }}> {userSelected.pasta} </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TextInput style={{ marginTop: -10 }}>Pimpina PET</TextInput>
                  <span style={{ marginTop: -10 }}> {userSelected.pet} </span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
                <TextComponent>Pago</TextComponent>
                <TextPrice>{userSelected.pago}</TextPrice>
              </div>
            </ContainerInfoUser>
          }
        </ContainerModal>
      </ContainerWrapper>
    </>
  ) : null

}


export default ModalComponent;