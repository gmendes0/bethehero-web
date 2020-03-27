import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";

import logo from "../../assets/images/logo.svg";
import heroesImg from "../../assets/images/heroes.png";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />

        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" />
          <button type="submit" className="button">
            Entrar
          </button>

          {/* O componente 'Link' não recarrega a página ao contrário do 'a', mantendo o conceito de SPA */}
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
