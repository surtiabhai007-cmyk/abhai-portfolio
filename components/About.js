export default function About() {
  return (
    <section
      id="about"
      className="section-spacing animate-fadeIn"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">
        About Me
      </h2>

      <div className="card-hover max-w-3xl mx-auto p-8 rounded-2xl border border-white/10 bg-white/5 leading-relaxed text-base md:text-lg">
        <p>
          I am a <strong className="text-primary">Project Manager & Google Project Management Certified professional</strong> 
          with over <strong>8 years of experience in the IT industry</strong>. I am currently working as a 
          <strong> Project Coordinator at TrooTech Business Solutions</strong> in Ahmedabad.
        </p>

        <p className="mt-5">
          My expertise includes <span className="text-primary font-medium">Agile project management</span>, 
          <span className="text-primary font-medium"> AI-driven product delivery</span>, and 
          <span className="text-primary font-medium"> digital transformation initiatives</span>. 
          I have successfully managed cross-functional teams and delivered enterprise-grade solutions 
          aligned with business goals and stakeholder expectations.
        </p>

        <p className="mt-5">
          I specialize in <span className="text-primary font-medium">stakeholder communication</span>, 
          <span className="text-primary font-medium"> risk management</span>, and 
          <span className="text-primary font-medium"> strategic project planning</span>. 
          I regularly work with industry tools including 
          <strong> Jira</strong>, <strong> Trello</strong>, <strong> ClickUp</strong>, and <strong> Asana </strong> 
          to ensure structured collaboration and on-time project delivery.
        </p>
      </div>
    </section>
  );
}
