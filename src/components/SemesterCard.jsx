function SemesterCard({ title, data }) {
  return (
    <div style={{
      backgroundColor: "white",
      padding: "15px",
      width: "300px",
      borderRadius: "8px",
      boxShadow: "0 0 5px rgba(0,0,0,0.1)"
    }}>
      <h4>{title}</h4>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr><td>UT 1</td><td>{data.ut1}</td></tr>
          <tr><td>UT 2</td><td>{data.ut2}</td></tr>
          <tr><td>IAT 1</td><td>{data.iat1}</td></tr>
          <tr><td>IAT 2</td><td>{data.iat2}</td></tr>
          <tr><td><b>Result</b></td><td><b>{data.result}</b></td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default SemesterCard
