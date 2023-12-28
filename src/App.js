import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import Pees from "./app/Pees";

function App() {
  return (
    <BrowserRouter basename="/sleep-with-pees">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#015871",
          },
          components: {
            Menu: {
              colorPrimary: "#fff",
              itemBg: "#015871",
              colorText: "#fff",
            },
          },
        }}
      >
        <Pees />
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
