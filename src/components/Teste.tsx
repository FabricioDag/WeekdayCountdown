import { useState } from "react";
import { motion } from "framer-motion";
import './Teste.css'
import { button } from "motion/react-client";

const Teste = () =>{
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () =>{
        setIsOpen(!isOpen)
    }

    return(
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
            onClick={handleToggle}
            className="testediv"
            animate={
                {   
                    top: isOpen? "50%" : "1rem",
                    left: isOpen? "50%" : "1rem",
                    transform: isOpen? "translate(-50%,-50%)" : "translate(0%,0%)",
                    borderRadius: isOpen ? "0.5rem" : "50%",
                    width: isOpen ? "350px" : "2rem",
                    height: isOpen ? "200px" : "2rem",
                  }
            }
            
            transition={{ type: "spring", stiffness: 300, damping: 30}}
           >
            {isOpen ? (
                <motion.form action=""
                initial={{
                    opacity:"0%"
                }}
                animate={{
                    opacity:"100%"
                }}

                transition={{delay:.2}}
                >
                <legend>Adicionar um novo countdown</legend>
                <div className="inputBox">
                    <label htmlFor="title">Titulo:</label>
                    <input type="text" name="title" />
                </div>

                <div className="inputBox">
                    <label htmlFor="date">Data Final:</label>
                    <input type="date" name="date" />
                </div>

                <input type="submit" value="Adicionar" />
            </motion.form> 
            ):( 
                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                <p>
                 +
                </p>

                
                </motion.div>
            )}
           </motion.div>

           
        </div>
    )
}

export {Teste}