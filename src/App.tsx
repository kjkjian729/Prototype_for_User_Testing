import { useState } from "react"

const assetPath = `${import.meta.env.BASE_URL}assets`

type RegistrationMethod = {
  id: string
  title: string
  description: string
  image: string
}

const registrationMethods: RegistrationMethod[] = [
  {
    id: "refrigerator",
    title: "냉장고 칸 촬영",
    description: "냉장고 안을 촬영해 여러 식재료를 등록해요",
    image: `${assetPath}/refrigerator.png`,
  },
  {
    id: "camera",
    title: "상품 직접 촬영",
    description: "상품을 촬영해 식재료 정보를 간편하게 등록해요",
    image: `${assetPath}/camera.png`,
  },
  {
    id: "receipt",
    title: "영수증 촬영",
    description: "영수증을 촬영해 식재료를 간편하게 등록해요",
    image: `${assetPath}/receipt.png`,
  },
  {
    id: "manual",
    title: "직접입력",
    description: "필요한 정보를 직접 입력해 식재료를 등록해요",
    image: `${assetPath}/manual-entry.png`,
  },
]

const navigationItems = [
  { label: "홈", icon: "nav-home.svg" },
  { label: "냉장고", icon: "nav-fridge.svg" },
  { label: "등록", icon: "nav-add-active.svg", active: true },
  { label: "레시피", icon: "nav-recipe.svg" },
  { label: "마이", icon: "nav-profile.svg" },
]

function App() {
  const [selectedMethod, setSelectedMethod] = useState<RegistrationMethod | null>(
    null,
  )
  const [message, setMessage] = useState("")

  const startRegistration = () => {
    if (!selectedMethod) return
    setMessage(`${selectedMethod.title} 방식으로 등록을 시작합니다.`)
  }

  return (
    <div className="app-shell">
      <main className="page-content">
        <div className="status-bar" aria-label="상태 표시줄">
          <span className="status-time">9:41</span>
          <div className="status-icons" aria-hidden="true">
            <span className="signal-bars">
              <span />
              <span />
              <span />
              <span />
            </span>
            <img
              className="wifi-icon"
              src={`${assetPath}/status-wifi.svg`}
              alt=""
            />
            <span className="battery-icon">
              <span />
            </span>
          </div>
        </div>

        <header className="top-header">
          <h1>식재료 등록</h1>
        </header>

        <section className="banner" aria-labelledby="notice-title">
          <h2 id="notice-title">오늘 꼭 챙겨야 할 재료가 있어요</h2>
          <p>
            소비기한이 지난 재료는 상태를 확인하고,
            <br />
            임박한 재료로 메뉴를 추천받아 보세요.
          </p>
        </section>

        <section className="registration-section" aria-labelledby="method-title">
          <h2 id="method-title">식재료 기록 방식</h2>
          <div className="method-grid">
            {registrationMethods.map((method) => {
              const isSelected = selectedMethod?.id === method.id

              return (
                <button
                  type="button"
                  className="method-card"
                  data-selected={isSelected}
                  aria-pressed={isSelected}
                  onClick={() => {
                    setSelectedMethod(method)
                    setMessage("")
                  }}
                  key={method.id}
                >
                  <img src={method.image} alt="" className="method-thumbnail" />
                  <span className="method-title">{method.title}</span>
                  <span className="method-description">
                    {method.description}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        <section className="action-section" aria-label="등록 진행">
          <button
            type="button"
            className="action-button"
            disabled={!selectedMethod}
            onClick={startRegistration}
          >
            {selectedMethod
              ? "등록 시작하기"
              : "등록 방식을 선택해주세요"}
          </button>
          <p className="result-message" aria-live="polite">
            {message}
          </p>
        </section>
      </main>

      <nav className="bottom-navigation" aria-label="주요 메뉴">
        {navigationItems.map((item) => (
          <button
            type="button"
            className="navigation-item"
            data-active={item.active ?? false}
            aria-current={item.active ? "page" : undefined}
            key={item.label}
          >
            <span className="navigation-icon">
              <img src={`${assetPath}/${item.icon}`} alt="" />
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App
