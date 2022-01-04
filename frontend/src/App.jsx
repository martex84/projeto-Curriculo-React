import './view/styles/App.css';

import MenuSystem from './view/components/menuSystem';
import ListValues from './view/components/listValues';

function App() {

  const arrayListaDouble = [
    {
      nomeEmpresa: "EloGroup",
      descricaoExperiencia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum lacus eget neque viverra pellentesque. Morbi sollicitudin iaculis lacinia. Pellentesque ornare vehicula quam vitae mollis. Suspendisse porta risus eu ipsum imperdiet iaculis. \nNam id elit porttitor, venenatis lacus in, condimentum sapien. Nulla in aliquet nunc. Integer lacus justo, ullamcorper at dolor et, aliquet molestie odio. Suspendisse feugiat porttitor augue vitae maximus. Maecenas maximus consectetur vehicula. Proin blandit odio sed mauris facilisis, vel dignissim ipsum lobortis. Cras a ante est. Cras massa velit, efficitur eu accumsan vel, pretium sed tortor. Maecenas sit amet facilisis odio"
    },
    {
      nomeEmpresa: "Academia da Força Aérea",
      descricaoExperiencia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum lacus eget neque viverra pellentesque. Morbi sollicitudin iaculis lacinia. Pellentesque ornare vehicula quam vitae mollis. Suspendisse porta risus eu ipsum imperdiet iaculis. \nNam id elit porttitor, venenatis lacus in, condimentum sapien. Nulla in aliquet nunc. Integer lacus justo, ullamcorper at dolor et, aliquet molestie odio. Suspendisse feugiat porttitor augue vitae maximus. Maecenas maximus consectetur vehicula. Proin blandit odio sed mauris facilisis, vel dignissim ipsum lobortis. Cras a ante est. Cras massa velit, efficitur eu accumsan vel, pretium sed tortor. Maecenas sit amet facilisis odio"
    },
    {
      nomeEmpresa: "EloGroup",
      descricaoExperiencia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum lacus eget neque viverra pellentesque. Morbi sollicitudin iaculis lacinia. Pellentesque ornare vehicula quam vitae mollis. Suspendisse porta risus eu ipsum imperdiet iaculis. \nNam id elit porttitor, venenatis lacus in, condimentum sapien. Nulla in aliquet nunc. Integer lacus justo, ullamcorper at dolor et, aliquet molestie odio. Suspendisse feugiat porttitor augue vitae maximus. Maecenas maximus consectetur vehicula. Proin blandit odio sed mauris facilisis, vel dignissim ipsum lobortis. Cras a ante est. Cras massa velit, efficitur eu accumsan vel, pretium sed tortor. Maecenas sit amet facilisis odio"
    },
    {
      nomeEmpresa: "Academia da Força Aérea",
      descricaoExperiencia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum lacus eget neque viverra pellentesque. Morbi sollicitudin iaculis lacinia. Pellentesque ornare vehicula quam vitae mollis. Suspendisse porta risus eu ipsum imperdiet iaculis. \nNam id elit porttitor, venenatis lacus in, condimentum sapien. Nulla in aliquet nunc. Integer lacus justo, ullamcorper at dolor et, aliquet molestie odio. Suspendisse feugiat porttitor augue vitae maximus. Maecenas maximus consectetur vehicula. Proin blandit odio sed mauris facilisis, vel dignissim ipsum lobortis. Cras a ante est. Cras massa velit, efficitur eu accumsan vel, pretium sed tortor. Maecenas sit amet facilisis odio"
    }
  ]

  return (
    <main className="App">
      <MenuSystem />
      <ListValues props={arrayListaDouble} nameList={'Habilidades'} />
    </main>
  );
}

export default App;
