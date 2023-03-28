import Link from "next/link";
import { useState, useRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

export default function MyHeader({links, branding, socialMedia}){

  const [show, setShow] = useState(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const hamburger = useRef(null);

  return(
    <header className="flex flex-row justify-between">
      {isMobile &&
        <div className="flex flex-col py-1 px-2">
          <button className={show ? "hamburger hamburger-open" : "hamburger"} onClick={() => {
            setShow(!show)
          }}>
            <span className="bg-black"></span>
            <span className="bg-black"></span>
            <span className="bg-black"></span>
            <span className="bg-black"></span>
          </button>
          <nav>
            <ul className={show ? "flex flex-col gap-2" : "hidden"}>
              {
                links.map(link =>
                  <li>
                    <Link href={link.url}>{link.title}</Link>
                  </li>
                )
              }
            </ul>
          </nav>
        </div>
      }
      <div className="flex flex-row gap-2">
        {branding.icon}
        <h1>{branding.title}</h1>
      </div>
      {!isMobile &&
        <>
          <nav>
            <ul className="flex flex-row gap-2">
              {
                links.map(link =>
                  <li>
                    <Link href={link.url}>{link.title}</Link>
                  </li>
                )
              }
            </ul>
          </nav>
          {socialMedia &&
            <div>
              {socialMedia.map(social => 
                <Link href={social.url}>{social.icon}</Link>
              )}
            </div>
          }
        </>
      }
    </header>
  );
}