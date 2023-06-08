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
  <h1 id="page_title">Nmap et les outils de scan de ports</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            
            
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;La première chose à faire lorsque l’on obtient les coordonnées d’une cible (adresse IP ou nom de domaine) est de dresser une carte du paysage de la cible. Pour cela, on utilise des technologies scannant les différents ports de la cible. </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Quand une machine opère un service réseau, elle ouvre une construction appelée « port » pour accueillir la connexion. Comme toute machine propose de nombreux services simultanément, il est très rare que seul un port soit ouvert pour la communication, et on doit donc procéder à une énumération des ports ouverts, chaque port pouvant servir de porte d’entrée. Cette démarche est conseillée même quand la cible est un site internet avec lequel on communiquera donc par les ports 80 ou 443 par défaut (http ou https).</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Si l’on ne spécifie pas à notre machine quel port utiliser pour établir une connexion avec l’hôte distant, elle choisira un port aléatoire parmi ceux qui ne sont pas associés à un service usuel. C’est ce qui permet d’ouvrir de nombreuses communications simultanément (par exemple plusieurs onglets ou fenêtres) car chaque machine dispose de 65 535 ports. Sur l’image suivante est représentée cette répartition aléatoire des ports pour assurer des connexions simultanées.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/nmap1.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Nmap est un outil capable de réaliser un scan complet des ports de la cible afin de déterminer lesquels sont ouverts pour envisager d’établir une connexion. Le processus suivi est de tester pour chaque port l’établissement d’une connexion et d’étudier les réponses obtenues y compris les messages d’erreur. Nmap peut alors distinguer trois grandes catégories de ports : ceux qui sont ouverts donc accessibles, ceux qui sont fermés (ou protégés) aux communications et ceux qui appliquent un filtre avant d’établir la communication. Ces derniers correspondent aux ports protégés par des firewalls, qui sont fermés au grand public mais permettent aux personnes douées de permissions de communiquer avec la machine. Nmap est alors capable d’établir pour chaque port avec lequel il parvient à établir une connexion quels sont les services qui y sont opérés et leurs versions. Le rôle de nmap est donc fondamental pour aiguiller les recherches de programmes permettant d’exploiter la cible.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Nmap est le leader des scanners de ports dans le monde professionnel. C’est donc un outil très rapide et largement étendu. Le recours à la documentation devient très vite une nécessité pour les utilisateurs non experts, ce qui ralentit grandement l’efficacité de l’attaque en termes temporels. Pourtant, en cybersécurité, la vitesse est une notion clé car on ne souhaite pas être détecté pour les actions que l’on réalise sur le site. Procéder par tâtonnement est donc très déconseillé, l’objectif est plutôt de consulter la documentation avant de dérouler l’attaque en ayant préparé des commandes immédiatement accessibles dans un fichier à disposition.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Présentons donc les options de nmap les plus utilisées et les différents types de scans proposés par cet outil. Commençons avec les options disponibles sur tous types de scans :
            <ul>
            <li STYLE="margin-bottom:2%">-vv	augmente la verbosité des réponses de deux niveaux. On peut encore l’augmenter en ajoutant des v à la suite de ceux-ci, le niveau 2 est simplement le niveau minimum utilisé pour la plupart des attaques en cybersécurité afin de s’assurer d’avoir un maximum d’informations utiles.</li>
            <li STYLE="margin-bottom:2%">-O	détecte le système opérationnel de la cible</li>
            <li STYLE="margin-bottom:2%">-sV	détecte les versions des différents services associés aux ports avec lesquels Nmap a pu établir une connexion.</li>
            <li STYLE="margin-bottom:2%">-oA	enregistre les résultats du scan dans différents fichiers sous 3 formats</li>
            <li STYLE="margin-bottom:2%">-A	à défaut d’être beaucoup plus remarqué et de se confronter très vite à des problèmes de permissions, Nmap mène une analyse complète avec un scan complet de la cible, un traceroute de l’accès, détection des services et systèmes opérationnels.</li>
            <li STYLE="margin-bottom:2%">-p 	permet de préciser les ports qui nous intéresse, sinon nmap procèdera automatiquement au scan des 1400 premiers ports de la cible correspondant aux ports des services usuels. On peut fournir des intervalles de ports à étudier avec nmap -p [start]-[end] où start et end sont des numéros de ports, ou encore demander l’étude de tous les ports avec nmap -p-</li>
              </ul></div>
              <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/nmap2.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Avant d’étudier les différents types de scans proposés par nmap, étudions la manière dont cet outil procède pour établir une connexion classique. Ce schéma de connexion traditionnel opéré par le protocole TCP est nommé le « three-way handshake ».</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/3way.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Le client envoie par connexion TCP une bannière « SYN » au serveur qui, s’il accepte la connexion, répond avec un message « SYN / ACK ». La connexion est alors établie si le client renvoie un message « ACK » à la cible. Si le port n’est pas ouvert, l’étude du message envoyé par le serveur en deuxième étape permet de déterminer si le port est véritablement fermé, ou protégé contre notre accès. Dans le cas d’une protection firewall classique, le port serveur restera muet après le premier message, mais il est très simple d’écrire un programme pour envoyer une réponse similaire à un port fermé. Ainsi en respectant une procédure TCP complète, il est difficile d’évaluer la qualité des résultats du scan. Cela reste néanmoins le type de scan le plus classique dans un premier temps pour étudier la cible ; il est effectué avec la commande
