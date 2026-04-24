import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import Design1Classic from './designs/Design1Classic';
import DesignClassicEmerald from './designs/DesignClassicEmerald';
import DesignClassicBurgundy from './designs/DesignClassicBurgundy';
import DesignClassicSlate from './designs/DesignClassicSlate';
import Design2Minimalist from './designs/Design2Minimalist';
import Design3Elegant from './designs/Design3Elegant';
import Design4Modern from './designs/Design4Modern';
import Design5Executive from './designs/Design5Executive';
import Design6Editorial from './designs/Design6Editorial';
import './App.css';

type DesignOption = {
  key: string;
  name: string;
  sub: string;
  family: string;
  accent: string;
  palette: string[];
  render: () => React.ReactElement;
};

const designs: DesignOption[] = [
  {
    key: 'classic-navy',
    name: 'Classic Navy',
    sub: 'Deep Blue',
    family: 'Classic',
    accent: '#243b5a',
    palette: ['#243b5a', '#d7b777', '#f7f4ec'],
    render: () => <Design1Classic theme="navy" />,
  },
  {
    key: 'classic-emerald',
    name: 'Classic Emerald',
    sub: 'Forest Green',
    family: 'Classic',
    accent: '#38675b',
    palette: ['#38675b', '#c7a66d', '#f4f7f1'],
    render: () => <DesignClassicEmerald />,
  },
  {
    key: 'classic-burgundy',
    name: 'Classic Burgundy',
    sub: 'Warm Red',
    family: 'Classic',
    accent: '#874350',
    palette: ['#874350', '#d7a95f', '#fbf3ef'],
    render: () => <DesignClassicBurgundy />,
  },
  {
    key: 'classic-slate',
    name: 'Classic Slate',
    sub: 'Muted Gray',
    family: 'Classic',
    accent: '#56616d',
    palette: ['#56616d', '#b08b62', '#f5f5f2'],
    render: () => <DesignClassicSlate />,
  },
  {
    key: 'minimalist',
    name: 'Minimalist',
    sub: 'Clean & Airy',
    family: 'Minimal',
    accent: '#31716f',
    palette: ['#31716f', '#d8e4df', '#ffffff'],
    render: () => <Design2Minimalist />,
  },
  {
    key: 'elegant',
    name: 'Elegant',
    sub: 'Cream Serif',
    family: 'Serif',
    accent: '#8f654b',
    palette: ['#8f654b', '#e4cba7', '#fbf6ee'],
    render: () => <Design3Elegant />,
  },
  {
    key: 'modern',
    name: 'Modern',
    sub: 'Soft Cards',
    family: 'Modern',
    accent: '#365c7c',
    palette: ['#365c7c', '#96b7c0', '#eef6f6'],
    render: () => <Design4Modern />,
  },
  {
    key: 'executive',
    name: 'Executive',
    sub: 'Subtle Bands',
    family: 'Executive',
    accent: '#8b2635',
    palette: ['#8b2635', '#c49a6c', '#1f2d47'],
    render: () => <Design5Executive />,
  },
  {
    key: 'editorial',
    name: 'Editorial',
    sub: 'Magazine',
    family: 'Editorial',
    accent: '#a6553b',
    palette: ['#a6553b', '#242424', '#f0e4d3'],
    render: () => <Design6Editorial />,
  },
];

const getInitialScale = () => {
  if (typeof window === 'undefined') return 1;
  const chromeWidth = window.innerWidth > 920 ? 360 : 48;
  return Math.min(1, Math.max(0.34, (window.innerWidth - chromeWidth) / 756));
};

