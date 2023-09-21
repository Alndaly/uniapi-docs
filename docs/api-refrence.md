# API概览

## 制作海报

### 接口URL

`https://api.kinda.info/kinda/tools/image/poster`

### 传参 

| 参数名   | 参数含义     | 参数示例                                 |
| -------- | ------------ | ---------------------------------------- |
| width    | 海报宽度     | 600                                      |
| height   | 海报高度     | 900                                      |
| bg_color | 海报背景颜色 | 900                                      |
| lines    | 线条组       | List[[Line](./class-refrence.md#line)]   |
| images   | 图片组       | List[[Image](./class-refrence.md#image)] |
| texts    | 文字组       | List[[Text](./class-refrence.md#text)]   |

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