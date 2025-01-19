
import styles from "./page.module.css";
import Navbar from "../components/Navigation"
import Fullbody from "../components/fullbody"
export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar ></Navbar>
      <Fullbody ></Fullbody>
      </div>
  );
}
