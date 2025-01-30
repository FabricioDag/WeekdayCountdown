import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import "./ExpandableModal.css"; // Importa os estilos externos

export default function ExpandableModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="modal-container">
      {/* Background escuro quando o modal estiver aberto */}
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Botão inicial e Modal */}
      <motion.div
        className={`modal-content ${isOpen ? "open" : ""}`}
        initial={{ width: 64, height: 64, borderRadius: "50%" }}
        animate={
          isOpen
            ? { width: "90vw", height: "60vh", borderRadius: "1rem" }
            : { width: 64, height: 64, borderRadius: "50%" }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {!isOpen ? (
          // Botão "+"
          <motion.button
            onClick={() => setIsOpen(true)}
            className="modal-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="plus-icon"
            >
              +
            </motion.span>
          </motion.button>
        ) : (
          // Conteúdo do modal
          <div className="modal-inner">
            {/* Botão de fechar */}
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>

            <h2 className="modal-title">Título do Modal</h2>
            <p className="modal-text">
              Aqui pode ter qualquer conteúdo que você quiser dentro do modal!
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
