import styled from 'styled-components';

const ContainerRoot = styled.div`
  display: flex; 
  flex-direction: row; 
  justify-content: space-around; 
  height: 100vh;
  background-color: white;
`;
const ContainerLeft = styled.div`
  flex:  .5;
  min-width: 230px;
  display: flex; 
  flex-direction: column; 
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px 25px 0px; 
  @media (max-width: 810px) {
    flex: 0.4;
    min-width: 0px;
  }
  @media (max-width: 810px) {
    flex: 0.4;
    min-width: 0px;
  }
  @media (max-width: 340px) {
    flex: 0.4;
    min-width: 0px;
  }
`;
const LogoImg= styled.img`
  @media (max-width: 810px) {
    display: none;
  }
`;
const LogoImgResponsive = styled.img`
  display: none;
  @media (max-width: 810px) {
    display: flex;
  }
`;
const ContainerMenuItems = styled.div`
  margin-top: 20px;
  margin-left: -10px;
  padding-left: 10px;
  @media (min-width: 810px) {
    display: flex; 
    flex-direction: row; 
    align-items: center;
    margin-top: -5px;
    height: 40px;
  }
`;
const ContainerMenuName = styled.div`
  margin-top: 20px;
  margin-left: -10px;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 810px) {
    display: flex; 
    flex-direction: row; 
    align-items: center;
    height: 32px;
  }
`;
const MenuTextItems = styled.h5`
  margin-left: 5px;
  @media (max-width: 810px) {
    display: none;
  }
`;
const ContainerRight = styled.div`
  flex: 2; 
  background-color: #F1F7F9;
  border-left: 1px solid #E0E0E0;
  display: flex; 
  flex-direction: column; 
  justify-content: space-between;
  padding: 20px 45px 5px 45px; 
  @media (max-width: 340px) {
    padding: 5px 3px 5px 5px; 
  } 
`;
const FilterText = styled.h5`
  margin-left: 10px;
  @media (max-width: 810px) {
    display: none;
  }
`;
const Divider = styled.hr`
  margin-top: -5px; 
  border-top: 1px solid #E0E0E0;
  `;
const DividerVertical = styled.hr`
  border: none;
  border-left: 1px solid #E0E0E0;
  height: 20px;
  margin-left: 10px;
  `;

export {
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
}; 