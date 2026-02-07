import { useSlides } from './hooks/useSlides';
import { slides } from './components/slides';
import './styles/index.css';

function App() {
  const { currentSlide, goToSlide, progress } = useSlides(slides.length);
  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div 
        className="progress-bar" 
        style={{ width: `${progress}%` }}
      ></div>
      
      {/* Presenter Badge */}
      <div className="presenter-badge">
        <i className="fas fa-user-tie mr-2" style={{ color: '#D7282F' }}></i>
        Tonkla | 6 Feb 2026 | 10:00 AM
      </div>
      
      {/* Navigation Dots */}
      <div className="nav-dots">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
      
      {/* Keyboard Hint */}
      <div className="keyboard-hint">
        <i className="fas fa-keyboard mr-2"></i>
        ← → หรือ ลูกศรเพื่อเปลี่ยนหน้า | ESC สำหรับ fullscreen
      </div>
      
      {/* Current Slide */}
      <div className="min-h-screen">
        <CurrentSlideComponent />
      </div>
    </div>
  );
}

export default App;