import styles from './Header.module.css'
import imgLogo from './../../assets/Home/Logo.png'
import { Link } from 'react-router-dom'
import { useUser } from '../../core/hooks/useUser'

export const Header = () => {
  const { logout, isAuth } = useUser()

  return (
    <header className={styles.home_header}>
      <div className={styles.home_wrapper_logo}>
        <img src={imgLogo} alt="" />
      </div>
      <div className={styles.home_wrapper_links}>
        <ul className={styles.home_list_links}>
          <li className={styles.home_item_link}>
            <Link to="/" className={styles.home_link}>
              Inicio
            </Link>
          </li>
          <li className={styles.home_item_link}>
            <Link to="/procesos-academicos" className={styles.home_link}>
              Procesos académicos
            </Link>
          </li>
          <li className={styles.home_item_link}>
            <Link to="/mis-procesos-academicos" className={styles.home_link}>
              Mis procesos académicos
            </Link>
          </li>
          <li className={styles.home_item_link}>
            <Link to="/about_us" className={styles.home_link}>
              Conócenos
            </Link>
          </li>
          <li className={styles.home_item_link}>
            {isAuth ? (
              <Link
                to="/login"
                className={styles.home_link_admin}
                onClick={logout}
              >
                <span className={styles.link_admin_span}>Cerrar sesión</span>
              </Link>
            ) : (
              <Link to="/login" className={styles.home_link_admin}>
                <span className={styles.link_admin_span}>Iniciar sesión</span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  )
}
