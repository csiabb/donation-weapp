/*
Copyright ArxanChain Ltd. 2020 All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

import conf from './conf'

const checkCode = (res) => {
  // 对于自定义code进行统一的处理
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.data.code === 404) {
    // TODO
    return res
  }
  if (res.statusCode === 401 || res.data.ErrCode === 401) {
    try {
      // TODO 跳转至无权限
    } catch (e) {
    }
    return res
  }
  if (res.statusCode === 400) {
    // TODO
    return res
  }

  if (res.statusCode === 500) {
    // TODO
    return res
  }
  if (res.statusCode !== 200) {
    // TODO
  }
  return res
}

// 请求封装
function request (baseUrl, url, method, data, header = {}, loading = true) {
  const token = wx.getStorageSync('userInfo') && wx.getStorageSync('userInfo').token ? wx.getStorageSync('userInfo').token : ''
  if (!loading) {
    wx.showLoading({
      title: '加载中' // 数据请求前loading
    })
  }
  let defaultHeader = {
    'content-type': 'application/json', // 默认值
    'X-Auth-Token': token
  }
  for (let n in header) {
    if (n & header[n]) {
      defaultHeader[n] = header[n]
    }
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + '/api/v1' + url,
      method: method,
      data: data,
      header: defaultHeader,
      success: (res) => {
        wx.hideLoading()
        resolve(res.data)
      },
      fail: (res) => {
        wx.hideLoading()
        reject(res)
      },
      complete: (res) => {
        checkCode(res)
        wx.hideLoading()
      }
    })
  }).catch(() => {
  })
}

// loading true 不显示 loading效果
// loading false 显示 loading效果
// loading 默认不显示 loading效果
export function get (url, data, loading) {
  return request(conf.donation, url, 'GET', data, {}, loading)
}

export function post (url, data, loading) {
  return request(conf.donation, url, 'POST', data, {}, loading)
}
