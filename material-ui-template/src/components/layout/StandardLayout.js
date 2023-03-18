import BasicHeader from "@/header/BasicHeader";
import BasicFooter from "@/footer/BasicFooter";
import footer from "@/content/footer";

export default function StandardLayout({children}){
  return(
    <>
      <BasicHeader/>
      <div id='headerSpacer'></div>
      {children}
      <BasicFooter footerData={footer}/>
    </>
  );
}