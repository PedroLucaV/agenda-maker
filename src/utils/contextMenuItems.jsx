import { FaCopy, FaPlus, FaEye, FaTrash, FaEllipsisH, FaCalendar, FaCheckSquare, FaEdit } from 'react-icons/fa';

export const dateTimeCMenu = {
  global: [
    { label: 'Copiar data/hora', action: () => alert('Copiar texto ou imagem clicada'), icon: <FaCopy /> },
    { label: 'Criar Evento...', action: () => alert('Criar Evento clicada'), icon: <FaPlus /> },
    { label: 'Editar evento...', action: () => alert('Editar Evento clicada'), icon: <FaEdit /> },
    { label: 'Apagar Evento', action: () => alert('Apagar Evento clicada'), icon: <FaTrash /> },
  ],
  admin: [
    { label: 'Bloquear/desbloquear data', action: () => alert('Bloquear/desbloquear data clicada'), icon: <FaCalendar /> },
    { label: 'Ocorrência do evento...', action: () => alert('Ocorrência do evento clicada'), icon: <FaCheckSquare /> }
  ]
}