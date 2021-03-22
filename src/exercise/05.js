// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
//const smallBox = <div className = "box box--small" style= {{backgroundColor: 'lightblue', fontStyle:'italic'}} >small lightblue box</div>
//const mediumBox = <div className = "box box--medium" style= {{backgroundColor: 'pink', fontStyle:'italic'}}>medium pink box</div>
//const largeBox = <div className = "box box--large" style= {{backgroundColor: 'orange', fontStyle:'italic'}}>large orange box</div>

function Box ({color = 'lightblue', style = {}, size = 'medium', ...props}){
 const className = 'box box--' + size //concatenação 
 return <div className={className} style={{fontStyle: 'italic', backgroundColor: color, ...style}}
 {...props}></div>
}

function App() {
  return (
    <div>
        {/* em jsx estilos css sao passados como objetos do elemento 
        o nome dos atributos em css escritos em kebab-case tornase 
        as propriedades do objeto mas escrito em camelCase */}
        {/*chaves de fora são interpolação - valor onde escrever o valor de uma var */}
        {/* chave de dentro limites de objetos } */}
        <div style={{ marginTop: '20px', backgroundColor: 'blue'} }>Teste</div>
       <Box size="small" style={{backgroundColor: 'lightblue'}}>Smal Light Blue Box </Box>
       <Box style={{backgroundColor: 'pink'}}>Medium Pink</Box>
       <Box size="large" style={{backgroundColor: 'orange'}}>Large Orange </Box>
       <Box />
    </div>
  )
}

export default App
