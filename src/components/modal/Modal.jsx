import React, { useState } from "react";
import "./Modal.scss";

function Modal({ categoryId, video, videoIndex, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: video.title || "",
    categoryId: categoryId || "",
    image: video.image || "",
    url: video.url || "",
    description: video.description || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(categoryId, videoIndex, formData);
    onClose();
  };

  const handleReset = () => {
    setFormData({
      title: video.title || "",
      categoryId: categoryId || "",
      image: video.image || "",
      url: video.url || "",
      description: video.description || "",
    });
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target.classList.contains("modal-overlay")) {
          e.stopPropagation();
          onClose();
        }
      }}
    >
      <div className="modal-content" role="dialog" aria-labelledby="modal-title">
        <div className="modal-header">
          <h2 id="modal-title">Editar Video</h2>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Fechar Modal"
          >
            X
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Título"
                required
                aria-label="Título do vídeo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="categoryId">Categoria</label>
              <select
                id="categoryId"
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                required
                aria-label="Categoria"
              >
                <option value="">Selecione uma Categoria</option>
                <option value="1">Frontend</option>
                <option value="2">Backend</option>
                <option value="3">Mobile</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="image">Imagem URL</label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Imagem URL"
                aria-label="URL da imagem"
              />
            </div>

            <div className="form-group">
              <label htmlFor="url">Vídeo URL</label>
              <input
                type="url"
                id="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                placeholder="Vídeo URL"
                required
                aria-label="URL do vídeo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Descrição (max. 4 linhas)"
                rows="4"
                required
                aria-label="Descrição do vídeo"
              />
            </div>
          </form>

          <div className="modal-buttons">
            <button type="submit" onClick={handleSubmit}>Salvar</button>
            <button type="button" onClick={handleReset}>
              Limpar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
