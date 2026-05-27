import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Award,
  Binary,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  FlaskConical,
  GraduationCap,
  Layers3,
  Mail,
  Network,
  Presentation,
  ServerCog,
  ShieldCheck,
  Sparkles,
  UsersRound
} from 'lucide-react';
import './styles.css';

const links = [
  { label: 'Academia', href: '#academia' },
  { label: 'Research', href: '#research' },
  { label: 'Training', href: '#training' },
  { label: 'Development', href: '#development' },
  { label: 'Contact', href: '#contact' }
];

const pillars = [
  {
    title: 'Academia',
    text: 'Ph.D. research, curriculum service, university teaching, and research supervision.',
    icon: GraduationCap
  },
  {
    title: 'AI Research',
    text: 'NLP, personality computing, graph learning, multimodal AI, and HRI personalization.',
    icon: BrainCircuit
  },
  {
    title: 'Training',
    text: 'Deep Learning with Transformers, Python, applied ML, and research-method guidance.',
    icon: Presentation
  },
  {
    title: 'Core Development',
    text: 'PHP, databases, dashboards, portals, workflow systems, and deployment-ready web apps.',
    icon: ServerCog
  }
];

const academia = [
  ['Ph.D. in Computer Science, AI and Machine Learning', 'University of Kashmir, 2020-2025. Deep learning-based personality detection from text, images, and audio.'],
  ['M.Tech in Computer Science', 'University of Kashmir, 2019. Machine learning and cryptography, CGPA 8.43.'],
  ['B.Tech in Computer Science', 'University of Kashmir, 2014. CSE entrance topper; built ResCite as an academic repository project.'],
  ['Academic Service', 'Board of Studies member for curriculum framing at the Department of Computer Sciences, University of Kashmir.']
];

const identifiers = [
  ['ORCID', '0000-0003-1727-6874', 'https://orcid.org/0000-0003-1727-6874'],
  ['Scopus Author ID', '57903212600', 'https://www.scopus.com/inward/authorDetails.url?authorID=57903212600&partnerID=MN8TOARS'],
  ['ResearchGate', 'Public research profile', 'https://www.researchgate.net/profile/Mohmad-Teli-2'],
  ['LinkedIn', 'Professional profile', 'https://in.linkedin.com/in/mohmadazhar286']
];

const research = [
  ['Personality Recognition from Text', 'I model Big Five personality traits from language using linguistic markers, embeddings, data augmentation, and graph learning.', Network],
  ['Graph Neural Networks', 'I design graph structures that connect words, sentences, documents, psycholinguistic categories, and semantic relations.', Layers3],
  ['Multimodal AI', 'I work across text, image, audio, computer vision, and sensor-fusion pipelines when the problem needs more than one signal.', Sparkles],
  ['Human-Machine Interaction', 'I am interested in AI systems that adapt to people instead of treating every user, learner, or collaborator as the same.', UsersRound],
  ['Secure Systems', 'Some of my earlier work connects document authentication, QR-linked biometrics, lightweight cryptography, and academic software.', ShieldCheck]
];

const publications = [
  ['Artificial Intelligence and Applications, 2025', 'PersonaG: A Quinpartite Graph Convolutional Network for Interpretable Personality Recognition from Text', 'My most recent graph-based work, built around interpretable automatic personality recognition from text.', 'https://doi.org/10.47852/bonviewAIA52024561'],
  ['International Journal of Electrical and Computer Engineering Systems, 2025', 'Augmented Language Dataset for Enhanced Personality Profiling', 'I studied how data augmentation and feature extraction can strengthen personality profiling models.', 'https://doi.org/10.32985/ijeces.16.1.7'],
  ['Journal of Computational Social Science, 2022', 'Lingual Markers for Automating Personality Profiling: Background and Road Ahead', 'A survey paper where I mapped the background, methods, and open direction of language-based personality profiling.', 'https://doi.org/10.1007/s42001-022-00184-6'],
  ['ISACC, 2023', 'Pre-trained Word Embeddings in Deep Multi-label Personality Classification of YouTube Transliterations', 'Conference work where I explored deep multi-label classification on transliterated YouTube language data.', 'https://doi.org/10.1109/ISACC56298.2023.10084047'],
  ['Conference paper, 2023', 'Actors-Characters: Personalizing Human Robot Interaction', 'A human-robot interaction direction where personality prediction becomes part of personalization.', 'https://www.researchgate.net/profile/Mohmad-Teli-2'],
  ['ACM India ARCS PhD Clinic, 2023', 'Lingual Markers for Automating Personality Profiling: ARCS 2023 Poster', 'I presented this work as part of the PhD Clinic at ACM India ARCS 2023 in Bhopal.', 'https://www.researchgate.net/profile/Mohmad-Teli-2']
];

