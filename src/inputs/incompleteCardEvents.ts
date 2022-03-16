import { CardEvent } from '../types'

export const incompleteCardEvents: CardEvent[] = [
  {
    amount: 33333,
    cardId: 'ALICE',
    id: 'db811933-8f69-4640-8c95-2ef369629534',
    type: 'RESERVATION',
  },
  {
    amount: 55555,
    cardId: 'BOB',
    id: 'd28c2b4a-17f6-4f95-b9df-5f68b452aaac',
    type: 'RESERVATION',
  },

  {
    amount: 9999,
    cardId: 'CHARLIE', // starting event
    id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
    type: 'RESERVATION',
  },
  {
    amount: 9999,
    cardId: 'CHARLIE', // finishing event
    id: '0a646991-4898-4751-8bf6-c266a6728885',
    type: 'CONFIRMATION',
  },
]
