import React from "react";
import Image from "components/AppImage";
import Icon from "components/AppIcon";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Muhammad Shagil Nizami",
      role: "Founder & CEO",
      bio: "Full-stack developer and entrepreneur passionate about preserving digital memories. Building the future of personal digital archiving with AI-powered solutions.",
      image:
        "https://media.licdn.com/dms/image/v2/C5103AQEltlMmbF1GrA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1560116654900?e=1756339200&v=beta&t=a0oxGJh4-JTl7NIDJAwgpSDMn428LveZRMIOddm70yQ",
      expertise: ["Full-Stack Development", "AI/ML", "Product Strategy"],
      social: {
        linkedin: "msn007",
        github: "shaggy786",
      },
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-inter font-medium mb-6">
            <Icon name="Users" size={16} />
            <span>Meet Our Team</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-crimson font-semibold text-foreground mb-6">
            Experts in Digital Memory
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our diverse team combines expertise in AI, privacy technology, and
            digital archiving to create a platform that truly serves human
            needs. We're united by the belief that everyone's story matters.
          </p>
        </div>

        <div
          className={`grid ${
            teamMembers?.length === 1 ? "lg:grid-cols-1" : "lg:grid-cols-4"
          } md:grid-cols-2 gap-8`}
        >
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-success rounded-full border-2 border-card flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="font-inter font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-inter"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.social.linkedin}`}
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Icon name="Linkedin" size={16} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={`https://twitter.com/${member.social.twitter}`}
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Icon name="Twitter" size={16} />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={`https://github.com/${member.social.github}`}
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Icon name="Github" size={16} />
                    </a>
                  )}
                  {member.social.dribbble && (
                    <a
                      href={`https://dribbble.com/${member.social.dribbble}`}
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                      aria-label={`${member.name} Dribbble`}
                    >
                      <Icon name="Dribbble" size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