const training = [
  ['Deep Learning with Transformers', 'I co-teach this course for B.Tech AI 4th semester, connecting transformer theory with implementation-level understanding.', BookOpen],
  ['AI and Data Science Mentoring', 'I help students and researchers move from concepts to notebooks, experiments, evaluation, and readable technical reporting.', FlaskConical],
  ['Hands-on Python and ML Training', 'I train learners on Python, model-building workflows, NLP pipelines, computer vision basics, and experiment design.', Binary],
  ['Research Writing and Project Guidance', 'I work with students on literature review, problem framing, methodology, paper structure, and final implementation.', Award]
];

const development = [
  ['HADP 20 Web Systems', 'I am currently conceiving and implementing web platforms for agricultural research workflows, dashboards, and project delivery.'],
  ['ResCite', 'A web-based repository for dissertations, citation tracking, and plagiarism-aware academic records.'],
  ['Biometric QR Authentication', 'MATLAB image processing for embedding biometric-linked QR codes into academic documents.'],
  ['Saffron Stigma Segmentation', 'Experiments with YOLOv8, Mask R-CNN, and UNet for agricultural image analysis.'],
  ['BumbleBee', 'M.Tech work on a lightweight cryptographic primitive for resource-constrained IoT devices.'],
  ['Multimodal Prototypes', 'Applied AI prototypes around marine automation, BEV perception, LIDAR/GNSS fusion, ViTs, and time-series modeling.']
];

const skills = [
  ['AI and Deep Learning', 'PyTorch, TensorFlow, Keras, transformers, GNNs, CNNs, RNNs, embeddings, multimodal learning, and model evaluation.'],
  ['NLP and Data Workflows', 'Hugging Face, spaCy, NLTK, BERT/GPT workflows, feature extraction, augmentation, classification, and research datasets.'],
  ['Computer Vision', 'OpenCV, YOLOv8, Mask R-CNN, UNet, segmentation workflows, image processing, and applied agricultural vision tasks.'],
  ['Web and Backend Development', 'PHP, MySQL, portals, dashboards, role-based workflows, document systems, forms, reporting, and XAMPP-style deployment.'],
  ['Programming Foundation', 'Python, C, C++, Java, C#, ASP, MATLAB, SQL, Git, Linux, Jupyter, VS Code, Docker, Spark, and Hadoop.'],
  ['Delivery Strength', 'From idea to architecture, database design, interface, implementation, documentation, and handover.']
];

const experience = [
  ['Current', 'MANAGE Fellow, National Institute of Agricultural Extension Management', 'I am working as a MANAGE Fellow with the extension institute in Hyderabad, stationed at SKUAST Kashmir.'],
  ['Current', 'Web Developer, HADP 20 Project, SKUAST Kashmir', 'I conceive, design, and implement web projects spanning institutional workflows, research-facing systems, and operational digital platforms.'],
  ['Current', 'Guest Lecturer, Deep Learning with Transformers', 'I co-teach Deep Learning with Transformers for B.Tech AI, 4th semester, with focus on modern transformer architectures and applied practice.'],
  ['2020-2025', 'Graduate Researcher, Machine Learning Lab, University of Kashmir', 'I worked on personality detection from language and multimodal signals, while also helping with data science and machine learning teaching.'],
  ['2019-2020', 'Research Assistant, Image Processing, IUST', 'I built QR-code document security workflows using MATLAB image processing, literature review, prototyping, and technical documentation.'],
  ['2023-2025', 'Applied AI and Data Roles', 'I contributed to FruitPunch AI and later worked on applied AI research across dynamical systems, FinTech, time series, and multimodal perception.']
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Home">MAT</a>
      <nav aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>
    </header>
  );
}

