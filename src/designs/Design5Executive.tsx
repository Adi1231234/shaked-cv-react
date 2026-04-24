import { cvData } from '../cvData';
import './Design5Executive.css';

export default function Design5Executive() {
  const d = cvData;
  return (
    <div className="d5-page">
      <div className="d5-topbar"></div>
      <header className="d5-header">
        <h1>{d.firstName} {d.lastName}</h1>
        <div className="d5-role">{d.role}</div>
        <div className="d5-divider"></div>
        <div className="d5-contact">
          <div><span className="d5-label">Phone</span>{d.contact.phone}</div>
          <div><span className="d5-label">Email</span>{d.contact.email}</div>
          <div><span className="d5-label">Location</span>{d.contact.location}</div>
          <div><span className="d5-label">Status</span>{d.contact.maritalStatus}</div>
          <div><span className="d5-label">Origin</span>{d.contact.birthInfo}</div>
        </div>
      </header>

      <div className="d5-body">
        <section className="d5-section">
          <h2>Personal Profile</h2>
          <div className="d5-content">
            {d.profile.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>

        <section className="d5-section">
          <h2>Education</h2>
          <div className="d5-content">
            {d.education.map((e, i) => (
              <div className="d5-entry" key={i}>
                <div className="d5-entry-date">{e.date}</div>
                <div className="d5-entry-body">
                  <div className="d5-entry-title">{e.place}{e.details && <> {e.details}</>}</div>
                  {e.bullets.length > 0 && <ul>{e.bullets.map(b => <li key={b}>{b}</li>)}</ul>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="d5-section">
          <h2>Military Service</h2>
          <div className="d5-content">
            {d.military.map((j, i) => (
              <div className="d5-entry" key={i}>
                <div className="d5-entry-date">{j.date}</div>
                <div className="d5-entry-body">
                  <div className="d5-entry-title">{j.title}</div>
                  <ul>{j.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="d5-bottom-grid">
          <section className="d5-bottom-section">
            <h2>Strengths</h2>
            <ul className="d5-plain">{d.strengths.map(s => <li key={s}>{s}</li>)}</ul>
          </section>
          <section className="d5-bottom-section d5-bottom-split">
            <div>
              <h2>Languages</h2>
              <ul className="d5-plain">{d.languages.map(l => <li key={l}>{l}</li>)}</ul>
            </div>
            <div>
              <h2>Future Plants</h2>
              <ul className="d5-plain">{d.futurePlants.map(p => <li key={p}>{p}</li>)}</ul>
            </div>
          </section>

          <section className="d5-bottom-section">
            <h2>Work Experience</h2>
            <ul className="d5-plain">{d.workExperience.map(w => <li key={w}>{w}</li>)}</ul>
          </section>

          <section className="d5-bottom-section">
            <h2>Volunteering</h2>
            <ul className="d5-plain">{d.volunteering.map(v => <li key={v}>{v}</li>)}</ul>
          </section>
        </div>
      </div>
    </div>
  );
}
