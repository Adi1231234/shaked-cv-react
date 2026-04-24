import { useCv, useLang } from '../CvContext';
import './Design3Elegant.css';

export default function Design3Elegant() {
  const d = useCv();
  const lang = useLang();
  return (
    <div className="d3-page" dir={lang === 'he' ? 'rtl' : 'ltr'}>
      <header className="d3-header">
        <div className="d3-ornament">❦</div>
        <h1>{d.firstName} {d.lastName}</h1>
        <div className="d3-rule"><span></span><em>{d.role}</em><span></span></div>
        <div className="d3-contact">
          {d.contact.phone} &nbsp;·&nbsp; {d.contact.email} &nbsp;·&nbsp; {d.contact.location}
        </div>
        <div className="d3-contact">
          {d.contact.maritalStatus} &nbsp;·&nbsp; {d.contact.birthInfo}
        </div>
      </header>

      <section className="d3-section">
        <h2>{d.labels.profile}</h2>
        {d.profile.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </section>

      <section className="d3-section">
        <h2>{d.labels.education}</h2>
        {d.education.map((e, i) => (
          <div className="d3-item" key={i}>
            <div className="d3-item-head">
              <span className="d3-item-title">{e.place} {e.details}</span>
              <span className="d3-item-date">{e.date}</span>
            </div>
            {e.bullets.length > 0 && (
              <ul className="d3-list">
                {e.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section className="d3-section">
        <h2>{d.labels.workExperience}</h2>
        <ul className="d3-list">{d.workExperience.map(w => <li key={w}>{w}</li>)}</ul>
      </section>

      <section className="d3-section">
        <h2>{d.labels.militaryService}</h2>
        {d.military.map((j, i) => (
          <div className="d3-item" key={i}>
            <div className="d3-item-head">
              <span className="d3-item-title">{j.title}</span>
              <span className="d3-item-date">{j.date}</span>
            </div>
            <ul className="d3-list">
              {j.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <div className="d3-grid">
        <section className="d3-section">
          <h2>{d.labels.strengths}</h2>
          <ul className="d3-list">{d.strengths.map(s => <li key={s}>{s}</li>)}</ul>
        </section>
        <section className="d3-section">
          <h2>{d.labels.languages}</h2>
          <ul className="d3-list">{d.languages.map(l => <li key={l}>{l}</li>)}</ul>
          <h2 className="d3-sub">{d.labels.futurePlans}</h2>
          <ul className="d3-list">{d.futurePlants.map(p => <li key={p}>{p}</li>)}</ul>
        </section>
      </div>

      <section className="d3-section">
        <h2>{d.labels.volunteering}</h2>
        <ul className="d3-list">{d.volunteering.map(v => <li key={v}>{v}</li>)}</ul>
      </section>
    </div>
  );
}
