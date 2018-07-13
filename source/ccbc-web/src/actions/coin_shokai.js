// コイン照会→コメント照会に遷移する際に渡す値を設定するアクションクラス

export function setTohyoData(pTTohyoPk, pTitle, pTohyosha, pCoin) {
  return {
    type: 'SETTOHYODATA',
    tTohyoPk: pTTohyoPk,
    tZoyoPk: null,
    title: pTitle,
    tohyosha: pTohyosha,
    coin: pCoin
  }
}

export function setZoyoData(pTZoyoPk, pTitle, pTohyosha, pCoin) {
  return {
    type: 'SETZOYODATA',
    tTohyoPk: null,
    tZoyoPk: pTZoyoPk,
    title: pTitle,
    tohyosha: pTohyosha,
    coin: pCoin
  }
}
