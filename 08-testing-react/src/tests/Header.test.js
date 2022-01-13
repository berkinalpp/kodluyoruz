import React from 'react'
import { render, screen } from "@testing-library/react";
import Header from "../Header";


describe('Header tests ', () => {
    test('Header component must correctly render and that is content must be Emoji Search', () => {
        render(<Header />);
        const title = screen.getByText('Emoji Search');
        expect(title.toBeInDocument);
    })
})