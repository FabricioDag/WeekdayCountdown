import { useState } from "react";
import { motion } from "framer-motion";
import "./Teste.css";

interface ModalProps {
  addCounter: (counter: { title: string; endDate: string | null }) => void;
}

const Modal = ({ addCounter }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState<string | null>(null);

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(false);
    setTitle("");
    setDate(null);
    alert(`submitou: ${title} e ${date}`);

    let counter = {
      title: title,
      endDate: date,
    };
    addCounter(counter);
  };

  return (
    <div>
      {/* Verifica se esta aberto e mostra o bg */}
      {isOpen && (
        <motion.div
          className="modalBg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        ></motion.div>
      )}

      <motion.div
        className="modalDiv"
        onClick={!isOpen ? () => setIsOpen(true) : undefined}
        animate={{
          top: isOpen ? "50%" : "1rem",
          left: isOpen ? "50%" : "1rem",
          transform: isOpen ? "translate(-50%,-50%)" : "translate(0%,0%)",
          borderRadius: isOpen ? "0.5rem" : "50%",
          width: isOpen ? "350px" : "2rem",
          height: isOpen ? "200px" : "2rem",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {isOpen ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: "0%",
            }}
            animate={{
              opacity: "100%",
            }}
            transition={{ delay: 0.2 }}
          >
            <legend>Adicionar um novo countdown</legend>
            <div className="inputWrapper">
              <div className="inputBox title">
                <label htmlFor="title">Titulo:</label>
                <input onChange={handleChangeTitle} type="text" name="title" />
              </div>

              <div className="inputBox date">
                <label htmlFor="date">Data Final:</label>
                <input
                  onChange={handleDateChange}
                  type="date"
                  name="date"
                  required={true}
                />
              </div>
            </div>

            <div className="actionArea">
              <input type="submit" value="Adicionar" />
              <button onClick={() => setIsOpen(false)}>Fechar</button>
            </div>
          </motion.form>
        ) : (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <p>+</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export { Modal };
