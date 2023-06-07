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
  <h1 id="page_title">Le modèle OSI</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Le modèle OSI (Open Systems Interconnection) sert de base à la majorité des protocoles réseaux utilisés de nos jours. Il s’agit du cadre définissant toutes les étapes d’une communication entre deux machines, chaque étape présentant plusieurs protocoles selon le type de données traitées ou les systèmes effectuant le traitement. Ainsi ce modèle divise le processus de communication en 7 couches avec des fonctions spécifiques et des niveaux d’abstraction différents. Le modèle prévoit que toutes les couches soient autonomes et réalisent leurs tâches indépendamment à partir de l’information qui leur parvient. Il est néanmoins à noter que le cadre OSI n’est que conceptuel, c’est un modèle simple à comprendre mais ne reflétant pas l’implémentation réelle d’une communication.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/osi.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Le modèle OSI prévoit que chaque couche soit parcourue au moins deux fois : en considérant que les 7 couches sont un empilement de protocoles, il faut tout d’abord réduire l’information au format le plus épuré et le plus physique, celui du signal électrique, puis reconstituer l’information dans un format similaire à celui de départ, en langage dit « humain ». Les modalités de la circulation d’informations entre 2 machines distantes imposent également des passages répétés par les couches physiques, responsables du transport des données, notamment pour couvrir de larges déplacements spatiaux.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;La couche d’application, ou « Layer 7 » est la plus proche des utilisateurs initiaux et finaux. Elle communique à ces derniers de l’information qu’ils sont capables de comprendre, au travers de services tels que le courrier électronique (protocole SMTP), le transfert de fichier (protocole FTP) ou la navigation web. C’est donc la couche de toutes les interfaces d’application, responsable de la mise en forme et de l’affichage final des données.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Pour autant, il faut en modèle OSI distinguer cette couche de la sixième, intitulée couche de présentation. Cette couche prépare le format des données pour qu’elles puissent être affichées plus tard à l’utilisateur. Elle est responsable de l’encodage ou du décodage de l’information, c’est à partir de celle-ci que les données brutes peuvent être étudiées sous l’œil de l’informaticien. Elle effectue également la compression ou la décompression des données.  C’est sur cette couche que l’on retrouve différents formats de données, souvent des extensions de fichiers tels que HTML ou MP3.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;La couche 5 ou couche de session est responsable de la création d’une session unique à l’utilisateur qui permet de l’identifier depuis le serveur. Cette session doit avoir une durée de vie adaptée au temps de communication pour permettre le transfert de toute l’information, tout en isolant l’utilisateur au plus vite après la complétion de cet échange pour le protéger. La couche de session est aussi celle qui permet une retransmission des informations incomplètes et uniquement de ces dernières, optimisant ainsi l’utilisation des ressources. Ainsi la synchronisation des données entre destinataires et envoyeur est assurée à la sortie de cette couche chez le receveur.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;La couche suivante est celle de transport, dont la fonction est de décomposer les données qui ne peuvent pas être transférées en un seul paquet sur le réseau. Elle procède donc à la division de l’information en segments, dont l’en-tête permettra le réassemblage. Ces en-têtes permettront aussi à la couche session de savoir quelle partie des données lui sont parvenues pour rétablir la connexion au besoin. Néanmoins certains protocoles de la couche transport sont conçus pour éviter les retransmissions et accélérer la circulation des données vers la machine réceptrice. C’est notamment le cas du protocole UDP (User Datagram Protocol) qui est utilisé pour la retransmission continue ou en direct.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;En couche 3, dite couche réseau, on prépare les données au changement de réseau en les désassemblant en paquets toujours plus petits (ou en les reconstituant). Si les deux utilisateurs communiquent sur le même réseau, cette couche n’effectue aucune opération additionnelle et permet une meilleure vitesse de communication. La couche est ensuite responsable du routage de l’information, en utilisant des adresses IP pour acheminer les données en suivant des parcours efficaces.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;La couche de liaison des données assure le transfert des données au sein d’un même réseau. Les paquets reçus de la couche précédente sont convertis en trames dont l’en-tête peut inclure l’adresse physique à atteindre (protocole MAC) et des bits de contrôle d’erreurs. La trame est alors transmise sur un premier support physique tel qu’un réseau sans fil ou un câble Ethernet.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Enfin, la première couche est la plus physique de toute : elle définit le maintien de l’information au travers de connecteurs physiques tels que des câbles ou des répéteurs. Ces normes sont essentielles puisqu’on a atteint le niveau plus faible de la connexion, dont dépendent toutes les autres étapes de la communication. Le niveau de dépendance y est très fort alors que c’est aussi la couche la plus fragile et la plus soumise au bruit (perturbations qui altèrent le signal).</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/seven-layers-of-OSI-model.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:5%;text-align:right" className="larger_text">&emsp;&emsp;&emsp;<a href="/NetworkProtocolsModels3" STYLE="color:black">Rejoignez la page suivante pour continuer</a></div>
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

