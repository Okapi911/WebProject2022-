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
  <h1 id="page_title">Protocoles HTTP et HTTPS</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Le protocole HTTP (HyperText Transfer Protocol) gère les opérations client-serveur au sein desquelles le plus souvent un navigateur web envoie une requête à un serveur web distant. Ce protocole codifie les en-têtes du message et le format des requêtes et réponses afin d’assurer des moyens de communication qui soient universels.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Le déroulé d’une action par le protocole HTTP peut être décomposée en trois étapes : d’abord l’envoi d’une requête au serveur pour l’accès ou la création d’une ressource spécifique, puis le traitement par le serveur web de la requête et enfin formulation d’une réponse dans laquelle aura été intégrée un code indiquant les résultats obtenus par rapport à la requête initiale.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Aujourd’hui le protocole HTTP disparait au profit de HTTPS, bien plus sécurisé puisqu’il chiffre les données transmises avec des protocoles secondaires de cryptographie tels que TLS. HTTPS est aussi plus performant en termes d’intégrité des données puisqu’il y a vérification des hachés (sorties de fonctions de hachages) des données. De ce fait certains hébergeurs ou navigateurs web n’acceptent plus les sites HTTP jugés non sécurisés. Pour le cyberattaquant, un site sous http est au contraire la promesse d’obtenir des résultats plus efficaces puisque les données non chiffrées peuvent être étudiées à chaque requête.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Les protocoles HTTP et HTTPS sont dits « sans état » (stateless) car toute requête est traitée indépendamment. Ainsi le serveur ne conserve aucune information sur les requêtes passées sauf dans le cas d’une gestion de session maintenue, par exemple pour rester authentifié tout au long de la navigation, qui est mise en place avec des mécanismes tels que les cookies qui s’ajoutent à l’URI de la ressource à laquelle on accède.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Un URI (Uniform Resource Identifier) est l’identifiant sous forme de chaîne de caractères d’une ressource spécifique sur le web. Il prend souvent la forme d’une URL (Uniform Resource Locator) qui se décompose en 7 éléments :
            <ul>
              <li STYLE="margin-bottom:2%">Le "scheme" permet d’identifier le protocole auquel accède le client. Il s’agit presque toujours de http:// ou de https://, ainsi si l’utilisateur ne le précise pas les deux ports seront parfois essayés en commençant par le plus sécurisé. En terminal il faut toujours préciser le scheme lors de la formulation d’une requête car selon l’outil employé on peut causer un message d’erreur.</li>
              <li STYLE="margin-bottom:2%">L' "host" désigne la position des ressources, c’est souvent le nom de domaine (FQDN) ou l’adresse IP de la cible sur laquelle est disponible la ressource à laquelle on essaie d’accéder, ou que l’on souhaite l’ajouter.</li>
              <li STYLE="margin-bottom:2%">Les ports sont des structures du réseau permettant de rediriger le trafic vers la bonne application sur un serveur. Tout ordinateur a 65 535 ports disponibles, mais de nombreux services sont en pratique systématiquement associés à des ports particuliers. Les plus connus sont ainsi les ports 80 et 443 qui correspondent aux protocoles HTTP et HTTPS par défaut. Si les 1024 premiers ports d’une machine sont réservés aux principaux protocoles systèmes (53 pour bind, 22 pour ssh, 25 pour SMTP …), les suivants sont utilisables pour personnaliser les applications comme par exemple 8080 ou 8443.
Dans une adresse URI spécifiant l’IP de l’hôte, le port est indiqué à la suite de cette adresse, séparé par la mention « : ».
</li>
              <li STYLE="margin-bottom:2%">Le path désigne le chemin relatif depuis la position racine des ressources (l’hôte) vers la ressource spécifique affichée à l’écran (par exemple une page particulière sur un site). Il s’écrit de la même manière qu’un chemin pour l’accès à un fichier au sein d’un répertoire, avec l’entrée d’un répertoire symbolisée par / mais l’extension du dernier fichier n’est souvent pas précisée sauf pour certains formats tels qu’un pdf.</li>
              <li STYLE="margin-bottom:2%">Les fragments spécifient le chemin vers un élément précis de la page affichée, par exemple une section de la page. Ils n’apparaissent souvent dans l’URL affichée que lors de l’utilisation d’un lien hypertexte spécifique vers ce contenu et sont précédés par le symbole #.</li>
              <li STYLE="margin-bottom:2%">Les informations utilisateurs sont un champ optionnel retraçant les crédits de session qui sont utilisés pour l’accès à la page. La mention la plus récurrente de ce champ est de la forme « username:password ». Ce champ peut être placé soit avant l’hôte soit après la spécification du chemin complet de la ressource dans l’URI.</li>
              <li STYLE="margin-bottom:2%">Enfin, la query string est la chaîne de caractères définissant les propriétés de la requête à effectuer (et non le type de requête, comme nous le traiterons ensuite). Il s’agit souvent d’une interrogation commençant par ? et précisant le résultat escompté de l’opération. Ainsi sur une page d’authentification on pourrait retrouver la chaîne « ?login=true » définissant la volonté de se connecter à son profil.</li>
              </ul></div>
              <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;ex : https://www.example.org:8443/document.html#avertissement</div>
            <div STYLE="margin-bottom:5%; text-align:right" className="larger_text">&emsp;&emsp;&emsp;<a href="/ProtocolsInCyber3" STYLE="color:black">Rejoignez la page suivante pour continuer</a></div>
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

