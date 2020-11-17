import React from "react"
import BottomBox from "../components/BottomBox"
import Header from "../components/Header"
import Pics from "../components/Pics"
import ScrollingText from "../components/ScrollingText"

export default function Home() {
    return (
        <div className="home-box">
            <Header />
            <Pics />
            <ScrollingText />
            <BottomBox />
        </div>
    )
}