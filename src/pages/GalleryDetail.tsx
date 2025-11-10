import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/pages.css'
import './GalleryDetail.css'

const GalleryDetail = () => {
  const navigate = useNavigate()
  
  // 所有图片文件名列表（按顺序排列）
  const imageFiles = [
    'main.jpg',
    '171761490270_.pic.jpg',
    '181761490271_.pic.jpg',
    '191761490271_.pic.jpg',
    '201761490272_.pic.jpg',
    '211761490273_.pic.jpg',
    '221761490274_.pic.jpg',
    '231761490277_.pic.jpg',
    '241761490278_.pic.jpg',
    '251761490279_.pic.jpg',
    '261761490279_.pic.jpg',
    '271761490280_.pic.jpg',
    '281761490281_.pic.jpg',
    '291761490282_.pic.jpg',
    '301761490283_.pic.jpg',
  ]

  const [selectedIndex, setSelectedIndex] = useState(0)

  const currentImage = imageFiles[selectedIndex]

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : imageFiles.length - 1))
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < imageFiles.length - 1 ? prev + 1 : 0))
  }

  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <div className="gallery-detail-page">
      <div className="page-container">
        <div className="breadcrumb">
          <span onClick={() => navigate('/')}>ホーム</span>
          <span className="separator">/</span>
          <span onClick={() => navigate('/gallery')}>実績例ギャラリー</span>
        </div>

        <div className="detail-header">
          <h1 className="detail-title">内装例001</h1>
          <button className="back-button" onClick={() => navigate('/gallery')}>
            ← 戻る
          </button>
        </div>

        <div className="detail-content">
          <div className="main-image-container">
            <button className="nav-button nav-button-left" onClick={handlePrevious}>
              ‹
            </button>
            <div className="main-image-wrapper">
              <img 
                src={`/images/${currentImage}`} 
                alt={`内装例001 - ${currentImage}`}
                className="main-image"
              />
            </div>
            <button className="nav-button nav-button-right" onClick={handleNext}>
              ›
            </button>
            <div className="image-counter">
              {selectedIndex + 1} / {imageFiles.length}
            </div>
          </div>

          <div className="image-info">
            <h2>内装例001</h2>
            <p className="info-text">物件：足立区 3DK マンション</p>
          </div>

          <div className="thumbnail-section">
            <h3>詳細</h3>
            <div className="thumbnail-grid">
              {imageFiles.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail-item ${index === selectedIndex ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img 
                    src={`/images/${image}`} 
                    alt={`サムネイル ${index + 1}`}
                    className="thumbnail-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryDetail

