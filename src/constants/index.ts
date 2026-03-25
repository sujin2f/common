import { ConstToType } from '../types'

export * from './archive'
export * from './post'
export * from './image'
export * from './mongo'
export * from './security'
export * from './wordpress'

export const PER_PAGE = 12

/**
 * Quantum Boolean - A three-state boolean value (TRUE, FALSE, MOD).
 */
export const QuantumBool = {
    FALSE: false,
    MOD: 0.5,
    TRUE: true,
} as const

/**
 * The type of QuantumBool values.
 */
export type QuantumBool = ConstToType<typeof QuantumBool>
