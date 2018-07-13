const initialState = {
  tTohyoPk: 35,
  tZoyoPk: null,
  title: '札幌の未来について',
  tohyosha: '苫小牧　太郎',
  coin: 100
}

export function coinShokaiReducer(state = initialState, action) {
  if (action.type === 'SETTOHYODATA') {
    return {
      tTohyoPk: action.tTohyoPk,
      tZoyoPk: action.tZoyoPk,
      title: action.title,
      tohyosha: action.tohyosha,
      coin: action.coin
    }
  } else if (action.type === 'SETZOYODATA') {
    return {
      tTohyoPk: action.tTohyoPk,
      tZoyoPk: action.tZoyoPk,
      title: action.title,
      shimei: action.shimei,
      coin: action.coin
    }
  }
  return state
}
