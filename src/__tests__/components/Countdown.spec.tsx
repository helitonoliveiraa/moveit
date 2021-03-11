import { fireEvent, render } from '@testing-library/react';
import { Countdow } from '../../components/Countdown';

const mockStartCountdown = jest.fn();

jest.mock('../../components/Countdown');

describe('Countdown', () => {
  it('should be able to start a new cicle', () => {
    const { getByText } = render(<Countdow />);

    const buttonElement = getByText('Iniciar um ciclo');

    fireEvent.click(buttonElement);

    expect(mockStartCountdown).toHaveBeenCalled();
  });
});
