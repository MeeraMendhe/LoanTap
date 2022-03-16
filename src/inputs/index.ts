import { CardEvent } from '../types'
import { cardEventsFromDifferentCards } from './cardEventsFromDifferentCards'
import { incompleteCardEvents } from './incompleteCardEvents'

const events: CardEvent[] = ([] as CardEvent[])
  .concat(cardEventsFromDifferentCards)
  .concat(incompleteCardEvents)

export const generateInput = (n: number): CardEvent[] => {
  const length = Math.floor(n / events.length)
  return Array.from({ length }, () => events).flat()
}
