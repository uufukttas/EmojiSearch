import * as React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmojiResults from './EmojiResults';
import SearchInput from './SearchInput';
import filterEmoji from './filterEmoji';

describe('Emoji List existing test', () => {
    it ('should be 20 emojis on the listing page for starting', () => {
        render(<EmojiResults emojiData={filterEmoji('', 20)} />);

        const emojiResults = screen.getAllByRole('img');
        expect(emojiResults.length).toEqual(20);
    });

    it ('should be filtered emojis on the filtered page', () => {
        const emojiName = 'tongue';
        userEvent.type('input', emojiName);
        
        render(<SearchInput />);
        render(<EmojiResults emojiData={filterEmoji(emojiName, 4)} />);

        expect(screen.getAllByRole('img').length).toEqual(4);
    });
});