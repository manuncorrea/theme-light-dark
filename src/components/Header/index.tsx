import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished'; // Shade pegar uma cor e aplica um percentual de preto em cima dela

import { Container } from './styles';

interface Props{
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return(
    <Container>
      Header

      <Switch
        //Função para trocar os temas
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.primary}
       />
    </Container>
  );
} 

export default Header;