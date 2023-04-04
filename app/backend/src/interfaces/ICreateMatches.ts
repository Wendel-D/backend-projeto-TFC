export interface ICreateMatches {
  status?: number,
  message?: string,
  homeTeamId: number
  awayTeamId: number
  homeTeamGoals: number
  awayTeamGoals: number
}
