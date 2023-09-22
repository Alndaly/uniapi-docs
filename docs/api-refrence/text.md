# 文本相关API

## 情绪分析 <Badge type="warning" text="限时免费" />

### 接口URL

`https://api.kinda.info/kinda/tools/text/emotion`

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

url = 'https://api.kinda.info/kinda/tools/text/emotion'
data = {
    "text": "好棒"
}
headers = {
    "Content-Type": "application/json"
}
httpx.post(url=url, data=data, headers=headers)
```
:::

## 答案抽取 <Badge type="warning" text="限时免费" />

### 接口URL

`https://api.kinda.info/kinda/tools/text/question-answer`

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

url = 'https://api.kinda.info/kinda/tools/text/question-answer'
data = {
    "question": "What is the name of the repository?"
    "answer": "Pipeline has been included in the huggingface/transformers repository."
}
headers = {
    "Content-Type": "application/json"
}
httpx.post(url=url, data=data, headers=headers)
```
:::