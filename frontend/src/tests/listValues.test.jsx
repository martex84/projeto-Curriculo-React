import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react';
import ListValues from '../view/components/ListValues'

describe.skip('Test function in interface List Value', () => {
  const arrayListaDouble = [
    {
      nomeEmpresa: "EloGroup",
      descricaoExperiencia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum lacus eget neque viverra pellentesque. Morbi sollicitudin iaculis lacinia. Pellentesque ornare vehicula quam vitae mollis. Suspendisse porta risus eu ipsum imperdiet iaculis. \nNam id elit porttitor, venenatis lacus in, condimentum sapien. Nulla in aliquet nunc. Integer lacus justo, ullamcorper at dolor et, aliquet molestie odio. Suspendisse feugiat porttitor augue vitae maximus. Maecenas maximus consectetur vehicula. Proin blandit odio sed mauris facilisis, vel dignissim ipsum lobortis. Cras a ante est. Cras massa velit, efficitur eu accumsan vel, pretium sed tortor. Maecenas sit amet facilisis odio"
    },
    {
      nomeEmpresa: "Academia da Força Aérea",
      descricaoExperiencia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum lacus eget neque viverra pellentesque. Morbi sollicitudin iaculis lacinia. Pellentesque ornare vehicula quam vitae mollis. Suspendisse porta risus eu ipsum imperdiet iaculis. \nNam id elit porttitor, venenatis lacus in, condimentum sapien. Nulla in aliquet nunc. Integer lacus justo, ullamcorper at dolor et, aliquet molestie odio. Suspendisse feugiat porttitor augue vitae maximus. Maecenas maximus consectetur vehicula. Proin blandit odio sed mauris facilisis, vel dignissim ipsum lobortis. Cras a ante est. Cras massa velit, efficitur eu accumsan vel, pretium sed tortor. Maecenas sit amet facilisis odio"
    }
  ]

  const arrayListaUnit = [
    {
      descricaoExperiencia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum lacus eget neque viverra pellentesque. Morbi sollicitudin iaculis lacinia. Pellentesque ornare vehicula quam vitae mollis. Suspendisse porta risus eu ipsum imperdiet iaculis. \nNam id elit porttitor, venenatis lacus in, condimentum sapien. Nulla in aliquet nunc. Integer lacus justo, ullamcorper at dolor et, aliquet molestie odio. Suspendisse feugiat porttitor augue vitae maximus. Maecenas maximus consectetur vehicula. Proin blandit odio sed mauris facilisis, vel dignissim ipsum lobortis. Cras a ante est. Cras massa velit, efficitur eu accumsan vel, pretium sed tortor. Maecenas sit amet facilisis odio"
    },
    {
      descricaoExperiencia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum lacus eget neque viverra pellentesque. Morbi sollicitudin iaculis lacinia. Pellentesque ornare vehicula quam vitae mollis. Suspendisse porta risus eu ipsum imperdiet iaculis. \nNam id elit porttitor, venenatis lacus in, condimentum sapien. Nulla in aliquet nunc. Integer lacus justo, ullamcorper at dolor et, aliquet molestie odio. Suspendisse feugiat porttitor augue vitae maximus. Maecenas maximus consectetur vehicula. Proin blandit odio sed mauris facilisis, vel dignissim ipsum lobortis. Cras a ante est. Cras massa velit, efficitur eu accumsan vel, pretium sed tortor. Maecenas sit amet facilisis odio"
    }
  ]

  test('Create list for one field', () => {
    render(<ListValues props={arrayListaUnit} />);

    const list = screen.getAllByRole('listitem', {
      name: 'unitList'
    })

    for (let listItem of list) {
      expect(listItem).toBeInTheDocument();
    }
  });

  test('Create list for two field', () => {
    render(<ListValues props={arrayListaDouble} />);

    const list = screen.getAllByRole('listitem', {
      name: 'doubleList'
    })

    for (let listItem of list) {
      expect(listItem).toBeInTheDocument();
    }
  });
})