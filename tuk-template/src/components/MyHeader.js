import Link from "next/link";
import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

export default function MyHeader({links, branding, socialMedia}){

  const [show, setShow] = useState(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile && show) {
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.hamburger')) {
        setShow(false);
      }
    });
  }

  return(
    <header className='flex flex-row justify-between bg-secondary'>
      {isMobile &&
        <div className="flex flex-col py-1">
          <button className={show ? "hamburger hamburger-open" : "hamburger"} onClick={() => {
            setShow(!show)
          }}>
            <span className="bg-textColor"></span>
            <span className="bg-textColor"></span>
            <span className="bg-textColor"></span>
            <span className="bg-textColor"></span>
          </button>
          <nav>
            <ul className={show ? 'bg-secondary w-full fixed flex flex-col gap-2' : "hidden"}>
              {
                links.map(link =>
                  <li className={`font-semibold text-lg pl-2 py-2 shadow-inner`} key={`${link.title}-mobile`}>
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
          <nav className="mt-4">
            <ul className="flex flex-row gap-5 px-10">
              {
                links.map(link =>
                  <li className='font-semibold text-xl w-full' key={link.title}>
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