import Head from "next/head";
import React from "react";
import { Login, Logout, Profile, Profile_link} from './index.tsx';
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

const fileUrl = "/management_progrès.pptx";
const filename = "management_progrès.pptx";

function barre_chargement() {
  return (
  <div>
  <progress id="file" value={percentage} max="100" />
  <p>Elapsed time in seconds {elapsed}</p>
  </div>
  )
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', answered: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    //alert('Le nom a été soumis : ' + this.state.value);
    if(this.state.value=="test") {
      alert("C'est la bonne réponse !")
      this.setState({answered: true});
    }
    event.preventDefault();
  }

  render() {
    return (
      <form STYLE="text-align:center" onSubmit={this.handleSubmit}>        
      <label>
          Nom :
          <input STYLE="margin-top:20%" type="text" value={this.state.value} onChange={this.handleChange} />        
          </label>
        <div STYLE="text-align:center"><input type="submit" STYLE="margin-top:3.5%" value="Envoyer" />
        {this.state.answered && <div STYLE="margin-bottom:5%; text-align:center; margin-left:23%"><a href="./profil" STYLE="color:black">Connectez vous pour commencer</a></div>}
        </div></form>
    );
  }
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
  <h1 id="page_title">Requêtes HTTP et HTTPS</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            
            
            
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Intéressons-nous à présent à l’écriture d’une requête http, une opération très régulière en cybersécurité. La première partie de la requête est dédiée à la méthode utilisée, c’est-à-dire le verbe désignant l’action globale que l’on souhaite réaliser. Il en existe 7 :
            <ul><li STYLE="margin-bottom:2%">GET -&#62; On cherche à afficher une ressource particulière depuis le serveur, par exemple les coordonnées de son profil.</li>
              <li STYLE="margin-bottom:2%">POST -&#62; On souhaite envoyer des données vers le serveur pour qu’elles y soient traitées ou comparées d’autres valeurs. Le résultat attendu est souvent conditionné par l’information envoyée, par exemple une authentification peut réussir ou échouer selon les crédits entrés par l’utilisateur.</li>
              <li STYLE="margin-bottom:2%">HEAD -&#62; On s’intéresse uniquement aux headers de la réponse qui auraient été envoyée si l’on avait effectué une requête GET pour la ressource.</li>
              <li STYLE="margin-bottom:2%">PUT -&#62; On cherche à créer de nouvelles ressources sur le serveur, par exemple en déposant un fichier. En cybersécurité ce type de requête est très utile pour la mise en place de payloads, c’est-à-dire de programmes informatiques installés par l’attaquant sur le serveur de l’hôte.</li>
              <li STYLE="margin-bottom:2%">DELETE -&#62; Permet de supprimer des données sur le serveur. Cette méthode peut conduire à des erreurs DoS (Denial of Service) si l’on ne dispose pas d’un niveau de permissions suffisant.</li>
              <li STYLE="margin-bottom:2%">OPTIONS -&#62; Renvoie des informations portant sur le serveur distant.</li>
              <li STYLE="margin-bottom:2%">PATCH -&#62; On souhaite appliquer des modifications partielles à une ressource distante.</li>
              </ul></div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Après avoir précisée la méthode de la requête, on indique ensuite l’URI de la ressource avec laquelle on souhaite interagir, puis la version d’http ou https à utiliser et enfin les headers de la requête et leurs valeurs. Les headers se divisent en trois catégories. Ceux qui décrivent le message en lui-même sont dits en-têtes génériques. Ils incluent la date d’envoi ou le statut de la connexion à assurer après la requête. Viennent ensuite les en-têtes liés à l’entité, qui portent sur le contenu du message. On y retrouve les en-têtes suivants : content-type, content-length, content-encoding ou encore boundary qui sépare différents contenus au sein d’un unique message. La dernière catégorie de headers contient ceux spécifiques à la requête : User-agent décrit le client avec son OS, son browser et les versions des logiciels utiles, Referer précise d’où vient la requête, Cookie indique la liste des cookies sur la session et Authorization annonce les jetons d’accès (tokens) du client pour accéder à la page.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;La réponse à une requête http se présente sous un format similaire en quatre étapes. Tout d’abord on retrouve la version de http utilisée, puis le code réponse qui indiquent le statut de résolution de la requête par rapport à la demande préétablie. On peut identifier de manière suffisante la manière dont s’est déroulée la recherche à partir du premier chiffre du code de statut :
            <ul>
            <li STYLE="margin-bottom:2%">1** -&#62; Retour d’informations qui n’étaient pas impliquées dans l’exécution de la requête</li>
              <li STYLE="margin-bottom:2%">2** -&#62; Requête réussie</li>
              <li STYLE="margin-bottom:2%">3** -&#62; Le serveur a redirigé le client vers un autre contenu</li>
              <li STYLE="margin-bottom:2%">4** -&#62; La requête était impropre de la part du client. C’est dans cette catégorie qu’on retrouve l’erreur la plus connue, 404, qui signifie que l’on demande l’accès à un contenu inexistant.</li>
              <li STYLE="margin-bottom:2%">5** -&#62; Problème rencontré avec le serveur HTTP</li>
              </ul></div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;On retrouve ensuite les headers de la réponse, qui contiennent les en-têtes génériques et d’entité, mais également des en-têtes spécifiques aux réponses tels que Set-Cookie ou Server qui donne des informations sur le serveur ayant procédé au traitement. La réponse contient aussi des en-têtes liés à la sécurité, qui spécifient des règles à suivre au browser notamment Content-Security-Policy qui précise les moyens mis en œuvre pour la gestion des ressources injectées par l’utilisateur et Strict-Transport-Policy qui empêche l’accès en protocole http (données non chiffrées). Enfin, la réponse HTTP se termine par le corps du message envoyé par le serveur, rédigé en HTML ou en JSON.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;L'utilisation d’API (Application Programming Interfaces) pour effectuer des requêtes sur le web s’est généralisée. Ces interfaces proposent de nombreux avantages aux développeurs de services en ligne ou d’applications : il est plus simple d’interagir avec les autres services pour obtenir des données ou exécuter une action client-serveur.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;A présent que nous avons établi les concepts de base sur lesquels reposent toutes les notions de cybersécurité, étudions comment prendre en main les outils utilisés par l’attaquant et les différents types d’attaque que l’on peut réaliser.</div>
             
            <div STYLE="margin-bottom:5%; text-align:right" className="larger_text">&emsp;&emsp;&emsp;<a href="/ScanTools" STYLE="color:black">Rejoignez la page suivante pour continuer</a></div>
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

