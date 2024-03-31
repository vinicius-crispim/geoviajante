export interface ICountry {
  name: string,
  awsRegion: string,
  capital: string,
  code: string,
  continent: {
    name: string,
    code: string
  },
  currencies: [
    string
  ],
  currency: string,
  emoji: string,
  emojiU: string,
  languages: [
    {
      name: string,
      code: string,
      native: string
    }
  ],
  native: string,
  phones: [
    string
  ],
  phone: string,
  states: [
    {
      name: string
    }
  ],
  subdivisions: [
    {
      name: string
    }
  ]

}