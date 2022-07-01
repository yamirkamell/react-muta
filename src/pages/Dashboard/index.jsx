import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  ContainerRoot,
  ContainerLeft,
  LogoImg,
  LogoImgResponsive,
  ContainerMenu,
  ContainerMenuItems,
  ContainerItems,
  IconsMenu,
  ContainerMenuName,
  MenuTextItems,
  ContainerRight,
  ContainerHeader,
  TitleComponent,
  ContainerSubtitle,
  SubTitleComponent,
  FilterText,
  Divider,
  DividerVertical,
  ContainerEmptyText,
  TitleEmpty,
  SubTitleEmpty,
  ContainerFilter,
  ContainerFilterItems,
  TextSearch,
  InputComponent,
  IconSearch,
  IconFilter,
  ContainerButton,
  ButtonComponent,
  IconButton,
  ContainerTitles,
  ContainerTableTitles,
  CheckboxComponent,
  TextComponent,
  ContainerFooter,
  TextFooter,
  SpanFooter,
  IconFooter,

} from './styled';
import mutaLogo from '../../assets/menu/logo.png';
import mutaLogoResponsive from '../../assets/menu/logoResponsive.png';
import usersIcon from '../../assets/menu/users.png';
import trashIcon from '../../assets/menu/trash.png';
import truckIcon from '../../assets/menu/truck.png';
import configIcon from '../../assets/menu/config.png';
import helpIcon from '../../assets/menu/help.png';
import avatarIcon from '../../assets/menu/avatar.png';
import leftIcon from '../../assets/footer/arrow-left.png';
import rightIcon from '../../assets/footer/arrow-right.png';
import addIcon from '../../assets/filter/add.png';
import filterIcon from '../../assets/filter/filter.png';
import gridIcon from '../../assets/filter/grid.png';
import searchIcon from '../../assets/filter/search.png';
import EntryComponent from './EntryComponent';
import useModal from './../../hooks/useModal';
import ModalComponent from './ModalComponent';

const Dashboard = () => {
  const { isShowing, toggle } = useModal();
  const user = useSelector((state) => state.user);
  const [title, setTitle] = useState();
  const [userSelected, setUserSelected] = useState();

  const onPressValidate = (id, item) => {
    switch (id) {
      case 1:
        setTitle('Nueva Entrada');
        return toggle();
      default:
        setTitle('');
        setUserSelected(item);
        return toggle();
    }
  }

  return (
    <ContainerRoot>
      <ContainerLeft>
        <ContainerMenu>
          <LogoImg src={mutaLogo} />
          <LogoImgResponsive src={mutaLogoResponsive} />
          <ContainerMenuItems>
            <ContainerItems>
              <IconsMenu src={usersIcon} />
              <MenuTextItems>Usuarios</MenuTextItems>
            </ContainerItems>
            <ContainerItems>
              <IconsMenu src={trashIcon} />
              <MenuTextItems>Recolecciones</MenuTextItems>
            </ContainerItems>
            <ContainerItems style={{ backgroundColor: '#F1F7F9', borderRadius: 8 }}>
              <IconsMenu src={truckIcon} />
              <MenuTextItems>Entradas ACU</MenuTextItems>
            </ContainerItems>
            <ContainerItems>
              <IconsMenu src={configIcon} />
              <MenuTextItems>Configurar</MenuTextItems>
            </ContainerItems>
            <ContainerItems>
              <IconsMenu src={helpIcon} />
              <MenuTextItems>Ayuda</MenuTextItems>
            </ContainerItems>
          </ContainerMenuItems>
        </ContainerMenu>
        <ContainerMenuName>
          <IconsMenu src={avatarIcon} />
          <MenuTextItems>Sebastian Ferreira</MenuTextItems>
        </ContainerMenuName>
      </ContainerLeft>
      <ContainerRight>
        <ContainerHeader>
          <TitleComponent>Recolecciones</TitleComponent>
          <ContainerSubtitle>
            <SubTitleComponent>Hoy</SubTitleComponent>
            <SubTitleComponent style={{ color: '#9E9E9E' }}>Todas</SubTitleComponent>
          </ContainerSubtitle>
          <Divider />
          <ContainerFilter>
            <ContainerFilterItems>
              <TextSearch>Buscar</TextSearch>
              <InputComponent placeholder='Ingresa un ID' />
              <IconSearch src={searchIcon} />
              <DividerVertical />
              <FilterText>Filtrar</FilterText>
              <IconFilter src={filterIcon} />
              <DividerVertical />
              <FilterText>Organizar</FilterText>
              <IconFilter src={gridIcon} />
              <DividerVertical />
            </ContainerFilterItems>
            <ContainerButton>
              <ButtonComponent onClick={() => { onPressValidate(1, 0); }}>
                <FilterText>NUEVA ENTRADA</FilterText>
                <IconButton src={addIcon} />
              </ButtonComponent>
            </ContainerButton>
          </ContainerFilter>
          <Divider />
          <ContainerTitles>
            <ContainerTableTitles>
              <CheckboxComponent type="checkbox" />
              <TextComponent style={{ marginLeft: -60 }}> ID </TextComponent>
              <TextComponent style={{ marginLeft: -40 }}> Fecha </TextComponent>
              <TextComponent> Cliente </TextComponent>
              <TextComponent style={{ marginLeft: -15, marginRight: 40 }}> Estado </TextComponent>
              <TextComponent> Materiales </TextComponent>
              <TextComponent> Pago Total </TextComponent>
            </ContainerTableTitles>
          </ContainerTitles>
          {user?.map((item) => (
            <div key={item.id} onClick={() => { onPressValidate(item.id, item); }} style={{ cursor: 'pointer' }}>
              <EntryComponent item={item} />
            </div>
          ))}
          <ModalComponent
            isShowing={isShowing}
            hide={toggle}
            title={title}
            id={user.length}
            userSelected={userSelected}
          />
        </ContainerHeader>
        {user.length == 0 ?
          <ContainerEmptyText>
            <TitleEmpty>Parece que aun no haz recoljido algo.</TitleEmpty>
            <SubTitleEmpty>Puedes registrar una recolección haciendo click en el boton de arriba.</SubTitleEmpty>
          </ContainerEmptyText>
          : null}
        <ContainerFooter>
          <TextFooter>Pagina 1 de 1 <SpanFooter> | </SpanFooter></TextFooter>
          <IconFooter src={leftIcon} />
          <IconFooter src={rightIcon} />
        </ContainerFooter>
      </ContainerRight>
    </ContainerRoot>
  )
};

export default Dashboard; 