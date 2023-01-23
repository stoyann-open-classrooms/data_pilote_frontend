import Dialog from '../../components/shared/modal/Dialog'
import './links.css'

function Links() {
  return (
    <div>
        <h1>Gerer les liens</h1>
        <Dialog/>

        <div className="links_container">
                <h3>Tableaux objectifs</h3>
            <div className="link">
                <p>http://localhost:3000/objectifs/637a3694e5fc335f796a4140</p>
                <button>Copier le lien</button>
            </div>
            <h3>Tableaux budget heures</h3>
            <div className="link">
                <p>http://localhost:3000/budget_heures_CHS/637a3694e5fc335f796a4860</p>
                <button>Copier le lien</button>
            </div>
            <h3>Tableaux RH</h3>
            <div className="link">
                <p>http://localhost:3000/rh/637a3694e5fc335f796a4141</p>
                <button>Copier le lien</button>
            </div>
            <h3>Tableaux pluviometrie</h3>

            <div className="link">
                <p>http://localhost:3000/pluviometrie/637a3694e5fc335f796a4141</p>
                <button>Copier le lien</button>
            </div>
        </div>
    </div>
  )
}

export default Links