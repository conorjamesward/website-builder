import StandardLayout from "@/layout/StandardLayout"
import Head from 'next/head'
import pageData from "./pageData"


export default function about(){

  const {about} = pageData
  
  return(
    <>
      <Head>
        {about.headTitle}
      </Head>
      <StandardLayout>
        about
      </StandardLayout>
    </>
  );
}