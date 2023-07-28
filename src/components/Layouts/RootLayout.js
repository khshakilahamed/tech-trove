import React from "react";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

import logo from "@/assets/logo/techTrove 250x200 white-text.png";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const RootLayout = ({ children }) => {
  //   const { data: session } = useSession();

  //   console.log(session);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [size, setSize] = useState("large");

  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === "3") {
      setOpen(false);
    }
  };
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const items = [
    {
      label: <Link href="/processor">CPU / Processor</Link>,
      key: "1",
    },
    {
      label: <Link href="/motherboard">Motherboard</Link>,
      key: "2",
    },
    {
      label: <Link href="/ram">RAM</Link>,
      key: "3",
    },
    {
      label: <Link href="/powerSupply">Power Supply Unit</Link>,
      key: "4",
    },
    {
      label: <Link href="/storageDevice">Storage Device</Link>,
      key: "5",
    },
    {
      label: <Link href="/monitor">Monitors</Link>,
      key: "6",
    },
    {
      label: <Link href="/others">Others</Link>,
      key: "7",
    },
  ];

  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo max-w-[200px]">
          {/* <img src={logo} alt="logo" /> */}
          <Image
            className="mt-6"
            src={logo}
            width="200"
            height="100"
            responsive
            alt="logo"
          />
        </div>

        <div className="flex justify-between w-full">
          <div className="ml-10">
            <Dropdown
              menu={{
                items,
                onClick: handleMenuClick,
              }}
              onOpenChange={handleOpenChange}
              open={open}
            >
              <a className="text-white" onClick={(e) => e.preventDefault()}>
                <Space>
                  Components
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>

          <div>
            <Button type="primary" size={size}>
              PC Builder
            </Button>
            <Button type="primary" size={size}>
              Login
            </Button>
            <Button type="primary" size={size}>
              Logout
            </Button>
          </div>
        </div>
      </Header>
      <Content>
        <div
          className="site-layout-content min-h-[85vh]"
          style={{
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Tech Trove ©{new Date().getFullYear()} All Copyright Reserved
      </Footer>
    </Layout>
  );
};
export default RootLayout;
