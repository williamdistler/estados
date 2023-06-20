import { useState } from 'react'
import './dados.css'

export function Dados() {
  const [nome, setNome] = useState('William')
  const [idade, setIdade] = useState(21)

  function crescer() {
    const ultimaLetra = nome.slice(-1)
    setNome(nome + ultimaLetra)
  }

  function aumentar() {
    setIdade(idade + 2)
  }

  return (
    <div>
      <h1>Dados</h1>
      <span>Nome: {nome}</span><br />
      <span>Idade: {idade}</span><br />
      <button onClick={crescer}>Crescer</button>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  )
}

// William Distler Neves RA: 019237