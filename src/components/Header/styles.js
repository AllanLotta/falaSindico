import styled from 'styled-components/native';
// import LogoImage from '../../assets/falaSindicoLogo.png';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #387ff5;
  padding: 12px;
  align-items: center;
`;
export const ScreenName = styled.Text`
  color: #fafafa;
  font-size: 18px;
  font-weight: bold;
`;

export const Logo = styled.Image`
  width: 50;
  height: 30;
`;
// export const Logo = styled.Image.attrs({
//   source: LogoImage,
// })`
//   width: 100%;
// `;
