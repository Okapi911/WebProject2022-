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
  <h1 id="page_title">Le Modèle TCP/IP</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Le modèle OSI est encore aujourd’hui le modèle le plus utilisé pour la vulgarisation du déroulement d’une communication, pourtant ce n’est plus le modèle de référence à l’échelle mondiale depuis que le modèle TCP/IP s’est imposé. Celui-ci est plus attrayant car il est né d’une implémentation reposant sur ces deux protocoles étroitement liés plutôt que d’une volonté de normaliser tous les protocoles du processus de communication.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Les protocoles donnant leurs noms au modèle sont le protocole de transport « Transmission Control Protocol » et le protocole réseau « Internet Protocol ». Ils jouent un rôle prédominant dans ce modèle en quatre couches.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;La couche application reste la plus proche des utilisateurs : elle se compose de l’ensemble des protocoles haut niveau choisis selon le type de données à traiter.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;La couche transport garde également un rôle similaire au modèle OSI, mais il est à noter qu’il n’existe plus que deux implémentations de cette couche : les procédés TCP (lent mais assurant l’ordre, la complétion et le contenu des paquets) et UDP (rapide, mais sans retransmission des paquets manqués ou altérés et fonctionnant sur une logique FIFO (First In First Out) lors de la recomposition de l’information.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;La couche internet est implémentée par les protocoles IP et ARP (Address Resolution Protocol) chargés de déterminer les adresses auxquelles il faut acheminer les paquets sur des réseaux distants. Elle réalise un routage sans connexion préalable, l’ordre et la qualité des paquets doit donc être vérifiée dans les couches plus hautes.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Enfin, la couche hôte réseau n’a aucune implémentation prévue. Cela signifie que tous les moyens peuvent être employés pourvu qu’ils permettent d’envoyer les paquets IP sur le réseau. Les implémentations typiques se font au moyen de câbles Internet sur le réseau local.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/osi_vs_tcp-ip.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:5%;text-align:right" className="larger_text">&emsp;&emsp;&emsp;<a href="/ProtocolsInCyber" STYLE="color:black">Rejoignez la page suivante pour continuer</a></div>
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

