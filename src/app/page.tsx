import { Message } from "@/lib/@GrangerHub/react-webkit/components/message";
import Nav from "@/lib/@GrangerHub/react-webkit/components/nav";
import Picture from "@/lib/@GrangerHub/react-webkit/components/picture";
import {Title, Container} from "@/lib/@GrangerHub/react-webkit/components/utils";
import NextLink  from "next/link";
import Image from 'next/image';

import picture from './assets/sebastian-adam.png';


export default function Home() {
  return (
    <main>
      <Title level={1}>Sebastian ADAM</Title>
      <Title level={2}>Développeur informatique</Title>

      <Nav
          items={[
            {text: "À propos", href: "/#à-propos", inner: true, Component: NextLink},
            {text: "Compétences", href: "/#compétences", inner: true, Component: NextLink},
            {text: "Diplômes", href: "/#diplômes", inner: true, Component: NextLink},
            {text: "Projets", href: "/#projets", inner: true, Component: NextLink},
            {text: "Contacter", href: "/#contacter", inner: true, Component: NextLink},
            {text: "Curriculum Vitæ", href: "https://bastien-adam.fr/Bastien%20ADAM%20-%20CV.pdf"},
          ]}
        />

      <Container id="à-propos">
        <Message title="À propos" TitleTag="h3">
          <Picture
              alt="Sebastian ADAM - Développeur informatique Web et C++" right
              placeholderComponent={Image} {...picture} placeholder="blur"
            />
          Ayant terminé la certification de l&apos;École 42 Paris, je finalise désormais le diplôme RNCP niveau 7 <i>Expert en architecture informatique</i> afin de continuer sur un doctorat.<br/>
          J&apos;ai de plus certifié cette année mes compétences pré-acquises en développement d&apos;application web par la formation OpenClassrooms <i>Développeur Web</i>.<br/>
          <br/>
          Considérant mes expériences professionnelles et mon implication dans des collectifs annexes, ma curiosité m&apos;amène à la recherche de missions CDD/CDI consécutives en entreprise.<br/>
        </Message>
      </Container>

      <Container id="compétences">
      </Container>

    </main>
  );
}
