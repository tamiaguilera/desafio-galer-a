import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Card } from './components/Card'

function App() {
  const titulo = "Galería de Imagenes con React" 
const data = [
  {
    img: "https://images.unsplash.com/photo-1626079451033-39e6fad45b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGNha2V8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    titulo: "Pastel Chocolate", 
    desc: "Descripción 1"
  },
  {
    img: "https://images.unsplash.com/photo-1646644189925-eb67de9605f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxjYWtlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    titulo: "Torta Vainilla Guinda", 
    desc: "Descripción 2"
  },
  {
    img: "https://images.unsplash.com/photo-1615832493827-7efcc90e6ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg2fHxjYWtlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    titulo: "Chocolate Crocante", 
    desc: "Descripción 3"
  },
  {
    img: "https://images.unsplash.com/photo-1621868402792-a5c9fa6866a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxjYWtlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    titulo: "Torta Brownie", 
    desc: "Descripción 1"
  },
  {
    img: "https://images.unsplash.com/photo-1626079451330-4bf76488fbbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxjYWtlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    titulo: "Pastel de Limón", 
    desc: "Descripción 2"
  },
  {
    img: "https://images.unsplash.com/photo-1564988208918-44ed48c1b236?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNha2V8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    titulo: "Galletas Chips de Chocolate", 
    desc: "Descripción 3"
  }
]

  return (
    <div className="App">
    <Header titulo= {titulo} ></Header>
        
        <section className='container galeria'>
         <div className="row">
            <div className="col-sm-12 col-lg-4">
              <Card urlImg={data[0].img} nombre={data[0].titulo}></Card>
            </div>
            <div className="col-sm-12 col-lg-4">
              <Card urlImg={data[1].img} nombre={data[1].titulo}></Card>
            </div>
            <div className="col-sm-12 col-lg-4">
              <Card urlImg={data[2].img}nombre={data[2].titulo}></Card>
            </div>
            <div className="col-sm-12 col-lg-4">
              <Card urlImg={data[3].img}nombre={data[3].titulo}></Card>
            </div>
            <div className="col-sm-12 col-lg-4">
              <Card urlImg={data[4].img}nombre={data[4].titulo}></Card>
            </div>
            <div className="col-sm-12 col-lg-4">
              <Card urlImg={data[5].img}nombre={data[5].titulo}></Card>
            </div>
          </div>
        </section>
    <Footer></Footer>
    </div>
  )
}

export default App
