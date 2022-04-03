# comp-prac

## MUI 컴포넌트 별 사용법 + 예시

#### 중요하다고 생각되는 API
#### 실제로 코드에 사용했던 컴포넌트와 Props 위주로 설명

##### 1. sx props

거의 대부분의 css문법을 사용할 수 있게 해주는 props
height, width, border, margin, padding등 CSS를 줄 수 있으며
기본 컴포넌트를 꾸밀 수 있게 해준다.

```javascript
import { Button } from "@mui/material";
<Button sx={{width: "50%", height: "50%", pl: "5px"}}>Button</Button>
```

너비와 높이는 50%만 padding-left를 5px만큼 주겠다는 의미이다.
CSS문법과는 약간의 다른점이 있다.

CSS                 React Prop
margin              m
margin-top          mt
margin-right        mr
margin-bottom       mb
margin-left         ml
margin-left, right  mx
margin-top, bottom  my
padding             p
이후 margin과 동일   pt, pr 등등

이 외에도 여러가지 사용 가능하다
fontWeight, display, color, bgcolor, border 등 더 자세한 사항은 링크를 참조

https://mui.com/system/the-sx-prop/


##### 2. Grid

기본적으로 틀을 만들어주는 레이아웃 컴포넌트이다.
props로 container(item), spacing, xs 등이 있다.

기본적인 사용법은 아래와 같다.

```javascript
import { Grid } from "@mui/material";
<Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
</Grid>
```

![image](https://user-images.githubusercontent.com/90179555/161438870-0c0faa10-44b4-4fbe-9a68-03a9bab857fc.png)

container를 propr로 가진 Grid는 전체를 감싸는 container(부모) 컴포넌트가 된다.
container Grid는 자신이 차지하고 있는 가로를 12등분 하여 item Grid(자식)에 나누어주게 된다.
코드에서 item Grid는 각각 8과 4만큼을 차지하게 된다.
추가로 item Grid를 더 주게된다면 아래줄로 내려가 다시 12등분하여 설정해준 값 만큼 가지게 된다.
여기서 xs값을 주지 않으면 default값인 auto로 설정되어 n분의 1값 만큼 갖게된다.

spacing은 item 컴포넌트들 사이에 공백을 주는 props이다.

이것 역시 sx로 너비나 높이를 조정해 줄 수 있다.

https://mui.com/components/grid/

##### 3. Stack
Grid와 마찬가지로 자주 쓰이는 레이아웃 컴포넌트이다.

