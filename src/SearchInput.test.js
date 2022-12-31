import * as React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput existing test', () => {
    it('should be search input in the page', () => {
        render(<SearchInput />);
        const searchInput = screen.getAllByRole('textbox');

        expect(searchInput.length).toEqual(1)
    });
});