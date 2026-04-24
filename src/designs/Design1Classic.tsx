import { useCv, useLang } from '../CvContext';
import { IconPhone, IconMail, IconPin, IconUser, IconCalendar } from './Icons';
import './Design1Classic.css';

export type ClassicTheme = 'navy' | 'emerald' | 'burgundy' | 'slate';

export default function Design1Classic({ theme = 'navy' }: { theme?: ClassicTheme }) {
  const d = useCv();
  const lang = useLang();
  return (
    <div className={`d1-page d1-theme-${theme}`} dir={lang === 'he' ? 'rtl' : 'ltr'}>
      <aside className="d1-sidebar">
        <div className="d1-name-block">
          <div className="d1-name">{d.firstName} {d.lastName}</div>
          <div className="d1-role">{d.role}</div>
        </div>

        <section>
          <h2>{d.labels.contact}</h2>
          <div className="d1-contact-list">
            <div className="d1-contact-row"><span className="d1-ico"><IconPhone /></span><span>{d.contact.phone}</span></div>
            <div className="d1-contact-row"><span className="d1-ico"><IconMail /></span><span>{d.contact.email}</span></div>
            <div className="d1-contact-row"><span className="d1-ico"><IconPin /></span><span>{d.contact.location}</span></div>
            <div className="d1-contact-row"><span className="d1-ico"><IconUser /></span><span>{d.contact.maritalStatus}</span></div>
            <div className="d1-contact-row"><span className="d1-ico"><IconCalendar /></span><span>{d.contact.birthInfo}</span></div>
          </div>
        </section>

        <section>
          <h2>{d.labels.languages}</h2>
          <ul className="d1-sidebar-list d1-lang-list">
            {d.languages.map(l => <li key={l}>{l}</li>)}
          </ul>
        </section>

        <section>
          <h2>{d.labels.strengths}</h2>
          <ul className="d1-sidebar-list">
            {d.strengths.map(s => <li key={s}>{s}</li>)}
          </ul>
        </section>

        <section>
          <h2>{d.labels.futurePlans}</h2>
          <ul className="d1-sidebar-list">
            {d.futurePlants.map(p => <li key={p}>{p}</li>)}
          </ul>
        </section>
      </aside>

      <main className="d1-main">
        <section className="d1-profile">
          <h2><span className="d1-bullet"></span>{d.labels.profile}</h2>
          {d.profile.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </section>

        <section>
          <h2><span className="d1-bullet"></span>{d.labels.education}</h2>
          {d.education.map((e, i) => (
            <div className="d1-edu-item" key={i}>
              <span className="d1-edu-date">{e.date}</span>
              <span className="d1-edu-place">{e.place}</span>
              {e.details && <> {e.details}</>}
              {e.bullets.length > 0 && (
                <ul className="d1-bullet-list">
                  {e.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              )}
            </div>
          ))}
        </section>

        <section>
          <h2><span className="d1-bullet"></span>{d.labels.workExperience}</h2>
          <ul className="d1-bullet-list">
            {d.workExperience.map(w => <li key={w}>{w}</li>)}
          </ul>
        </section>

        <section>
          <h2><span className="d1-bullet"></span>{d.labels.militaryService}</h2>
          {d.military.map((j, i) => (
            <div className="d1-job" key={i}>
              <div className="d1-job-head">
                <span className="d1-job-title">{j.title}</span>
                <span className="d1-job-date">{j.date}</span>
              </div>
              <ul className="d1-bullet-list">
                {j.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2><span className="d1-bullet"></span>{d.labels.volunteering}</h2>
          <ul className="d1-bullet-list">
            {d.volunteering.map(v => <li key={v}>{v}</li>)}
          </ul>
        </section>
      </main>
    </div>
  );
}
