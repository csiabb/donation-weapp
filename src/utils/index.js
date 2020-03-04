/*
Copyright ArxanChain Ltd. 2020 All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function formatMoney (money) {
  let result = []
  let count = 0
  const _money = money.toString()
  for (let i = _money.length - 1; i >= 0; i -= 1) {
    if (count === 3) {
      result.unshift(',')
      count = 0
    }
    if (count !== 3) {
      count += 1
    }
    result.unshift(_money[i])
  }
  return result.join('')
}

export default {
  formatTime,
  formatMoney
}
