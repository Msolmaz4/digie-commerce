import React,{useRef} from 'react'
import styles from  './Register.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt,faMailBulk} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContex'

 const Register1 = () => {
  const{ register} = useContext(UserContext)
  const inputRef = useRef({
    email:'',
    password:'',
    name:'',
    surname:''
  })



  const handleInputChange =(e)=>{
    const name = e.target.name
    const value = e.target.value 

    inputRef.current[name]=value
  }
  return (
    <div>
      <div className={styles.contanier}>
        <div className={styles.imageContanier}>
          <img src='/1.webp' alt='login' className={styles.img}/>
        </div>
        <div className={styles.formContanier}>
          <form className={styles.form} onSubmit = {(e)=> register( e,inputRef.current)}>
            <div className={styles.formTitle}>
              <h1 className={styles.title}>Register</h1>
            </div>
            <div className={styles.formInput}>
              <div className={styles.inputContanier}>
                <label className={styles.input}>Name</label>
                <div className={styles.inputGrup}></div>
                  <FontAwesomeIcon icon={faUserAlt} className={styles.icon}/>
                  <input className={styles.input} type='text' name='name' onChange={handleInputChange} />
              </div>
              <div className={styles.inputContanier}>
                <label className={styles.input}>Surname</label>
                <div className={styles.inputGrup}></div>
                  <FontAwesomeIcon icon={faUserAlt} className={styles.icon}/>
                  <input className={styles.input} type='text' name='name' onChange={handleInputChange} />
              </div>
              <div className={styles.inputContanier}>
                <label className={styles.input}>Email</label>
                <div className={styles.inputGrup}></div>
                  <FontAwesomeIcon icon={faUserAlt} className={styles.icon}/>
                  <input className={styles.input} type='text' name='name' onChange={handleInputChange} />
              </div>
              <div className={styles.inputContanier}>
                <label className={styles.input}>Password</label>
                <div className={styles.inputGrup}></div>
                  <FontAwesomeIcon icon={faUserAlt} className={styles.icon}/>
                  <input className={styles.input} type='text' name='name' onChange={handleInputChange} />
              </div>



                <button
                 onSubmit = {(e)=> register( e,inputRef.current)}
                type='submit' className={styles.butoon}>Register</button>
            </div>

          </form>


        </div>

      </div>
    </div>
  )
}

export default Register1
