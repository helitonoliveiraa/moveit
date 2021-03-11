import { render } from '@testing-library/react';
import { Profile } from '../../components/Profile';

describe('Profile', () => {
  it('should be able to visible the Profile', () => {
    const { getByAltText, getByTestId } = render(<Profile />);

    const avatarImg = getByAltText('Avatar');
    const name = getByTestId('name');
    const levelImg = getByAltText('Level');

    expect(avatarImg).toBeVisible();
    expect(name).toBeInTheDocument();
    expect(levelImg).toBeVisible();
  });
});
