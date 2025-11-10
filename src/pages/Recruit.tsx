import '../styles/pages.css'
import './Recruit.css'

const Recruit = () => {
  const positions = [
    {
      title: '内装工事スタッフ',
      requirements: [
        '内装工事の経験',
        '真面目に働ける方',
        'チームワークを大切にできる方',
        '車の運転資格（普通免許）',
      ],
      benefits: [
        '土日祝日対応可能な方向け',
        '残業あり（相談可）',
        '歩合制あり',
        '社会保険完備',
      ]
    },
    {
      title: '現場作業員',
      requirements: [
        '建築・工事現場の経験歓迎',
        '体力に自信のある方',
        '真面目に取り組める方',
      ],
      benefits: [
        '経験者優遇',
        '研修制度あり',
        '社会保険完備',
        '交通費支給',
      ]
    }
  ]

  return (
    <div className="recruit-page">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">求人情報</h1>
          <p className="page-subtitle">
            森源内装株式会社では、一緒に働いてくださる仲間を募集しています。
            経験者・未経験者問わず、やる気のある方を歓迎いたします。
          </p>
        </div>

        <section className="recruit-intro">
          <div className="recruit-card">
            <h2>こんな方を求めています</h2>
            <ul className="recruit-list">
              <li>✓ 建築・内装工事に興味のある方</li>
              <li>✓ 真面目にコツコツと働ける方</li>
              <li>✓ チームワークを大切にできる方</li>
              <li>✓ お客様の満足を第一に考えられる方</li>
              <li>✓ スキルアップに意欲的な方</li>
            </ul>
          </div>
        </section>

        <section className="positions-section">
          {positions.map((position, index) => (
            <div key={index} className="position-card">
              <h2 className="position-title">{position.title}</h2>
              
              <div className="position-details">
                <div className="position-section">
                  <h3>必要な要件</h3>
                  <ul>
                    {position.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="position-section">
                  <h3>待遇・福利厚生</h3>
                  <ul>
                    {position.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="position-cta">
                <button className="btn btn-primary">応募する</button>
                <p className="application-note">
                  まずはお気軽にお問合せください
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="application-section">
          <div className="application-card">
            <h2>応募方法</h2>
            <div className="application-steps">
              <div className="application-step">
                <div className="step-icon">📞</div>
                <h3>お電話で応募</h3>
                <p>048-287-3118</p>
                <p>営業時間：9:00 - 18:00</p>
              </div>
              <div className="application-step">
                <div className="step-icon">✉️</div>
                <h3>メールで応募</h3>
                <p>morimotonaisou@gmail.com</p>
                <p>件名に「求人応募」とご記載ください</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Recruit
