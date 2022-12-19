/* 
Nom du fichier  : About.js
Description     : Composant React de la page 'A-Propos'.
Auteur          : Jessica Chan
Autre étudiant  : Sebastian Perez 
*/

import '../css/index.css'
import '../css/about.css'

function About() {
  return (
    <div className="about">
      <h1>À propos du projet</h1>
      <article>
        <p>
          Le <span>Générateur d’art météorologique</span> crée de l’art à partir d’un ensemble de données qui,
          dans le désir de connecter avec les spectateurs, proviennent d’une source intelligible présente
          dans toutes nos vies, la météo.
        </p>
        <p>
          Les paramètres des animations sont définis par l’API utilisée qui nous fournit des données météorologiques
          des cinq prochains jours chaque trois heures. Nous prenons le premier ensemble de données météorologiques
          fournies ainsi que celles se trouvant à douze et vingt-quatre heures plus tard afin de conserver trois choix
          de sous-catégorie de données obtenus par l’API. Ensuite, selon des calculs internes, nous déterminons le choix
          que nous l’utilisons.
        </p>
        <p>
          Dans l’état actuel du projet, nous nous servons de la pression atmosphérique au niveau de la mer en hectopascal.
          Nous avons normalisé cette mesure entre 0 et 1 avec une borne inférieure et supérieure. La borne inférieure est de
          870 hPA étant la mesure la plus basse que l’on trouve sur Terre, elle existe dans les tornades et les cyclones tropicaux.
          La borne supérieure est de 1085 hPA, car la mesure la plus haute sur Terre que l'on a enregistrée à ce jour est de 1083,8 hPA
          en Russie en 1961.
        </p>
        <p>
          Nous manipulons ce résultat afin d’influencer une caractéristique de chaque animation actuellement disponible:
          le cycle du nombre de membres dans l’animation des courbes de Bézier; le nombre de lignes qui tournent dans l’animation
          cylindrique et une chance de mutation dans l’animation de polygone.
        </p>
        <p>
          Ce projet a été réalisé avec un souci important sur l’abstraction et un grand soin sur l'architecture logicielle.
          Ainsi, la mécanique interne du site web est hautement modulaire et permet l'implémentation de fonctionnalités supplémentaires
          facilement. Un projet d’une telle envergure peut prendre des années à se développer afin de pouvoir le perfectionner.
          Avec le court laps de quinze semaines de développement, nous avons fait le choix de travailler principalement sur le moteur
          logique du site web. Nous sommes fiers de vous présenter cette première itération du Générateur d’art météorologique.
        </p>
      </article>

      <p className='auteurs'>
        - Jessica Chan et Sebastian Perez
      </p>
    </div>
  );
}

export default About;