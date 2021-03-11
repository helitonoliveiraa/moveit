import { fireEvent, render } from '@testing-library/react';
import { ChallengeBox } from '../../components/ChallengeBox';

const mockHandleChallengeSucceeded = jest.fn();

describe('Challenge Box', () => {
  it('should be able to succeed in the challenge', () => {
    const { getByTestId } = render(<ChallengeBox />);
  });
});
