import "../../styles/menuSystem.css"

function menuSystem() {
    return (
        <section id="c-menu-system">
            <div className="c-secundario-menu">
                <div className="c-information-menu">
                    <button className="button-system button-system--big">Enviar Imagem de Perfil</button>
                </div>
                <div className="c-information-menu">
                    <h2 className="c-information-menu__title">
                        Informação Pessoal
                    </h2>
                    <label className="c-information-menu__label">
                        Nome
                    </label>
                    <input type="text" placeholder="Digite seu nome" className="c-information-menu__input" />
                    <label className="c-information-menu__label">
                        Cidade
                    </label>
                    <input type="text" placeholder="Digite sua cidade" className="c-information-menu__input" />
                    <label className="c-information-menu__label">
                        Estado
                    </label>
                    <input type="text" placeholder="Digite seu estado" className="c-information-menu__input" />
                    <label className="c-information-menu__label">
                        Telefone
                    </label>
                    <input type="text" placeholder="Digite seu telefone" className="c-information-menu__input" />
                    <label className="c-information-menu__label">
                        Email
                    </label>
                    <input type="email" placeholder="Digite seu email" className="c-information-menu__input" />
                    <label className="c-information-menu__label">
                        Github
                    </label>
                    <input type="text" placeholder="Digite seu github" className="c-information-menu__input" />
                    <label className="c-information-menu__label">
                        Linkedin
                    </label>
                    <input type="text" placeholder="Digite seu linkedin" className="c-information-menu__input" />
                </div>
            </div>
            <div className="c-secundario-menu">
                <div className="c-information-menu">

                </div>
            </div>
        </section>
    )
}

export default menuSystem;