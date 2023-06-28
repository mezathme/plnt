import {Footer, Header} from "@/components/layout";
import {Intro, Price} from "@/src/views";

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <Intro/>
                <Price/>
            </main>
            <Footer/>
        </>

    )
}
