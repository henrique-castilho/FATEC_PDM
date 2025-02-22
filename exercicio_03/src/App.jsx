import './styles.css'
function App() {
  const containerStyles = {width: 1280, margin: 'auto', border: '1px solid black', backgroundColor: "#EEE",
    borderRadius: 8, padding: 12, textAlign: 'center'};
  const docNames = {doc1: 'José da Silva', doc2: 'Maria da Silva', doc3: "Jaqueline Mendes"}
  return (
    <div style={containerStyles}>
      <h2>Profissionais de saúde</h2>
      <div style={{margin: 8, border: '1px solid #DDD', borderRadius: 8, padding: 8,
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <div className="profissional">
          <p>{docNames.doc1}</p>
        </div>
        <div className="profissional">
          <p>{docNames.doc2}</p>
        </div>
        <div className='profissional'>
          <p>{docNames.doc3}</p>
        </div>
      </div>
    </div>
  )
}

export default App
