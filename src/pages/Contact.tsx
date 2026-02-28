import '../styles/pages.css'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">お問合せ</h1>
          <p className="page-subtitle">
            お問合せ・ご相談はお気軽にご連絡ください。24時間対応、出張無料見積もりを承っております。
          </p>
        </div>

        <section className="contact-info-section">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>電話でのお問合せ</h3>
              <p className="contact-number">03-6662-8729</p>
              <p className="contact-hours">24時間対応</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>メールでのお問合せ</h3>
              <p className="contact-email">morimotonaisou@gmail.com</p>
              <p className="contact-note">お返事は営業時間内にさせていただきます</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🏢</div>
              <h3>所在地</h3>
              <p className="contact-address">
                〒124-0011<br />
                東京都葛飾区四つ木4-13-16<br />
                KーFLAT四つ木105
              </p>
              <p className="contact-note">出張範囲：関東全域</p>
            </div>
          </div>
        </section>

        <section className="contact-hours-section">
          <div className="hours-card">
            <h3>営業時間・対応時間</h3>
            <div className="hours-content">
              <div className="hours-item">
                <span className="hours-label">通常営業時間</span>
                <span className="hours-time">9:00 - 18:00</span>
              </div>
              <div className="hours-item">
                <span className="hours-label">対応可能時間</span>
                <span className="hours-time">24時間対応可</span>
              </div>
              <div className="hours-item">
                <span className="hours-label">土日祝日</span>
                <span className="hours-time">施工可</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
