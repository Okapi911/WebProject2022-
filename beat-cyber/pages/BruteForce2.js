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
  <h1 id="page_title">Forçage de mots de passe avec hydra</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Tout comme il est possible de forcer le test de noms de pages ou de répertoires en multipliant les requêtes HTTPS automatisées avec GoBuster, on peut également faire des requêtes API pour la plupart des autres fonctionnalités proposées par les pages web. Cela inclut notamment les formulaires, et donc par extension les pages d’authentification.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Hydra est un tel programme de forçage de mots de passe, rapide et accessible gratuitement. Il est de plus préinstallé sur les machines virtuelles kali Linux. Contrairement à la redirection qui fonctionne similairement en toutes circonstances, l’authentification par mot de passe peut recouvrir une large variété de supports : envoi de formulaires par requête POST API pour une vérification chez le serveur, l’opposé avec une comparaison chez le client, des requêtes en database SQL ou NO-SQL, transfert d’un fichier par protocole FTP… Hydra annonce sur son dépôt git officiel une grande versatilité, puisque cet outil serait capable de forcer les nombreux protocoles suivants : Asterisk, AFP, Cisco AAA, Cisco Auth, Cisco Enable, CVS, Firebird, FTP, HTTP-FORM-GET, HTTP-FORM-POST, HTTP-GET, HTTP-HEAD, HTTP-POST, HTTP-PROXY, HTTPS-FORM-GET, HTTPS-FORM-POST, HTTPS-GET, HTTPS-HEAD, HTTPS-POST, HTTP-Proxy, ICQ, IMAP, IRC, LDAP, MEMCACHED, MONGODB, MYSQL, NCP, NNTP, Oracle Listener, Oracle SID, Oracle, PC-Anywhere, PCNFS, POP3, POSTGRES, Radmin, RDP, Rexec, Rlogin, Rsh, RTSP, SAP/R3, SIP, SMB, SMTP, SMTP Enum, SNMP v1-3, SOCKS5, SSH v1-2, SSHKEY, Subversion, TeamSpeak (TS2), Telnet, VMware-Auth, VNC, XMPP.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;D’un point de vue utilisateur, la commande à effectuer est similaire à celle de GoBuster, et il faudra une nouvelle fois fournir un fichier contenant l’ensemble des mots de passe que l’on souhaite vérifier. Contrairement à GoBuster cependant, les fichiers préinstallés pour hydra sont de moindre qualité et la première action que devrait prendre l’utilisateur est donc de rechercher une liste complète de mots de passe faible (plusieurs sont disponibles gratuitement sur github).</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/hydra.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Voyons comment construire une ligne de commande hydra classique pour forcer le test des mots de passe sur la cible. Hydra requiert toujours les permissions administrateurs avec sudo, et l’utilisateur engage sa responsabilité dès qu’il utilise cet outil dans un cadre non contrôlé puisqu’une telle action est illégale. On écrit ensuite hydra suivie de la bannière -l pour indiquer à la suite les autres champs qui ne sont pas à forcer mais seront inclus dans la requête pour vérification. Dans un cadre standard d’authentification, c’est là qu’on indiquerait l’utilisateur pour lequel on teste les mots de passe. On écrit ensuite la bannière -P suivie du chemin vers le fichier contenant la liste de mots de passe à tester. Puis on écrit l’IP ou le nom de domaine résolu de la cible. </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Avant de procéder à l’étape suivante de l’écriture, on écrit volontairement une mauvaise réponse au formulaire, puis on observe avec les outils de développement la réponse. En utilisant l’option modifier et renvoyer offerte par le navigateur, on obtient le type de requête effectuée pour cette authentification et le contenu exact (généralement JSON) du message. On reprend la commande en ajoutant le protocole à forcer (souvent https-post-form) puis dans une chaîne de caractères le chemin relatif de la page d’accueil vers la page d’authentification suivi de [ : ] puis le contenu « aplati » du message JSON (enlever les symboles {} et remplacer [ : ] avec [ = ]) en remplaçant l’utilisateur testé par ^USER^ et de même le mot de passe par ^PASS^. On écrit à la suite [ : ] et enfin une chaîne apparaissant dans le serveur lorsque la connexion au compte échoue. On peut augmenter la verbosité avec un flag -V additionnel en fin de commande.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/hydra2.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            
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

