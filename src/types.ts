export interface CardEvent {
  id: string
  cardId: string
  amount: number
  type: "RESERVATION" | "CANCELLATION" | "CONFIRMATION"
}

export interface StartingCardEvent extends CardEvent {
  type: "RESERVATION"
}

export interface FinishingCardEvent extends CardEvent {
  type: "CANCELLATION" | "CONFIRMATION"
}

export type Transaction = CardEvent[] // TODO: Make stricter
