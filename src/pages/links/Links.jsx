import './links.css'

function Links() {
  return (
    <div>
        <h1>Gerer les liens</h1>

        <div className="links_container">
            <div className="link">
                
                <p>http://localhost:3000/objectifs/637a3694e5fc335f796a4140</p>
                <button>Copier le lien</button>
            </div>
            <div className="link">
                <p>http://localhost:3000/budget_heures_CHS/637a3694e5fc335f796a4860</p>
                <button>Copier le lien</button>
            </div>
            <div className="link">
                <p>http://localhost:3000/rh/637a3694e5fc335f796a4141</p>
                <button>Copier le lien</button>
            </div>
        </div>
    </div>
  )
}

export default Links