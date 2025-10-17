import { useState, useEffect } from "react";

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

const skills: Skill[] = [
  {
    name: "Agri-foods",
    level: 90,
    icon: "🌾",
    color: "from-green-500 to-emerald-500",
  },
  { name: "Python", level: 85, icon: "🐍", color: "from-blue-500 to-cyan-500" },
  {
    name: "JavaScript",
    level: 80,
    icon: "⚡",
    color: "from-yellow-500 to-orange-500",
  },
  { name: "HTML et CSS", level: 95, icon: "🌐", color: "from-orange-500 to-red-500" },
  { name: "React", level: 75, icon: "⚛️", color: "from-cyan-400 to-blue-500" },
  {
    name: "Adobe Photoshop",
    level: 85,
    icon: "🖼️",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Adobe Illustrator",
    level: 80,
    icon: "✏️",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Django",
    level: 70,
    icon: "🎯",
    color: "from-green-600 to-teal-500",
  },
  { name: "Git", level: 80, icon: "🔧", color: "from-gray-600 to-gray-800" },
];

export default function Competence() {
  const [animatedSkills, setAnimatedSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skills);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section
        id="competences"
        className="py-16 px-5 lg:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-4">
              <span className="text-blue-400 text-xs font-medium">
                💻 Mes compétences
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mes Compétences
              </span>
            </h1>
            <p className="text-gray-400 text-base max-w-3xl mx-auto">
              Découvrez mon expertise technique à travers différents domaines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-300 hover:scale-95"
                style={{ animationDelay: `${index*10}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">{skill.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold text-base">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-xs">Expertise technique</p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-xs">Niveau</span>
                    <span className="text-white font-semibold text-sm">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="relative">
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                        style={{
                          width:
                            animatedSkills.find((s) => s.name === skill.name)
                              ?.level || 0 + "%",
                          animationDelay: `${index * 0.2}s`,
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Débutant</span>
                    <span>Expert</span>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {skill.level >= 80 && (
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full text-xs border border-green-500/30">
                      Expert
                    </span>
                  )}
                  {skill.level >= 60 && skill.level < 80 && (
                    <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full text-xs border border-blue-500/30">
                      Avancé
                    </span>
                  )}
                  {skill.level < 60 && (
                    <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded-full text-xs border border-yellow-500/30">
                      Intermédiaire
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Statistiques globales */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400 mb-1">12+</div>
              <div className="text-gray-300 text-sm">
                Technologies maîtrisées
              </div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-1">3+</div>
              <div className="text-gray-300 text-sm">Années d'expérience</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="text-3xl font-bold text-pink-400 mb-1">85%</div>
              <div className="text-gray-300 text-sm">Niveau moyen</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
