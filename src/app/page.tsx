import { Message } from "@/lib/@GrangerHub/react-webkit/components/message";
import Nav from "@/lib/@GrangerHub/react-webkit/components/nav";
import {Title, Container} from "@/lib/@GrangerHub/react-webkit/components/utils";
import Picture from "@/lib/@GrangerHub/react-webkit/components/picture";
import Application, { Applications } from "@/lib/@GrangerHub/react-webkit/components/application";
import { Human } from "@/lib/@GrangerHub/react-webkit/components/block";
import {Basic, Simple} from "@/lib/@GrangerHub/react-webkit/components/block/layouts";
import {HumanList, ListContainer, ListGrid} from "@/lib/@GrangerHub/react-webkit/components/list";
import NextLink  from "next/link";
import Image from 'next/image';

import picture from './assets/sebastian-adam.png';
import { mdiGmail, mdiGithub, mdiLinkedin, mdiPhone } from '@mdi/js';
import malt from './assets/malt.svg'


export default function Home() {
  return (
    <main>
      <Title level={1}>Sebastian ADAM</Title>
      <Title level={2}>Développeur informatique</Title>

      <Nav
          items={[
            {text: "À propos", href: "/#à-propos", inner: true, Component: NextLink},
            {text: "Contacter", href: "/#contacter", inner: true, Component: NextLink},
            {text: "Compétences", href: "/#compétences", inner: true, Component: NextLink},
            {text: "Diplômes", href: "/#diplômes", inner: true, Component: NextLink},
            {text: "Projets", href: "/#projets", inner: true, Component: NextLink},
            {text: "Curriculum Vitæ", href: "https://bastien-adam.fr/Bastien%20ADAM%20-%20CV.pdf"},
          ]}
        />

      <Container id="à-propos">
        <Message title="À propos" TitleTag="h3">
          <Picture
              alt="Sebastian ADAM - Développeur informatique Web et C++" right
              Component={Image} {...picture} placeholder="blur"
            />
          Ayant terminé la certification de l&apos;École 42 Paris, je finalise désormais le diplôme RNCP niveau 7 <i>Expert en architecture informatique</i> afin de continuer sur un doctorat.<br/>
          J&apos;ai de plus certifié cette année mes compétences pré-acquises en développement d&apos;application web par la formation OpenClassrooms <i>Développeur Web</i>.<br/>
          <br/>
          Considérant mes expériences professionnelles et mon implication dans des collectifs annexes, ma curiosité m&apos;amène à la recherche de missions CDD/CDI consécutives en entreprise.<br/>
        </Message>
      </Container>

      <Container id="contacter">
        <Applications>
          <Application href="/" title="Courriel" color="#d44638" path={mdiGmail} label="bastien.adam.buom01@gmail.com"/>
          <Application href="/" title="Téléphone" color="#25D366" path={mdiPhone}/>
          <Application href="/" title="Github" color="#aaa" path={mdiGithub}/>
          <Application href="/" title="LinkedIn" color="#0e76a8" path={mdiLinkedin}/>
          <Application href="/" title="Malt" color="#FC5656" vector={malt}/>
        </Applications>
      </Container>

      <Container id="compétences">
        <Title level={3}>Compétences techniques</Title>
        <Basic Component={Human} width="100%" height="initial">
          <ListGrid>
            <ListContainer title="Languages">
              <HumanList>
                <>Hello</>
                <>World</>
              </HumanList>
            </ListContainer>
            <ListContainer title="Frameworks">
              <HumanList>
                <>Hello</>
                <>World</>
                <>World</>
              </HumanList>
            </ListContainer>
            <ListContainer title="DevOps">
              <HumanList>
                <>Hello</>
                <>World</>
              </HumanList>
            </ListContainer>
            <ListContainer title="Cloud">
              <HumanList>
                <>Hello</>
                <>World</>
              </HumanList>
            </ListContainer>
            <ListContainer title="Bases de données">
              <HumanList>
                <>Hello</>
                <>World</>
              </HumanList>
            </ListContainer>
            <ListContainer title="Logiciels">
              <HumanList>
                <>Hello</>
                <>World</>
              </HumanList>
            </ListContainer>
          </ListGrid>
        </Basic>
      </Container>

      <Container id="diplômes">
        <Title level={3}>Formations et diplômes</Title>
        <table>
          <thead>
            <tr>
              <th className="spoiler"></th>
              <th>Organisme</th>
              <th>Diplôme</th>
              <th>Niveau</th>
              <th>Status</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
              <th>OpenClassrooms</th>
              <th></th>
              <th>Bac +3</th>
              <th>En validation</th>
            </tr>
            <tr>
            <th></th>
              <th>École 42</th>
              <th>Architecte du numérique</th>
              <th>Bac +5</th>
              <th>Finalisé</th>
            </tr>
            <tr>
              <th></th>
              <th>École 42</th>
              <th></th>
              <th>RNCP niveau 7</th>
              <th>En finalisation</th>
            </tr>
            <tr>
              <th></th>
              <th>Public</th>
              <th>CPGE TSI</th>
              <th>Bac +2</th>
              <th>Finalisé</th>
            </tr>
          </tbody>
        </table>
      </Container>

      <Container id="projets">
        <Title level={3}>Projets</Title>
        <Simple title="WebServ" TitleComponent="h4" Component={Human} width="100%" height="initial">
          <Title level={5}>Contexte</Title>
          <p>[Une brève description du projet, y compris les objectifs commerciaux ou techniques, l'industrie, et les utilisateurs finaux.]</p>
          <Title level={5}>Description</Title>
          <p>
            Serveur web C++ à la Nginx, réalisé sous forme de middleware, from scratch.<br/>
            Avec lecture / écriture de fichiers, et CGI. Hautement configurable, code facilement extensible.<br/>
            Benchmarké et validé par le testeur facultatif fourni.
          </p>
          <Title level={5}>Rôle et responsabilités</Title>
          <p>[La performance de nos APIs]</p>
          <Title level={5}>Environement</Title>
          <Title level={5}>Résultats</Title>
          <Title level={5}>Réalisations</Title>
          <Title level={5}>Annexes</Title>
          [code sources / média]
        </Simple>
      </Container>
    </main>
  );
}