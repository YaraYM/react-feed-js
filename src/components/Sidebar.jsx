import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1738249034651-1896f689be58?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
        
            <div className={styles.profile}>
                <img 
                    className={styles.avatar} 
                    src="https://scontent.fcpq1-1.fna.fbcdn.net/v/t1.6435-1/130551099_104040914916928_7863492300930494640_n.jpg?stp=c0.0.960.960a_dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=hOXpMsAtcO4Q7kNvgH8JXHL&_nc_oc=AdlZEp3WhJP-oemDPyvu0XkULgDlOwzmnO8ymf0aqoLVzTp4EiS6Q2uGS0bnm4OI4Wo&_nc_zt=24&_nc_ht=scontent.fcpq1-1.fna&_nc_gid=-aPx90_PAVlI8EvgVFVBMA&oh=00_AYFdMSCah4kWxQ0RnObKZlst32PvY8yOYyUkpdOXFG5jnw&oe=6813655E" 
                />

                <strong>Tony Corleone</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}