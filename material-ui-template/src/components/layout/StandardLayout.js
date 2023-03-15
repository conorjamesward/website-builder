import BasicHeader from "@/header/BasicHeader";

export default function StandardLayout({children}){
  return(
    <>
      <BasicHeader/>
      {children}
    </>
  );
}