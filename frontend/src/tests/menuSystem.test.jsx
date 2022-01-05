import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react';

import MenuSystem from '../view/components/MenuSystem';

describe('Test for componente Menu System', () => {

    test.only('Close componente List Values', () => {
        render(< MenuSystem />)

        let componenteMain = screen.queryByLabelText(/c-list-values/i);

        expect(componenteMain).toBeNull();

        const buttonOpen = screen.getAllByRole('button', {
            name: "buttonOpenList"
        })

        userEvent.click(buttonOpen[0]);

        componenteMain = screen.getByLabelText(/c-list-values/i);

        expect(componenteMain).toBeInTheDocument();

        const buttonClose = screen.getByRole('button', { name: "closeButton" });

        expect(buttonClose).toBeInTheDocument();

        userEvent.click(buttonClose);

        componenteMain = screen.queryByLabelText(/c-list-values/i)

        expect(componenteMain).toBeNull();

    })

})