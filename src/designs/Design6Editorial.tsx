import { useCv, useLang } from '../CvContext';
import './Design6Editorial.css';

export default function Design6Editorial() {
  const d = useCv();
  const lang = useLang();
  return (
    <div className="d6-page" dir={lang === 'he' ? 'rtl' : 'ltr'}>
      <header className="d6-header">
        <div className="d6-header-left">
          <div className="d6-eyebrow">{d.labels.curriculumVitae}</div>
          <h1>{d.firstName} {d.lastName}</h1>
          <div className="d6-role">{d.role}</div>
        </div>
        <div className="d6-header-right">
          <div className="d6-contact-item"><span>T</span>{d.contact.phone}</div>
          <div className="d6-contact-item"><span>E</span>{d.contact.email}</div>
          <div className="d6-contact-item"><span>A</span>{d.contact.location}</div>
          <div className="d6-contact-item"><span>S</span>{d.contact.maritalStatus}</div>
          <div className="d6-contact-item"><span>B</span>{d.contact.birthInfo}</div>
        </div>
      </header>

      <section className="d6-profile-section">
        <div className="d6-section-num">01</div>
        <div className="d6-section-title">{d.labels.profile}</div>
        <div className="d6-profile-body">
          {d.profile.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <div className="d6-two-cols">
        <div className="d6-col-left">
          <section className="d6-section">
            <div className="d6-section-num">02</div>
            <div className="d6-section-title">{d.labels.education}</div>
            {d.education.map((e, i) => (
              <div className="d6-entry" key={i}>
                <div className="d6-entry-date">{e.date}</div>
                <div className="d6-entry-title">{e.place}{e.details && <> {e.details}</>}</div>
                {e.bullets.length > 0 && (
                  <ul>{e.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                )}
              </div>
            ))}
          </section>

          <section className="d6-section">
            <div className="d6-section-num">03</div>
            <div className="d6-section-title">{d.labels.workExperience}</div>
            <ul className="d6-plain">{d.workExperience.map(w => <li key={w}>{w}</li>)}</ul>
          </section>

          <section className="d6-section">
            <div className="d6-section-num">04</div>
            <div className="d6-section-title">{d.labels.militaryService}</div>
            {d.military.map((j, i) => (
              <div className="d6-entry" key={i}>
                <div className="d6-entry-date">{j.date}</div>
                <div className="d6-entry-title">{j.title}</div>
                <ul>{j.bullets.map(b => <li key={b}>{b}</li>)}</ul>
              </div>
            ))}
          </section>
        </div>

        <div className="d6-col-right">
          <section className="d6-section">
            <div className="d6-section-num">05</div>
            <div className="d6-section-title">{d.labels.strengths}</div>
            <ul className="d6-plain">{d.strengths.map(s => <li key={s}>{s}</li>)}</ul>
          </section>

          <section className="d6-section">
            <div className="d6-section-num">06</div>
            <div className="d6-section-title">{d.labels.languages}</div>
            <ul className="d6-plain">{d.languages.map(l => <li key={l}>{l}</li>)}</ul>
          </section>

          <section className="d6-section">
            <div className="d6-section-num">07</div>
            <div className="d6-section-title">{d.labels.futurePlans}</div>
            <ul className="d6-plain">{d.futurePlants.map(p => <li key={p}>{p}</li>)}</ul>
          </section>

          <section className="d6-section">
            <div className="d6-section-num">08</div>
            <div className="d6-section-title">{d.labels.volunteering}</div>
            <ul className="d6-plain">{d.volunteering.map(v => <li key={v}>{v}</li>)}</ul>
          </section>
        </div>
      </div>
    </div>
  );
}
