import "./App.css";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Competence from "./components/Competence";
import Services from "./components/Servis";
import { FaArrowUp, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdFacebook, MdWhatsapp } from "react-icons/md";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulation d'envoi - remplacez par votre API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Ici vous pouvez ajouter l'appel à votre API
      // await api.post('/contact/', formData);

      setSubmitStatus("success");
      setFormData({ email: "", message: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="bg-black min-h-screen">
        <section
          className="min-h-screen flex items-center justify-center px-5 lg:px-25 py-20"
          id="hero"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2  gap-6 items-center">
            {/* Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                  <span className="text-blue-400 text-sm font-medium">
                    👋 Salut, je suis
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Henri</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Sègbégnon
                  </span>
                </h1>
              </div>

              <div className="space-y-2 flex ">
                <h2 className="text-md md:text-2xl text-gray-300 font-medium">
                  Food Technologist, Développeur Full-Stack et Designer graphique
                </h2>
               
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                Passionné par l'innovation technologique et la création
                visuelle, je transforme vos idées en solutions digitales
                exceptionnelles. Spécialisé dans le développement web et le
                design graphique.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() =>
                    document
                      .getElementById("project")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group relative px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="relative z-10">Voir mes projets</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("contacte")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-4 py-2 border-2 border-blue-400 rounded-xl font-semibold text-blue-400 transition-all duration-300 hover:bg-blue-400 hover:text-white hover:scale-105"
                >
                  Me contacter
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20 scale-110"></div>
                <img
                  className="relative w-md object-cover rounded-3xl shadow-2xl border border-white/10"
                  src="public/Project of nelicake copie.jpg"
                  alt="Henri Sègbégnon"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="apropos"
          className="py-20 px-5 lg:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-900"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                <span className="text-blue-400 text-sm font-medium">
                  👨‍💻 À propos de moi
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Mon Histoire
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Découvrez mon parcours, mes passions et ce qui me motive au
                quotidien
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20 scale-110"></div>
                  <img
                    className="relative w-full h-96 object-cover rounded-3xl shadow-2xl border border-white/10"
                    src="public/BMG_8066.jpg"
                    alt="Henri S. ADANGNISSODE"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Henri S. <span className="text-blue-400">ADANGNISSODE</span>
                  </h2>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                      Food Technologist
                    </span>
                    <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
                      Développeur Full-Stack
                    </span>
                    <span className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium border border-pink-500/30">
                      Graphiste Créatif
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Passionné par l'innovation technologique depuis mon plus
                    jeune âge, j'ai développé une expertise unique qui combine
                    la technologie alimentaire avec le développement web et le
                    design graphique.
                  </p>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    Mon approche multidisciplinaire me permet de créer des
                    solutions innovantes qui répondent aux défis complexes du
                    monde moderne. Je crois fermement que la technologie doit
                    servir l'humain et améliorer notre quotidien.
                  </p>

                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        3+
                      </div>
                      <div className="text-gray-300 text-sm">
                        Années d'expérience
                      </div>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                      <div className="text-3xl font-bold text-purple-400 mb-2">
                        50+
                      </div>
                      <div className="text-gray-300 text-sm">
                        Projets réalisés
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() =>
                    document
                      .getElementById("contacte")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="relative z-10">Travaillons ensemble</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <Competence />

        <Project />
        <section
          id="servis"
          className="py-16 px-5 lg:px-20 bg-gradient-to-br from-black via-gray-900 to-black"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-4">
                <span className="text-blue-400 text-xs font-medium">
                  🛠️ Mes services
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Mes Services
                </span>
              </h1>
              <p className="text-gray-400 text-base max-w-3xl mx-auto">
                Des solutions complètes pour transformer vos idées en réalité
                digitale
              </p>
            </div>

            <div>
              <Services></Services>
            </div>
          </div>
        </section>
        <section
          id="contacte"
          className="py-20 px-5 lg:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-900"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                <span className="text-blue-400 text-sm font-medium">
                  📞 Contactez-moi
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Travaillons Ensemble
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Prêt à donner vie à votre projet ? Contactez-moi et discutons de
                vos idées
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Informations de contact
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <div className="p-3 bg-blue-500/20 rounded-xl">
                        <FaPhoneAlt className="text-blue-400 text-xl" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Téléphone</h3>
                        <p className="text-gray-300">+229 0159157294</p>
                        <p className="text-gray-300">+229 0140846849</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <div className="p-3 bg-purple-500/20 rounded-xl">
                        <MdEmail className="text-purple-400 text-xl" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Email</h3>
                        <p className="text-gray-300">Hijustech@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <div className="p-3 bg-pink-500/20 rounded-xl">
                        <MdFacebook className="text-pink-400 text-xl" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">
                          Réseaux sociaux
                        </h3>
                        <p className="text-gray-300">Henry Sègbégnon</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
                  <h3 className="text-white font-semibold mb-3">
                    Disponibilité
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Je suis disponible pour de nouveaux projets. N'hésitez pas à
                    me contacter pour discuter de vos besoins et voir comment je
                    peux vous aider.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Envoyez-moi un message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Adresse email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre projet ou votre demande..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      rows={5}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span className="relative z-10">
                      {isSubmitting
                        ? "Envoi en cours..."
                        : "Envoyer le message"}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">✅</span>
                        <span>Message envoyé avec succès !</span>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">❌</span>
                        <span>Erreur lors de l'envoi. Veuillez réessayer.</span>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        <button
          onClick={() =>
            document
              .getElementById("hero")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="fixed bottom-2 right-2 z-50 group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-purple-500/25">
              <FaArrowUp className="text-white text-xl" />
            </div>
          </div>
        </button>
      </div>

      <footer className="py-16 px-5 lg:px-20 bg-gradient-to-t from-black to-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Hijus-Tech
              </h3>
              <p className="text-gray-400 text-sm">
                Créateur de solutions digitales innovantes
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="p-3 bg-white/10 rounded-full hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 group"
              >
                <MdFacebook className="text-blue-400 text-2xl group-hover:text-blue-300" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 rounded-full hover:bg-green-500/20 transition-all duration-300 hover:scale-110 group"
              >
                <MdWhatsapp className="text-green-400 text-2xl group-hover:text-green-300" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Henri Sègbégnon. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
