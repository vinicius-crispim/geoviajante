import Button from '../Button'
import Card from './Card'
import * as S from './Curiosities'
import curiosities from './curiosidades.json'
const Curiosities = () => {

    const getThreeUniqueRandomItems = () => {
        const result: { portugues: string; ingles: string; curiosidade: string }[] = [];

        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * curiosities.curiosidades_paises.length);
            let item;
            if (result.length > 0) {
                do {
                    item = curiosities.curiosidades_paises[randomIndex];
                } while (result.includes(item));
            } else {
                item = curiosities.curiosidades_paises[randomIndex];
            }
            result.push(item);
        }

        return result;
    }


    const randomCuriosities = getThreeUniqueRandomItems()
    return (
        <S.CuriositiesStyled>
            <ul>
                {
                    randomCuriosities.map(data => {
                        console.log(randomCuriosities)
                        return (
                            <Card data={data} />
                        )
                    })
                }
            </ul>
            <Button onClick={() => { }}>Ver Outras</Button>
        </S.CuriositiesStyled>
    )
}

export default Curiosities;