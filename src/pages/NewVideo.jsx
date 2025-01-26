import React, { useState } from "react";
import axios from "axios";
import "./NewVideo.scss";

function NewVideo() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
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
        category: "",
        image: "",
        videoUrl: "",
        description: "",
      });
    } catch (error) {
      console.error("Erro ao adicionar vídeo:", error);
    }
  };

  const handleClear = () => {
    setFormData({
      title: "",
      category: "",
      image: "",
      videoUrl: "",
      description: "",
    });
  };

  return (
    <div className="new-video">
      <h1>Novo Vídeo</h1>
      <p>Preencha os campos abaixo para adicionar um novo vídeo:</p>
      <div className="new-video-content">
        <form>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Título"
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="">Selecione uma Categoria</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Inovação">Mobile</option>
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
            rows={4}
            placeholder="Descrição"
          />
          <div className="form-buttons">
            <button type="button" onClick={handleSave} className="save-button">
              Salvar
            </button>
            <button type="button" onClick={handleClear} className="clear-button">
              Limpar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewVideo;
