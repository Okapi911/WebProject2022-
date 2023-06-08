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
  <h1 id="page_title">Edition de fichiers</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Intéressons-nous à présent à des commandes Linux très utiles dans le domaine de la cybersécurité. En effet, par la suite nous aurons besoin de nous déplacer dans le système de fichiers d’un système Linux. Ce dernier est composé d’une arborescence de répertoires et fichiers dans laquelle on peut se déplacer.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%; text-align:center" className="larger_text">
            <img src="/kali_linux.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Pour créer un répertoire de travail où stocker les différents fichiers liés à des pratiques de cybersécurité, on utilise la commande mkdir avec la syntaxe :
mkdir [directoryName]
</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Pour se déplacer dans un répertoire, on utilise la commande cd dans le terminal suivie du nom de répertoire. Pour afficher la liste des fichiers contenus dans ce répertoire, on utilise la commande ls.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;La commande vi ou vim signifiant « vi improved » permet d’accéder à un éditeur de texte en mode texte peu ergonomique, mais puissant pour créer ou modifier un fichier. La syntaxe de lancement de l’éditeur est :
vim [fileName]
où [filename] est soit un fichier dans le répertoire de travail que l’on souhaite modifier, soit le nom du fichier à créer. La particularité de vi est de proposer trois modes d’édition distincts. Le mode automatique auquel on accède à l’ouverture de la fenêtre de l’éditeur permet uniquement d’effectuer des commandes sur le contenu du fichier. 
</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Les plus utiles sont :
            <ul>
              <li>[number]x &emsp;qui supprime [number] caractères à partir de celui sous le curseur</li>
              <li>d[number]d &emsp;qui efface [number] lignes à partir de celle sélectionnée</li>
              <li>&#62;&#62; et &#60;&#60; &emsp;qui permettent de gérer les tabulations du texte</li>
              <li>/[string] &emsp;qui recherche les occurrences de la chaîne de caractères [string] dans l’ensemble du document</li>
              <li>:wq &emsp;pour une sauvegarde avant de quitter le document</li>
              <li>:q! &emsp;pour quitter sans sauvegarder</li>
              
              
              </ul></div>
              <div STYLE="margin-bottom:5%; margin-top:5%; text-align:center" className="larger_text">
            <img src="/vi.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Pour passer en mode insertion, il suffit de presser la touche i depuis le mode automatique. Dans ce mode les différents raccourcis claviers à l’exception de CRTL-C sont disponibles pour une rédaction texte classique. La commande CRTL-C met fin au mode insertion et cause un retour au mode automatique.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Pour passer en mode remplacement, il faut utiliser le raccourci SHIFT-R. Dans ce mode le caractère sous le curseur sera remplacé par celui inséré au clavier. Pour revenir au mode automatique, il suffit de presser CRTL-C.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%; text-align:center" className="larger_text">
            <img src="/vi2.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;L’intérêt de l’utilisation de vim est d’accélérer les opérations de modification et de suppression en utilisant les modes précédemment décrits. Par exemple si l’on utilise un programme pour itérer les tests de mots de passe à partir du contenu d’un fichier (comme le fait notamment Hydra), lorsqu’une première combinaison réussie est obtenue, si elle interrompt l’algorithme on pourra plus tard le reprendre facilement en supprimant d’une commande toutes les lignes inutiles en début de document.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;La commande cat permet également d’utiliser les fonctionnalités d’un éditeur de fichiers, bien que ce ne soit pas le seul moyen de l’utiliser. En tant qu’éditeur de texte, cat est moins puissant que vi, mais il présente l’avantage de proposer toutes ses fonctionnalités directement dans le terminal, sans ouverture d’une nouvelle fenêtre pour afficher le fichier. Les options les plus utiles de la commande cat sont les suivantes :
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text"><ul>
              <li>cat -n [filename]	&emsp;Affiche le contenu du fichier dans le terminal. L’option -n permet d’afficher les numéros de ligne.</li>
              <li>cat &#62; [filename]	&emsp;Crée un nouveau fichier ou en efface tout le contenu puis passe en mode écriture. </li>
              <li>cat &#62;&#62; [filename]	&emsp;Ajout de contenu en fin de fichier en mode écriture</li>
              <li>cat *			&emsp;Afficher tous les fichiers du répertoire</li>
              <li>cat [file1] [file2] &#62; [file3] &emsp;Créer un nouveau fichier qui combine les précédents.</li>
              </ul></div>
              <div STYLE="margin-bottom:5%; margin-top:5%; text-align:center" className="larger_text">
            <img src="/cat.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            
            <div STYLE="margin-bottom:5%" className="larger_text">&emsp;&emsp;&emsp;<a href="/UsingLinux3" STYLE="color:black">Rejoignez la page suivante pour continuer</a></div>
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

