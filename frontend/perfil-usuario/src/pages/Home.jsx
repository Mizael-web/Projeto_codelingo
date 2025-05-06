
import userData from "../data/userData";

const Home = () => {
  return (
    <div className="container">
      <div className="perfil">
        <h2>{userData.nome}</h2>
        <p>{userData.email}</p>
        <button>Editar Perfil</button>
        <button>Alterar Foto</button>
        <button>Alterar Senha</button>
      </div>

      <div className="progresso">
        <h3>Progresso nas Trilhas</h3>
        {userData.trilhas.map((trilha, index) => (
          <div key={index}>
            <p>{trilha.nome}</p>
            <div className="barra">
              <span style={{ width: `${trilha.progresso}%` }}>{trilha.progresso}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="atividades">
        <h3>Últimas Atividades</h3>
        <ul>
          {userData.atividades.map((atividade, index) => (
            <li key={index}>{atividade.descricao} – {atividade.data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
