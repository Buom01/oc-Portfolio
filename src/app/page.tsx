import { Message } from "@/lib/@GrangerHub/react-webkit/components/message";
import Nav from "@/lib/@GrangerHub/react-webkit/components/nav";
import {Title, Container, Link} from "@/lib/@GrangerHub/react-webkit/components/utils";
import Picture from "@/lib/@GrangerHub/react-webkit/components/picture";
import Application, { Applications } from "@/lib/@GrangerHub/react-webkit/components/application";
import { Human } from "@/lib/@GrangerHub/react-webkit/components/block";
import {Basic, Simple} from "@/lib/@GrangerHub/react-webkit/components/block/layouts";
import {HumanList, ListContainer, ListGrid} from "@/lib/@GrangerHub/react-webkit/components/list";
import {Table, Row, TableBody, TableHead, TableFoot} from "@/lib/@GrangerHub/react-webkit/components/table";
import {Chips, Chip, ChipCyan, ChipYellow, ChipGreen} from "@/lib/@GrangerHub/react-webkit/components/chips";
import NextLink  from "next/link";
import Image from 'next/image';

import classes from './page.module.css';

import picture from './assets/bastien-adam.png';
import { mdiGmail, mdiGithub, mdiLinkedin, mdiPhone } from '@mdi/js';
import malt from './assets/malt.svg'


