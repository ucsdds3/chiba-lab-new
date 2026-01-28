import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Background imagePosition="right" image="https://placehold.co/600x400/EEE/31343C" title="Chiba Lab" text={["We are a team of researchers focused on understanding the neural systems and principles underlying aspects of learning, memory, affect, and attention, with an emphasis on neural plasticity."]} />
      <Background imagePosition="left" image="https://placehold.co/600x400/EEE/31343C" title="Chiba Lab" text={["We are a team of researchers focused on understanding the neural systems and principles underlying aspects of learning, memory, affect, and attention, with an emphasis on neural plasticity."]} />
      <Projects/>
    </div>
  );
}
