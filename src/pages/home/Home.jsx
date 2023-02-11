import React from 'react'
import Sidebar from '../../components/layout/sidebar/Sidebar'

function Home() {
  return (
    <>
      <Sidebar/>
        <main>

         <iframe title="BQS dashboard V3" width="100%" height="2000px" frameborder= 'none' src="https://app.powerbi.com/reportEmbed?reportId=0c450e58-58c9-4854-a751-e80d3fd83369&autoAuth=true&ctid=b4295fcf-972b-41c0-98f3-3d7586b2e7db"  allowFullScreen={true}></iframe>
        </main>
  
    </>

  )
}

export default Home