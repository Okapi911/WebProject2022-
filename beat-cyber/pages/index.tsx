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
import { supabase } from '../supabaseClient'
import { handleLogin } from "@auth0/nextjs-auth0";

/*ReactDOM.render(
  <Auth0Provider
    domain="dev-hiha0ynox0c763px.us.auth0.com"
    clientId="lFSxLCWWO6RlTZ8AaOMAbQKzFy93ZmbX"
    authorizationParams={{
      redirect_uri: "window.location.origin"
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);*/

const connected = 0;
export function Login() {
  const [loading, setLoading] = useState(false)

  const handleLoginSup = async (email:string) => {

    
    const { error } = await supabase.auth.signInWithOtp({ email })

    
  }
  const { user, error, isLoading } = useUser();
  if (user){
    if (user.email){
      if (user.email != null){
        handleLoginSup(user.email);
      }
    }
  }
  return !user && (<a href="/api/auth/login" className="login_button">Connexion</a>);
}
export function Logout() {
  const { user, error, isLoading } = useUser();
  return user && (<a href="/api/auth/logout" className="login_button" id="pretty_row_button">Déconnexion</a>);
}

export function Profile_link() {
  const { user, error, isLoading } = useUser();
  return user && (<a href="/profil" className="login_button" id="pretty_row_button">Profil</a>);
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
  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });


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
            <a href="#top" className="internal_links1">Accueil</a>
            <a href="/description_projet" className="internal_links1">Le Projet</a>
            <a href="/qui_sommes_nous" className="internal_links1">Qui sommes-nous</a>
            <a href="https://www.depinfonancy.net/" className="internal_links1">Partenaires</a>
          </div>
        </div>
          <p></p>
          <div className="flip">
          <div id="carouselExampleCaptions" className="carousel slide" data-interval="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="CyberImage2.png" className="d-block w-100" alt="First Slide" width="110" height="420"/>
      <div className="carousel-caption d-none d-md-block" id="car_caption1">
        <div>It's here.</div>
          <div>It's everywhere.</div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="cybersecurity-vs-information-security-illustration.jpg" className="d-block w-100" alt="Second Slide" width="110" height="420"/>
      <div className="carousel-caption d-none d-md-block" id="car_caption2">
        <div>Learn keypoints of Offensive and Defensive Cybersecurity</div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="maxresdefault.jpg" className="d-block w-100" alt="Third Slide" width="110" height="420"/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="row" id="main_card">
  <div className="col">
    <div className="card h-100" id="main_card_shadow">
      <div className="card-body">
        <h3 className="card-title">Intéressé(e) par la Cyber ?</h3>
        <p className="card-text" id="desc_card1">Beat-Cyber est une plateforme d'entraînement à la cybersécurité développée aux Mines de Nancy.</p>
        <p className="card-text" id="desc_card1">Vous pouvez y trouver gratuitement des tutoriels et scénarios de serious games pour vous former à la cybersécurité offensive, mais aussi défensive avec des honeypots.</p>
      </div>
    </div>
  </div>
</div>
</div>
<div className="row row-cols-1 row-cols-md-3 g-4" id="upside_down_cards_row">
  <div className="col">
    <div className="card h-100" id="shadow_and_border">
      <img src="nmap.png" className="card-img-top" alt="Nmap logo" height="220px"/>
      <div className="card-body">
        <p className="card-text">Apprenez à utiliser nmap pour scanner les ports d'une cible et obtenir les versions de ses logiciels.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" id="shadow_and_border">
      <img src="hack-like-pro-metasploit-for-aspiring-hacker-part-2-keywords.1280x600.jpg" className="card-img-top" alt="Metasploit Logo" height="220px"/>
      <div className="card-body">
        <p className="card-text">Découvrez l'interface Metasploit pour chercher efficacement des vulnérabilités de votre cible et exécuter ces exploits.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" id="shadow_and_border">
      <img src="firewall-hacker.jpg" className="card-img-top" alt="Firewall" height="220px"/>
      <div className="card-body">
        <p className="card-text">Utilisez des outils puissants pour encoder et obfusquer votre code et ainsi passer au travers des firewalls.</p>
      </div>
    </div>
  </div>
</div>
<div className="row row-cols-1 row-cols-md-2 g-4" id="upside_down_cards_row2">
  <div className="col">
  <div className="card mb-3">
  <div className="row g-0" id="card_inter">
    <div className="col-md-4">
      <img src="les-10-plus-grands-hackers-de-lhistoire-1536x1024.jpeg" className="img-fluid rounded-start" alt="Typical Hacker" width="300px"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Devenez un hackeur</h5>
        <p className="card-text">Mettre en place la défense d'une machine, c'est se demander ce que ferait un hackeur pour en prendre contrôle</p>
      </div>
    </div>
  </div>
</div>
  </div>
  <div className="col">
  <div className="card mb-3">
  <div className="row g-0" id="card_inter">
    <div className="col-md-4">
      <img src="kali-linux-cyber-security.png" className="img-fluid rounded-start" alt="kali" width="180px"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Jouez sur les deux fronts</h5>
        <p className="card-text">Cybersécurité offensive et défensive utilisent les mêmes outils à des fins différentes. Essayez les deux parcours pour trouver votre préférence !</p>
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

