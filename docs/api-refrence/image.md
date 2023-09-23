# 图片相关API

## 二维码解析

### 接口URL

`https://api.uniapi.top/image/qr_code/decode`

### 请求方式

`POST`

### 传参

| 参数名 | 参数含义       | 参数示例                 |
| ------ | -------------- | ------------------------ |
| url    | 二维码图片链接 | `https://test.com/1.png` |

### 示例

::: code-group

```python [python]
import httpx

url = 'https://api.uniapi.top/image/qr_code/decode'
data = {
    "url": "https://test.com/1.png"
}
headers = {
    "Content-Type": "application/json"
}
httpx.post(url=url, data=data, headers=headers)
```

```js [微信小程序]
const url = 'https://api.uniapi.top/image/qr_code/decode'
const data = {
    "url": "https://test.com/1.png"
}
const headers = {
    "Content-Type": "application/json"
}
wx.request({
    url: url, 
    headers: headers,
    data: data,
    success(res){
        console.log(res)
    },
    fail(err){
        console.error(err)
    }
})
```
:::

### 返回范例

```json
{
    "content": "https://weixiao.zuowu.cc"
}
```

## 二维码生成

### 接口URL

`https://api.uniapi.top/image/qr_code/generate`

### 请求方式

`POST`

### 传参

| 参数名 | 参数含义       | 参数示例 |
| ------ | -------------- | -------- |
| data   | 二维码数据内容 | 好棒     |

### 示例

::: code-group

```python [python]
import httpx

url = 'https://api.uniapi.top/image/qr_code/generate'
data = {
    "data": "https://weixiao.zuowu.cc"
}
headers = {
    "Content-Type": "application/json"
}
httpx.post(url=url, data=data, headers=headers)
```

```js [微信小程序]
const url = 'https://api.uniapi.top/image/qr_code/generate'
const data = {
    "data": "https://weixiao.zuowu.cc"
}
const headers = {
    "Content-Type": "application/json"
}
wx.request({
    url: url, 
    headers: headers,
    data: data,
    success(res){
        console.log(res)
    },
    fail(err){
        console.error(err)
    }
})
```
:::

### 返回范例

```json
{
    "url": "https://api.uniapi.top/temp/images/20825117-139a-4f4b-a54e-fb1950dfafcc.png",
    "expire": 600
}
```

## 压缩图片

### 接口URL

`https://api.uniapi.top/image/zip`

### 请求方式

`POST`

### 传参

| 参数名     | 参数含义     | 参数示例                 |
| ---------- | ------------ | ------------------------ |
| image_url  | 图片网络地址 | `https://test.com/1.png` |
| zip_degree | 压缩等级     | 10                       |

::: tip
压缩等级为0-100的整数。
:::

### 示例

::: code-group

```python [python]
import httpx

url = 'https://api.uniapi.top/image/zip'
data = {
    "image_url": "https://oss.weixiao.zuowu.cc/image/16952779056484F52474BCB05.jpg",
    "zip_degree": 10
}
headers = {
    "Content-Type": "application/json"
}
httpx.post(url=url, data=data, headers=headers)
```
```js [微信小程序]
const url = 'https://api.uniapi.top/image/zip'
const data = {
    "image_url": "https://oss.weixiao.zuowu.cc/image/16952779056484F52474BCB05.jpg",
    "zip_degree": 10
}
const headers = {
    "Content-Type": "application/json"
}
wx.request({
    url: url, 
    headers: headers,
    data: data,
    success(res){
        console.log(res)
    },
    fail(err){
        console.error(err)
    }
})
```
:::

### 返回范例

```json
{
    "image_url": "https://test.com/1.png",
    "zip_degree": 90, 
    "image_size": "2333"
}
```

## 拼接图片

### 接口URL

`https://api.uniapi.top/image/concat`

### 请求方式

`POST`

### 传参

| 参数名      | 参数含义       | 参数示例  |
| ----------- | -------------- | --------- |
| rows        | 行数           | 2         |
| cols        | 列数           | 2         |
| unit_width  | 每张图片的宽度 | 600       |
| unit_height | 每张图片的高度 | 900       |
| quality     | 生成图片的质量 | 10        |
| images      | 图片数组       | List[url] |


::: tip
生成图片的质量为0-100的整数。
:::

### 示例

::: code-group

