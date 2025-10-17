import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Edit, Trash, Upload } from "lucide-react";
import Button from "../components/Button";
import api from "../api";

export default function ListeProject() {
  const [projects, setProjects] = useState([]);
  const [categorys, setCategorys] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<number | null>(null);
  const [currentProjectImage, setCurrentProjectImage] = useState<string>("");

  // Récupère la liste des projets depuis l'API
  const getProjects = async () => {
    try {
      const res = await api.get("/project/");
      setProjects(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getCategorys = async () => {
    try {
      const res = await api.get("/category/");
      setCategorys(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Charge les projets au montage du composant
  useEffect(() => {
    getProjects();
  }, []);
  useEffect(() => {
    getCategorys();
  }, []);

  // Supprime un projet par son id
  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/project/${id}/`);
      getProjects();
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la suppression du projet. Veuillez réessayer.");
    }
  };
  // Récupère les données d'un projet spécifique
  const getProjectById = async (projectId: number) => {
    try {
      const res = await api.get(`/project/${projectId}/`);
      return res.data;
    } catch (error) {
      console.error("Erreur lors de la récupération du projet:", error);
      return null;
    }
  };

  // Ouvre la boîte de dialogue pour modifier un projet
  const handleEdit = async (projectId?: number) => {
    if (projectId) {
      setEditingProjectId(projectId);
      setUpdated(true);

      // Récupère les données du projet à modifier
      const projectData = await getProjectById(projectId);
      if (projectData) {
        setName(projectData.name);
        setDescription(projectData.description);
        // Pour la catégorie, on doit trouver l'ID correspondant au nom affiché
        const categoryObj = categorys.find(
          (cat: any) => cat.title === projectData.category
        );
        setCategory(categoryObj ? categoryObj.id : "");
        setImage(null); // On ne pré-remplit pas l'image pour éviter les conflits
        setCurrentProjectImage(projectData.image || ""); // Sauvegarde l'URL de l'image actuelle
      }
    }
    setOpen(true);
  };
  // Soumet les modifications du projet
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    if (image) {
      formData.append("image", image);
    }

    try {
      if (updated && editingProjectId) {
        // Mode modification - utilise PUT
        await api.patch(`/project/${editingProjectId}/`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Projet modifié avec succès !");
      } else {
        // Mode création - utilise POST
        await api.post("/project/", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Projet ajouté avec succès !");
      }

      getProjects();
      handleCloseModal();
    } catch (error) {
      console.error(error);
      const action = updated ? "modification" : "ajout";
      alert(`Erreur lors de la ${action} du projet. Veuillez réessayer.`);
    } finally {
      setLoading(false);
    }
  };

  // Ferme le modal et réinitialise les états
  const handleCloseModal = () => {
    setOpen(false);
    setUpdated(false);
    setEditingProjectId(null);
    setName("");
    setDescription("");
    setCategory();
    setImage(null);
    setCurrentProjectImage("");
  };

  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black flex flex-col items-center pt-28 px-4">
        <div className="w-full max-w-5xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Liste des Projets
              </span>
            </h2>
            <Button
              onClick={() => setOpen(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              + Ajouter un projet
            </Button>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg">
            <table className="min-w-full text-white">
              <thead>
                <tr className="bg-gradient-to-r from-blue-700 to-purple-700">
                  <th className="py-4 px-6 text-lg font-bold text-left rounded-tl-2xl">
                    #
                  </th>
                  <th className="py-4 px-6 text-lg font-bold text-left">Nom</th>
                  <th className="py-4 px-6 text-lg font-bold text-left">
                    Catégorie
                  </th>
                  <th className="py-4 px-6 text-lg font-bold text-left">Date</th>
                  <th className="py-4 px-6 text-lg font-bold text-center rounded-tr-2xl">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="py-8 px-6 text-center text-gray-300 text-xl"
                    >
                      Aucun projet disponible.
                    </td>
                  </tr>
                ) : (
                  projects.map((project: any, index: number) => (
                    <tr
                      key={project.id}
                      className={`transition hover:bg-white/20 ${
                        index % 2 === 0 ? "bg-white/5" : "bg-white/10"
                      }`}
                    >
                      <td className="py-4 px-6 font-bold text-blue-200">
                        {index + 1}
                      </td>
                      <td className="py-4 px-6 font-semibold text-lg">
                        {project.name}
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                          {project.category}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-block text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                          {new Date(project.create_at).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })}{" "}
                          à{" "}
                          {new Date(project.create_at).toLocaleTimeString("fr-FR", {
                            hour: "2-digit",
                            minute: "2-digit"
                          })}
                        </span>
                      </td>
                      <td className="py-4 px-6 flex items-center justify-center gap-4">
                        <button
                          className="p-2 rounded-full hover:bg-blue-600/30 transition"
                          title="Modifier"
                          onClick={() => handleEdit(project.id)}
                        >
                          <Edit
                            size={22}
                            color="#60a5fa"
                            className="cursor-pointer"
                          />
                        </button>
                        <button
                          className="p-2 rounded-full hover:bg-red-600/30 transition"
                          title="Supprimer"
                          onClick={() => handleDelete(project.id)}
                        >
                          <Trash
                            size={22}
                            color="#f87171"
                            className="cursor-pointer"
                          />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {open && (
        <dialog
          open
          className="modal fixed inset-0 z-50 flex items-center justify-center my-2 m-auto backdrop-blur rounded-xl shadow-3xl bg-gradient-to-br from-white/90 via-blue-100/80 to-purple-100/80 w-full max-w-lg py-5 p-5"
        >
          <div className="modal-box relative">
            <button
              className="absolute top-1 right-2 text-gray-400 hover:text-gray-700 transition"
              onClick={handleCloseModal}
              aria-label="Fermer"
              type="button"
            >
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l16 16M6 22L22 6" />
              </svg>
            </button>
            <h3 className="text-2xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {updated == true ? "Modifie le project" : "Ajouter un project"}
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Catégorie
                </label>
                <select
                  required
                  className="w-full border-2 border-blue-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 text-gray-700 font-medium"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Sélectionner une catégorie</option>
                  {categorys.map((catg: any) => (
                    <option value={catg.id} key={catg.id}>
                      {catg.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Nom du projet
                </label>
                <input
                  type="text"
                  placeholder="Nom du projet"
                  className="w-full border-2 border-blue-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 text-gray-700 font-medium"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Description du projet"
                  className="w-full border-2 border-blue-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 text-gray-700 font-medium"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full border-2 border-blue-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 text-gray-700 font-medium"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                  required={!updated}
                />
                {updated && image && (
                  <p className="text-sm text-green-600 mt-1">
                    Nouvelle image sélectionnée : {image.name}
                  </p>
                )}
                {updated && !image && currentProjectImage && (
                  <p className="text-sm text-gray-500 mt-1">
                    Image actuelle : {currentProjectImage.split("/").pop()}
                  </p>
                )}
                {updated && (
                  <p className="text-sm text-gray-500 mt-1">
                    Laissez vide pour conserver l'image actuelle
                  </p>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-2 rounded-full shadow-lg hover:scale-105 transition-transform ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {updated == true ? "Modifier" : "Ajouter"}
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
}
