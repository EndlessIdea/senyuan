import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'ホーム' },
    { path: '/about', label: '会社概要' },
    { path: '/services', label: '業務内容' },
    { path: '/gallery', label: '実績例ギャラリー' },
    { path: '/contact', label: 'お問合せ' },
    { path: '/recruit', label: '求人情報' },
  ]

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <div className="company-info">
            <div className="info-item">
              <span className="icon">📞</span>
              <span>03-6662-8729</span>
            </div>
            <div className="info-item">
              <span className="icon">✉️</span>
              <span>morimotonaisou@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="icon">🕒</span>
              <span>9:00 - 17:00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-container">
        <div className="container">
          <div className="logo">
            <h1>森源内装株式会社</h1>
          </div>
          <nav className="navbar">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${
                      location.pathname === item.path ? 'active' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
