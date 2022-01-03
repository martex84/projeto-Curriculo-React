import "../../styles/menuSystem.css"

function menuSystem() {
    return (
        <section id="c-menuSystem">
            <div className="c-secundario-menu displayMain">
                <div className="c-informacao-menu displayMain">
                    <button>Enviar Imagem de Perfil</button>
                </div>
                <div className="c-informacao-menu displayMain">
                    <h2>
                        Informação Pessoal
                    </h2>
                    <label>
                        Nome
                    </label>
                    <input type="text" placeholder="Digite seu nome" />
                    <label>
                        Cidade
                    </label>
                    <input type="text" placeholder="Digite sua cidade" />
                    <label>
                        Estado
                    </label>
                    <input type="text" placeholder="Digite seu estado" />
                    <label>
                        Telefone
                    </label>
                    <input type="text" placeholder="Digite seu telefone" />
                    <label>
                        Email
                    </label>
                    <input type="email" placeholder="Digite seu email" />
                    <label>
                        Github
                    </label>
                    <input type="text" placeholder="Digite seu github" />
                    <label>
                        Linkedin
                    </label>
                    <input type="text" placeholder="Digite seu linkedin" />
                </div>
            </div>
            <div className="c-secundario-menu">
                <div className="c-informacao-menu">

                </div>
            </div>
        </section>
    )
}

export default menuSystem;