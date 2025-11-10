import '../styles/pages.css'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">会社概要</h1>
        </div>

        <section className="company-info-section">
          <div className="info-table">
            <div className="info-row">
              <div className="info-label">会社名</div>
              <div className="info-value">森源内装株式会社</div>
            </div>
            <div className="info-row">
              <div className="info-label">所在地</div>
              <div className="info-value">
                〒124-0011 東京都葛飾区四つ木4-13-16 KーFLAT四つ木105
              </div>
            </div>
            <div className="info-row">
              <div className="info-label">電話番号</div>
              <div className="info-value">048-287-3118</div>
            </div>
            <div className="info-row">
              <div className="info-label">FAX</div>
              <div className="info-value">048‐287‐3151</div>
            </div>
            <div className="info-row">
              <div className="info-label">メール</div>
              <div className="info-value">morimotonaisou@gmail.com</div>
            </div>
            <div className="info-row">
              <div className="info-label">営業時間</div>
              <div className="info-value">9:00 - 18:00</div>
            </div>
            <div className="info-row">
              <div className="info-label">対応時間</div>
              <div className="info-value">24時間対応可</div>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <h2 className="section-title">会社理念</h2>
          <div className="mission-content">
            <p>
              森源内装株式会社は、「安心・快適・永続」をテーマに、
              人と空間をつなぐ価値ある内装づくりを目指しています。
            </p>
            <p>
              私たちは、一つひとつの壁、一つひとつの仕上げに心を込め、
              丁寧な施工と誠実な対応で、お客様の理想をかたちにします。
            </p>
            <p>
              壁を変えることは、暮らしを変えること。
              森源内装は、確かな技術と温かい想いで、
              お客様の日常に新しい彩りと心地よさをお届けします。
            </p>
          </div>
        </section>

        <section className="services-preview">
          <h2 className="section-title">対応業務</h2>
          <div className="services-list">
            <div className="service-item">内装仕上工事の請負及び施工</div>
            <div className="service-item">建具工事の請負及び施工</div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
