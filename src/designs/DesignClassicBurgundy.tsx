import { useCv, useLang } from '../CvContext';
import './DesignClassicBurgundy.css';

export default function DesignClassicBurgundy() {
  const d = useCv();
  const lang = useLang();

  return (
    <div className="d1b-page" dir={lang === 'he' ? 'rtl' : 'ltr'}>
      <header className="d1b-header">
        <div>
          <div className="d1b-kicker">{d.labels.curriculumVitae}</div>
          <h1>{d.firstName} {d.lastName}</h1>
          <div className="d1b-role">{d.role}</div>
        </div>
        <div className="d1b-contact">
          <span>{d.contact.phone}</span>
          <span>{d.contact.email}</span>
          <span>{d.contact.location}</span>
          <span>{d.contact.maritalStatus}</span>
          <span>{d.contact.birthInfo}</span>
        </div>
      </header>

      <section className="d1b-profile">
        <h2>{d.labels.profile}</h2>
        <div>
          {d.profile.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <div className="d1b-columns">
        <main>
          <section className="d1b-section">
            <h2>{d.labels.education}</h2>
            {d.education.map((e, i) => (
              <article className="d1b-entry" key={i}>
                <div className="d1b-date">{e.date}</div>
                <div>
                  <h3>{e.place}{e.details && <> {e.details}</>}</h3>
                  {e.bullets.length > 0 && <ul>{e.bullets.map(b => <li key={b}>{b}</li>)}</ul>}
                </div>
              </article>
            ))}
          </section>

          <section className="d1b-section">
            <h2>{d.labels.workExperience}</h2>
            <ul className="d1b-work-list">{d.workExperience.map(w => <li key={w}>{w}</li>)}</ul>
          </section>

          <section className="d1b-section">
            <h2>{d.labels.militaryService}</h2>
            {d.military.map((j, i) => (
              <article className="d1b-entry d1b-military" key={i}>
                <div className="d1b-date">{j.date}</div>
                <div>
                  <h3>{j.title}</h3>
                  <ul>{j.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                </div>
              </article>
            ))}
          </section>
        </main>

        <aside className="d1b-aside">
          <section>
            <h2>{d.labels.strengths}</h2>
            <ul>{d.strengths.map(s => <li key={s}>{s}</li>)}</ul>
          </section>
          <section className="d1b-mini-grid">
            <div>
              <h2>{d.labels.languages}</h2>
              <ul>{d.languages.map(l => <li key={l}>{l}</li>)}</ul>
            </div>
            <div>
              <h2>{d.labels.futurePlans}</h2>
              <ul>{d.futurePlants.map(p => <li key={p}>{p}</li>)}</ul>
            </div>
          </section>
          <section>
            <h2>{d.labels.volunteering}</h2>
            <ul>{d.volunteering.map(v => <li key={v}>{v}</li>)}</ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
