import React from 'react';
import {
  ContainerRoot,
  ContainerLeft,
  LogoImg,
  LogoImgResponsive,
  ContainerMenuItems,
  ContainerMenuName,
  MenuTextItems,
  ContainerRight,
  FilterText,
  Divider,
  DividerVertical,
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

const Dashboard = () => {

  return (
    <ContainerRoot>
      <ContainerLeft>
        <div>
          <LogoImg src={mutaLogo} />
          <LogoImgResponsive src={mutaLogoResponsive} />
          <div style={{ marginTop: 80 }}>
            <ContainerMenuItems>
              <img src={usersIcon} />
              <MenuTextItems>Usuarios</MenuTextItems>
            </ContainerMenuItems>
            <ContainerMenuItems>
              <img src={trashIcon} />
              <MenuTextItems>Recolecciones</MenuTextItems>
            </ContainerMenuItems>
            <ContainerMenuItems style={{ backgroundColor: '#F1F7F9', borderRadius: 8 }}>
              <img src={truckIcon} />
              <MenuTextItems>Entradas ACU</MenuTextItems>
            </ContainerMenuItems>
            <ContainerMenuItems>
              <img src={configIcon} />
              <MenuTextItems>Configurar</MenuTextItems>
            </ContainerMenuItems>
            <ContainerMenuItems>
              <img src={helpIcon} />
              <MenuTextItems>Ayuda</MenuTextItems>
            </ContainerMenuItems>
          </div>
        </div>
        <ContainerMenuName style={{ backgroundColor: '#F1F7F9', borderRadius: 23 }}>
          <img src={avatarIcon} />
          <MenuTextItems> Sebastian Ferreira</MenuTextItems>
        </ContainerMenuName>
      </ContainerLeft>
      <ContainerRight>
        <div>
          <h1>Recolecciones</h1>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 125, marginTop: 50 }}>
            <h3>Hoy</h3>
            <h3 style={{ color: '#9E9E9E' }}>Todas</h3>
          </div>
          <Divider />
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <h5>Buscar</h5>
              <input style={{
                height: 20, backgroundColor: '#E0E0E0', border: '1px solid #F5F5F5',
                borderRadius: 3, padding: '5px 0px 5px 10px', marginLeft: 10
              }} placeholder='Ingresa un ID' />
              <img src={searchIcon} style={{ marginLeft: -25, marginRight: 10 }} />

              <DividerVertical />
              <FilterText>Filtrar</FilterText>
              <img src={filterIcon} style={{ marginLeft: 10 }} />
              <DividerVertical />
              <FilterText>Organizar</FilterText>
              <img src={gridIcon} style={{ marginLeft: 10 }} />

              <DividerVertical />
            </div>
            <div>
              <button style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 36, backgroundColor: '#EBB36B', borderRadius: 4, border: 'none', color: 'white' }}>
                <FilterText>NUEVA ENTRADA</FilterText>
                <img src={addIcon} style={{ marginLeft: 10, marginRight: 5 }} />
              </button>


            </div>
          </div>
          <Divider />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <h1 style={{ textAlign: 'center', color: '#9E9E9E' }}>Parece que aun no haz recoljido algo.</h1>
          <h3 style={{ textAlign: 'center', color: '#9E9E9E', marginTop: -10 }}>Puedes registrar una recolección haciendo click en el boton de arriba.</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
          <h5>Pagina 1 de 1 <span style={{ color: '#E5E5E5' }} > | </span></h5>
          <img src={leftIcon} style={{ width: 22, height: 22, marginLeft: 5 }} />
          <img src={rightIcon} style={{ width: 22, height: 22, marginLeft: 5 }} />
        </div>
      </ContainerRight>
    </ContainerRoot>
  )
};

export default Dashboard; 