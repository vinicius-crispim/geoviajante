import { makeVar } from "@apollo/client";
import { ICountry } from "../../interfaces/ICountry";

export const countriesVar = makeVar<ICountry[]>([])

export const filtroVar = makeVar("");