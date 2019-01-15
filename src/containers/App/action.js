import {
  HELLO_WORLD,
  ERROR_OCCURED
} from '../../utils/constants'

export const helloWorld = () => ({
  type: HELLO_WORLD
})

export const errorOccured = err => ({
  type: ERROR_OCCURED,
  err
})
