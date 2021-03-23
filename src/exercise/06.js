/*
// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  //Criando um ref, um recurso de React para acessar conteudo de elementos de formulario
  const usernameEl = React.useRef()

  //criar um var de estado 
  //essa var mantem o conteudo mesmo que a pag seja atualizada 
  //para ler o conteudo da var de estado, podemos acessala diretamente
  //para acessala usamos set

  //error e a var de estado
  //seterror função da var de estado
  //a função useState aceita um parametro com valor inicial da var de estado
  //ou seja nesse caso, error tem um valor de estado inicial vazio
  const [msg, setMsg] = React.useState('')
  const [username, setUsername] =  React.useState('')


function handleSubmit(event){

    event.preventDefault()

    //const username = document.getElementById('username').value
    //const username = document.querySelector('#username').value
    const username = usernameEL.current.value
    onSubmitUsername(username)
   }

   function handleChange(event){
       //Capturando o valor do input 
       const val = event.target.value

       //o input sera igual se o conteudo ficar igual a se mesmo em minusculo 
       const isValid = (val === val.toLowerCase())

       //Atualizando o estado
       setMsg(isValid ? '' : 'O valor informado deve estar todo em minusculas')
   }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        {/* Associando o ref usernameEl ao input }
        <input ref={usernameEL} id="username" type='text' onChange={handleChange}/>
      </div>
        {/* o conteudo informado deve estar em minuscula }
      <div style = {{color: 'red'}}>{msg}</div>
      <button type="submit">Submit</button>
    </form>
  )

  }


function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

 
export default App
*/