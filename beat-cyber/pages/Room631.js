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
    if(this.state.value=="trueisnotfalse"||this.state.value=="seJwVuA2vJ9G8FJNdeSOyIhG") {
      alert("C'est la bonne réponse !")
      this.setState({answered: true});
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <div STYLE="margin-bottom:2%;text-align:left">Pour finir, obtenez l'ID vercel du créateur du site ou une valeur de variable d'environnement.</div>  
      <p></p>
      <form STYLE="text-align:center" onSubmit={this.handleSubmit}>      
      <label>
          <input STYLE="margin-top:20%" type="text" value={this.state.value} onChange={this.handleChange} />        
          </label>
        <div STYLE="text-align:center"><input type="submit" STYLE="margin-top:3.5%" value="Envoyer" />
        {this.state.answered && <div STYLE="margin-bottom:5%; text-align:center; margin-left:23%"><a href="/profil" STYLE="color:black">Félicitations !</a></div>}
        </div></form></div>
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
  <h1 id="page_title">Mise en pratique contre une boite grise web de niveau facile</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Il est temps de mettre en pratique l'ensemble des compétences que vous avez pu acquérir jusqu'ici.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Pour cela, vous allez tenter de prendre le contrôle d'un jeune site internet développé avec next js, dont les créateurs ont fait l'erreur de le déployer trop tôt sur le worldwide web.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;En suivant les indications de chaque page et en mettant en oeuvre vos compétences, vous devriez trouver les bannières ("flag") accessibles partout sur la cible. Elles correspondraient dans le cas d'une machine réelle à des failles de sécurité ou à des informations exploitables contre l'hôte.</div>
            <div STYLE="margin-bottom:5%" className="larger_text">&emsp;&emsp;&emsp; Vous pouvez retrouver la cible de cette exercice déployée à l'adresse URI suivante : <a href="https://targetcyber.vercel.app" STYLE="color:black">targetsystem.vercel.app</a>. Il s'agit d'une boite de niveau facile, ne vous demandant pas de connaissances particulières en informatique hors du contenu précédent. Néanmoins, la recherche de documentation sur internet est autorisée, et même encouragée ! Vous pouvez encore apprendre à manipuler de nombreux outils de cybersécurité, et vous pouvez également vous renseigner sur les failles de sécurité que vous pourriez rencontrer.</div>


      {/*Poser une question réponse dans un champ texte, accès à la réponse grâce à la classe Connexion*/}
            <div STYLE="margin-bottom:5%; margin-left:20%;text-align:center" className="larger_text">
            <NameForm />
            </div>       
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

