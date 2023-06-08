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
  <h1 id="page_title">Commandes basiques sous Linux</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Les opérations de cybersécurité sont souvent réalisées sous Linux car indépendamment de la distribution choisie, ce système opérationnel est connu pour sa robustesse et la sécurité intrinsèque qu’il offre. En effet, les vulnérabilités Linux sont plus rapidement corrigées grâce à une architecture open source via l’action d’une communauté de développeurs très active qui contribue à améliorer la qualité des services, surtout en matière de sécurité. Ainsi que ce soit pour le rôle d’attaquant ou de défenseur il est souvent intéressant de recourir à une distribution Linux pour assurer sa protection tout en disposant de nombreux outils nécessaires pour mener une attaque sans être détecté.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Lorsque l’objectif est de procéder à des exercices de cybersécurité, certaines distributions de Linux sont tout particulièrement adaptées, notamment Kali. Kali Linux est mondialement utilisée pour réaliser des cyberattaques car elle est agrémentée de nombreux outils de cybersécurité préinstallés y compris ceux utilisés par les professionnels du pen-testing (ceux qui pratiquent des tests de pénétration pour le compte des entreprises). De plus, c’est l’une des distributions avec la documentation la plus complète, et les correctifs de sécurité y sont très réguliers. Il faut néanmoins prévoir une difficulté à l’apprentissage plus relevée pour la maîtrise de cette distribution car elle est adressée à des professionnels du domaine de la cybersécurité et non à des débutants.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Avant toute chose, assurez-vous de disposer d’une machine virtuelle sous Linux. Vous pourrez trouver l’image d’une machine virtuelle kali préparée pour la réalisation d’attaques de niveau débutant jointe à ce rapport.</div>
            <div STYLE="margin-bottom:5%" className="larger_text">&emsp;&emsp;&emsp;<a href="/UsingLinux2" STYLE="color:black">Rejoignez la page suivante pour continuer</a></div>
            
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

