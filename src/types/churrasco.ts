export enum Ingredientes {
  carne = 400,
  linguica = 200,
  frango = 200,
  paoAlho = 100
}

export interface IIngredientes {
  carne: boolean
  linguica: boolean
  frango: boolean
  paoAlho: boolean
}
export interface IIngredientesResults {
  carne: number
  linguica: number
  frango: number
  paoAlho: number
}