import { useState } from 'react';

const resumes = [
  {
    title: 'Cybersecurity Analyst',
    file: '/assets/Gokul_S_Cybersecurity_Analyst_Resume.pdf',
  },
  {
    title: 'Penetration Tester',
    file: '/assets/Gokul_Penetration_Testing_Resume.pdf',
  },
  {
    title: 'Vulnerability Management',
    file: '/assets/Gokul_Vulnerability_Management_Resume.pdf',
  },
];

export default function ResumeSection() {
  const [showResumes, setShowResumes] = useState(false);

  return (
    <section className="relative mx-auto w-full max-w-4xl p-6 text-white">
      <h2 className="mb-3 text-3xl font-bold">My Work</h2>

      <p className="mb-6 text-sm text-gray-400">
        Choose a resume for the role you are applying for.
      </p>

      <button
        type="button"
        onClick={() => setShowResumes((previous) => !previous)}
        aria-expanded={showResumes}
        className="rounded-lg border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10"
      >
        {showResumes ? '✕ Close Resumes' : '+ My Work'}
      </button>

      {showResumes && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resumes.map((resume) => (
            <div
              key={resume.file}
              className="rounded-xl border border-white/15 bg-[#121218] p-5"
            >
              <h3 className="mb-4 font-semibold">{resume.title}</h3>

              <a
                href={resume.file}
                target="_blank"
                rel="noreferrer"
                className="mb-3 block rounded-md bg-white px-4 py-3 text-center font-semibold text-black hover:bg-gray-200"
              >
                View Resume
              </a>

              <a
                href={resume.file}
                download
                className="block rounded-md border border-white/25 px-4 py-3 text-center hover:bg-white/10"
              >
                Download PDF
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}