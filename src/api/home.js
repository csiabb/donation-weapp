/*
Copyright ArxanChain Ltd. 2020 All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

import { get } from '@/api/index'

export function pubList (params) {
  return get('/pub/list', params)
}

export function pubSupplies (params) {
  return get('/pub/supplies', params)
}
