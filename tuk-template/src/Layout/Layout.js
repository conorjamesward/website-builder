import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";

export default function Layout({children}){

  const links = [{title:'Home', url:'/'}, 
  {title:'About', url:'/about'}, 
  {title:'FAQ', url:'/faq'}]

  const branding = {title:'Tuk Template', icon:'icon here'}


  return(
    <>
      <MyHeader links={links} branding={branding}/>
        {children}
      <MyFooter links={links} branding={branding}/>
    </>
  );
}