function App() {
  const [active, setActive] = useState<string>('classic-navy');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scale, setScale] = useState(getInitialScale);
  const stageRef = useRef<HTMLDivElement>(null);

  const current = designs.find(d => d.key === active) ?? designs[0];
  const currentIndex = designs.findIndex(d => d.key === current.key);

  const selectDesign = (key: string) => {
    setActive(key);
    setMenuOpen(false);
  };

  const selectByOffset = (offset: number) => {
    const next = (currentIndex + offset + designs.length) % designs.length;
    selectDesign(designs[next].key);
  };

  useLayoutEffect(() => {
    const recalc = () => {
      const stage = stageRef.current;
      if (!stage) return;
      const available = Math.max(0, stage.clientWidth - 48);
      const cvWidth = 756; // 20cm at 96dpi
      setScale(Math.min(1, available / cvWidth));
    };

    recalc();
    const frame = window.requestAnimationFrame(recalc);
    const observer = new ResizeObserver(recalc);
    if (stageRef.current) observer.observe(stageRef.current);
    window.addEventListener('resize', recalc);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', recalc);
    };
  }, [active, menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <div
      className="studio-shell"
      style={{ '--active-accent': current.accent } as CSSProperties}
    >
      <a className="skip-link" href="#cv-preview">Skip to CV preview</a>

      <header className="studio-topbar">
        <div className="studio-brand" aria-label="Shaked Ashur CV studio">
          <div className="studio-brand-mark" aria-hidden="true">SA</div>
          <div className="studio-brand-copy">
            <span className="studio-brand-title">Shaked Ashur</span>
            <span className="studio-brand-subtitle">CV Design Studio</span>
          </div>
        </div>

        <div className="studio-topbar-actions">
          <span className="studio-progress" aria-live="polite">
            {String(currentIndex + 1).padStart(2, '0')} / {String(designs.length).padStart(2, '0')}
          </span>
          <button className="studio-print" type="button" onClick={() => window.print()}>
            Print PDF
          </button>
          <button
            className="studio-menu-button"
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-controls="design-switcher"
            aria-expanded={menuOpen}
          >
            <span aria-hidden="true"></span>
            <span className="studio-menu-text">Designs</span>
          </button>
        </div>
      </header>

      <div className="studio-layout">
        <aside
          id="design-switcher"
          className={`design-drawer ${menuOpen ? 'open' : ''}`}
          aria-label="CV design options"
        >
          <div className="design-drawer-head">
            <div>
              <p className="section-kicker">Gallery</p>
              <h2>Designs</h2>
            </div>
            <button
              className="drawer-close"
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close design menu"
            >
              x
            </button>
          </div>

          <div className="design-list">
            {designs.map((design, index) => (
              <button
                key={design.key}
                type="button"
                className={`design-card sw-btn ${active === design.key ? 'active' : ''}`}
                style={{ '--card-accent': design.accent } as CSSProperties}
                onClick={() => selectDesign(design.key)}
                aria-pressed={active === design.key}
              >
                <span className="design-card-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="design-card-copy">
                  <span className="design-card-name">{design.name}</span>
                  <span className="design-card-meta">
                    <span>{design.family}</span>
                    <span>{design.sub}</span>
                  </span>
                </span>
                <span className="design-card-palette" aria-hidden="true">
                  {design.palette.map(color => (
                    <span
                      key={`${design.key}-${color}`}
                      className="palette-dot"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </span>
              </button>
            ))}
          </div>

          <div className="drawer-current">
            <span className="drawer-current-number">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="drawer-current-copy">
              <span>{current.name}</span>
              <span>{current.sub}</span>
            </span>
          </div>
        </aside>

        {menuOpen && (
          <button
            className="drawer-backdrop"
            type="button"
            aria-label="Close design menu"
            onClick={() => setMenuOpen(false)}
          ></button>
        )}

        <main className="workbench" id="cv-preview" tabIndex={-1}>
          <section className="preview-commandbar" aria-live="polite">
            <div className="preview-title-block">
              <p className="section-kicker">Preview</p>
              <h1>{current.name}</h1>
              <div className="preview-tags" aria-label="Selected design details">
                <span>{current.family}</span>
                <span>{current.sub}</span>
              </div>
            </div>

            <div className="preview-controls" aria-label="Design navigation">
              <button type="button" className="control-button" onClick={() => selectByOffset(-1)} aria-label="Previous design">
                <span aria-hidden="true">&lt;</span>
              </button>
              <span className="control-index">{String(currentIndex + 1).padStart(2, '0')}</span>
              <button type="button" className="control-button" onClick={() => selectByOffset(1)} aria-label="Next design">
                <span aria-hidden="true">&gt;</span>
              </button>
              <button className="mobile-designs-quick" type="button" onClick={() => setMenuOpen(true)}>
                Designs
              </button>
              <button className="control-print" type="button" onClick={() => window.print()}>
                Print PDF
              </button>
            </div>
          </section>

          <section className="canvas-area" aria-label="CV preview canvas">
            <div className="canvas-topline">
              <span>{current.name}</span>
              <span>20cm x 30cm</span>
            </div>
            <div className="cv-stage" ref={stageRef}>
              <div className="cv-frame-shell" style={{ width: 756 * scale, height: 1134 * scale }}>
                <div className="cv-frame" style={{ transform: `scale(${scale})` }}>
                  {current.render()}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