function Section({ id, eyebrow, title, children, compact = false }) {
  return (
    <section className={`section ${compact ? 'section-compact' : ''}`} id={id}>
      <div className="section-kicker">{eyebrow}</div>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

function IconCard({ title, text, icon: Icon }) {
  return (
    <article className="icon-card">
      <span className="icon-mark"><Icon size={22} strokeWidth={1.8} /></span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Academia | AI Research | Training | Core Development</p>
            <h1>Dr. Mohmad Azhar Teli</h1>
            <p>
              I work across research, teaching, and software delivery: personality computing, deep learning with transformers, agricultural research platforms, and production-oriented web systems.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="assets/files/Mohmad-Azhar-Teli-Resume.pdf">Resume <ArrowUpRight size={18} /></a>
              <a className="button" href="assets/files/Mohmad-Azhar-Teli-Profile.pdf">Profile <ArrowUpRight size={18} /></a>
              <a className="button" href="mailto:mohmadazhar286@gmail.com">Email <Mail size={18} /></a>
            </div>
          </div>
          <aside className="portrait-panel" aria-label="Portrait and focus areas">
            <img src="assets/img/azhar.jpeg" alt="Dr. Mohmad Azhar Teli" />
            <div className="portrait-note">
              <strong>Current focus</strong>
              <span>MANAGE Fellow at SKUAST Kashmir, HADP 20 web systems, and transformer teaching.</span>
            </div>
          </aside>
        </section>

        <section className="pillar-grid" aria-label="Professional pillars">
          {pillars.map((pillar) => <IconCard key={pillar.title} {...pillar} />)}
        </section>

        <Section
          id="profile"
          eyebrow="Profile"
          title="I move between research, code, training, and academic systems."
        >
          <div className="prose">
            <p>My research began with a simple question: how much of a person's behavioral pattern can be understood from the way they use language? That question led me into automatic personality recognition, psycholinguistic features, deep multi-label classification, graph neural networks, and transformers.</p>
            <p>I also build things that have to work outside a paper. At SKUAST Kashmir, as a MANAGE Fellow and web developer for HADP 20, I am involved in conceiving and implementing digital systems for agricultural research and extension workflows.</p>
            <p>I do not separate teaching from engineering. I use the same habit in both: understand the idea, build the working version, explain the tradeoffs, and make the system or student stronger by the end of the process.</p>
          </div>
        </Section>

        <Section id="academia" eyebrow="Academia" title="Academic path and institutional work.">
          <div className="split-list">
            {academia.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="identifiers" eyebrow="Research identity" title="Identifiers and research profiles.">
          <div className="identifier-grid">
            {identifiers.map(([label, value, href]) => (
              <a className="identifier" href={href} target="_blank" rel="noreferrer" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
                <ArrowUpRight size={18} />
              </a>
            ))}
          </div>
        </Section>

        <Section id="research" eyebrow="Research" title="Language, behavior, and human-centered AI.">
          <div className="card-grid two">
            {research.map(([title, text, icon]) => <IconCard key={title} title={title} text={text} icon={icon} />)}
          </div>
        </Section>

        <Section id="publications" eyebrow="Publications" title="Selected research output.">
          <div className="publication-stack">
            {publications.map(([venue, title, text, href]) => (
              <article className="publication" key={title}>
                <p className="meta">{venue}</p>
                <h3><a href={href} target="_blank" rel="noreferrer">{title}</a></h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="training" eyebrow="Tutoring and training" title="Training that connects theory to implementation.">
          <div className="card-grid two">
            {training.map(([title, text, icon]) => <IconCard key={title} title={title} text={text} icon={icon} />)}
          </div>
        </Section>

        <Section id="development" eyebrow="Core development" title="Systems I can plan, build, and hand over.">
          <div className="project-grid">
            {development.map(([title, text]) => (
              <article className="project" key={title}>
                <Code2 size={20} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="Practical stack across AI and software delivery.">
          <div className="skill-grid">
            {skills.map(([title, text], index) => {
              const Icon = [BrainCircuit, Database, Layers3, ServerCog, Code2, BriefcaseBusiness][index];
              return <IconCard key={title} title={title} text={text} icon={Icon} />;
            })}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Current work and earlier research roles.">
          <div className="timeline">
            {experience.map(([date, title, text]) => (
              <article className="timeline-item" key={title}>
                <span>{date}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <section className="contact" id="contact">
          <div>
            <p className="eyebrow">Research collaboration, teaching, and applied AI work</p>
            <h2>I am interested in serious problems where AI has to meet people, language, and institutions.</h2>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="mailto:mohmadazhar286@gmail.com">mohmadazhar286@gmail.com <Mail size={18} /></a>
            <a className="button" href="https://in.linkedin.com/in/mohmadazhar286" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={18} /></a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <span>Dr. Mohmad Azhar Teli</span>
        <span>Sopore, Jammu and Kashmir, India</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
