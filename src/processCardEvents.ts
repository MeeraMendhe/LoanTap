import { CardEvent, Transaction } from './types'

type CardTransactionMapping = {
  [cardId: string]: Transaction
}

/**
 * Write a function that receives a large batch of card events from multiple cards,
 * returning an object which maps from cardId -> valid transaction. Only cardIds with
 * a valid transaction should appear in the returned object.
 *
 * A valid transaction is a pair of card events, starting with a RESERVATION event
 * and finishing with either a CONFIRMATION or CANCELLATION event.
 *
 * The input is an array of unprocessed card events. Some events might be duplicated
 * or missing. For duplicated events, you may only use one of its occurrences and
 * discard the rest. Missing events invalidate the transaction.
 *
 * @param cardEvents CardEvent[] List of card events
 * @returns CardTransactionMapping Valid transactions grouped by cardId
 */
export const processCardEvents = (cardEvents: CardEvent[]): CardTransactionMapping => {
    
  console.log(cardEvents,"Card")
  // logic
  let object: { [CardId: string]: CardEvent[] } = {} // object delclaration what is key and what is array.........
  for (let i = 0; i < cardEvents.length; i++) {
    if (cardEvents[i].type == 'RESERVATION' && cardEvents[i].cardId == cardEvents[i + 1].cardId) {
      if (cardEvents[i + 1].type == 'CANCELLATION' || cardEvents[i + 1].type == 'CONFIRMATION') {
        let transactions: CardEvent[] = []
        transactions.push(cardEvents[i])
        transactions.push(cardEvents[i + 1])
        object[cardEvents[i].cardId] = transactions
      }
    }
  }
  return object as CardTransactionMapping
}
