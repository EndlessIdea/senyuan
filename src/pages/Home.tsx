import { Link } from 'react-router-dom'
import '../styles/pages.css'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            森源内装株式会社
          </h1>
          <p className="hero-subtitle">
            24時間いつでも施工可、土日、祝日施工可、出張可！
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary">
              お問合せ
            </Link>
          </div>
        </div>
      </section>

      <div className="page-container">
        <section className="features">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>ハウス内装</h3>
              <p>住宅のリフォームから内装工事まで、お客様のご要望に合わせて丁寧に施工いたします。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏪</div>
              <h3>店舗内装</h3>
              <p>店舗の内装工事や改装を承っております。営業妨害を最小限に抑えた効率的な施工を心がけています。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3>24時間対応</h3>
              <p>お客様のご都合に合わせて、24時間いつでも施工可能です。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>土日・祝日対応</h3>
              <p>平日お忙しいお客様にも対応できるよう、土日祝日も施工いたします。</p>
            </div>
          </div>
        </section>

        <section className="about-preview">
          <div className="about-content">
            <h2 className="section-title">森源内装株式会社について</h2>
            <div className="about-text">
              <p>
                既存の箇所のリフォームは1箇所からお気軽にご相談ください！
                もちろん全体の施工も承っております。お客様に気分を変えていただき、
                明日からも素敵な日々をお過ごしいただけるよう丁寧に施工させていただきます。
              </p>
              <p>
                リフォームについて細部までご要望をお持ちのお客様にも満足していただけるよう尽力いたします。
              </p>
            </div>
            <Link to="/about" className="btn btn-secondary">
              詳しく見る
            </Link>
          </div>
        </section>

        <section className="gallery-preview">
          <h2 className="section-title">実績例</h2>
          <div className="gallery-grid-three">
            <Link to="/gallery#item-1" className="gallery-item">
              <div className="gallery-image-wrapper">
                <img src="/images/main.jpg" alt="内装例001" className="gallery-image" />
              </div>
              <p>内装例001</p>
            </Link>
            <Link to="/gallery#item-2" className="gallery-item">
              <div className="gallery-placeholder">内装例002</div>
              <p>更新待ち…</p>
            </Link>
            <Link to="/gallery#item-3" className="gallery-item">
              <div className="gallery-placeholder">内装例003</div>
              <p>更新待ち…</p>
            </Link>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/gallery" className="btn">実績例ギャラリー</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
