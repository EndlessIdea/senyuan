import '../styles/pages.css'
import './Services.css'

const Services = () => {
  const services = [
    {
      title: 'ハウス内装',
      icon: '🏠',
      description: '住宅のリフォームから内装工事まで、お客様のライフスタイルに合わせた快適な空間を創造します。',
      features: [
        '1箇所からの部分リフォームに対応',
        '全体の内装工事も承ります',
        'お客様のご要望を細部まで反映',
        '丁寧な施工で品質を保証'
      ]
    },
    {
      title: '店舗内装',
      icon: '🏪',
      description: '店舗の内装工事や改装を承っております。営業に配慮した効率的な施工を心がけています。',
      features: [
        '営業妨害を最小限に抑えた施工',
        '工事期間を短縮',
        'デザイン性と機能性を両立',
        'アフターサポートも充実'
      ]
    },
    {
      title: '24時間対応',
      icon: '⏰',
      description: 'お客様のご都合に合わせて、24時間いつでも施工に対応いたします。',
      features: [
        '深夜・早朝の施工も可能',
        'お客様のライフスタイルに合わせて対応',
        '緊急のリフォームにも迅速に対応',
        'ご都合の良い時間に施工'
      ]
    },
    {
      title: '土日・祝日対応',
      icon: '📅',
      description: '平日お忙しいお客様にも対応できるよう、土日祝日も施工いたします。',
      features: [
        '週末のリフォームに対応',
        '祝日の施工も承ります',
        '平日お仕事の方向けのサービス',
        'ライフスタイルに合わせた柔軟な対応'
      ]
    }
  ]

  return (
    <div className="services-page">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">業務内容</h1>
          <p className="page-subtitle">
            森源内装株式会社は、建築工事から内装工事まで幅広く対応しています。
            お客様のご要望に柔軟に対応し、高品質な施工を提供いたします。
          </p>
        </div>

        <section className="services-section">
          {services.map((service, index) => (
            <div key={index} className="service-card-large">
              <div className="service-header">
                <div className="service-icon-large">{service.icon}</div>
                <h2>{service.title}</h2>
              </div>
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                <h4>主な特徴</h4>
                <ul>
                  {service.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <section className="process-section">
          <h2 className="section-title">施工の流れ</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>お問合せ</h3>
              <p>お電話またはメールでお気軽にお問合せください。</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>現場見積もり</h3>
              <p>現場にお伺いし、お客様のご要望をお伺いします。</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>お見積もり</h3>
              <p>詳細なお見積もりをご提示いたします。</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>施工</h3>
              <p>ご納得いただいた上で、丁寧に施工いたします。</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>完了・アフター</h3>
              <p>施工完了後も、アフターサポートを充実させています。</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services
