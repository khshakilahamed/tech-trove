import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const RootLayout = ({ children }) => {
  const { data: session } = useSession();
  const menuItems = (
    <>
      <li tabIndex={0}>
        <details>
          <summary>Components</summary>
          <ul className="p-2 w-[180px]">
            <li>
              <Link href="/processor">CPU / Processor</Link>
            </li>
            <li>
              <Link href="/motherboard">Motherboard</Link>
            </li>
            <li>
              <Link href="/ram">RAM</Link>
            </li>
            <li>
              <Link href="/powerSupply">Power Supply Unit</Link>
            </li>
            <li>
              <Link href="/storageDevice">Storage Device</Link>
            </li>
            <li>
              <Link href="/monitor">Monitors</Link>
            </li>
            <li>
              <Link href="/others">Others</Link>
            </li>
          </ul>
        </details>
      </li>
      {session?.user ? (
        <li>
          <a onClick={() => signOut()} className="dropdown border">
            Logout
          </a>
        </li>
      ) : (
        <li>
          <Link href="/login" className="dropdown border">
            Login
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="">
      <div className="bg-base-100">
        <div className="navbar  max-w-[1280px] mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <Link href="/">
              <p className="normal-case text-3xl font-semibold">TechTrove</p>
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{menuItems}</ul>
            </div>
            <Link
              href="/pcBuilder"
              className="btn btn-outline hover:bg-blue-500 border-blue-500 text-blue-500"
            >
              Pc Builder
            </Link>
          </div>
        </div>
      </div>
      <hr />

      <div className="max-w-[1280px] mx-auto">{children}</div>

      <div className="bg-base-200 ">
        <footer className="max-w-[1280px] mx-auto footer p-10 text-base-content">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
          <div>
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RootLayout;

// import React from "react";
// import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
// const { Header, Content, Footer } = Layout;
// import { useState } from "react";
// import { DownOutlined } from "@ant-design/icons";
// import { Dropdown, Space } from "antd";

// import logo from "@/assets/logo/techTrove 250x200 white-text.png";
// import Image from "next/image";
// import Link from "next/link";
// import { useSession, signOut } from "next-auth/react";
// import { useRouter } from "next/router";
// const RootLayout = ({ children }) => {
//   const { data: session } = useSession();

//   const router = useRouter();

//   // console.log(session);

//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   const [size, setSize] = useState("large");

//   const [open, setOpen] = useState(false);
//   const handleMenuClick = (e) => {
//     if (e.key === "3") {
//       setOpen(false);
//     }
//   };
//   const handleOpenChange = (flag) => {
//     setOpen(flag);
//   };
//   const items = [
//     {
//       label: <Link href="/processor">CPU / Processor</Link>,
//       key: "1",
//     },
//     {
//       label: <Link href="/motherboard">Motherboard</Link>,
//       key: "2",
//     },
//     {
//       label: <Link href="/ram">RAM</Link>,
//       key: "3",
//     },
//     {
//       label: <Link href="/powerSupply">Power Supply Unit</Link>,
//       key: "4",
//     },
//     {
//       label: <Link href="/storageDevice">Storage Device</Link>,
//       key: "5",
//     },
//     {
//       label: <Link href="/monitor">Monitors</Link>,
//       key: "6",
//     },
//     {
//       label: <Link href="/others">Others</Link>,
//       key: "7",
//     },
//   ];

//   return (
//     <Layout className="layout">
//       <Header
//         style={{
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <div className="demo-logo max-w-[200px]">
//           {/* <img src={logo} alt="logo" /> */}
//           <Link href="/">
//             <Image
//               className="mt-6 cursor-pointer"
//               src={logo}
//               width="200"
//               height="100"
//               responsive
//               alt="logo"
//             />
//           </Link>
//         </div>

//         <div className="flex justify-between w-full">
//           <div className="ml-10">
//             <Dropdown
//               menu={{
//                 items,
//                 onClick: handleMenuClick,
//               }}
//               onOpenChange={handleOpenChange}
//               open={open}
//             >
//               <a className="text-white" onClick={(e) => e.preventDefault()}>
//                 <Space>
//                   Components
//                   <DownOutlined />
//                 </Space>
//               </a>
//             </Dropdown>
//           </div>

//           <div className="flex gap-2 items-center">
//             <Link href="/pcBuilder">
//               <Button type="primary" size={size}>
//                 PC Builder
//               </Button>
//             </Link>

//             {session?.user ? (
//               <Button onClick={() => signOut()} type="primary" size={size}>
//                 Logout
//               </Button>
//             ) : (
//               <Button
//                 onClick={() => router.push("/login")}
//                 type="primary"
//                 size={size}
//               >
//                 Login
//               </Button>
//             )}
//           </div>
//         </div>
//       </Header>
//       <Content>
//         <div
//           className="site-layout-content min-h-[85vh]"
//           style={{
//             background: colorBgContainer,
//           }}
//         >
//           {children}
//         </div>
//       </Content>
//       <Footer
//         style={{
//           textAlign: "center",
//         }}
//       >
//         Tech Trove ©{new Date().getFullYear()} All Copyright Reserved
//       </Footer>
//     </Layout>
//   );
// };
// export default RootLayout;
