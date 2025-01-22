import React, { useState } from "react";
import axios from "axios";

function NewVideo() {
  const [formData, setFormData] = useState({
    title: "",
    category: "Frontend",
    image: "",
    videoUrl: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.post("http://localhost:3000/videos", formData);
      alert("Vídeo adicionado com sucesso!");
      setFormData({
        title: "",
        category: "Frontend",
        image: "",
        videoUrl: "",
        description: "",
      });
    } catch (error) {
      console.error("Erro ao adicionar vídeo:", error);
    }
  };

  return (
    <div className="new-video">
      <h2>Novo Vídeo</h2>
      <form>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Título"
        />
        <select
          name="category"z
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Inovação">Inovação</option>
          <option value="Gestão">Gestão</option>
        </select>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          placeholder="URL da Imagem"
        />
        <input
          type="text"
          name="videoUrl"
          value={formData.videoUrl}
          onChange={handleInputChange}
          placeholder="URL do Vídeo"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Descrição"
        />
        <button type="button" onClick={handleSave}>
          Salvar
        </button>
      </form>
    </div>
  );
}

export default NewVideo;
