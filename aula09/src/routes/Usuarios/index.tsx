import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Usuarios() {
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([
    {
      id: 0,
      login: "",
      avatar_url: "",
    },
  ]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => {
        if (!response.ok) {
          console.log("Erro ao buscar usuários");
        }
        return response.json();
      })
      .then((data) => {
        setUsuarios(data);
      })
      .catch((error) => {
        console.log(error.message);
        navigate("/error");
      });
  }, []);

  return (
    <div>
      <h1>Usuários</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {usuarios.map((usuario) => (
          <div key={usuario.id}>
            <figure>
              <img src={usuario.avatar_url} alt={usuario.login} />
              <figcaption>{usuario.login}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
