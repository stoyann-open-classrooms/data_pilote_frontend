import { Link } from 'react-router-dom';
import './about.css'

function About() {
  return (
    <div>
      <div className="documentation">

      
      <h1>Documentation</h1>

      <p>
        Bienvenue sur Data Pilote by Square, l'application idéale pour saisir,
        gérer et intégrer vos données dans des tableaux et piloter votre
        entreprise.
      </p>
      <h2>Introduction</h2>
      <p>
        Data Pilote by Square est une application qui permet à des utilisateurs
        de saisir des données dans deux types de tableaux différents: les
        tableaux horodatés et les tableaux statiques. Les tableaux horodatés
        contiennent une date obligatoire et peuvent contenir autant de lignes
        que souhaité. Les tableaux statiques ne sont pas obligatoirement datés
        mais ne peuvent contenir qu'une seule ligne. Les tableaux horodatés sont
        idéaux pour les données qui doivent être mises à jour régulièrement,
        tandis que les tableaux statiques conviennent mieux aux données qui ne
        changent pas souvent. Tous les tableaux sont limités à 6 champs
        (colonnes).
      </p>

      <h2>Saisie de données</h2>
      <p>
        Pour saisir des données dans un tableau horodaté, cliquez sur le bouton
        "Nouveau tableau horodaté" et remplissez les champs requis, y compris la
        date. Vous pouvez ensuite ajouter autant de lignes que souhaité en
        cliquant sur "Ajouter une ligne".
      </p>

      <p>
        Pour saisir des données dans un tableau statique, cliquez sur le bouton
        "Nouveau tableau statique" et remplissez les champs requis. Vous ne
        pouvez ajouter qu'une seule ligne de données dans un tableau statique.
        Mise à jour de données
      </p>
      <p>
        Pour mettre à jour des données dans un tableau horodaté, cliquez sur le
        bouton "Modifier" à côté du tableau souhaité et apportez les
        modifications nécessaires.
      </p>
      <p>
        Pour mettre à jour des données dans un tableau statique, cliquez sur le
        bouton "Modifier" à côté du tableau souhaité et apportez les
        modifications nécessaires.
      </p>

      <h2>Intégration de données dans un rapport PowerBI</h2>
      <p>
        Les utilisateurs peuvent demander par email à  <Link href="jepilotemaboite@square.nc">jepilotemaboite@square.nc</Link> 
        d'intégrer les données de leurs tableaux horodatés ou statiques dans un
        rapport PowerBI. Cependant, chaque intégration de tableau coûtera 9000
        XPF.
      </p>
      <h2>Support</h2>
      <p>Si vous rencontrez des problèmes lors de l'utilisation de l'application Data Pilote by Square, veuillez contacter notre équipe de support à l'adresse : <a href="jepilotemaboite@square.nc">jepilotemaboite@square.nc</a>  pour obtenir de l'aide.</p>
    </div>
    </div>
  );
}

export default About;
