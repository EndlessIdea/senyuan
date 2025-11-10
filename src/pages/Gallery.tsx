import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/pages.css'
import './Gallery.css'

const Gallery = () => {
  const location = useLocation()
  const item1Ref = useRef<HTMLDivElement>(null)
  const item2Ref = useRef<HTMLDivElement>(null)
  const item3Ref = useRef<HTMLDivElement>(null)

  const galleryItems = [
    { id: 1, title: '内装例001', status: '更新待ち…', image: '/images/main.jpg', hasDetail: true, ref: item1Ref },
    { id: 2, title: '内装例002', status: '更新待ち…', image: null, hasDetail: false, ref: item2Ref },
    { id: 3, title: '内装例003', status: '更新待ち…', image: null, hasDetail: false, ref: item3Ref },
  ]

  useEffect(() => {
    const hash = location.hash
    if (hash) {
      const itemId = hash.replace('#item-', '')
      let targetRef: React.RefObject<HTMLDivElement> | null = null
      
      if (itemId === '1') {
        targetRef = item1Ref
      } else if (itemId === '2') {
        targetRef = item2Ref
      } else if (itemId === '3') {
        targetRef = item3Ref
      }
      
      if (targetRef?.current) {
        setTimeout(() => {
          targetRef?.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          })
        }, 100)
      }
    }
  }, [location])

  return (
    <div className="gallery-page">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">実績例ギャラリー</h1>
          <p className="page-subtitle">
            お客様に満足していただけるよう、丁寧に施工させていただいた実績例をご紹介いたします。
          </p>
        </div>

        <section className="gallery-section">
          <div className="gallery-grid-large">
            {galleryItems.map((item) => {
              if (item.hasDetail) {
                return (
                  <div key={item.id} ref={item.ref} id={`item-${item.id}`}>
                    <Link to={`/gallery/${item.id}`} className="gallery-item-large gallery-item-link">
                      <div className="gallery-image">
                        {item.image ? (
                          <img src={item.image} alt={item.title} className="gallery-image-content" />
                        ) : (
                          <div className="gallery-placeholder-large">
                            <span className="gallery-number">例 {item.id.toString().padStart(3, '0')}</span>
                          </div>
                        )}
                        <div className="gallery-overlay">
                          <h3>{item.title}</h3>
                        </div>
                      </div>
                      <div className="gallery-info">
                        <h4>{item.title}</h4>
                        <p>{item.status}</p>
                      </div>
                    </Link>
                  </div>
                )
              } else {
                return (
                  <div key={item.id} ref={item.ref} id={`item-${item.id}`} className="gallery-item-large">
                    <div className="gallery-image">
                      <div className="gallery-placeholder-large">
                        <span className="gallery-number">例 {item.id.toString().padStart(3, '0')}</span>
                      </div>
                      <div className="gallery-overlay">
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                    <div className="gallery-info">
                      <h4>{item.title}</h4>
                      <p>{item.status}</p>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-box">
            <h2>お気軽にお問合せください</h2>
            <p>
              より多くの実績例をご覧になりたい場合や、ご相談がございましたら、
              お気軽にお問合せください。お客様のご要望に合わせた提案をさせていただきます。
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Gallery
