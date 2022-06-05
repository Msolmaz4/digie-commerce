import React from "react";
import styles from "./Register.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserAlt,faMailBulk} from '@fortawesome/free-solid-svg-icons'
//get stardet react fontaweso v5
export default function register() {

const handleInputChange = ()=>{
    
}

  return (
    <div>
      <div className={styles.contanier}>
        <div className={styles.imgContanier}>
          <img src="/3.jpg" alt="login" className={styles.img} />
        </div>
        <div className={styles.formContanier}>
            <form>
                <div className={styles.formTitle}> 
                <h1 className={styles.title}>Register </h1>
                </div>
                <div className={styles.formInput}>
                    <div className={styles.inputContanier}>
                      <FontAwesomeIcon icon={faUserAlt} className={styles.icons} />
                      <input className={styles.input} type='text' name="name" onChange={handleInputChange} />
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
