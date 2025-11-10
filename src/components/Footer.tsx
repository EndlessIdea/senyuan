import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>森源内装株式会社</h3>
            <div className="footer-details">
              <p>〒124-0011 東京都葛飾区四つ木4-13-16</p>
              <p>KーFLAT四つ木105</p>
              <p>Tel: 048-287-3118 | Fax: 048‐287‐3151</p>
              <p>Email: morimotonaisou@gmail.com</p>
            </div>
          </div>

          <div className="footer-business">
            <p>内装仕上工事、建具工事の請負及び施工</p>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2024 森源内装株式会社 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
