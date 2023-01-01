import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
display: flex;
height: 70px;
background-color: ${(props) => props.theme.header_bg};
border-radius: 15px;
margin: 10px 0px 10px 0px;
align-items: center;
color: ${(props) => props.theme.header_text};
padding-right: 20px;
`;

const StyledTitle = styled.h1`
padding-left: 20px;
flex: 8 0 0;
`;

const Toggle = styled.div`
  position: relative;
  cursor: pointer;
  left: 2%;
  flex: 1 0 0;

  .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: #8b8b8b;
  }
  .toggle--checked {  // 토글 버튼 클릭 시 배경화면 컬러 변경 부분
    background-color: ${(props) => props.theme.toggle_bg};
    left: 27px;
    transition: 0.3s;
  }

  .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: 0.3s;
  }
  .toggle--checked {  // 토글 버튼 클릭 시 토글의 움직임 부분
    left: 27px;
    transition: 0.3s;
  }
`;

function Header({ isOn, toggleButton }) {

  return (
    <StyledHeader>
      <StyledTitle>
        My Agora States
      </StyledTitle>
      <Toggle onClick={toggleButton}>
        <div className={`toggle-container ${isOn ? "toggle--checked" : null}`} />
        <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`} />
      </Toggle>
    </StyledHeader>
  );
}

export default Header;




