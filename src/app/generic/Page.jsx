import { Layout } from "antd";
import { Divider } from "antd/es";
import styled from "styled-components";
const { Header } = Layout;
const Page = ({ title, content = <div /> }) => {
  return (
    <_Page>
      <_Header>{title}</_Header>
      <Divider
        style={{
          margin: "0",
        }}
      />
      <PageContent>{content}</PageContent>
    </_Page>
  );
};

export default Page;
const _Page = styled.div`
  background-color: #fff;
`;

const PageContent = styled.div`
  overflow: auto !important;
`;
const _Header = styled(Header)`
  background-color: #fff;
  font-weight: 500;
  font-size: 2rem;
`;
