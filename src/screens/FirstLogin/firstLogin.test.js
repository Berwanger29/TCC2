import React from 'react';
import { render } from '@testing-library/react-native';
import { FirstLogin } from './FirstLogin';

describe('FirstLogin component', () => {
    it('renders correctly', () => {
      // Renderiza o componente
      const { getByText } = render(<FirstLogin />);
  
      // Verifica se o texto "Bem vindo ao UniTransportes" está presente
      const welcomeText = getByText(/Bem vindo ao UniTransportes/i);
      expect(welcomeText).toBeTruthy();
  
      // Verifica se o botão "Próximo" está presente
      const nextButton = getByText(/Próximo/i);
      expect(nextButton).toBeTruthy();
    });
  
    // Adicione mais testes conforme necessário para verificar outras funcionalidades do componente
  });