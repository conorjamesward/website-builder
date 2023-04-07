import MyHeader from "../components/MyHeader";
import Footer from "../components/Footer";
import about from "../pages/about";

export default function Layout({children}){

  const links = [{title:'Home', url:'/'}, 
  {title:'About', url:'/about'}, 
  {title:'FAQ', url:'/faq'}]

  const branding = {title:'Tuk Template', icon:'icon here'}

  


  return(
    <>
      <MyHeader links={links} branding={branding}/>
        {children}
      
    </>
  );
}