import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import "./styles.css";

import logo from "../../assets/images/logo.svg";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Be The Hero" />
        <span>Bem vinda, APAD</span>
        <Link to="/incidents/new" className="button">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadatrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Casos teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição do caso</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Casos teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição do caso</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Casos teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição do caso</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Casos teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição do caso</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
