import { useState } from "react"

const tabs = [
  {
    title: "Description",
    text: "This is a great product."
  },
  {
    title: "Reviews",
    text: "This is reviews."
  },
  {
    title: "Details",
    text: "This is details."
  }
];

const Tabs = () => {
  const [content, setContent] = useState(0);

  return (
    <div className="tabs-container">
      <ul className="tabs">
        {tabs.map(((tab, index) => 
          <li onClick={() => setContent(index)}>{tab.title}</li>
        ))}
      </ul>
      <Tab title={tabs[content].title}>
        {tabs[content].text}
      </Tab>
    </div>
  )
}

const Tab = ({title, children}) => {
  return (
    <div className="content">
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default Tabs
