import { Sources, Sinks } from './types'
import { MainPage } from './pages/main_page'

export function main(sources: Sources): Sinks {
  const mainPage = MainPage(sources)
  return {
    DOM: mainPage.DOM,
  }
}
