import styled from 'styled-components';

type StyleImg = {
  src: string;
};

export const CardBox = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
  height: 100vh;
  background-color: #dedede;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
  width: 300px;
  height: 350px;
  box-sizing: border-box;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  background-color: #fff;
`;

const img = styled.img<StyleImg>``;

export const CardImg = styled(img).attrs((props) => ({
  src: props.src,
  alt: 'Card Img',
}))`
  display: block;
  width: 280px;
  min-height: 170px;
  border-radius: 10px;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

// export const CardImg = styled.div<StyleImg>`
//   width: 280px;
//   height: 170px;
//   border-radius: 10px;
//   background-image: url(${(props) => props.url});
//   background-position: center;
//   background-size: 280px 270px;
// `;
