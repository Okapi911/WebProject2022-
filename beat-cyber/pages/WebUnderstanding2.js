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
  <h1 id="page_title">Formuler des requêtes avec Curl</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            
            
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Avec un nombre toujours plus grand d’applications et de services se développant sur le web, il est important de savoir créer et gérer la réception de requêtes http. On parle de « HTTP Scripting ».</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Curl est un outil en terminal basé sur des lignes de commande permettant de manipuler les requêtes que l’on fait à une cible librement. Puisque Curl ne réalise des requêtes qu’individuellement et sur commande, il devient très vite nécessaire d’utiliser des fichiers de script contenant le déroulé de nos demandes et le traitement attendu des réponses.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Curl communique avec l’hôte sous forme de son adresse IP que l’on aura pu obtenir précédemment en utilisant une commande ping ou en interrogeant le serveur des noms de domaine.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;On peut ensuite utiliser différentes syntaxes pour exécuter les différentes requêtes http possibles sur les API liés à la cible. Curl propose même de rediriger les requêtes d’un identificateur hôte complet vers un autre normalement inutilisé (souvent parce que générique) en utilisant l’option –resolve.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Curl associe naturellement la plupart des services à leur port par défaut, mais il reste possible d’indiquer un port après l’adresse IP de l’hôte en les séparant avec « : ». De plus, sans précision additionnelle, Curl réalisera toujours une requête GET avec affichage de la réponse en terminal.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/curl.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Curl peut également être utilisé pour accéder à une page demandant des permissions (on parle de crédits d’accès, ou de « credentials »). Pour cela on doit préciser avec l’option -u les identifiants, pour une commande finale de cette forme : ( curl -u user:password [Host Ip or Domain] ).</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;On peut également signaler avoir fournis d’autres renseignements à la page hors crédits d’authentification. Par exemple, toute réponse à un formulaire sur la page aurait changé notre URI. On peut donc préciser à Curl toutes ces données additionnelles qui pourraient influer sur le résultat de la requête. Bien sûr, puisque le formulaire n’a pas été envoyé en premier lieu, les résultats attendus ne peuvent souvent être obtenus qu’avec une requête POST préalable. Pour la formuler, on écrit :
( curl --data [ Form answer ] [host] (requête POST) )
</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;A titre d’exemple, voici un formulaire HTML possible, la requête Curl POST associée à une réponse à celui-ci, puis une requête GET de la page après réponse au formulaire.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/Form_curl.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/curlP.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/curlG.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Evoquons enfin deux autres fonctionnalités de Curl qui fonctionnent comme les écritures précédentes. Tout d’abord, pour la réalisation d’une requête PUT, on doit en premier lieu connaître le but de l’action (le plus souvent un dépôt de fichier), puis choisir l’option associée (ici –upload-file) et rédiger une commande semblable à celle d’une requête POST en adaptant l’option puis la valeur donnée au contenu à envoyer. Curl dispose également d’une bonne gestion des cookies pour maintenir des sessions avec les différentes pages consultées. Pour renseigner un cookie on utilise l’option –cookie suivie du fichier contenant l’information correspondante.</div>
            
            <div STYLE="margin-bottom:5%; text-align:right" className="larger_text">&emsp;&emsp;&emsp;<a href="/WebUnderstanding3" STYLE="color:black">Rejoignez la page suivante pour continuer</a></div>
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

