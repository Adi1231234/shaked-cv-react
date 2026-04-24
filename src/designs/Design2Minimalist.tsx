import { cvData } from '../cvData';
import './Design2Minimalist.css';

export default function Design2Minimalist() {
  const d = cvData;
  return (
    <div className="d2-page">
      <header className="d2-header">
        <h1>{d.firstName} {d.lastName}</h1>
        <div className="d2-role">{d.role}</div>
        <div className="d2-contact">
          <span>{d.contact.phone}</span>
          <span className="d2-sep">·</span>
          <span>{d.contact.email}</span>
          <span className="d2-sep">·</span>
          <span>{d.contact.location}</span>
          <span className="d2-sep">·</span>
          <span>{d.contact.maritalStatus}</span>
          <span className="d2-sep">·</span>
          <span>{d.contact.birthInfo}</span>
        </div>
      </header>

      <section className="d2-section">
        <h2>Personal Profile</h2>
        {d.profile.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </section>

      <section className="d2-section">
        <h2>Education</h2>
        {d.education.map((e, i) => (
          <div className="d2-row" key={i}>
            <div className="d2-row-date">{e.date}</div>
            <div className="d2-row-body">
              <div className="d2-row-title">{e.place} {e.details}</div>
              {e.bullets.length > 0 && (
                <ul>{e.bullets.map(b => <li key={b}>{b}</li>)}</ul>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="d2-section">
        <h2>Military Service</h2>
        {d.military.map((j, i) => (
          <div className="d2-row" key={i}>
            <div className="d2-row-date">{j.date}</div>
            <div className="d2-row-body">
              <div className="d2-row-title">{j.title}</div>
              <ul>{j.bullets.map(b => <li key={b}>{b}</li>)}</ul>
            </div>
          </div>
        ))}
      </section>

      <section className="d2-section d2-two-col">
        <div>
          <h2>Strengths</h2>
          <ul className="d2-plain">{d.strengths.map(s => <li key={s}>{s}</li>)}</ul>
        </div>
        <div>
          <h2>Languages</h2>
          <ul className="d2-plain">{d.languages.map(l => <li key={l}>{l}</li>)}</ul>
          <h2 className="d2-h2-spaced">Future Plants</h2>
          <ul className="d2-plain">{d.futurePlants.map(p => <li key={p}>{p}</li>)}</ul>
        </div>
      </section>

      <section className="d2-section">
        <h2>Work Experience</h2>
        <ul className="d2-plain">{d.workExperience.map(w => <li key={w}>{w}</li>)}</ul>
      </section>

      <section className="d2-section">
        <h2>Volunteering</h2>
        <ul className="d2-plain">{d.volunteering.map(v => <li key={v}>{v}</li>)}</ul>
      </section>
    </div>
  );
}
