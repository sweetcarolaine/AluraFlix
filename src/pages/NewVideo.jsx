import React, { useState } from "react";
import axios from "axios";
import "./NewVideo.scss";

function NewVideo() {
  const [formData, setFormData] = useState({
    title: "",
    categoryId: "",
    image: "",
    url: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const category = (await axios.get(`http://localhost:3000/category/${formData.categoryId}`)).data;
      const updatedVideos = [{ title: formData.title, url: formData.url, image: formData.image, description: formData.description }, ...category.videos];

      console.log(`videos atualizados ${updatedVideos}`);

      await axios.patch(`http://localhost:3000/category/${formData.categoryId}`, {
        videos: updatedVideos,
      });

      alert(`Vídeo: ${formData.title}\nfoi adicionado com sucesso na categoria: ${formData.categoryId}`);

      setFormData({
        title: "",
        categoryId: "",
        image: "",
        url: "",
        description: "",
      });
    } catch (error) {
      console.error("Erro ao adicionar vídeo:", error);
    }
  };

  const handleClear = () => {
    setFormData({
      title: "",
      categoryId: "",
      image: "",
      url: "",
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
            name="categoryId"
            value={formData.categoryId}
            onChange={handleInputChange}
          >
            <option value="">Selecione uma Categoria</option>
            <option value="1">Frontend</option>
            <option value="2">Backend</option>
            <option value="3">Mobile</option>
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
            name="url"
            value={formData.url}
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
