import { cvData } from '../cvData';
import './DesignClassicSlate.css';

export default function DesignClassicSlate() {
  const d = cvData;

  return (
    <div className="d1s-page">
      <header className="d1s-header">
        <div className="d1s-name">
          <span>{d.firstName}</span>
          <span>{d.lastName}</span>
        </div>
        <div className="d1s-role">{d.role}</div>
      </header>

      <div className="d1s-contact">
        <span>{d.contact.phone}</span>
        <span>{d.contact.email}</span>
        <span>{d.contact.location}</span>
        <span>{d.contact.maritalStatus}</span>
        <span>{d.contact.birthInfo}</span>
      </div>

      <section className="d1s-profile">
        <h2>Personal Profile</h2>
        <div>
          {d.profile.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <div className="d1s-grid">
        <main className="d1s-main">
          <section>
            <h2>Education</h2>
            {d.education.map((e, i) => (
              <article className="d1s-row" key={i}>
                <div className="d1s-date">{e.date}</div>
                <div>
                  <h3>{e.place}{e.details && <> {e.details}</>}</h3>
                  {e.bullets.length > 0 && <ul>{e.bullets.map(b => <li key={b}>{b}</li>)}</ul>}
                </div>
              </article>
            ))}
          </section>

          <section>
            <h2>Military Service</h2>
            {d.military.map((j, i) => (
              <article className="d1s-row" key={i}>
                <div className="d1s-date">{j.date}</div>
                <div>
                  <h3>{j.title}</h3>
                  <ul>{j.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                </div>
              </article>
            ))}
          </section>
        </main>

        <aside className="d1s-side">
          <section>
            <h2>Strengths</h2>
            <ul>{d.strengths.map(s => <li key={s}>{s}</li>)}</ul>
          </section>
          <section>
            <h2>Languages</h2>
            <ul>{d.languages.map(l => <li key={l}>{l}</li>)}</ul>
          </section>
          <section>
            <h2>Future Plants</h2>
            <ul>{d.futurePlants.map(p => <li key={p}>{p}</li>)}</ul>
          </section>
          <section>
            <h2>Work Experience</h2>
            <ul>{d.workExperience.map(w => <li key={w}>{w}</li>)}</ul>
          </section>
          <section>
            <h2>Volunteering</h2>
            <ul>{d.volunteering.map(v => <li key={v}>{v}</li>)}</ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