( nmap -sT [host] ).
</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Si l’on souhaite obtenir de meilleurs résultats en termes de furtivité et de rapidité, on peut procéder à un SYN scan. Ces scans dits « discrets » visent à établir une connexion avec la cible alors même que le three-way handshake n’a pas été complété puisque le client a renvoyé « RST » pour Reset dans son dernier message. Comme la plupart des moyens d’écoute reposent sur l’établissement réussie du protocole précédent au complet, la traçabilité d’un SYN scan est plus difficile pour le serveur. Pour utiliser un SYN scan il faut utiliser nos privilèges sur la machine locale avec sudo, d’où la commande
( sudo nmap -sS [host] ).
</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Un scan UDP permet d’étudier les comportements de ports conçus pour les connexions UDP plutôt que TCP. Comme le protocole UDP vise la transmission immédiate de l’information il n’y a pas de three-way handshake : si le port est ouvert ou s’il est protégé par un firewall non configuré, il ne renvoit aucun message au premier signal envoyé par le client. De ce fait les scans UDP sont absolument nécessaires pour identifier les ports utilisant ce protocole, mais aussi beaucoup plus longs puisqu’il faut réaliser différents tests pour essayer d’assurer si le port est vraiment ouvert ou filtré. Ainsi on utilise classiquement une option pour n’étudier que les 10 ports les plus associés au protocole UDP :
( nmap -sU –top-ports 10 [host] ).
</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Nmap propose enfin trois types de scans moins courants mais très utiles en matière de furtivité. Le premier est le NULL scan qui envoie des messages sans flag (sans mention SYN en en-tête) pour le premier contact avec un port. Le seconde, très similaire, est le FIN scan où on initie la tentative de connexion avec un paquet « FIN » normalement utilisé pour mettre fin à une connexion. Dans les deux cas on connaît la réaction d’un port fermé (message RST) mais on essaie de passer au travers du firewall et de ne pas être détectable dans les logs en ne complétant jamais un three-way handshake. Les scans Xmas prévoient des résultats similaires en envoyant des paquets mal formés au serveur et en observant les réactions à des messages imprévus. Pour réaliser ces scans, on peut utiliser les commandes correspondantes :
            <ul><li>Sudo map -sN [host]</li>
            <li>Sudo nmap -sF [host]</li>
            <li>Sudo nmap -sX [host]</li></ul></div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="nmap3.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;En plus de réaliser du scan de ports, Nmap s’est étendu vers le test d’exécution de scripts chez la cible avec le Nmap Script Engine. Cela signifie que nmap est capable de réaliser certains exploits ou même du scan de vulnérabilités sur les ports accessibles. Les scripts se divisent en 7 catégories : 
            <ul>
            <li STYLE="margin-bottom:2%">Safe 		-&#62; ne présente aucun risque pour la cible</li>
            <li STYLE="margin-bottom:2%">Intrusive	-&#62; peut endommager une cible non protégée</li>
            <li STYLE="margin-bottom:2%">Vuln		-&#62; scan les ports ouverts pour des vulnérabilités</li>
            <li STYLE="margin-bottom:2%">Exploit	-&#62; tente d’exploiter une vulnérabilité de la cible</li>
            <li STYLE="margin-bottom:2%">Auth		-&#62; essaie de se connecter anonymement à un service</li>
            <li STYLE="margin-bottom:2%">Brute		-&#62; automatiser le test de crédits pour forcer le passage d’un service d’authentification</li>
            <li STYLE="margin-bottom:2%">Discovery	-&#62; essaie de faire exécuter des requêtes sur le serveur en interne pour glaner plus d’informations sur ses services et programmes.</li></ul></div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;On dispose de deux commandes pour utiliser le Nmap Script Engine :
            <ul>
              <li>nmap –script=[script category]  --script-args [args]</li>
              <li>nmap –script=[script name],[optional other scripts] --script-args [args]</li>
              </ul></div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;La première applique tous les scripts d’une catégorie tels que les arguments ont été fournis en entrée, l’autre teste des scripts spécifiques (à privilégier pour des scripts ayant un impact sur la cible).</div>
            
            <div STYLE="margin-bottom:5%; text-align:right" className="larger_text">&emsp;&emsp;&emsp;<a href="/Metasploit" STYLE="color:black">Rejoignez la page suivante pour continuer</a></div>
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

