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
import Home from "./index";
import { Login, Logout, Profile, Profile_link} from './index';

export function Mail() {
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

export function find_email() {
  const { user, error, isLoading } = useUser();

  return (
      user && (
          <div>
            <h5>{user.email}</h5>
          </div>
      )
  );
}

export function find_pseudo() {
  const { user, error, isLoading } = useUser();

  return (
      user && (
          <div>
            <h5>{user.name}</h5>
          </div>
      )
  );
}

export function find_username() {
  const { user, error, isLoading } = useUser();

  return (
      user && (
          <div>
            <h5>{user.nickname}</h5>
          </div>
      )
  );
}
export function find_photo() {
  const { user, error, isLoading } = useUser();

  return (
      user && (
          <div>
            <h5>{user.picture}</h5>
          </div>
      )
  );
}


export default function Home2() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  return (
    user ? (
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
        <div className="card-text">Identifiant : {find_username()}</div>
        <div className="card-text">Pseudonyme : {find_pseudo()}</div>
        <div className="card-text">Adresse Mail : {find_email()}</div>
        <div className="card-text"><button className="btn btn-primary" id="furtive_button"><a href="/formulaire">Modifier mes informations</a></button></div>
      </div>
    </div>
  </div>
</div>
<div className="flip_and_divide">
  <div className="Room_Links">
    <h5 className="nice_subtitle">Activités Disponibles</h5>
    <p></p>
    <p></p>
    <div><ul>
      <li className="thin_and_furtive">
        <a href="/UsingLinux1">
        Découverte / Rappel des principales commandes Linux
        </a>
      </li>
      <li className="thin_and_furtive">
        <a href="/NetworkProtocolsModels">
        Modèles de protocoles réseaux
        </a>
      </li>
      <li className="thin_and_furtive">
        <a href="/ProtocolsInCyber">
        Utiliser les protocoles réseaux majeurs
        </a>
      </li>
      <li>
      <a href="/ScanTools">
        Initiation aux scans de ports Nmap ; logique TCP-IP
        </a>
      </li>
      <li>
      <a href="/Metasploit">
        Entraînement et prise en main de Metasploit
        </a>
      </li>
      <li>
      <a href="/WebUnderstanding">
        Interagir avec une cible web
        </a>
      </li>
      <li>
      <a href="/BruteForce">
        Passage en force et énumération web
        </a>
      </li>
      <li>
      <a href="/Shells">
        Création d'interfaces systèmes
        </a>
      </li>
      
      <li>
      <a href="/Room">
        Première boite : un déploiement trop rapide
        </a>
      </li>
      </ul></div>
  </div>
  <div className="Room_Links">
  <h5 className="nice_subtitle">Descriptif et prérequis</h5>
  <p></p>
    <p></p>
    <div><ul>
      <li className="thin_and_furtive">
        Aucun prérequis. Commandes cat, grep, echo, mkdir, find, vi
      </li>
      <li className="thin_and_furtive">
        Présentation des modèles OSI et TCP-IP
      </li>
      <li className="thin_and_furtive">
        Protocoles DNS, HTTP et HTTPS, écriture de requêtes
      </li>
      <li>
        Scans exhaustifs, de services et versions, scans furtifs
      </li>
      <li>
        Moteur de recherche searchsploit et exploit de vulnérabilités
      </li>
      <li className="thin_and_furtive">
        Outils de développement web, requêtes HTTP, déobfuscation
      </li>
      <li className="thin_and_furtive">
        Scrapping web avec gobuster, bruteforce avec hydra
      </li>
      <li className="thin_and_furtive">
        Bind shells, Reverse shells, ascension des privilèges
      </li>
      <li>
        Objectif : prendre le contrôle d'un site très fragile
      </li>
      </ul></div>
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
    
    
  ):(<Home />));
}

