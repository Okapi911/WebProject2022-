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
import { Login, Logout, Profile, Profile_link} from './index.tsx';

  export function find_email() {
    const { user, error, isLoading } = useUser();
  
    return (
        user && (
            String(user.email)
        )
    );
  }
  
  export function find_nickname() {
    const { user, error, isLoading } = useUser();
  
    return (
        user && (
            String(user.name).replace(".", " ")
        )
    );
  }
  
  export function find_name() {
    const { user, error, isLoading } = useUser();
  
    return (
        user && (
            String(user.nickname).replace(".", " ")
        )
    );
  }

  export function find_confirm() {
    const { user, error, isLoading } = useUser();
  
    return (
        user && (
            String(user.email_verified)
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
      <img src="form_and_connect.png" className="img-fluid rounded-start" alt="kali" width="300px"/>
    </div>
    <div className="col-md-8" id="card_form">
      <div className="card-body">
        <h3 className="card-title" id="form_title">Remplissez vos renseignements</h3>
        <div className="card-text" id="form_content">


        <form name = "renseignements" action="/api/form" method = "POST">    
            <div className = "container">    
                <div className = "form_group">    
                    <label>Nom:</label>    
                    <input type = "text" name = "id" defaultValue = {find_name()} required/>    
                </div>    
                <div className = "form_group">    
                    <label>Pseudonyme:</label>    
                    <input type = "text" name = "pseudo" defaultValue = {find_nickname()} required />    
                </div>    
                <div className = "form_group">    
                    <label>Adresse Mail:</label>    
                    <input type = "text" name = "mail" defaultValue = {find_email()} required/>    
                </div>    
                <div className = "form_group">    
                    <label>Compte vérifié:</label>    
                    <input type = "text" name = "conf" value = {find_confirm()} required/>    
                </div>    
            </div>
            <button type="submit">Envoyer</button>    
        </form>


        </div>
      </div>
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

