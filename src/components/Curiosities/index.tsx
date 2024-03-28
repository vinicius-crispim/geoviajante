import { useEffect, useState } from 'react'
import Button from '../Button'
import Card from './Card'
import * as S from './Curiosities'
import curiosities from './curiosidades.json'
const Curiosities = () => {
    const [contador, setContador] = useState(3);

    const [randomCuriosities, setRandomCuriosities] = useState<{ portugues: string; ingles: string; curiosidade: string }[]>();

    const getThreeUniqueRandomItems = () => {
        const result: { portugues: string; ingles: string; curiosidade: string }[] = [];
        
        setContador(contador + 3);

        contador === curiosities.curiosidades_paises.length && setContador(3);

        for (let i = contador - 3; i < contador; i++){
            result.push(curiosities.curiosidades_paises[i]);
        }

        setRandomCuriosities(result);
    }

    useEffect(() => {
        getThreeUniqueRandomItems();
        setContador(contador + 3);
    }, [])
    return (
        <S.CuriositiesStyled>
            <ul>
                {
                    randomCuriosities?.map(data => {
                        return (
                            <Card key={data.portugues} data={data} />
                        )
                    })
                }
            </ul>
            <Button onClick={() => { 
                
                getThreeUniqueRandomItems()
            }}>Ver Outras</Button>
        </S.CuriositiesStyled>
    )
}

export default Curiosities;