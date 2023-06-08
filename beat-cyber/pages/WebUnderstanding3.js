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
  <h1 id="page_title">Déobfuscation de code source</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Au cours de l’exécution d’une page web, on a très souvent plusieurs appels réalisés dans le code source pour importer des scripts dans le fichier. Ces scripts, dont on peut retrouver les appels dans les balises HTML du même nom, correspondent à des programmes écrits dans des langages fonctionnels ou orientés objet (par opposition à un langage de présentation comme HTML).</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Pour trouver ces appels de scripts, on peut soit consulter le code source HTML de la page (avec CTRL + U) et ouvrir les fichiers contenus dans les balises [Script], soit utiliser l’outil de développement réseau en surveillant les requêtes de fichiers javascript au cours de l’exécution.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Néanmoins, on constatera dans la plupart des cas que les fichiers javascript accessibles ne sont pas écrits en langage humain : ils ont subi un processus d’obfuscation. L’obfuscation est une technique commune aux langages interprétés (qui n’ont pas besoin d’être compilés) qui vise à rendre un script illisible pour l’œil humain tout en ne changeant aucunement son fonctionnement. A haut niveau, on tente même de rendre le script plus difficilement lisible pour des machines, mais cela se fait souvent au détriment des performances temporelles à l’exécution. L’objectif pour les créateurs du site est d’empêcher le rétro-engineering du code source afin d’éviter qu’il soit réutilisé, ou exploité si le code s’avère peu sécurisé.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/obfu.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Différentes méthodes courantes d’obfuscation existent : la minification consiste à réduire l’ensemble du code sur une seule ligne tandis que le « packing » convertit tous les mots et symboles du code d’origine en listes ou en dictionnaires puis reconstruit le code à l’exécution en assemblant correctement les appels. De plus, à ces méthodes est souvent associé un encodage léger tel que base64.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Pour déobfusquer le code source, on dispose de plusieurs outils. Si le code a été minifié, on peut utiliser l’outil de développement débogueur pour afficher les programmes lisibles en format conventionnel (en suivant les règles usuelles de prettier). Si des méthodes plus puissantes telles que du packing ont été utilisées, on peut utiliser des outils en ligne tels que prettier.io, deobfuscate.io ou beautifier.io. Il existe également des sites spécialisés dans la détection de quelle méthode d’obfuscation a été employée. En orientant ses recherches grâce à ces sites, on peut obtenir en quelques étapes du code exploitable.</div>
            
            <div STYLE="margin-bottom:5%; text-align:right" className="larger_text">&emsp;&emsp;&emsp;<a href="/Shells" STYLE="color:black">Rejoignez la page suivante pour continuer</a></div>
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

