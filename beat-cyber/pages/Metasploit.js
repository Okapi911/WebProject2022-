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
  <h1 id="page_title">Exploits et payloads avec Metasploit</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            
            
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Metasploit est l’environnement de travail le plus largement utilisé pour la recherche et la mise en place d’exploits sur une cible. Il se divise en trois composants principaux : une console de commande avec interface appelée msfconsole où l’on peut opérer avec des lignes de commandes comme dans un terminal classique, un ensemble de modules préinstallés qui vont permettre une action spécifique telle que chercher des vulnérabilités ou appliquer un exploit ou un payload à la cible, et enfin des outils indépendants de pen testing très complémentaires de metasploit tels que msfvenom.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Commençons par expliquer la terminologie des concepts prépondérants dans l’utilisation de Metasploit ou de tout outil d’exploitation de vulnérabilités. Une vulnérabilité est un défaut ou une erreur dans l’implémentation de la cible qui a un risque de l’affecter, par exemple en donnant des privilèges administrateurs sans authentification. Un exploit (à prononcer en anglais) est un programme informatique exploitant une vulnérabilité de sa cible. Enfin, un payload est un complément à l’exploit qui une fois la vulnérabilité exploitée va exécuter du code sur la machine cible. L’exploit est donc comme une épée créant un trou dans l’armure de la cible, tandis que le payload est la blessure causée par l’opération.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Metasploit dispose d’encodeurs pour chiffrer les exploits et payloads afin de ne pas alerter les antivirus dont dispose la machine cible. Cette fonctionnalité est très utile car hors entraînement toute cible est généralement protégée par un logiciel antivirus. Si les chiffrements les plus simples tels que le passage en base 64 sont facilement implémentables directement depuis le terminal, il est en revanche très pratique de disposer de meilleurs moyens d’inscription pour attaquer des cibles mieux protégées. Voici une liste des encodeurs accessibles depuis metasploit, qui ont tous une documentation en ligne détaillée.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/meta1.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Additionnellement, Metasploit dispose d’outils d’évasion qui essaient de contourner les antivirus plutôt que d’améliorer les chances du programme de passer au travers en encodant les fichiers.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Les payloads proposés par metasploit se divisent en quatre catégories :
            <ul>
            <li STYLE="margin-bottom:2%">Des Adaptateurs qui « emballent » un payload standard pour le convertir sous un format différent qui aura peut-être de meilleurs résultats, par exemple en lignes de commandes powershell ou en code assembleur</li>
            <li STYLE="margin-bottom:2%">Des « Stagers » et des « Stages » qui s’utilisent ensemble : dans un premier temps un stager est déployé sur la cible, puis celui-ci est chargé de télécharger le reste des payload (les stages) depuis notre machine. Cette combinaison efficace permet d’envoyer un premier payload très léger et donc moins détectable puis de transformer l’opération en un payload global très puissant de taille bien plus importante quand l’antivirus ne peut plus arrêter les téléchargements qui ont expressément été demandés par l’hôte lui-même</li>
            <li STYLE="margin-bottom:2%">Par opposition à ce type d’attaques, un « Single » payload (dans le sens solitaire) est auto-suffisant, et commencera l’exécution dès qu’il aura été téléchargé sur la machine adverse.</li>
            </ul></div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/meta2.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Dans la console metasploit la plupart des commandes linux classiques sont disponibles, à l’exception notamment des redirections de contenu vers un fichier. Comme linux metasploit dispose également d’un historique des dernières commandes, utile pour vérifier les valeurs qui ont été affectées à un argument lors du paramétrage des exploits ou payloads avant leur exécution. On y accède avec la commande history. De plus metasploit propose de l’auto-complétion avec la touche tab, ainsi lorsqu’on cherche un programme particulier Metasploit peut nous aider à le trouver plus rapidement dans son arborescence.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Pour utiliser un module, il faut utiliser la commande use suivie du chemin jusqu’au fichier. La console Metasploit étant contextuelle, si une commande n’a pas été utilisée pour rendre les variables globales alors elles seront toutes supprimées de la mémoire au moment d’un changement de modules ou d’une fermeture de session. La commande ( show [module category] ) permet d’afficher la liste des modules disponibles dans une catégorie avec une courte description. On peut également utiliser searchsploit avec la commande ( search [param] ) pour rechercher tous les modules d’intérêt pour le paramètre spécifié.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Une fois le module d’intérêt sélectionné dans l’espace de travail avec use, il est courant d’utiliser la commande [show options] pour voir apparaître la liste de tous les paramètres du module, ce qu’ils représentent, s’ils sont requis ou non et les valeurs affectées à chacun. Pour obtenir encore davantage d’informations sur le module utilisé, on peut aussi écrire la commande [info] qui donnera tous les détails du module avec une verbosité élevée.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/meta3.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Pour régler la valeur d’un paramètre on utilise la commande suivante :
( set [module_parameter] [value] ).
</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;On peut ensuite vérifier que le changement est bien effectif en exécutant [show options]. Notons que lorsqu’un paramètre commence par L, il fait presque toujours référence à notre machine (« local » ou « listener ») tandis que ceux commençant par R ou SRV traitent de l’hôte distant (serveur ou « remote »). Pour que les variables définies lors du travail sur un module deviennent globales, il suffit de changer set en setg dans la commande précédente. Pour retourner à la valeur par défaut d’un paramètre, on dispose similairement des commandes unset [module_param] et unsetg [module_param].</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Quand tous les paramètres ont été réglés, on peut effectuer le lancement du module avec la commande ( exploit ) ou ( run ). Si une session est établie avec succès, on peut en afficher les détails avec ( sessions ).</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Lors de l’utilisation de Metasploit, il peut être très réducteur de se limiter à cet outil bien qu’il soit très complet. Le coupler à Nmap pour obtenir des informations sur la cible et ses services, ainsi qu’à d’autres moteurs de recherches de vulnérabilités ou à des recherches efficaces sur des sites spécialisés permet de profiter pleinement de la puissance de cet outil remarquable.</div>
            
            <div STYLE="margin-bottom:5%; text-align:right" className="larger_text">&emsp;&emsp;&emsp;<a href="/WebUnderstanding" STYLE="color:black">Rejoignez la page suivante pour continuer</a></div>
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

