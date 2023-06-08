import Head from "next/head";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { createAuth0Client } from "@auth0/auth0-spa-js";
import { CssVarsProvider, styled } from "@mui/joy/styles";
import Button, { ButtonProps } from "@mui/joy/Button";
import Switch from "@mui/joy/Switch";
import purple from '@mui/joy/colors';
import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "next/app";
import { useUser } from '@auth0/nextjs-auth0/client';
import { Login, Logout, Profile, Profile_link} from './index';



export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Beat Cyber</title>
        <meta name="description" content="Welcome to beat-cyber" />
        <link rel="icon" href="/peter.png" />
      </Head>
      <main>
        <div className="top_page_header">
          <div className="align_right"><button className="btn btn-primary" id="login_button">{Profile()}{Login()}{Profile_link()}{Logout()}</button></div>
          <h1 className="main_title">Beat Cyber</h1>
          <div className="flip_list">
            <a href="/" className="internal_links1">Accueil</a>
            <a href="/description_projet" className="internal_links1">Le Projet</a>
            <a href="/qui_sommes_nous" className="internal_links1">Qui sommes-nous</a>
            <a href="https://www.depinfonancy.net/" className="internal_links1">Partenaires</a>
          </div>
        </div>
          <p></p>
<div className="row row-cols-1 row-cols-md-1 g-4" id="upside_down_cards_row">
  <div className="col">
  <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4" id="form_pic">
      <img src="tigre.jpg" className="img-fluid rounded-start" alt="Tiger_cub" width="500px"/>
    </div>
    <div className="col-md-8" id="card_form">
      <div className="card-body">
        <h4 className="card-title" id="form_title">Lucas Kloubert</h4>
        <div className="card-text" id="form_content">
            <div className="larger_text">Responsable du projet de développement d'une plateforme d'entraînement cybersécurité pour l'école des Mines de Nancy sur l'année 2022-2023.</div>
            <div className="larger_text">Membre du département informatique de l'école susmentionnée, je souhaitais me faire une première expérience du milieu de la cyber pour orienter mon projet professionnel.</div>
            <div className="larger_text">En me formant à l'utilisation d'outils cyber sur de grandes plateformes comme hackthebox, j'ai très vite pu constater à quel point le monde de la cybersécurité est vaste et difficile à prendre en main. C'est pourquoi je souhaite proposer une plateforme simple et ergonomique pour les prochains intéressés.</div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
  <div className="col">
  <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-8" id="card_form">
      <div className="card-body">
        <h4 className="card-title" id="form_title">Mines Nancy -- Département Informatique</h4>
        <div className="card-text" id="form_content">
            <div className="larger_text">Grande école d'ingénierie française reconnue par la plupart des classements notamment celui de l'usine nouvelle comme une des meilleures du pays, l'école des Mines de Nancy forme des ingéneurs généralistes à tendance humaniste tournés vers l'international.</div>
            <div className="larger_text">Le département informatique de l'école vise à approfondir les connaissances des étudiants sur les sciences numériques au travers notamment de deux facettes : cybersécurité et intelligence artificielle. Une plateforme cyber propriété de l'école présenterait donc une forte utilité pour aiguyer les cursus.</div>
        </div>
      </div>
    </div>
    <div className="col-md-4" id="form_pic">
      <img src="mines-nancy.png" className="img-fluid rounded-start" alt="mines_logo" width="400px"/>
    </div>
  </div>
</div>
  </div>
</div>

  <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossOrigin="anonymous"
        async
      ></script>
      </main>

      <footer><div className="top_page_footer">
          <div className="flip_list2">
            <a href="#top" className="internal_links1">Retour haut de page</a>
            <a href="https://www.hackthebox.com/" className="internal_links1">Plateforme similaire</a>
            <a href="https://www.depinfonancy.net/" className="internal_links1">Partenaires</a>
          </div>
        </div></footer>
    </div>
    
    
  );
}

