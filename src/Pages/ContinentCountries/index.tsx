import { useParams } from "react-router-dom"
import Title from "../../components/Title"


export const ContinentCountries = () => {
    const code = useParams();

    console.log(code.code)
    return (
        <>
            <Title>a
                {/* Países do/a: {${}} */}
            </Title>
        </>
    )
}