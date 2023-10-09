# 媒体相关API

::: warning
由于当前仅限直接调用接口，此部分接口又涉及到处理媒体文件，所以请求速度会非常慢！一定要注意处理异步情况。
:::

## 媒体转码 <Badge type="warning" text="API-KEY" />

### 接口URL

`https://api.uniapi.top/media/convert`

### 请求方式

`POST`

### 传参

| 参数名 | 参数含义 | 参数示例   |
| ------ | -------- | ---------- |
| file   | 文件     | `File对象` |
| format | 新格式   | `mp4`      |

### 示例

::: code-group

```python [python]
files = {'file': open('/path/to/your/file.mov', 'rb')}
data = {'format': 'mp4'}
headers = {
    "API-KEY": "<Your Api-Key>",
}

response = httpx.post('https://api.uniapi.top/media/convert', files=files, data=data, headers=headers)
```
:::

### 返回范例

```json
{
    "url":"https://api.uniapi.top/temp/media/IMG_0100.mp4",
    "expire":"1800"
}
```