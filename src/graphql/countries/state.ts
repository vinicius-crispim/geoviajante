import { makeVar } from "@apollo/client";
import { ICountry } from "../../interfaces/ICountry";

export const countriesVar = makeVar<ICountry[]>([])
export const filtroVar = makeVar("");

export const countryVar = makeVar<ICountry>({} as ICountry)

export const countriesByContinentVar = makeVar<ICountry[]>([]);
export const filtroByContinentVar = makeVar("");