import "./portafolioList.scss";

export default function PortafolioList({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? "portafolioList active" : "portafolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
