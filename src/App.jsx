import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import data from "./data/data.json";
import Post from "./pages/Post/Post";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

function App() {
  const modules = import.meta.glob("./pages/**/*.jsx", { eager: true });

  const pages = {};

  data.navlink.forEach((item) => {
    const folder = item.component; // используем component для пути
    const path = `./pages/${folder}/${folder}.jsx`;

    if (modules[path]) {
      pages[item.name] = modules[path].default;
    } else {
      console.warn(`Component not found: ${path}`);
    }
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {data.navlink.map((item, index) => {
          const Component = pages[item.name];
          if (!Component) return null;

          if (item.index) {
            return <Route key={index} index element={<Component />} />;
          }

          return <Route key={index} path={item.url} element={<Component />} />;
        })}
      </Route>
      <Route path="blog/:postId" element={<Post />} />
      <Route path="privacyPolicy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;

