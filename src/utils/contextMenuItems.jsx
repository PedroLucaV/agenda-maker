import { FaCopy, FaPaste, FaPlus, FaEye, FaTrash, FaEllipsisH, FaCalendar, FaCheckSquare } from 'react-icons/fa';

export let global = [{ label: 'Copiar texto ou imagem', action: () => alert('Copiar texto ou imagem clicada'), icon: <FaCopy /> },
  { label: 'Colar texto', action: () => alert('Colar texto clicada'), icon: <FaPaste /> },
  { label: 'Criar Evento...', action: () => alert('Criar Evento clicada'), icon: <FaPlus /> },
  { label: 'Ver mais sobre o evento', action: () => alert('Ver mais sobre o evento clicada'), icon: <FaEye /> },
  { label: 'Apagar Evento', action: () => alert('Apagar Evento clicada'), icon: <FaTrash /> },
  { label: 'Mais opções...', action: () => alert('Mais opções clicada'), icon: <FaEllipsisH /> },
];

export let adminOnly = [
  { label: 'Bloquear/desbloquear data', action: () => alert('Bloquear/desbloquear data clicada'), icon: <FaCalendar /> },
  { label: 'Ocorrência do evento...', action: () => alert('Ocorrência do evento clicada'), icon: <FaCheckSquare /> }
]