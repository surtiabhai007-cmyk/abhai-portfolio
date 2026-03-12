export default function About() {
  return (
    <section id="about" className="py-14">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Content */}
          <div className="text-gray-700 leading-relaxed space-y-4">

            <p>
              I am a <span className="text-primary font-semibold">
              Project Manager & Google Project Management Certified professional</span>
              with over <strong>8 years of experience in the IT industry</strong>.
              I am currently working as a <strong>Project Coordinator at
              TrooTech Business Solutions</strong> in Navsari.
            </p>

            <p>
              My expertise includes <span className="text-primary">Agile project management</span>,
              <span className="text-primary"> AI-driven product delivery</span>,
              and <span className="text-primary"> digital transformation initiatives</span>.
              I have successfully managed cross-functional teams and delivered
              enterprise-grade IT solutions aligned with business goals.
            </p>

            <p>
              I specialize in <span className="text-primary">stakeholder communication</span>,
              <span className="text-primary"> risk management</span>, and
              <span className="text-primary"> strategic project planning</span>.
              I regularly work with tools like <strong>Jira, Trello, ClickUp,
              and Asana</strong>.
            </p>

          </div>

          {/* Right Highlights */}
          <div className="grid grid-cols-2 gap-6">

            <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
              <p className="text-2xl font-bold text-primary">8+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
              <p className="text-2xl font-bold text-primary">20+</p>
              <p className="text-sm text-gray-600">Projects Delivered</p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
              <p className="text-2xl font-bold text-primary">15+</p>
              <p className="text-sm text-gray-600">Clients Managed</p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
              <p className="text-2xl font-bold text-primary">20+</p>
              <p className="text-sm text-gray-600">Cross-Functional Team Members</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
