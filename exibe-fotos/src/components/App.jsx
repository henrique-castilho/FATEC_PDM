//rafce
import React from 'react'
import Busca from './Busca'
import env from 'react-dotenv'
// import { createClient } from 'pexels'
import pexelsClient from '../utils/pexelsClient'
import Imagem from './Imagem'
import ListaImagens from './ListaImagens'
import PexelsLogo from './PexelsLogo'

class App extends React.Component {

  //declarar uma variável de instância chamada client que nasce valendo null
  //implementar a função apropriada do ciclo de vida para fazer a inicialização, chamando a função createClient
  //observe que a createClient recebe, como parâmetro, a chave de API, que pode ser acessada por env.PEXELS_KEY

  // pexelsClient = null

  state = {
    photos: []
  }

  componentDidMount(){
    // this.pexelsClient = createClient(env.PEXELS_KEY)
  }

  // onBuscaRealizada = (termo) => {
  //   this.pexelsClient.photos.search({
  //     query: termo,
  //     per_page: 10
  //   }). then(result => this.setState({photos: result.photos}) )
  // }

  onBuscaRealizada = (termo) => {
    pexelsClient.get('/search', {
      params: {query: termo}
    }).then((result) => this.setState({photos: result.data.photos}))
  }

  render() {
    return (
      <div className='grid justify-content-center'>
        <div className='col-12'>
          <PexelsLogo />
          <h1 className='text-center'>Exibir uma lista de...</h1>
        </div>
        <div className='col-12'>
          <Busca dica='Digite algo que deseja ver...' 
          onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className="col12">
          <div className="grid">
            <ListaImagens 
              photos={this.state.photos}
              imgStyle={'col-12 md:col-6 lg:col-4 xl:col-3'}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App


          {/* <ListaImagens 
            photos={this.state.photos.map(photo => {
              return {
                src: photo.src.small, alt: photo.alt
              }
            })} /> */}
          {/* {
            this.state.photos.map((photo, key) => {
              return(
                <Imagem src={photo.src.small} alt={photo.alt} />
                // <div> 
                //   <img src={photo.src.small} alt={photo.alt} />
                // </div>
              )
            })
          } */}