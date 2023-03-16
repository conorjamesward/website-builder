import StandardLayout from "@/layout/StandardLayout";
import Head from "next/head";
import pageData from "../content/pageData";

export default function Home() {
	const { home } = pageData;

	return (
		<>
			<Head>{home.headTitle}</Head>
			<StandardLayout>home</StandardLayout>
		</>
	);
}
