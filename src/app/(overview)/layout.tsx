import { Banner } from '../ui/banner';
import { Busqueda } from '../ui/busqueda';
import { GenerosSelect } from '../ui/generos';
import styles from '@/app/home.module.css';
import NavBar from '../ui/navbar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <>
      <NavBar />
      <Banner />
      <div className={styles.containerMain}>
        <aside className={styles.sidebar}>
          <div className={styles.busqueda}>
            <Busqueda />
          </div>
          <div className={styles.generos}>
            <GenerosSelect />
          </div>
        </aside>
        <main className={`${styles.main} mainCarruseles`}>{children}</main>
      </div>
    </>
  );
}
