import NavBar from "./NavBar";
import api from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailProject() {
  const { id } = useParams();
  type ProjectType = {
    image?: string;
    name?: string;
    description?: string;
    note?: number; // note sur 5
    // Ajoutez d'autres propriétés si besoin
  };
  const [project, setProject] = useState<ProjectType>({});

  const getdetailproject = async () => {
    try {
      const res = await api.get(`/project/${id}/`);
      setProject(res.data);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getdetailproject();
  });

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 px-4 md:px-20 flex items-center justify-center">
        <div className="max-w-5xl w-full bg-black/80 rounded-3xl shadow-2xl border border-white/10 p-8 md:p-16 flex flex-col md:flex-row gap-10 relative overflow-hidden">
          {/* Overlay coloré */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 blur-2xl pointer-events-none rounded-3xl" />
          {/* Image */}
          <div className="relative flex-1 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20 scale-110" />
            <img
              src={project.image}
              alt={project.name}
              className="relative w-full max-w-md h-80 object-cover rounded-2xl shadow-xl border border-white/10 z-10"
            />
          </div>
          {/* Contenu */}
          <div className="flex-1 flex flex-col gap-6 justify-center z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {project.name}
              </span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              {project.description}
            </p>
            {/* Notes avec étoiles */}
            <div className="mt-4">
              <span className="text-blue-400 font-semibold">Note :</span>
              <div className="flex items-center gap-1 mt-1">
                {[1,2,3,4,5].map((n) => (
                  <svg
                    key={n}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill={project.note && project.note >= n ? '#facc15' : '#374151'}
                    className="w-6 h-6"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-400 text-sm">{project.note ? project.note + ' / 5' : 'Non noté'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
