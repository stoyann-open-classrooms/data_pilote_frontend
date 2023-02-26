import { Link } from "react-router-dom";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import { BackButton } from "../../components/shared/BackButton";
import "./about.css";

function About() {
  return (
    <>
      <BackButton url={"/19031985"} />

      <div className="documentation">
        <section className="section heading">
          <h1>Documentation</h1>
          <p>
            Bienvenue sur <strong>Data Pilote by Square</strong>, l'application
            idéale pour saisir, gérer et intégrer vos données dans des tableaux
            et piloter votre entreprise.
          </p>
        </section>
        <section className="documention_sumary">
          <h2>Sommaire</h2>
          <ul>
            <li>Introduction</li>
            <li>Les types de tableaux de données</li>
            <li>Création d'un nouveau tableau de données</li>
            <li>Gestion des liens vers les tableaux de données </li>
            <li>Partager un lien vers un tableau de données </li>
            <li>Entrée des données dans un tableau de données</li>
          </ul>
        </section>
        <section>
          <h2>Introduction</h2>
          <p>
            Bienvenue dans la documentation de l'application "Je Pilote Ma Boite
            by Square". Cette application est conçue pour faciliter la création
            et la gestion de tableaux de données qui peuvent ensuite être
            intégrés dans des rapports Power BI.
          </p>
          <p>
            L'application offre une interface utilisateur conviviale avec des
            options de création, de gestion et de partage de tableaux de
            données. Elle est destinée aux professionnels qui ont besoin de
            gérer des données importantes pour leur entreprise. Ces tableaux
            pourront $etre intégrés dans des rapports power BI sur demande.
            (voir tarifs intégrations de données)
          </p>
          <p>
            Dans cette documentation, vous trouverez des instructions détaillées
            sur l'utilisation de l'application, notamment sur la création de
            nouveaux tableaux de données, la gestion des liens vers les tableaux
            de données, le partage des liens vers les tableaux de données, et
            l'entrée des données dans les tableaux.
          </p>
          <p>
            Si vous avez besoin d'aide supplémentaire ou si vous avez des
            questions concernant l'utilisation de l'application, veuillez
            contacter le support de l'application. Nous sommes là pour vous
            aider à tirer le meilleur parti de l'application et à résoudre tous
            les problèmes que vous pourriez rencontrer. Vous pouvez contacter le
            support de l'application par e-mail à support@jepilotemaboite.com.
          </p>
          <p>
            Nous espérons que cette documentation vous sera utile pour utiliser
            l'application "Je Pilote Ma Boite by Square" et gérer efficacement
            vos données.
          </p>
        </section>
        <section>
          <h2>Les types de tableaux de données</h2>
          <p>
            L'application "Je Pilote Ma Boite by Square" offre deux types de
            tableaux de données : les tableaux horodatés et les tableaux
            statiques. Les deux types de tableaux ont une limite de six
            colonnes.
          </p>
          <h3>Les tableaux horodatés :</h3>
          <p>
            Les tableaux horodatés sont utilisés pour suivre l'évolution des
            données dans le temps. Ils sont souvent utilisés pour suivre les
            résultats de campagnes publicitaires, les ventes par semaine, les
            budgets trimestriels, etc. Lorsque vous créez un tableau horodaté,
            vous pouvez choisir la fréquence des horodatages (hebdomadaire,
            mensuelle, trimestrielle, etc.). Les horodatages sont
            automatiquement créés pour chaque nouvelle ligne de données entrée
            dans le tableau.
          </p>
          <h3>Les tableaux statiques :</h3>

          <p>
            Les tableaux horodatés sont utilisés pour suivre l'évolution des
            données dans le temps. Ils sont souvent utilisés pour suivre les
            résultats de campagnes publicitaires, les ventes par semaine, les
            budgets trimestriels, etc. Par exemple, vous pouvez créer un tableau
            horodaté pour suivre les ventes hebdomadaires de votre entreprise :
          </p>
 
          <p>
            La fréquence des horodatages est journaliéres. Les horodatages sont
            automatiquement créés pour chaque nouvelle ligne de données entrée
            dans le tableau.
          </p>

          <h3>Les tableaux statiques :</h3>

          <p>
            Les tableaux statiques sont utilisés pour stocker des données qui ne
            changent pas fréquemment. Ils sont souvent utilisés pour stocker des
            informations telles que les noms des clients, les adresses, les
            numéros de téléphone, etc. Par exemple, vous pouvez créer un tableau
            statique pour stocker les informations de vos clients :
          </p>
          <p>ICI CAPTURE D'ECRAN</p>
          <p>
            Les tableaux statiques sont plus simples que les tableaux horodatés,
            car ils ne nécessitent pas d'horodatages. Vous pouvez simplement
            entrer les données dans les colonnes appropriées.
          </p>
          <p>
            Veuillez noter que les deux types de tableaux ont une limite de six
            colonnes. Si vous avez besoin de plus de colonnes, vous pouvez créer
            plusieurs tableaux ou combiner plusieurs colonnes en une seule en
            utilisant des fonctions d'édition dans Excel ou dans un autre
            logiciel de traitement de données
          </p>
          <p>
            Le prochain chapitre explique comment créer un nouveau tableau de
            données.
          </p>
        </section>

        <section>
          <h3>Création d'un nouveau tableau de données :</h3>
          <p>
            Pour créer un nouveau tableau de données dans l'application "Je
            Pilote Ma Boite by Square", suivez les étapes suivantes :
          </p>
          <ul>
            <li>
              1- Au démarrage de l'application, cliquez sur le bouton "Nouveau
              tableau de données". Une modale s'ouvre vous demandant de choisir
              le type de tableau à créer.
            </li>
            <li>
              2- Choisissez le type de tableau que vous souhaitez créer :
              tableau horodaté ou tableau statique.
            </li>
            <li>
              3- Dans la modale qui s'ouvre, remplissez les informations
              suivantes :
              <ul>
                <li>Le titre du tableau de données</li>
                <li>
                  Les titres de champs, c'est-à-dire les noms de chaque colonne
                  que vous souhaitez inclure dans votre tableau. Vous pouvez
                  ajouter jusqu'à six colonnes.
                </li>
              </ul>
            </li>
            <li>
              Cliquez sur le bouton "Valider" pour créer votre nouveau tableau.
              Le tableau est automatiquement sauvegardé et ajouté à la liste des
              tableaux dans la section "Liens".
            </li>
            <li>
              5- Vous pouvez maintenant entrer des données dans le tableau en
              cliquant sur le lien du tableau dans la section "Liens".
            </li>
          </ul>

          <p>
            Veuillez noter que si vous souhaitez créer plusieurs tableaux, vous
            pouvez répéter les étapes ci-dessus pour chaque tableau que vous
            souhaitez créer. Vous pouvez également supprimer les tableaux
            existants en cliquant sur le bouton "Supprimer" à côté du lien du
            tableau correspondant dans la section "Liens".
          </p>
          <p>
            Le prochain chapitre explique comment gérer les liens vers les
            tableaux de données.
          </p>
        </section>
        <section>
          <h3>Gestion des liens vers les tableaux de données</h3>
          <p>
            Une fois que vous avez créé un ou plusieurs tableaux de données,
            vous pouvez accéder à la section "Liens" pour gérer vos tableaux.
            Dans cette section, vous pouvez voir la liste de tous les tableaux
            que vous avez créés, ainsi que les liens vers ces tableaux. Vous
            pouvez également modifier, copier ou supprimer les liens vers les
            tableaux de données.
          </p>
          <h3>Voici comment gérer les liens vers les tableaux de données :</h3>

          <ul>
            <li>
              1-Au démarrage de l'application, cliquez sur "Gérer les liens vers
              les tableaux de données" pour accéder à la section "Liens".
            </li>
            <li>
              Dans la section "Liens", vous pouvez voir la liste de tous les
              tableaux de données que vous avez créés. Chaque tableau est
              représenté par une carte contenant le titre la date de création la
              date de modification le type de tableau (statique ou horodaté) et
              un bouton permettant la copie du lien dans le presse papier pour
              acceder au tableau
            </li>
            <li>
              2- Pour modifier le titre d'un tableau de données, cliquez sur le
              bouton "Modifier" à côté du lien du tableau correspondant. Une
              modale s'ouvre vous permettant de modifier le titre.
            </li>
            <li>
              3-Pour copier un lien vers un tableau de données, cliquez sur le
              bouton "Copier" à côté du lien du tableau correspondant. Le lien
              est automatiquement copié dans votre presse-papiers.
            </li>
            <li>
              4-Pour supprimer un tableau de données, cliquez sur le bouton
              "Supprimer" à côté du lien du tableau correspondant. Une fenêtre
              de confirmation s'affiche pour vous demander de confirmer la
              suppression.
            </li>
          </ul>
          <p>
            Veuillez noter que les modifications apportées à un tableau de
            données dans cette section ne modifient pas les données elles-mêmes.
            Pour modifier les données dans un tableau, cliquez sur le lien
            correspondant dans la section "Liens" pour accéder au tableau. Vous
            pouvez maintenant entrer ou modifier les données dans le tableau.
          </p>
          <p>
            Pour une meilleure compréhension, voici une capture d'écran de la
            section "Liens" :
          </p>
          <p>HERE CAPTURE</p>
          <p>
            La capture d'écran montre la liste des tableaux de données créés,
            ainsi que les boutons pour modifier, copier ou supprimer les liens
            vers les tableaux de données.
          </p>
        </section>
        <section>
          <h2>Partager un lien vers un tableau de données :</h2>
          <p>
            Une fois que vous avez créé un tableau de données, vous pouvez le
            partager avec vos collaborateurs en leur envoyant un lien vers le
            tableau. Pour partager un lien vers un tableau de données, suivez
            les étapes suivantes :
          </p>
          <ul>
            <li>
              1- Au démarrage de l'application, cliquez sur "Gérer les liens
              vers les tableaux de données" pour accéder à la section "Liens".
            </li>
            <li>
              {" "}
              2- Dans la section "Liens", recherchez le tableau que vous
              souhaitez partager.
            </li>
            <li>
              3- Cliquez sur le bouton "Copier" à côté du lien du tableau
              correspondant. Le lien est automatiquement copié dans votre
              presse-papiers.
            </li>
            <li>
              4- Envoyez le lien copié à vos collaborateurs par e-mail,
              messagerie instantanée, ou tout autre moyen de communication. Vos
              collaborateurs pourront cliquer sur le lien pour accéder au
              tableau.
            </li>
          </ul>
          <p>
            Veuillez noter que si vous partagez un lien vers un tableau de
            données, vos collaborateurs pourront entrer ou modifier les données
            dans le tableau correspondant.
          </p>
          <p>Pour une meilleure compréhension, voici une capture d'écran de la section "Liens" avec le bouton "Copier" :</p>
      <p>HERE CAPTURE</p>
      <p>
      La capture d'écran montre le bouton "Copier" à côté du lien du tableau correspondant. En cliquant sur le bouton "Copier", le lien est automatiquement copié dans le presse-papiers.
      </p>
        </section>
        <section>
          <h2>Entrée des données dans un tableau de données : </h2>
          <p>
          Pour entrer des données dans un tableau de données dans l'application "Je Pilote Ma Boite by Square", suivez les étapes suivantes :
          </p>
          <ul>
            <li>
            Au démarrage de l'application, cliquez sur "Gérer les liens vers les tableaux de données" pour accéder à la section "Liens".
            </li>
            <li>
            Dans la section "Liens", recherchez le lien du tableau de données dans lequel vous souhaitez entrer des données. Cliquez sur le bouton "Copier" à côté du lien du tableau correspondant pour copier le lien dans le presse-papiers.
            </li>
            <li>
            Collez le lien dans votre navigateur Web pour accéder au tableau de données ou partager le a vos collaborateurs pour qu'il puisse entrés des données. 
            </li>
            <li>
            Dans le tableau, cliquez sur le bouton "Nouvelle entrée" pour ajouter une nouvelle ligne de données dans le tableau. Une modale s'ouvre vous permettant de remplir les champs du tableau.
            </li>
            <li>
            Dans la modale qui s'ouvre, remplissez les champs du tableau avec les données correspondantes. Vous pouvez entrer des nombres, des dates, des chaînes de caractères, etc.
            </li>
            <li>
            Une fois que vous avez entré les données dans le tableau, cliquez sur le bouton "Enregistrer" pour sauvegarder les modifications.
            </li>
          </ul>
          <p>
          Veuillez noter que si le tableau est un tableau horodaté, la date est automatiquement saisie pour chaque nouvelle ligne de données entrée dans le tableau. Si le tableau est un tableau statique, les données sont simplement stockées dans le tableau.
          </p>
          <p>
          Pour une meilleure compréhension, voici une capture d'écran du tableau de données avec la modale pour ajouter une nouvelle entrée :
          </p>
       
          <p>
          La capture d'écran montre le tableau de données avec la modale pour ajouter une nouvelle entrée. Les champs du tableau sont visibles et vous pouvez entrer des données correspondantes. Le bouton "Enregistrer" est également visible en bas de la modale pour sauvegarder les modifications.
          </p>
        </section>
        <section>
          <p>
          Félicitations, vous avez maintenant terminé la documentation de l'application "Je Pilote Ma Boite by Square" ! Nous espérons que cette documentation vous a permis de comprendre les différentes fonctionnalités de l'application et de l'utiliser de manière efficace.
          </p>
          <p>
          Si vous avez des questions ou si vous avez besoin d'aide supplémentaire pour utiliser l'application, n'hésitez pas à contacter le support de l'application. Nous sommes là pour vous aider !
          </p>
          <p>
          Nous espérons que vous apprécierez l'utilisation de l'application "Je Pilote Ma Boite by Square" et que cela vous permettra d'améliorer votre gestion de données pour votre entreprise.
          </p>
          <h4>
          Merci d'utiliser notre application !
          </h4>
        </section>
      </div>
    </>
  );
}

export default About;
