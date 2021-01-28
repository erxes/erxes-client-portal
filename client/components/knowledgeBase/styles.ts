import { colors, dimensions, typography } from '../styles';
import styled from 'styled-components';
import styledTS from 'styled-components-ts';

const Header = styledTS<{ color?: string; backgroundImage?: string }>(
  styled.div
)`
  padding: 30px;
  color: ${colors.colorWhite};
  font-size: ${typography.fontSizeBody};

  background-color: ${props => (props.color ? props.color : colors.colorWhite)};
  background-image: ${props =>
    props.backgroundImage && `url(${props.backgroundImage})`};

  h3 {
    font-size: 1.75rem;
    font-weight: ${typography.fontWeightLight};
    padding: 20px 0;
  }
`;

const CategoryItem = styled.div`
  display: flex;
  background-color: ${colors.colorWhite};
  margin-bottom: ${dimensions.coreSpacing}px;
  padding: 25px;
  border: 0;
  box-shadow: 0px 0 15px -10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  transition: 0.4s;

  &:hover {
    box-shadow: 0px 4px 30px -13px rgba(0, 0, 0, 0.25);
    transition: 0.4s;
  }

  align-items: center;
`;

const CategoryIcon = styled.div`
  font-size: 48px;
  color: #6c718b;
  text-align: center;
  width: 120px;
`;

const CategoryContent = styled.div``;

const VideoTutorial = styled.div`
  text-align: center;

  a {
    color: ${colors.colorCoreBlue};
  }
`;

export { Header, CategoryItem, CategoryIcon, CategoryContent, VideoTutorial };
