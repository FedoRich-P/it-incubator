import { styled, css } from 'styled-components';

type StyleBtnPropsType = {
  preview?: boolean;
  saving?: boolean;
};

export const CardBody = styled.div`
  padding: 10px;
`;
export const CardTitle = styled.h3`
  margin-bottom: 20px;
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

export const CardText = styled.p`
  padding: 0;
  margin: 0;
  margin-bottom: 19px;
  max-width: 240px;
  color: #999;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
`;

export const CardBtn = styled.button<StyleBtnPropsType>`
  min-width: 84px;
  padding: 5px 20px;
  font-weight: bold;
  line-height: 20px;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  & + button {
    margin-left: 19px;
  }

  ${(props) =>
    props.preview &&
    css<StyleBtnPropsType>`
      background-color: #4e71fe;
      color: #fff;
      border-color: #4e71fe;

      &:hover {
        background-color: #fff;
        color: #4e71fe;
        border-color: #4e71fe;
      }
    `};

  ${(props) =>
    props.saving &&
    css<StyleBtnPropsType>`
      background-color: #fff;
      color: #4e71fe;
      border-color: #4e71fe;

      &:hover {
        background-color: #4e71fe;
        color: #fff;
        border-color: #4e71fe;
      }
    `};
`;
