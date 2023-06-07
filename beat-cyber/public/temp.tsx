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

export function Login() {
  const { user, error, isLoading } = useUser();
  return !user && (<a href="/api/auth/login" className="login_button">Connexion</a>);
}
export function Logout() {
  const { user, error, isLoading } = useUser();
  return user && (<a href="/api/auth/logout" className="login_button" id="pretty_row_button">Déconnexion</a>);
}

export function Profile_link() {
  const { user, error, isLoading } = useUser();
  return user && (<a href="/api/auth/logout" className="login_button" id="pretty_row_button">Profil</a>);
}

export function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
      user && (
          <div>
            <h5>{user.email}</h5>
          </div>
      )
  );
}

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
            <a href="#top" className="internal_links1">Qui sommes-nous</a>
            <a href="#top" className="internal_links1">Partenaires</a>
          </div>
        </div>
          <p></p>
<div className="row row-cols-1 row-cols-md-3 g-4" id="upside_down_cards_row">
  <div className="col">
    <div className="card h-100" id="shadow_and_border">
      <img src="tux_larger.png" className="card-img-top" alt="Nmap logo" height="220px"/>
      <div className="card-body">
        <p className="card-text">Révisez l'utilisation des fonctionnalités basiques d'une distribution linux, notamment dans le cas d'une VM orientée attaque. C'est aussi l'occasion d'apprendre la terminologie spécifique dans un terminal.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" id="shadow_and_border">
      <img src="First-Room.jpg" className="card-img-top" alt="Metasploit Logo" height="220px"/>
      <div className="card-body">
        <p className="card-text">Faîtes-vous guider en utilisant Nmap et Metasploit pour faire tomber une cible simple : un blog personnel abandonné. Vous pourrez également avec un peu plus d'efforts en prendre le contrôle en obtenant des privilèges.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" id="shadow_and_border">
      <img src="enghienlesbains-association-fiche.jpg" className="card-img-top" alt="Firewall" height="220px"/>
      <div className="card-body">
        <p className="card-text">Identifiant : {Profile()}</p>
        <div className="card-text">Pseudonyme : Indéfini</div>
        <div className="card-text">Age : Indéfini</div>
        <div className="card-text">Adresse : Indéfinie</div>
        <div className="card-text"><button className="btn btn-primary" id="furtive_button">Modifier mes informations</button></div>
      </div>
    </div>
  </div>
</div>
<div className="flip_and_divide">
  <div className="Room_Links">
    <h5 className="nice_subtitle">Activités Disponibles</h5>
    <p></p>
    <p></p>
    <p><ul>
      <li className="thin_and_furtive">
        Découverte / Rappel des principales commandes Linux
      </li>
      <li>
        test2
      </li>
      </ul></p>
  </div>
  <div className="Room_Links">
  <h5 className="nice_subtitle">Descriptif et prérequis</h5>
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
            <a href="#top" className="internal_links1">Partenaires</a>
          </div>
        </div></footer>
    </div>
    
    
  );
}

