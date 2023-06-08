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
  <h1 id="page_title">Gobuster, un outil de scrapping web</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Une partie importante de la sécurité des services web repose sur la connaissance d’un secret. En cybersécurité et dans le milieu des blockchains, on a repris la définition cryptographique d’une identité : la connaissance d’un secret qui peut être prouvée à d’autres utilisateurs sans le dévoiler. En pratique, cette identité du propriétaire peut revêtir différentes formes : accès à un compte administrateur unique, connaissance d’une page cachée du site, des variables d’environnement pour la mise en place des API…</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;C’est souvent l’accès à l’une de ces informations qui va nous permettre en tant qu’attaquants d’obtenir un premier niveau d’autorité sur la plateforme si l’on choisit d’ignorer les solutions d’exploit/payload (ou si aucune vulnérabilité ne semble pouvoir être exploitée).</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Etudions les outils de « brute forcing », c’est-à-dire ceux réalisant un passage en force en automatisant le test d’entrées jusqu’à nous permettre de découvrir « au hasard par énumération » un contenu que nous ignorions.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Lorsque nous découvrons une plateforme web sur un port 80 ou 443, nous disposons initialement de très peu d’informations sur la structure du site : seulement le contenu des liens et autres boutons de la page redirigeant parfois au sein du site. Répéter la lecture de toute l’information pour chaque page découverte, et ce récursivement, sera une tâche aussi pénible qu’inefficace. En effet aucune page confidentielle ou avec des permissions particulières ne devrait être accessible sans authentification depuis un lien public, sinon la machine aurait probablement déjà été attaquée.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Ainsi, l’objectif devient de trouver dès la page d’accueil un maximum de pages du site sans chercher un lien pour y accéder directement. La solution est de compléter l’URI à partir des redirections trouvées avec un outil de scrapping web tel que GoBuster.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;De tels outils permettent d’énumérer des noms de répertoires ou de pages à partir d’un fichier (ou parfois aléatoirement, mais cette option n’est pas accessible depuis GoBuster), d’essayer une requête GET de la nouvelle URI obtenue pour chacun, et de déduire des codes d’états des réponses si la page (ou le répertoire) existe ou non. De plus GoBuster peut également pratiquer un passage en force similaire sur les serveurs de noms de domaine.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Comme GoBuster réalise un test de forçage à partir du contenu d’un fichier, il s’agit de lui fournir en entrée le document le plus adapté au site que l’on étudie : quelle est la langue du site, quels services propose-t-il, y a-t-il un paterne dans les noms des pages déjà explorées… Afin de commencer les recherches efficacement, sur kali linux GoBuster est préinstallé avec un large fichier de possibles pages ou répertoires. Toutefois il faut garder à l’esprit que ces mots de passe sont en anglais, et n’utilisent presque jamais de lettres majuscules (une convention largement répandue sur la toile, mais peut-être insuffisante en cybersécurité). Un fichier plus maigre mais mieux choisi donnera de meilleurs résultats.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Pour exécuter GoBuster, on utilise la commande suivante avec un autre fichier de destinations à tester si besoin : ( gobuster dir -u [host] -w /usr/share/dirb/wordlists/common.txt ). Les redirections (codes 3**) peuvent être essayées avec des attentes mesurées, tandis que les codes 200 assurent l’accès à une nouvelle page.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/gobuster.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Si le scrapping avec GoBuster a conduit à trop de résultats, une bonne pratique est de commencer la lecture avec un fichier s’appelant robots.txt (ou un nom similaire). Ce fichier a normalement le rôle d’indiquer aux moteurs de recherche quels pages ils sont en droit d’indexer. Dans un meilleur cas, il peut déjà nous donner des informations pour localiser des pages privées ou admin. Sinon, on peut réduire les résultats de GoBuster à ceux n’apparaissant pas dans ce fichier (les pages sont non candidates à l’indexation donc on a de meilleures chances d’y trouver des informations confidentielles expliquant ce choix).</div>
            
            <div STYLE="margin-bottom:5%; text-align:right" className="larger_text">&emsp;&emsp;&emsp;<a href="/" STYLE="color:black">Rejoignez la page suivante pour continuer</a></div>
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

