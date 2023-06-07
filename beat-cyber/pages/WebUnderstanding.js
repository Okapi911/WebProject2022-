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
  <h1 id="page_title">Outils de développement en navigateur</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            
            
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Bien que les objectifs de la cybersécurité pour les attaquants concernent d’avantage la prise de contrôle sur des machines ou des serveurs à des fins monétaires (on peut notamment penser aux ransomwares) ou destructrices (prendre le contrôle d’une machine pour en altérer le comportement ou causer des Denial of Service « Dos »), à bas niveau le premier terrain sur lequel les hackers recherchent des cibles vulnérables est le web.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Que ce soit à des fins défensives pour contrôler les informations auxquelles ont accès les utilisateurs les plus curieux, ou pour obtenir un maximum d’informations sur une potentielle cible, toute personne investie dans le domaine de la cybersécurité surveille les comportements et les programmes informatiques impliqués dans les services disponibles sur la toile.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Intéressons-nous aux démarches qui permettent de comprendre en détail le fonctionnement d’une plateforme web, de son code front end à ses appels d’API.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;L’ensemble des navigateurs web sécurisés disponibles de nos jours disposent d’un certain nombre d’outils dits « de développement ». Ces outils autorisent l’utilisateur à consulter plus en détail le fonctionnement de la page ouverte dans le navigateur. Une personne peut les utiliser pour comprendre l’architecture régulière HTML de la page, étudier les scripts javascripts ou PHP exécutés lors de l’utilisation du site, ou encore consulter les requêtes HTTP et HTTPS générées par le site et s’il le souhaite en envoyer d’autres dont il aura modifié le contenu.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Les outils de développement sont disponibles dans une sous-fenêtre qu’il est possible d’ouvrir en utilisant un raccourci clavier dépendant du navigateur utilisé :
            <ul>
            <li STYLE="margin-bottom:2%">F12 pour Microsoft Edge </li>
            <li STYLE="margin-bottom:2%">&#x2318;+&#x2325;+ I sur un navigateur sous macOS (système opérationnel d’Apple)</li>
            <li STYLE="margin-bottom:2%">CRTL + SHIFT + I sur la majorité des autres navigateurs, notamment Chrome, Opera, Firefox ou encore le navigateur intégré kali</li>
            
              </ul></div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Détaillons l’utilisation de ces outils de développement dans le domaine de la cybersécurité, à la fois par les défenseurs et les attaquants.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Le plus connu des outils de développement est l’inspecteur, qui donne accès au code HTML et CSS ayant permis la rendition de la page consultée par l’utilisateur. Celui-ci peut également tester des modifications de ces programmes pour en changer l’affichage sans aucun effet sur les autres utilisateurs. En effet, l’affichage de la page n’est modifié que pour le client en local. Ainsi, cet outil a d’avantage vocation de permettre une meilleure compréhension de la structure et des effets de style utilisés que de permettre de manipuler le contenu de la page durablement (dans la quasi-totalité des navigateurs tous les changements effectués avec l’inspecteur ne sont pas retenus en mémoire dès que la page est rechargée, sur certains la page est même réinitialisée dès qu’il y a une nouvelle requête).</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;L’inspecteur permet également d’étudier les redirections effectuées par les liens hypertextes au sein du site internet (ce qui peut permettre de découvrir l’existence de nouvelles pages) ou vers d’autres plateformes. On peut enfin l’utiliser pour lire quand c’est possible des commentaires de développeurs laissés dans le code final, qui peuvent donner de bonnes indications sur la manière dont a été conçu le site (utilisation de React, évocation d’un script ou de son rôle…). Pour les propriétaires du site, il n’y a aucun avantage à laisser de tels commentaires accessibles et il vaut donc mieux les supprimer au plus vite.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;L’outil « débogueur » permet de se déplacer dans les différents fichiers du fil d’exécution principal de la plateforme. Il permet de surveiller les valeurs des variables impliquées dans l’exécution des programmes avec la possibilité d’ajouter des points d’arrêt pour tester des exécutions partielles des scripts ou de repérer l’utilisation d’une ressource sur la page.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;On peut également profiter de l’accès à certains fichiers dans le débogueur pour tenter d’obtenir des informations sur les modules utilisés et leurs versions. Avec cette information il est souvent plus simple de comprendre quels sont les API employés depuis l’ensemble de la plateforme, et ainsi de trouver ensuite des vulnérabilités de ces services. En particulier, l’accès aux dossiers node_modules est très intéressant en cybersécurité puisqu’il regroupe l’ensemble des modules importés dans le framework de développement du site.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/webtools1.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;La console Javascript permet de s’essayer à l’écriture de programme à partir des imports réalisés sur la page pour mieux comprendre au besoin l’action de chacune des fonctions. Pour un attaquant qui dispose de moins de temps pour comprendre le fonctionnement du code dans son ensemble, utiliser la console pour effectuer quelques tests peut lui permettre de gagner un temps important.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;L’onglet réseau permet d’observer l’ensemble des requêtes https effectuées depuis la page lors de son utilisation. En cliquant sur l’une d’entre-elles, on peut connaître le programme l’ayant créée, et la réponse reçue depuis le serveur. L’utilisateur peut également renvoyer une requête en changeant son contenu, ceci permet par exemple d’essayer plusieurs envois pour un formulaire, ou de formuler proprement l’écriture du contenu JSON d’une requête pour l’emploi ultérieur d’un payload ou de hydra par exemple.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Avec l’onglet réseau, toute personne peut vérifier si les requêtes sont correctement sécurisées ou si elles posent des problèmes de performance (par exemple si une réponse ne change pas après plusieurs tentatives erronées à un formulaire d’authentification, on peut penser qu’il n’y a pas de blacklist même provisoire des adresses mail). On peut également accéder aux cookies de session. Enfin pour les défenseurs, l’outil réseau permet de vérifier que les requêtes envoyées aux serveurs sont bien standardisées. Sinon, on peut reconnaître certaines tentatives d’attaques notamment celles impliquant de la falsification de requêtes intersites (CSRF) ou les attaques par force brute.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/webtools2.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:5%; text-align:right" className="larger_text">&emsp;&emsp;&emsp;<a href="/WebUnderstanding2" STYLE="color:black">Rejoignez la page suivante pour continuer</a></div>
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

