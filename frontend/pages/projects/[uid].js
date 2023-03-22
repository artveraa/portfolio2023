import { createClient } from "@prismicio/client";

export default function Project({project}) {
    return (
        <>
            <h1>{project.data.title}</h1>

        </>
    );
}

export async function getServerSideProps(context) {

}