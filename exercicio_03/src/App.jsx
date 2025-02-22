function App() {
  const containerStyles = {width: 1280, margin: 'auto', border: '1px solid black', backgroundColor: "#EEE",
    borderRadius: 8, padding: 12, textAlign: 'center'};
  return (
    <div style={containerStyles}>
      <h2>Profissionais de saúde</h2>
      <div style={{margin: 8, border: '1px solid #DDD', borderRadius: 8, padding: 8,
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
      </div>
    </div>
  )
}

export default App
