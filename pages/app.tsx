import { AppProps } from "next/app";
import { Component } from "react";


interface MyAppProps {
Component: React.ElementType;
pageProps:any;
}

export default function MyApp({Component,pageProps}: MyAppProps) {
    return <Component {...pageProps}/>
}

