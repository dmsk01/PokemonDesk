import req from '../utils/request';

import { Dispatch } from 'react';
import { ITypesRequest } from '../interface/pokemons';

const initialState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
};

enum PokemonActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
}

interface TypesAction {
  type: PokemonActionTypes;
  payload?: string[];
}

type ActionTypes = TypesAction;

const pokemons = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case PokemonActionTypes.FETCH_TYPES:
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case PokemonActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case PokemonActionTypes.FETCH_TYPES_REJECT:
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonActionTypes.FETCH_TYPES });
    try {
      const response = await req<ITypesRequest>('getPokemonTypes');
      console.log(response);
      dispatch({ type: PokemonActionTypes.FETCH_TYPES_RESOLVE, payload: response });
    } catch (error) {
      dispatch({ type: PokemonActionTypes.FETCH_TYPES_REJECT, payload: error });
    }
  };
};

export default pokemons;
