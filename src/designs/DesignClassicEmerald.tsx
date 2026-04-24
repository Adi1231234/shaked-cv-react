import { useCv, useLang } from '../CvContext';
import { IconCalendar, IconMail, IconPhone, IconPin, IconUser } from './Icons';
import './DesignClassicEmerald.css';

export default function DesignClassicEmerald() {
  const d = useCv();
  const lang = useLang();

  return (
    <div className="d1e-page" dir={lang === 'he' ? 'rtl' : 'ltr'}>
      <header className="d1e-header">
        <div className="d1e-seal">SA</div>
        <div className="d1e-title">
          <h1>{d.firstName} {d.lastName}</h1>
          <div>{d.role}</div>
        </div>
        <div className="d1e-contact">
          <span><IconPhone />{d.contact.phone}</span>
          <span><IconMail />{d.contact.email}</span>
          <span><IconPin />{d.contact.location}</span>
          <span><IconUser />{d.contact.maritalStatus}</span>
          <span><IconCalendar />{d.contact.birthInfo}</span>
        </div>
      </header>

      <div className="d1e-layout">
        <main className="d1e-main">
          <section className="d1e-profile">
            <h2>{d.labels.profile}</h2>
            {d.profile.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </section>

          <section>
            <h2>{d.labels.education}</h2>
            <div className="d1e-edu-list">
              {d.education.map((e, i) => (
                <div className="d1e-edu" key={i}>
                  <div className="d1e-date">{e.date}</div>
                  <div>
                    <strong>{e.place}</strong>{e.details && <> {e.details}</>}
                    {e.bullets.length > 0 && <ul>{e.bullets.map(b => <li key={b}>{b}</li>)}</ul>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>{d.labels.workExperience}</h2>
            <ul className="d1e-work-list">{d.workExperience.map(w => <li key={w}>{w}</li>)}</ul>
          </section>

          <section>
            <h2>{d.labels.militaryService}</h2>
            <div className="d1e-timeline">
              {d.military.map((j, i) => (
                <article className="d1e-item" key={i}>
                  <div className="d1e-date">{j.date}</div>
                  <div>
                    <h3>{j.title}</h3>
                    <ul>{j.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <aside className="d1e-rail">
          <section>
            <h2>{d.labels.strengths}</h2>
            <ul>{d.strengths.map(s => <li key={s}>{s}</li>)}</ul>
          </section>
          <section>
            <h2>{d.labels.languages}</h2>
            <ul>{d.languages.map(l => <li key={l}>{l}</li>)}</ul>
          </section>
          <section>
            <h2>{d.labels.futurePlans}</h2>
            <ul>{d.futurePlants.map(p => <li key={p}>{p}</li>)}</ul>
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
