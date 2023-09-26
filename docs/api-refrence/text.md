# 文本相关API

## 情绪分析 <Badge type="warning" text="API-KEY" />

### 接口URL

`https://api.uniapi.top/text/emotion`

### 请求方式

`POST`

### 传参

| 参数名 | 参数含义 | 参数示例 |
| ------ | -------- | -------- |
| text   | 文本内容 | 好棒     |

### 示例

::: code-group

```python [python]
import httpx

url = 'https://api.uniapi.top/text/emotion'
data = {
    "text": "好棒"
}
headers = {
    "Content-Type": "application/json"
}
httpx.post(url=url, data=data, headers=headers)
```

```js [微信小程序]
const url = 'https://api.uniapi.top/text/emotion'
const data = {
    "text": "好棒"
}
const headers = {
    "Content-Type": "application/json"
}
wx.request({
    url: url, 
    header: headers,
    method: "POST",
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
    "label": "POSITIVE",
    "score": 0.9996980428695679
}
```

## 答案抽取 <Badge type="warning" text="API-KEY" />

### 接口URL

`https://api.uniapi.top/text/question-answer`

### 请求方式

`POST`

### 传参

| 参数名   | 参数含义 | 参数示例                                                               |
| -------- | -------- | ---------------------------------------------------------------------- |
| question | 问题     | What is the name of the repository?                                    |
| content  | 文本内容 | Pipeline has been included in the huggingface/transformers repository. |

### 示例

::: code-group

```python [python]
import httpx

url = 'https://api.uniapi.top/text/question-answer'
data = {
    "question": "What is the name of the repository?"
    "answer": "Pipeline has been included in the huggingface/transformers repository."
}
headers = {
    "Content-Type": "application/json"
}
httpx.post(url=url, data=data, headers=headers)
```

```js [微信小程序]
const url = 'https://api.uniapi.top/text/question-answer'
const data = {
    "question": "What is the name of the repository?"
    "answer": "Pipeline has been included in the huggingface/transformers repository."
}
const headers = {
    "Content-Type": "application/json"
}
wx.request({
    url: url, 
    header: headers,
    method: "POST",
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
    "score": 0.9996980428695679,
    "start": 12,
    "end": 20,
    "answer": "huggingface/transformers"
}
```