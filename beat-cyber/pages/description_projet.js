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
import { Container, Typography } from '@mui/joy';
import useDownloader from "react-use-downloader";


export default function Home() {

  class Connexion extends React.Component {
    state = {
      myInputValue: ""
    }
   
    render(){
     <input
       type="text"
       value={this.state.myInputValue}
       onChange={e => this.setState({myInputValue: e.target.value})}/>
    }
  }

  const { size, elapsed, percentage, download,
    cancel, error, isInProgress } =
useDownloader();

const fileUrl = "/My_vm.ova";
const fileUrl2 = "/management_progrès.pptx";
const filename = "myKaliLinuxVM.ova";

function barre_chargement() {
  return (
  <div>
  <progress id="file" value={percentage} max="100" />
  <p>Elapsed time in seconds {elapsed}</p>
  </div>
  )
}


    

  
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




<div className="row row-cols-1 row-cols-md-1 g-4" id="upside_down_cards_row3">
  <h1 id="page_title" STYLE="margin-top:5%">Présentation du projet</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;L’évolution rapide des technologies informatiques au cours des dernières décennies a révolutionné les modes de vie et le monde du travail. De nos jours toute personne peut se connecter à un appareil en réseau ou à un site internet, et toute entreprise est présente en ligne, accessible et exposée à la visibilité du grand public. La cybersécurité consistant en la protection des technologies de l’information (systèmes, réseaux et données) est ainsi devenue un enjeu majeur pour tous les individus et les organisations, qui doivent veiller à leur intégrité face aux attaques toujours plus nombreuses, plus pointues et mondiales. L’avènement de l’IoT (internet des objets) au sein des foyers contribuent également à l’essor du risque informatique.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Néanmoins, face à des attaques d’envergure grandissante et des codes applicatifs développés toujours plus vite sur des produits issus le plus souvent de l’open source avec un cycle de vie effréné, peu d’individus ont les moyens de réaliser l’importance de maintenir à niveau la sécurité de leurs appareils et de se tenir informé sur les nouveaux outils développés et utilisés par les attaquants. </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;C’est pourquoi l’école nationale supérieure des Mines de Nancy a dans ce contexte décidé de mettre en place une plateforme d’entraînement à la cybersécurité afin de former ses étudiants de toutes spécialités à l’utilisation des outils de ce domaine.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Responsable de la réalisation de ce projet du département informatique pendant toute une année scolaire, ce rapport présente le travail réalisé au cours de la période. Il s’agit d’un document à visée pédagogique, adressé à toute personne intéressée par la cybersécurité, incluant celles ayant peu de connaissances informatiques. Il explicite notamment l’utilisation des outils courants de la cybersécurité offensive, mais traite également du développement web du site support de la plateforme d’entraînement et de la création d’une cible pour mettre en pratique les compétences acquises.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Dans un premier temps je m’intéresserai aux fondements de linux, des réseaux et des outils développeurs. Ces connaissances sont fondamentales car si elles ne permettent pas directement de réaliser une attaque sur une cible, ce sont les bases de toute démarche en cybersécurité et seront toujours utilisées en addition aux outils cyber offensifs.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Je traiterai ensuite de plusieurs programmes utilitaires permettant de réaliser des attaques simples sur différents types de cibles. Ces applications à réunir sur la machine virtuelle attaquante sont essentielles au déroulement d’une cyberattaque car même lorsqu’elles ne suffisent pas à prendre le contrôle du site ou de la machine distante elles produisent beaucoup d’informations que l’on peut exploiter pour affiner le travail restant à fournir.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Enfin j’expliquerai comment j’ai développé le site support de cette plateforme de cybersécurité et quelles y sont les technologies mises en œuvre. Je décrirai également les étapes de la construction d’une cible web simple pour pratiquer ses premières attaques de cybersécurité.</div>
            
            <div STYLE="margin-bottom:5%; text-align:center" className="larger_text">
            <img src="/766165db9580dc671b3fe674e3b52306.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:3%; text-align:center" className="larger_text">Téléchargement de la machine virtuelle kali{isInProgress && " en cours"}</div>
            <div STYLE="margin-bottom:5%; text-align:center" className="larger_text">
            <div>{!isInProgress ? (
            <button STYLE="margin-right:3%; text-align:center; border-radius:15px; background-color:lavender; font-size:20px" onClick={() => download(fileUrl, filename)}>
        Cliquer pour télécharger
      </button>):(
      <button STYLE="margin-left:3%; text-align:center; border-radius:15px; background-color:lavender; font-size:20px" onClick={() => cancel()}>
        Interrompre le téléchargement
      </button>)}</div>
      <p></p>
      {/*<p>Download size in bytes {size}</p> */}
      
      <div>{isInProgress && (barre_chargement())}</div>
       
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
      <footer><div className="top_page_footer">
          <div className="flip_list2">
            <a href="#top" className="internal_links1">Retour haut de page</a>
            <a href="https://www.hackthebox.com/" className="internal_links1">Plateforme similaire</a>
            <a href="https://www.depinfonancy.net/" className="internal_links1">Partenaires</a>
          </div>
        </div></footer>
      </main>


      
    </div>
    
    
  );
}

