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
  <h1 id="page_title">Protocole et services DNS</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Le protocole DNS est un service chargé de la résolution des noms de domaines en adresses IP. Son existence s’explique par la dualité entre d’une part la nécessité d’adresses IP pour déterminer avec qui échanger lors d’une communication, et d’autre part la volonté humaine de pouvoir identifier une machine sur le réseau par un nom en langage classique. La solution proposée par l’implémentation de ce protocole est un ensemble de serveurs capables d’interroger des registres à l’échelle mondiale. Ces serveurs organisés géographiquement se répartissent le travail de résolution des noms de domaine.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;En pratique, lorsqu’un utilisateur essaie d’accéder à une certaine URL (google.fr par exemple) depuis son navigateur, un serveur DNS est contacté pour obtenir la conversion du nom de la ressource (Fully Qualified Domain Name ou FQDN)  en une adresse IP correspondante en déplaçant la requête jusqu’au serveur DNS racine.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;En cybersécurité l’importance du DNS est capitale : l’attaquant peut identifier le serveur responsable d’un domaine, détourner toutes les demandes d’accès au domaine s’il compromet le serveur, et mener des attaques de type phishing en observant les demandes au serveur.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Il existe différents moyens d’obtenir des renseignements sur une machine distante à partir d’un serveur DNS :</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;
            <ul>
              <li STYLE="margin-bottom:2%">host [domain]	&emsp;Il s’agit de la commande la plus simple, qui renvoie l’essentiel de l’information utile aux communications automatisées avec le propriétaire du nom de domaine. Ces informations sont l’adresse IPv4, l’adresse IPv6 et parfois certains services d’application proposés, comme le serveur de mail du domaine utilisé par le protocole SMTP pour le transfert de mail sur la figure suivante.</li>
              <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/host.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
              <li STYLE="margin-bottom:2%">dig [domain]	&emsp;Avec cette commande on obtient plus d’informations sur la communication établie et la nature de l’échange : le temps de parcours est indiqué, ainsi que le protocole de couche réseau (TCP ou UDP) et des statistiques sur la requête effectuée. On peut demander encore d’avantage d’informations en ajoutant ANY en fin de commande, dans ce cas sont retournés tous les registres publics associés à ce domaine sur le serveur DNS. Sur chaque ligne de la sortie en terminal, on peut alors obtenir différents types d’informations que l’on reconnaît à partir des lettres en quatrième colonne. Ainsi A réfère à un enregistrement de type alias IPv4, AAAA à un enregistrement de type alias IPv6, MX au serveur d’échange de mail et NS (NamerServer) le serveur qui contient le registre des noms / adresse IP. Parfois on a également des registres contenant des notes textuelles pouvant s’avérer très informatives, ou des informations détaillées à propos d’un service spécifique associé au domaine.</li>
              <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/dig.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
              <li STYLE="margin-bottom:2%">whois [domain]	&emsp;En utilisant la commande whois, on obtient toute l’information rendue public volontairement par le propriétaire du nom de domaine sur son activité et l’architecture de ses services de communication. Parfois on obtient même des informations sur un individu spécifique dans l’entreprise, ce qui permet de trouver un nom d’utilisateur pour ensuite automatiser le test de mots de passe sur une page d’authentification.</li>
              <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/whois.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
              <li STYLE="margin-bottom:2%">traceroute [domain] &emsp;La commande traceroute permet de suivre les routages successifs de l’information sur son trajet jusqu’au propriétaire du nom de domaine. On obtient ainsi non seulement l’adresse IP du destinataire, mais aussi les adresses IP publiques auxquelles ont dans un premier temps été adressé le message. Il est toutefois déplorable que bien souvent traceroute ne permette que de compter le nombre d’étapes avant d’atteindre la cible car les étapes du trajet sont largement anonymisées, symbolisées par *** lié à la présence d’équipements de filtrage des paquets type firewall. On n’obtient alors pas plus d’informations que pour une commande ping [hostname] comme on peut l’observer sur l’image suivante.</li>
              <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/traceroute.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
              </ul></div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Pour connaître l’adresse IP de sa machine, on peut également utiliser la commande ipconfig (sous Windows) ou ifconfig (sous Linux) qui permet d’obtenir rapidement ses adresses IPv4 et IPv6, mais également des informations sur le nom des interfaces et donc si un VPN est utilisé.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Sur l’image suivante, tous les renseignements liés au VPN (ici openvpn) sont rangés dans la catégorie tun0 (tunnel) alors que l’interface physique ethernet est eth0.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/ifconfig.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            
            <div STYLE="margin-bottom:5%; text-align:right" className="larger_text">&emsp;&emsp;&emsp;<a href="/ProtocolsInCyber2" STYLE="color:black">Rejoignez la page suivante pour continuer</a></div>
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

