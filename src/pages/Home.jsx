import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../components/videocard/VideoCard.jsx";
import "./Home.scss";
import Modal from "../components/modal/Modal";

function Home() {
  const [categories, setCategories] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentEditVideo, setCurrentEditVideo] = useState(null);
  const [currentEditVideoIndex, setCurrentEditVideoIndex] = useState(null);
  const [currentEditCategory, setCurrentEditCategory] = useState(null);

  const openEditModal = (categoryId, video, videoIndex) => {
    setCurrentEditVideo(video);
    setCurrentEditVideoIndex(videoIndex);
    setCurrentEditCategory(categoryId);
    setIsEditModalOpen(true);
  }

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentEditVideo(null);
    setCurrentEditVideoIndex(null);
    setCurrentEditCategory(null);
  }

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/category");
      setCategories(response.data);
      console.log("Sucesso ao buscar categorias");
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  };

  const deleteVideo = async (category, videoIndex) => {
    try {
      console.log(`Deletando video ${videoIndex} da categoria ${category.title}`);
      const updatedVideos = category.videos.filter((_, index) => index !== videoIndex);

      // Atualizar o array de vídeos com PATCH
      await axios.patch(`http://localhost:3000/category/${category.id}`, {
        videos: updatedVideos,
      });

      fetchCategories();
      console.log(`Sucesso ao deletar video ${videoIndex}`);
    } catch (error) {
      console.error("Erro ao deletar video:", error);
    }
  }

  const getUpdatedVideos = async (categoryId, videoIndex, formData) => {
    console.log(`atualizando videos da categoria ${categoryId}, video ${videoIndex}`);
    const category = (await axios.get(`http://localhost:3000/category/${categoryId}`)).data;
    console.log(category);
    return category.videos.map((video, index) => {
      if (index == videoIndex) {
        return { title: formData.title, url: formData.url, image:formData.image, description: formData.description };
      }
      return video;
    });
  }

  const deleteOldVideoAddVideo = async (oldCategoryId, newCategoryId, videoIndex, formData) => {
    const oldCategory = (await axios.get(`http://localhost:3000/category/${oldCategoryId}`)).data;
    const newCategory = (await axios.get(`http://localhost:3000/category/${newCategoryId}`)).data;

    deleteVideo(oldCategory, videoIndex);
    return [{ title: formData.title, url: formData.url, image: formData.image, description: formData.description }, ...newCategory.videos];
  }

  const saveVideo = async (oldCategoryId, videoIndex, formData) => {
    try {
      const categoryId = formData.categoryId;
      console.log(`Tentando salvar video: ${videoIndex}, categoria antiga: ${oldCategoryId}, categoria nova: ${categoryId}`);

      const updatedVideos = oldCategoryId === categoryId 
      ? await getUpdatedVideos(categoryId, videoIndex, formData) 
      : await deleteOldVideoAddVideo(oldCategoryId, categoryId, videoIndex, formData);

      console.log(`videos atualizados ${updatedVideos}`);
      console.log(`Atualizando dados: ${videoIndex}`);

      await axios.patch(`http://localhost:3000/category/${categoryId}`, {
        videos: updatedVideos,
      });

      fetchCategories();
      console.log(`Sucesso ao salvar video ${videoIndex}`);
    } catch (error) {
      console.error("Erro ao salvar video:", error);
    }
  }

  // Verificar atualizações no estado
  useEffect(() => {
    console.log(`Modal aberto: ${isEditModalOpen}, Categoria ${currentEditCategory} Vídeo sendo editado: ${currentEditVideo ? currentEditVideoIndex : "Nenhum"}`);
  }, [isEditModalOpen, currentEditVideo, currentEditCategory]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="home">
      {isEditModalOpen && <Modal categoryId={currentEditCategory} video={currentEditVideo} videoIndex={currentEditVideoIndex} onClose={closeEditModal} onSave={saveVideo} />}
      {categories.map((category) => (
        <div
          key={category.id}
          style={{
            marginBottom: "20px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h2>{category.title}</h2>
          <div className="video-list">
            {category.videos.map((video, index) => (
              <VideoCard
                key={index}
                video={video}
                index={index}
                category={category}
                onEdit={openEditModal}
                onDelete={deleteVideo}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
