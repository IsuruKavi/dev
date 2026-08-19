import { ArrowUpRight, Code2, Lightbulb, Rocket, Users } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className=" gap-16 items-center w-">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              About me
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 md:flex w-full justify-between ">
              <div className="space-y-4 md:w-1/2 w-full">
                <p>
                  I’m a software engineer with 2+ years of professional
                  experience building web and mobile applications. My background
                  in software development has given me a strong foundation in
                  application architecture, APIs, databases, and modern
                  development workflows.
                </p>

                <p>
                  While completing my BSc (Hons) in Computer Networks, I
                  developed a stronger interest in cloud infrastructure,
                  networking, deployment, and automation. I’m now transitioning
                  my career focus toward Cloud and DevOps, building hands-on
                  experience with AWS, Linux, Docker, Kubernetes, CI/CD, and Bash.
                </p>

                <p className="text-white/80">
                  I continue to use my software engineering experience alongside
                  my growing cloud and infrastructure skills, and I’m currently
                  open to Intern, Trainee, Associate, and Junior opportunities
                  in Cloud, DevOps, and related infrastructure roles. I also
                  share what I learn through my tech blog to help others
                  understand practical development and cloud concepts.
                </p>
                <a
                  className=" gap-2 items-center underline decoration-primary hover:decoration-2 md:block md:flex hidden"
                  href="https://medium.com/@isurukavindalakshan863"
                  target="_blank"
                >
                  <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className=" italic text-2xl font-semibold text-white">
                    Check out my blog
                  </span>
                  <ArrowUpRight className="w-6 h-6" />
                </a>
              </div>
              {/* Right Column - Hilights */}
              <div className="">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary-foreground">
                    Education
                  </h3>

                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <p className="font-medium text-white">
                        BSc (Hons) Computer Networks
                      </p>
                      <p>University of Wolverhampton</p>
                      <p className="text-sm opacity-70">2025 - 2026</p>
                    </div>

                    <div>
                      <p className="font-medium text-white">
                        Electronic & Telecommunication Engineering Technology
                        (Merit)
                      </p>
                      <p>Institute of Technology University of Moratuwa</p>
                      <p className="text-sm opacity-70">2020 - 2024</p>
                    </div>
                  </div>
                  <a
                    className=" gap-2 items-center underline decoration-primary hover:decoration-2 md:hidden flex"
                    href="https://medium.com/@isurukavindalakshan863"
                    target="_blank"
                  >
                    <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className=" italic text-2xl font-semibold text-white">
                      Check out my blog
                    </span>
                    <ArrowUpRight className="w-6 h-6" />
                  </a>
                </div>
                {/* <div className="relative flex justify-center mt-6 ">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Pedro Machado"
                  className="w-56  rounded-2xl"
                />
              </div>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
