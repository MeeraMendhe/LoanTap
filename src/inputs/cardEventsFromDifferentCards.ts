import { CardEvent } from '../types'

export const cardEventsFromDifferentCards: CardEvent[] = [
  {
    amount: 11111,
    cardId: 'ALICE',
    id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
    type: 'RESERVATION',
  },
  {
    amount: 11111,
    cardId: 'ALICE',
    id: '0a646991-4898-4751-8bf6-c266a6728885',
    type: 'CONFIRMATION',
  },

  {
    amount: 22222,
    cardId: 'BOB',
    id: '2ace1ea9-b57e-4d0c-926c-d570450d17c6',
    type: 'RESERVATION',
  },
  {
    amount: 22222,
    cardId: 'BOB',
    id: '98d4608c-862a-4b46-9839-2faa30a65d30',
    type: 'CANCELLATION',
  },
]
