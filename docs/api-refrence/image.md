# 图片相关API

## 二维码生成

### 接口URL

`https://api.kinda.info/kinda/tools/image/qr_code/generate`

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

url = 'https://api.kinda.info/kinda/tools/image/qr_code/generate'
data = {
    "data": "https://weixiao.zuowu.cc"
}
headers = {
    "Content-Type": "application/json"
}
httpx.post(url=url, data=data, headers=headers)
```
:::

## 压缩图片

### 接口URL

`https://api.kinda.info/kinda/tools/image/zip`

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

url = 'https://api.kinda.info/kinda/tools/image/zip'
data = {
    "image_url": "https://oss.weixiao.zuowu.cc/image/16952779056484F52474BCB05.jpg",
    "zip_degree": 10
}
headers = {
    "Content-Type": "application/json"
}
httpx.post(url=url, data=data, headers=headers)
```
:::

## 拼接图片

### 接口URL

`https://api.kinda.info/kinda/tools/image/concat`

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

url = 'https://api.kinda.info/kinda/tools/image/concat'
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
:::

## 制作海报

### 接口URL

`https://api.kinda.info/kinda/tools/image/poster`

### 请求方式

`POST`

### 传参 

| 参数名   | 参数含义     | 参数示例                                 |
| -------- | ------------ | ---------------------------------------- |
| width    | 海报宽度     | 600                                      |
| height   | 海报高度     | 900                                      |
| bg_color | 海报背景颜色 | 900                                      |
| lines    | 线条组       | List[[Line](../class-refrence.md#line)]   |
| images   | 图片组       | List[[Image](../class-refrence.md#image)] |
| texts    | 文字组       | List[[Text](../class-refrence.md#text)]   |

### 示例

::: code-group

```python [python]
import httpx

url = 'https://api.kinda.info/kinda/tools/image/poster'
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
:::