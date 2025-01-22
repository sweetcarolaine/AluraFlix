import React from 'react';

export function Card({ video, onEdit, onDelete }) {
  return (
    <div className="card">
      <img src={video.image} alt={video.title} />
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <div className="card-buttons">
        <button onClick={() => onEdit(video)}>Editar</button>
        <button onClick={() => onDelete(video.id)}>Excluir</button>
      </div>
    </div>
  );
}
