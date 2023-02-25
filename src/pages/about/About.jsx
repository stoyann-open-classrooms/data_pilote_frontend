import { Link } from "react-router-dom";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import { BackButton } from "../../components/shared/BackButton";
import "./about.css";

function About() {
  return (
    <>
     <BackButton url={"/19031985"}/>
   
        <div className="documentation">
          <section className="section heading">

          <h1>Documentation</h1>
          <p>
            Bienvenue sur <strong>Data Pilote by Square</strong>, l'application
            idéale pour saisir, gérer et intégrer vos données dans des tableaux
            et piloter votre entreprise.
          </p>
          </section>
          <h2>Introduction</h2>
          <p>
            <strong>Data Pilote by Square</strong> est une application
            permettant de saisir des données dans deux types de tableaux
            différents:
            <ul>
              <li> les tableaux horodatés</li>
              <li> Et les tableaux statiques</li>
            </ul>
          </p>
          <h2>Les tableaux horodatés</h2>
          <p>
            contiennent une date obligatoire et peuvent contenir autant de
            lignes que souhaité. Les tableaux statiques ne sont pas
            obligatoirement datés mais ne peuvent contenir qu'une seule ligne.
            Les tableaux horodatés sont idéaux pour les données qui doivent être
            mises à jour régulièrement, tandis que les tableaux statiques
            conviennent mieux aux données qui ne changent pas souvent. Tous les
            tableaux sont limités à 6 champs (colonnes).
          </p>
          <h2>Les tableaux statique</h2>
          <p>
            contiennent une date obligatoire et peuvent contenir autant de
            lignes que souhaité. Les tableaux statiques ne sont pas
            obligatoirement datés mais ne peuvent contenir qu'une seule ligne.
            Les tableaux horodatés sont idéaux pour les données qui doivent être
            mises à jour régulièrement, tandis que les tableaux statiques
            conviennent mieux aux données qui ne changent pas souvent. Tous les
            tableaux sont limités à 6 champs (colonnes).
          </p>

          <h2>Créer un nouveau tableau de données</h2>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            cum debitis nemo enim dolor nihil reprehenderit nostrum, atque alias
            vero!
          </p>
          <h2>Partager le lien d'un tableau a vos collaborateurs</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vero
            nostrum officiis quis quia doloribus dolor architecto sit.
            Laudantium reiciendis dicta voluptatem fugit, repellat optio,
            molestias numquam odit, odio porro perspiciatis ullam. Vel
            recusandae quis aliquid officiis. Qui nisi eligendi accusamus amet
            ad eveniet suscipit vel commodi vitae porro tempora placeat
            doloremque facilis possimus tempore expedita dicta perferendis,
            exercitationem fuga. Nisi eligendi neque ab mollitia similique illum
            deleniti laudantium suscipit unde! Reprehenderit, cupiditate? Nisi
            tenetur maxime et sed rem libero facilis ab beatae corporis. Nisi
            consequuntur reiciendis unde aspernatur eos deleniti iure voluptas
            qui perspiciatis saepe, atque est ab ex.
          </p>

          <h2>Saisie de données</h2>
          <p>
            Pour saisir des données dans un tableau horodaté, cliquez sur le
            bouton "Nouveau tableau horodaté" et remplissez les champs requis, y
            compris la date. Vous pouvez ensuite ajouter autant de lignes que
            souhaité en cliquant sur "Ajouter une ligne".
          </p>

          <p>
            Pour saisir des données dans un tableau statique, cliquez sur le
            bouton "Nouveau tableau statique" et remplissez les champs requis.
            Vous ne pouvez ajouter qu'une seule ligne de données dans un tableau
            statique. Mise à jour de données
          </p>
          <p>
            Pour mettre à jour des données dans un tableau horodaté, cliquez sur
            le bouton "Modifier" à côté du tableau souhaité et apportez les
            modifications nécessaires.
          </p>
          <p>
            Pour mettre à jour des données dans un tableau statique, cliquez sur
            le bouton "Modifier" à côté du tableau souhaité et apportez les
            modifications nécessaires.
          </p>

          <h2>Intégration de données dans un rapport PowerBI</h2>
          <p>
            Les utilisateurs peuvent demander par email à{" "}
            <Link href="jepilotemaboite@square.nc">
              jepilotemaboite@square.nc
            </Link>
            d'intégrer les données de leurs tableaux horodatés ou statiques dans
            un rapport PowerBI. Cependant, chaque intégration de tableau coûtera
            9000 XPF.
          </p>
          <h2>Support</h2>
          <p>
            Si vous rencontrez des problèmes lors de l'utilisation de
            l'application <strong>Data Pilote by Square</strong>, veuillez
            contacter notre équipe de support à l'adresse :{" "}
            <a href="jepilotemaboite@square.nc">jepilotemaboite@square.nc</a>{" "}
            pour obtenir de l'aide.
          </p>
        </div>
     
    </>
  );
}

export default About;