```python [python]
import httpx

url = 'https://api.uniapi.top/image/concat'
data = {
    "rows": 2,
    "cols": 2,
    "unit_width": 600,
    "unit_height": 900,
    "quality": 10,
    "images": ["https://oss.weixiao.zuowu.cc/image/16952779056484F52474BCB05.jpg", "https://oss.weixiao.zuowu.cc/image/1695277905661962DEC0BEFA5.jpg", "https://oss.weixiao.zuowu.cc/image/1695277905665067D45D14B8E.jpg", "https://oss.weixiao.zuowu.cc/image/169527790566722E25FA78700.jpg"]
}
headers = {
    "Content-Type": "application/json"
}
httpx.post(url=url, data=data, headers=headers)
```
```js [微信小程序]
const url = 'https://api.uniapi.top/image/concat'
const data = {
    "rows": 2,
    "cols": 2,
    "unit_width": 600,
    "unit_height": 900,
    "quality": 10,
    "images": ["https://oss.weixiao.zuowu.cc/image/16952779056484F52474BCB05.jpg", "https://oss.weixiao.zuowu.cc/image/1695277905661962DEC0BEFA5.jpg", "https://oss.weixiao.zuowu.cc/image/1695277905665067D45D14B8E.jpg", "https://oss.weixiao.zuowu.cc/image/169527790566722E25FA78700.jpg"]
}
const headers = {
    "Content-Type": "application/json"
}
wx.request({
    url: url, 
    headers: headers,
    data: data,
    success(res){
        console.log(res)
    },
    fail(err){
        console.error(err)
    }
})
```
:::

### 返回范例

```json
{
    "image_url": "http://kinda-tools.oss-cn-hangzhou.aliyuncs.com/image%2Fconcated_33467750-4939-4d83-9b0a-e520b3b5897a.jpg?OSSAccessKeyId=LTAI5t7rbLzmDacFf5igvY12&Expires=1695451527&Signature=MP4jIGjho8x2RwUN%2FPZxdnNiK0o%3D"
}
```

## 制作海报

### 接口URL

`https://api.uniapi.top/image/poster`

### 请求方式

`POST`

### 传参 

| 参数名   | 参数含义     | 参数示例                                  |
| -------- | ------------ | ----------------------------------------- |
| width    | 海报宽度     | 600                                       |
| height   | 海报高度     | 900                                       |
| bg_color | 海报背景颜色 | 900                                       |
| lines    | 线条组       | List[[Line](../class-refrence.md#line)]   |
| images   | 图片组       | List[[Image](../class-refrence.md#image)] |
| texts    | 文字组       | List[[Text](../class-refrence.md#text)]   |

### 示例

::: code-group

```python [python]
import httpx

url = 'https://api.uniapi.top/image/poster'
data = {
    "width": 600,
    "height": 900,
    "bg_color": "#ccc",
    "lines": [
        {
            "color": "#000",
            "thick": "25",
            "box": [
                [0, 0], 
                [600, 900]
            ]
        }
    ],
    "images": [
        {
            "url": "https://oss.weixiao.zuowu.cc/image/16952779056484F52474BCB05.jpg",
            "box": [
                [0, 0], 
                [600, 800]
            ]
        }
    ],
    "texts": [
        {
            "text": "测试测试测试测试测试测试测试",
            "font_size": "25",
            "color": "yellow",
            "start_point": [0, 0],
            "width": 100
        }
    ]
}
headers = {
    "Content-Type": "application/json"
}
httpx.post(url=url, data=data, headers=headers)
```
```js [微信小程序]
const url = 'https://api.uniapi.top/image/poster'
const data = {
     "width": 600,
    "height": 900,
    "bg_color": "#ccc",
    "lines": [
        {
            "color": "#000",
            "thick": "25",
            "box": [
                [0, 0], 
                [600, 900]
            ]
        }
    ],
    "images": [
        {
            "url": "https://oss.weixiao.zuowu.cc/image/16952779056484F52474BCB05.jpg",
            "box": [
                [0, 0], 
                [600, 800]
            ]
        }
    ],
    "texts": [
        {
            "text": "测试测试测试测试测试测试测试",
            "font_size": "25",
            "color": "yellow",
            "start_point": [0, 0],
            "width": 100
        }
    ]
}
const headers = {
    "Content-Type": "application/json"
}
wx.request({
    url: url, 
    headers: headers
    data: data,
    success(res){
        console.log(res)
    },
    fail(err){
        console.error(err)
    }
})
```
:::

### 返回范例

```json
{
    "image_url": "http://kinda-tools.oss-cn-hangzhou.aliyuncs.com/image%2Fposter_7273a0ec-3f7f-43f3-a79e-e7c1ec265818.jpg?OSSAccessKeyId=LTAI5t7rbLzmDacFf5igvY12&Expires=1695451479&Signature=59jgY%2BaMe7iYujClBCZwZ7GX4lk%3D"
}
```