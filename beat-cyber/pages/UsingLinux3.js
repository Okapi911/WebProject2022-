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
  <h1 id="page_title">Recherche textuelle dans l'espace de travail</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;La commande find permet de rechercher un fichier dans un répertoire. Elle peut nécessiter différentes autorisations si l’on essaie de l’exécuter dans un répertoire sur lequel on ne possède pas de privilèges d’accès. La syntaxe à utiliser est :
find [option].
Les options les plus utiles sont les suivantes :
</div>

<div STYLE="margin-bottom:2%" className="larger_text"><ul>
              <li>-iname [filename]	&emsp;Rechercher [filename] dans le répertoire sans tenir compte de la casse</li>
              <li>-type [d or f or l]		&emsp;Rechercher un certain type de document. D est utilisé pour un répertoire, f pour un fichier et l pour un lien (raccourci).</li>
              <li>-size				&emsp;Rechercher un fichier en fonction de sa taille.</li>
              <li>-mtime			&emsp;Rechercher par dernière date de modification.</li>
              <li>-atime			&emsp;Rechercher par dernière date d’accès</li>
              <li>-user				&emsp;Rechercher pour un certain créateur</li>
              </ul></div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;En cybersécurité, les trois dernières options sont particulièrement intéressantes car plus un fichier a été modifié récemment par un utilisateur connu dont on a usurpé les droits, plus on a de chances de pouvoir modifier le programme ou l’exploiter s’il n’est pas assez sécurisé. Avec des astérisques (*) on peut également préciser les données que l’on ne connaît pas, pour rechercher par exemple une partie du nom d’un fichier, ou les documents d’une année plutôt que d’une date précise.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%; text-align:center" className="larger_text">
            <img src="/find.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Enfin, la commande grep permet de repérer une chaîne de caractères donnée en entrée dans un fichier spécifié (ou dans un répertoire avec une option). Cette commande est très utile lors de la fouille du code, pour chercher les appels à une fonction peu protégée ou à une base de données par exemple. La syntaxe la plus simple, qui recherche dans toutes les lignes du document en tenant compte de la casse, est :
( grep [string] [filename] ).
Néanmoins, grep est très souvent utilisée en cybersécurité avec ses options. Les plus utilisées sont :
</div>
<div STYLE="margin-bottom:2%" className="larger_text"><ul>
              <li>-i 	&emsp;qui permet d’ignorer la casse</li>
              <li>-w	&emsp;qui spécifie que la chaîne est un mot complet</li>
              <li>-v	&emsp;pour une recherche inversée, celle des lignes sans la chaîne de caractères</li>
              <li>-R	&emsp;qui étend la recherche de la chaîne à tout le répertoire</li>
              </ul></div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/grep.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:5%" className="larger_text">&emsp;&emsp;&emsp;<a href="/NetworkProtocolsModels" STYLE="color:black">Rejoignez la page suivante pour continuer</a></div>
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

