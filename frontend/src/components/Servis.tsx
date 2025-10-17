import React, { useState, useEffect } from "react";
import {
  Palette,
  Globe,
  Smartphone,
  Database,
  Search,
  Zap,
  Shield,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { GiCakeSlice } from "react-icons/gi";

// Mapping des icônes
const iconMap: { [key: string]: React.ReactNode } = {
  Palette: <Palette className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  GiCakeSlice: <GiCakeSlice className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
};

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    id: 1,
    title: "Design Graphique",
    description:
      "Création d'identités visuelles modernes et impactantes pour votre marque",
    icon: "Palette",
    features: [
      "Logo design personnalisé",
      "Charte graphique complète",
      "Affiches et supports marketing",
      "Design d'interface utilisateur",
    ],
    price: "À partir de 50,000 FCFA",
  },
  {
    id: 2,
    title: "Développement Web",
    description:
      "Sites web modernes, rapides et optimisés pour tous les appareils",
    icon: "Globe",
    features: [
      "Sites web responsive",
      "Applications web dynamiques",
      "E-commerce sur mesure",
      "Maintenance et support",
    ],
    price: "À partir de 150,000 FCFA",
    popular: true,
  },
  {
    id: 3,
    title: "Applications Mobile",
    description: "Applications mobiles natives et hybrides pour iOS et Android",
    icon: "Smartphone",
    features: [
      "Applications iOS & Android",
      "Interface utilisateur intuitive",
      "Intégration API et base de données",
      "Publication sur les stores",
    ],
    price: "À partir de 300,000 FCFA",
  },
  {
    id: 4,
    title: "Vente de Cakes",
    description:
      "Cakes personnalisés et délicieux pour toutes vos occasions spéciales",
    icon: "GiCakeSlice",
    features: [
      "Cakes sur mesure",
      "Ingrédients de qualité",
      "Livraison à domicile",
      "Décoration artistique",
    ],
    price: "À partir de 15,000 FCFA",
  },
  {
    id: 5,
    title: "Optimisation SEO",
    description: "Améliorez votre visibilité sur les moteurs de recherche",
    icon: "Search",
    features: [
      "Audit SEO complet",
      "Optimisation technique",
      "Stratégie de contenu",
      "Suivi des performances",
    ],
    price: "À partir de 80,000 FCFA",
  },
  {
    id: 6,
    title: "Consultation Tech",
    description: "Conseils stratégiques pour vos projets technologiques",
    icon: "Users",
    features: [
      "Audit technologique",
      "Roadmap de développement",
      "Formation équipe",
      "Support technique",
    ],
    price: "À partir de 100,000 FCFA",
  },
];

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const [apiServices, setApiServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  // Charger les services depuis l'API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8000/api/service/");
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des services");
        }
        const data = await response.json();
        setApiServices(data);
      } catch (err) {
        console.error("Erreur API:", err);
        // Utiliser les services par défaut en cas d'erreur
        setApiServices(services);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const servicesToShow = apiServices.length > 0 ? apiServices : services;
      setVisibleServices(servicesToShow.map((service) => service.id));
    }, 300);

    return () => clearTimeout(timer);
  }, [apiServices]);

  // Utiliser les services de l'API ou les services par défaut
  const servicesToDisplay = apiServices.length > 0 ? apiServices : services;

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-gray-400">Chargement des services...</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {servicesToDisplay.map((service, index) => (
        <div
          key={service.id}
          className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 ${
            visibleServices.includes(service.id)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          } ${service.popular ? "ring-2 ring-blue-500/50" : ""}`}
          style={{
            transitionDelay: `${index * 100}ms`,
          }}
          onMouseEnter={() => setHoveredService(service.id)}
          onMouseLeave={() => setHoveredService(null)}
        >
          {/* Badge populaire */}
          {service.popular && (
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Populaire
              </div>
            </div>
          )}

          {/* Icône */}
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div
              className={`relative w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-blue-400 transition-all duration-300 ${
                hoveredService === service.id
                  ? "scale-110 bg-gradient-to-r from-blue-500/30 to-purple-500/30"
                  : ""
              }`}
            >
              {iconMap[service.icon] || <Globe className="w-6 h-6" />}
            </div>
          </div>

          {/* Contenu */}
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-1">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Prix */}
            {/* <div className="pt-3 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-400">
                  {service.price}
                </span>
                <button className="group/btn flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-500/30 rounded-lg text-blue-400 text-xs font-medium transition-all duration-300 hover:scale-105">
                  <span>Découvrir</span>
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div> */}
          </div>

          {/* Effet de hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
}
