import "../styles/components/qrcode.css"

function Qrcode() {
  return (
    <section className="qrcode">
      <div className="container">
        <div className="card">
          <div className="card-image">
            <img src="qrcode.png" alt="QR-code component" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Improve your front-end skills by building projects</h5>
            <p className="card-info">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qrcode;