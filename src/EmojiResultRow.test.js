import * as React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import EmojiResultsRow from './EmojiResultRow';
import emojiList from './emojiList.json';

describe('Emoji Result Row Component test', () => {
    it('should be two emoji row', () => {
        render(<EmojiResultsRow title={emojiList[0].title} symbol={emojiList[0].symbol} />);
        render(<EmojiResultsRow title={emojiList[1].title} symbol={emojiList[1].symbol} />);

        const emojiResultsRowImage = screen.getAllByRole('img');
        const emojiResultsRowSpanTitle = screen.getAllByTestId('span-title');
        const emojiResultsRowSpanInfo = screen.getAllByTestId('span-info');

        expect(emojiResultsRowImage.length).toEqual(2);
        expect(emojiResultsRowSpanTitle.length).toEqual(2);
        expect(emojiResultsRowSpanInfo.length).toEqual(2);
    });
});