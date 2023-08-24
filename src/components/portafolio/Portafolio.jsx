import { useEffect, useState } from "react";
import PortafolioList from "../poratafolioList/portafolioList";
import {
  wordpressWebPortafolio,
  webAppPortfolio,
  mobileAppPortfolio,
  contentCreatorPortfolio,
  seoPortfolio,
} from "../../data";
import "./portafolio.scss";

export default function Portafolio() {
  const [selected, setSelected] = useState("Wordpress");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "Wordpress",
      title: "Wordpress Webs",
    },
    {
      id: "Webs",
      title: "Webs App",
    },
    {
      id: "Mobile",
      title: "Mobile App",
    },
    {
      id: "Content",
      title: "Content Creator",
    },
    {
      id: "SEO",
      title: "SEO",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "Wordpress":
        setData(wordpressWebPortafolio);
        break;
      case "Webs":
        setData(webAppPortfolio);
        break;
      case "Mobile":
        setData(mobileAppPortfolio);
        break;
      case "Content":
        setData(contentCreatorPortfolio);
        break;
      case "SEO":
        setData(seoPortfolio);
        break;
      default:
        setData(wordpressWebPortafolio);
    }
  }, [selected]);
  return (
    <div className="portafolio" id="portafolio">
      <h1>Portafolio</h1>
      <ul>
        {list.map((item) => (
          <PortafolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((data) => (
          <div className="item" key={data.id}>
            <img src={data.img} alt={data.title} />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
