import { useCv, useLang } from '../CvContext';
import './Design4Modern.css';

export default function Design4Modern() {
  const d = useCv();
  const lang = useLang();
  return (
    <div className="d4-page" dir={lang === 'he' ? 'rtl' : 'ltr'}>
      <header className="d4-hero">
        <h1>{d.firstName} {d.lastName}</h1>
        <div className="d4-role">{d.role}</div>
        <div className="d4-contact-grid">
          <span>📞 {d.contact.phone}</span>
          <span>✉ {d.contact.email}</span>
          <span>📍 {d.contact.location}</span>
          <span>· {d.contact.maritalStatus}</span>
          <span>· {d.contact.birthInfo}</span>
        </div>
      </header>

      <section className="d4-card d4-profile">
        <h2>{d.labels.aboutMe}</h2>
        {d.profile.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </section>

      <div className="d4-grid">
        <section className="d4-card">
          <h2>{d.labels.strengths}</h2>
          <ul className="d4-chips">
            {d.strengths.map(s => <li key={s}>{s}</li>)}
          </ul>
        </section>
        <section className="d4-card">
          <h2>{d.labels.languages}</h2>
          <ul className="d4-chips">
            {d.languages.map(l => <li key={l}>{l}</li>)}
          </ul>
          <h2 className="d4-h2-gap">{d.labels.futurePlans}</h2>
          <ul className="d4-plain">
            {d.futurePlants.map(p => <li key={p}>{p}</li>)}
          </ul>
        </section>
      </div>

      <section className="d4-card">
        <h2>{d.labels.education}</h2>
        <div className="d4-timeline">
          {d.education.map((e, i) => (
            <div className="d4-tl-item" key={i}>
              <div className="d4-tl-dot"></div>
              <div className="d4-tl-date">{e.date}</div>
              <div className="d4-tl-body">
                <strong>{e.place}</strong> {e.details}
                {e.bullets.length > 0 && <ul>{e.bullets.map(b => <li key={b}>{b}</li>)}</ul>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="d4-card">
        <h2>{d.labels.workExperience}</h2>
        <ul className="d4-chips">
          {d.workExperience.map(w => <li key={w}>{w}</li>)}
        </ul>
      </section>

      <section className="d4-card">
        <h2>{d.labels.militaryService}</h2>
        <div className="d4-timeline">
          {d.military.map((j, i) => (
            <div className="d4-tl-item" key={i}>
              <div className="d4-tl-dot"></div>
              <div className="d4-tl-date">{j.date}</div>
              <div className="d4-tl-body">
                <strong>{j.title}</strong>
                <ul>{j.bullets.map(b => <li key={b}>{b}</li>)}</ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="d4-card">
        <h2>{d.labels.volunteering}</h2>
        <ul className="d4-chips">
          {d.volunteering.map(v => <li key={v}>{v}</li>)}
        </ul>
      </section>
    </div>
  );
}
