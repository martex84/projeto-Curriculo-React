import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react';

import ListValues from '../view/components/ListValues'
import database from '../services/database'

describe('Test function in interface List Value', () => {

  const db = database;

  test('Create list for one field', () => {
    render(<ListValues props={db.habilidades} />);

    const list = screen.getAllByRole('listitem', {
      name: 'unitList'
    })

    for (let listItem of list) {
      expect(listItem).toBeInTheDocument();
    }
  });

  test('Create list for two field', () => {
    render(<ListValues props={db.cursosRealizados} />);

    const list = screen.getAllByRole('listitem', {
      name: 'doubleList'
    })

    for (let listItem of list) {
      expect(listItem).toBeInTheDocument();
    }
  });
})