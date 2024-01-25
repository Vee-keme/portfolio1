import Navbar from "../Navbar";
import MainContent from "../MainContent";
import SideContent from "../SideContent";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
      className="HomePage"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      {/* <Navbar /> */}
      <div className="container">
        <MainContent />
        <SideContent />
      </div>
    </motion.div>
  );
}
