import React  from "react";
import styles from "./RegisterPage.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserAlt,faMailBulk} from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react";

//get stardet react fontaweso v5
export default function RegisterPage() {
    const inputRef = useRef({
        email:'',
        password:'',
        name:'',
        surname:''

    })

const handleInputChange = (e)=>{
    const name = e.target.name
    const value = e.target.value

    inputRef.current[name] = value


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
                    <label className={styles.input}>Name</label>
                    <div className={styles.inputContanier}>
                      <FontAwesomeIcon icon={faUserAlt} className={styles.icons} />
                      <input className={styles.input} type='text' name="name" onChange={handleInputChange} />
                    </div>
                    <div className={styles.inputContanier}>
                    <label className={styles.input}>surnae</label>
                      <FontAwesomeIcon icon={faUserAlt} className={styles.icons} />
                      <input className={styles.input} type='text' name="surname" onChange={handleInputChange} />
                    </div>
                    <div className={styles.inputContanier}>
                    <label className={styles.input}>Email</label>
                      <FontAwesomeIcon icon={faUserAlt} className={styles.icons} />
                      <input className={styles.input} type='text' name="email" onChange={handleInputChange} />
                    </div>
                    <div className={styles.inputContanier}>
                    <label className={styles.input}>Password</label>
                      <FontAwesomeIcon icon={faUserAlt} className={styles.icons} />
                      <input className={styles.input} type='text' name="password" onChange={handleInputChange} />
                    </div>
                    <button type="submit" className={styles.button}>Register</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
