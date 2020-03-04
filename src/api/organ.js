
/*
Copyright ArxanChain Ltd. 2020 All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

import { get } from '@/api/index'

export function orgCharities (params) {
  return get('/org/charities', params)
}

export function orgDetail (params) {
  return get('/org/charities/detail', params)
}
