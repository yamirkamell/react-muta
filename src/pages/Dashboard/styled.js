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
const ContainerMenu = styled.div`
`;
const ContainerMenuItems = styled.div`
  margin-top: 80px;
`;
const ContainerItems = styled.div`
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
const IconsMenu = styled.img`
`;
const ContainerMenuName = styled.div`
  margin-top: 20px;
  margin-left: -10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #F1F7F9; 
  border-radius: 23px;
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
  @media (max-width: 960px) {
    overflow-x: scroll;
  } 
`;
const ContainerHeader = styled.div`
`;
const TitleComponent = styled.h1`
`;
const ContainerSubtitle = styled.div`
  display: flex; 
  flex-direction: row; 
  justify-content: space-between;
  width: 125px;
  margin-top: 50px;
`;
const SubTitleComponent = styled.h3`
`;
const FilterText = styled.h5`
  margin-left: 10px;
`;
const Divider = styled.hr`
  margin-top: -5px; 
  border-top: 1px solid #E0E0E0;
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
const DividerVertical = styled.hr`
  border: none;
  border-left: 1px solid #E0E0E0;
  height: 20px;
  margin-left: 10px;
  `;
const ContainerEmptyText = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
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
const TitleEmpty = styled.h1`
  text-align: center;
  color: #9E9E9E;
`;
const SubTitleEmpty = styled.h3`
  text-align: center;
  color: #9E9E9E; 
  margin-top: -10px;
`;
const ContainerFilter = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: space-between; 
  align-items: center;
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
const ContainerFilterItems = styled.div`
  display: flex; 
  flex-direction: row; 
  align-items: center;
`;
const TextSearch = styled.h5`
`;
const InputComponent = styled.input`
  height: 20px;
  background-color: #E0E0E0; 
  border: 1px solid #F5F5F5;
  border-radius: 3px;
  padding: 5px 0px 5px 10px;
  margin-left: 10px;
`;
const IconSearch = styled.img`
  margin-left: -25px;
  margin-right: 10px;
`;
const IconFilter = styled.img`
  margin-left: 10px;
`;
const ContainerButton = styled.div`
`;
const ButtonComponent = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center; 
  height: 36px;
  background-color: #EBB36B;
  border-radius: 4px;
  border: none; 
  color: white;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
    }
`;
const IconButton = styled.img`
  margin-left: 10px;
  margin-right: 5px;
`;

const ContainerTitles = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  margin-top: -10px;
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
const ContainerTableTitles = styled.div`
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
const ContainerFooter = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: flex-end; 
  align-items: center;
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
const TextFooter = styled.h5`
`;
const SpanFooter = styled.span`
  color: #E5E5E5; 
`;
const IconFooter = styled.img`
  width: 22px;
  height: 22px;
  margin-left: 5px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
    }
`;

export {
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
  TextComponent,
  ContainerFooter,
  CheckboxComponent,
  TextFooter,
  SpanFooter,
  IconFooter
}; 