export default function Home() {
  return (
    <main>
      <Title level={1}>Bastien ADAM</Title>
      <Title level={2}>Développeur informatique</Title>

      <Nav
          items={[
            {text: "À propos", href: "/#à-propos", inner: true, Component: NextLink},
            {text: "Contacter", href: "/#contacter", inner: true, Component: NextLink},
            {text: "Compétences", href: "/#compétences", inner: true, Component: NextLink},
            {text: "Diplômes", href: "/#diplômes", inner: true, Component: NextLink},
            {text: "Projets", href: "/#projets", inner: true, Component: NextLink},
            {text: "Curriculum Vitæ", href: "https://www.bastien-adam.fr/Bastien%20ADAM%20-%20CV.pdf"},
          ]}
        />

      <Container id="à-propos">
        <Message title="À propos" TitleTag="h3">
          <Picture
              alt="Bastien ADAM - Développeur informatique Web et C++" right
              Component={Image} {...picture} placeholder="blur"
            />
          Ayant terminé la certification de l&apos;École 42 Paris, je finalise désormais le diplôme RNCP niveau 7 <i>Expert en architecture informatique</i> afin de continuer sur un doctorat.<br/>
          J&apos;ai de plus certifié cette année mes compétences pré-acquises en développement d&apos;application web par la formation OpenClassrooms <i>Développeur Web</i>.<br/>
          <br/>
          Considérant mes expériences professionnelles et mon implication dans des collectifs annexes, ma curiosité m&apos;amène à la recherche de missions CDD/CDI.<br/>
        </Message>
      </Container>

      <Container id="contacter">
        <Applications>
          <Application href="mailto:bastien.adam.buom01@gmail.com" title="Courriel" color="#d44638" path={mdiGmail}/>
          <Application href="tel:+33767564746" title="Téléphone" color="#25D366" path={mdiPhone}/>
          <Application href="https://github.com/Buom01/" title="Github" color="#aaa" path={mdiGithub}/>
          <Application href="https://www.linkedin.com/in/bastien-adam-buom01/" title="LinkedIn" color="#0e76a8" path={mdiLinkedin}/>
          <Application href="https://www.malt.fr/profile/bastienadam1" title="Malt" color="#FC5656" vector={malt}/>
        </Applications>
      </Container>

      <Container id="compétences">
        <Title level={3}>Compétences techniques</Title>
        <Basic Component={Human} width="100%" height="initial">
          <ListGrid>
            <ListContainer title="Languages">
              <HumanList>
                <>HTML5 / CSS3</>
                <>JavaScript ES7+ / TypeScript</>
                <>C / C++ / C#</>
              </HumanList>
            </ListContainer>
            <ListContainer title="DevOps">
              <HumanList>
                <>Docker / Kubernetes</>
                <>HTTP / DNS / SSL</>
                <>Apache HTTPD / Nginx</>
              </HumanList>
            </ListContainer>
            <ListContainer title="Base de données">
              <HumanList>
                <>MongoDB</>
                <>SQL (MariaDB / PostgreSQL)</>
              </HumanList>
            </ListContainer>
            <ListContainer title="Frontend">
              <HumanList>
                <>React.js</>
                <>MUI</>
                {/* <>Vue.js</> */}
              </HumanList>
            </ListContainer>
            <ListContainer title="Backend">
              <HumanList>
                <>Node.js</>
                <>Express.js</>
                <>Feathers.js</>
              </HumanList>
            </ListContainer>
            <ListContainer title="Fullstack">
              <HumanList>
                <>Next.js</>
                <>REST / Socket.IO</>
              </HumanList>
            </ListContainer>
            <ListContainer title="Gestion d'équipe">
              <HumanList>
                <>Git</>
                <>Kanban</>
              </HumanList>
            </ListContainer>
            <ListContainer title="Outils">
              <HumanList>
                <>Electron</>
                <>GDB / Valgrind</>
              </HumanList>
            </ListContainer>
          </ListGrid>
        </Basic>
      </Container>

      <Container id="diplômes">
        <Title level={3}>Formations et diplômes</Title>
        <Table>
          <TableHead>
            <>Organisme</>
            <>Diplôme</>
            <>Niveau</>
            <>Status</>
          </TableHead>
          <TableBody>
            <Row spoiler={<p><Link>https://42.fr/le-campus-de-paris/diplome-informatique/expert-en-architecture-informatique/</Link></p>}>
              <>École 42 Paris</>
              <>Système d’information et réseaux</>
              <>+5</>
              <>En cours</>
            </Row>
            <Row spoiler={<><p><Link>https://openclassrooms.com/fr/paths/899-developpeur-web</Link></p><p><Link>https://candidat.francetravail.fr/formations/detail/3986402/true/true</Link></p></>}>
              <>OpenClassrooms</>
              <>Développeur Web</>
              <>+2</>
              <>Terminé</>
            </Row>
            <Row spoiler={<><p>Diplôme intermédiaire non reconnu. Il s&apos;agit du premier diplôme mis en place par l&apos;École. S&apos;il n&apos;est pas reconnu par l&apos;État, il est largement reconnu par les grandes entreprises du numérique.</p><p>*Toutes les conditions sont remplies, excepté mon alumnisation</p></>}>
              <>École 42 Paris</>
              <>Architecte du numérique</>
              <>+5</>
              <>Terminé*</>
            </Row>
            <Row>
              <>Lycée Heinrich Nessel</>
              <>CPGE: TSI</>
              <>+2</>
              <>Terminé</>
            </Row>
          </TableBody>
          {/* <TableFoot full>
            <>Information annexe - Mis à jour le ...</>
          </TableFoot> */}
        </Table>
      </Container>

      <Container id="projets">
        <Title level={3}>Projets</Title>
        <Simple title="Transcendance" TitleComponent="h4" Component={Human} width="100%" height="initial" className={classes.projet}>
          <Title level={5}>Description</Title>
          <p>Réseau social autour du jeu Pong, revisité en 3D.</p>
          <Title level={5}>Environement</Title>
          <Chips>
            <ChipGreen>Vue.JS</ChipGreen>
            <ChipGreen>Three.JS</ChipGreen>
            <ChipGreen>Quasar</ChipGreen>
            <ChipGreen>Vite.JS</ChipGreen>
            <ChipGreen>Socket.IO</ChipGreen>
            <ChipGreen>REST</ChipGreen>
            <ChipGreen>Axios</ChipGreen>
            <ChipGreen>Nest.JS</ChipGreen>
            <ChipGreen>PostgreSQL</ChipGreen>
            <ChipCyan>JavaScript</ChipCyan>
            <ChipCyan>Shell</ChipCyan>
            <ChipYellow>Nginx</ChipYellow>
            <ChipYellow>Docker Compose</ChipYellow>
            <ChipYellow>Ubuntu Server</ChipYellow>
          </Chips>
          <Title level={5}>Réalisations</Title>
          <p>Tout le jeu :</p>
          <ul>
            <li>
              La logique du jeu dont :
              <ul>
                <li>La synchronisation Client-Serveur indépendante du ping</li>
                <li>Mise en pause et interruptions</li>
                <li>Mode spectateur</li>
                <li>
                  Physique de la balle :
                  <ul>
                    <li>Rebondissement selon la zone de contacte de la raquette</li>
                    <li>Consistance peu importe le ping</li>
                    <li>Animation en sortie de zone de jeu</li>
                  </ul>
                </li>
                <li>Scores</li>
                <li>Warmup</li>
                <li>Matchmatching selon différents critères</li>
              </ul>
            </li>
            <li>
              Carte 3D animées configurables dont :
              <ul>
                <li>Taille de la zone de jeu</li>
                <li>Vitesse de la balle</li>
                <li>Taille des raquettes</li>
                <li>Contrôles autorisés</li>
                <li>Position des scores et des avatars</li>
                <li>Positions de la caméra</li>
                <li>Matériaux de la zone de jeu</li>
                <li>Effets 3D</li>
                <li>Arrière-plan 3D</li>
                <li>
                  Implantation des cartes :
                  <ul>
                    <li>Forest: Une carte pour débutant</li>
                    <li>Classic: Une carte fidèle au jeu original</li>
                    <li>Synthwave: Une carte pour un niveau avancé</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Différents contrôles : Curseur, Molette, Clavier, Gyroscope, …</li>
            <li>Transitions de la caméra </li>
            <li>
              L&apos;interface du jeu dont :
              <ul>
                <li>Statuts : Score, Avatar de l&apos;adversaire, Warmup, …</li>
                <li>Paramètres 3D et paramètres du jeu</li>
                <li>Mise en pause</li>
                <li>Abandon du jeu</li>
              </ul>
            </li>
            <li>Des interfaces de l&apos;application web relatives au jeu dont :
              <ul>
                <li>La liste des parties réactive</li>
                <li>La page de matchmatching</li>
                <li>Statut du jeu dans le menu principal de l&apos;application</li>
              </ul>
            </li>
          </ul>
          <p>L&apos;application web :</p>
          <ul>
            <li>Responsivité de l&apos;application</li>
            <li>Layouts réutilisables</li>
            <li>Peaufinage de l&apos;interface générale de l&apos;application</li>
          </ul>
          <Title level={5}>Problématiques rencontrées</Title>
          <ul>
            <li>
              <p>Mauvaises performances sur les configurations sans GPU</p>
              <p>⇒ Benchmarking et mise en place de paramètres adaptés</p>
            </li>
            <li>
              <p>La latence réseau pourrait ne pas faire réagir la balle conformément au mouvement de la raquette du joueur</p>
              <p>⇒ Mise en place d&apos;un calcul précis du ping</p>
              <p>⇒ Correction des calculs de rebonds du côté serveur prenant en compte le ping</p>
              <p>⇒ Mise en place d&apos;un mécanisme d&apos;anti-triche</p>
            </li>
          </ul>
          <Title level={5}>Compétences développées</Title>
          <Chips>
            <Chip>Vue.JS</Chip>
            <Chip>Three.JS</Chip>
            <Chip>Animation 3D</Chip>
            <Chip>Programmation de jeux vidéos</Chip>
          </Chips>
          <Title level={5}>Annexes</Title>
          <Link>https://github.com/Buom01/ft_transcendence/</Link>
        </Simple>
        <Simple title="WebServ" TitleComponent="h4" Component={Human} width="100%" height="initial" className={classes.projet}>
          <Title level={5}>Contexte</Title>
          <p>Un serveur HTTP/1.1 multiplexé en C++ 98.</p>
          <Title level={5}>Description</Title>
          <p>
            Serveur web C++ à la Nginx, réalisé sous forme de middleware, from scratch.<br/>
            Avec lecture / écriture de fichiers, et CGI. Hautement configurable, code facilement extensible.<br/>
            Benchmarké et validé par un testeur tier.
          </p>
          <Title level={5}>Environement</Title>
          <Chips>
            <ChipCyan>C++</ChipCyan><ChipYellow>Ubuntu</ChipYellow>
          </Chips>
          <Title level={5}>Résultats</Title>
          <p>Un serveur web performant et sur mesure toujours utilisé pour héberger nos projets plusieurs années après.</p>
          <Title level={5}>Réalisations</Title>
          <p>
            Le cœur du projet :
          </p>
          <ul>
            <li>L&apos;API d&apos;architecture en middleware</li>
            <li>L&apos;API d&apos;architecture en middleware</li>
            <li>Une grande partie de la logique principale définie par la configuration</li>
            <li>Les middlewares de parsing des requêtes HTTP</li>
            <li>Les middlewares de réponses HTTP</li>
            <li>La gestion d&apos;asynchronicité de la lecture et de l&apos;écriture avec epoll</li>
            <li>La gestion des sockets et de la concurrence</li>
            <li>Le traitement en parallèle des requêtes</li>
            <li>La fonctionnalité keep-alive du HTTP 1.1</li>
          </ul>
          <br/>
          <p>
            Quelques middlewares applicatifs :
          </p>
          <ul>
            <li>
              Les middlewares de services statiques (lecture) dont :
              <ul>
                <li>La lecture d&apos;un dossier</li>
                <li>La lecture d&apos;un fichier, avec détection du mime-type</li>
                <li>Le service d&apos;upload</li>
              </ul>
            </li>
          </ul>
          <Title level={5}>Problématiques rencontrées</Title>
          <ul>
            <li>
              <p>Des requêtes sur le CGI sont plus grandes que la mémoire RAM</p>
              <p>⇒ Démarrage du traitement par le CGI avant la réception complète corps</p>
              <p>⇒ Streaming de la réponse au client, avant même que celui-ci est terminé sa requête</p>
            </li>
            <li>
              <p>Le projet est d&apos;envergure. La possible maintenabilité du code est donc un problème.</p>
              <p>⇒ Découpage du code en plusieurs librairies internes</p>
              <p>⇒ Séparation des niveaux de traitement</p>
              <p>⇒ Traitement des requêtes sous forme de middlewares</p>
              <p>⇒ Division du traitement des requêtes en une micro-tâche par middleware</p>
            </li>
          </ul>
          <Title level={5}>Compétences développées</Title>
          <Chips>
            <Chip>C++</Chip>
            <Chip>POO</Chip>
            <Chip>RAII</Chip>
            <Chip>I/O</Chip>
            <Chip>Multiplexing</Chip>
            <Chip>HTTP/1.1</Chip>
          </Chips>
          <Title level={5}>Annexes</Title>
          <Link>https://github.com/Buom01/ft_webserv/</Link>
        </Simple>
      </Container>
    </main>
  );
}