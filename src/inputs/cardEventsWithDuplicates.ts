import { CardEvent } from '../types'

export const cardEventsWithDuplicates: CardEvent[] = [
  {
    amount: 22222,
    cardId: 'ALICE',
    id: '3d311f2f-1f36-4dc6-81a3-ada9af60f74f', // duplicate id  :O
    type: 'RESERVATION',
  },

  {
    amount: 22222,
    cardId: 'ALICE',
    id: '3d311f2f-1f36-4dc6-81a3-ada9af60f74f', // duplicate id  :O
    type: 'RESERVATION',
  },
  {
    amount: 22222,
    cardId: 'ALICE',
    id: '0099ebb1-b63f-46d1-b481-1ff88b75d527',
    type: 'CANCELLATION',
  },
]
