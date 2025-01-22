import React, { useState } from "react";
import axios from "axios";

function Modal({ video, onClose, onUpdate }) {
  const [formData, setFormData] = useState({
    title: video?.title || "",
    category: video?.category || "Frontend",
    image: video?.image || "",
    videoUrl: video?.videoUrl || "",
    description: video?.description || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3000/videos/${video.id}`, formData);
      onUpdate(); // Atualiza a lista na página principal
      onClose(); // Fecha o modal
    } catch (error) {
      console.error("Erro ao atualizar vídeo:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar Card</h2>
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
          <div className="modal-buttons">
            <button type="button" onClick={handleSave}>
              Salvar
            </button>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
