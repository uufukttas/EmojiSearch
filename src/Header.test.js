import * as React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Header from './Header';

describe('Header existing test', () => {
    it('should be header text in the header of the page', () => {
        render(<Header />);

        const header = screen.getByText('Emoji Search');
        const images = screen.getAllByRole('img');

        expect(header).toBeInTheDocument();
        expect(images.length).toEqual(2);
    });
});