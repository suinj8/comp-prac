# comp-prac

## MUI 컴포넌트 별 사용법 + 예시

### 중요하다고 생각되는 API
### 실제로 코드에 사용했던 컴포넌트와 Props 위주로 설명

### 1. sx props

거의 대부분의 css문법을 사용할 수 있게 해주는 props
height, width, border, margin, padding등 CSS를 줄 수 있으며
기본 컴포넌트를 꾸밀 수 있게 해준다.

```javascript
import { Button } from "@mui/material";
<Button sx={{width: "50%", height: "50%", pl: "5px"}}>Button</Button>
```

너비와 높이는 50%만 padding-left를 5px만큼 주겠다는 의미이다.
CSS문법과는 약간의 다른점이 있다.

![image](https://user-images.githubusercontent.com/90179555/161439594-5fe5d410-3d21-4994-8b54-75c5a9b937f3.png)

이 외에도 여러가지 사용 가능하다
fontWeight, display, color, bgcolor, border 등 더 자세한 사항은 링크를 참조

https://mui.com/system/the-sx-prop/


### 2. Grid Component

기본적으로 틀을 만들어주는 레이아웃 컴포넌트이다.
props로 container(item), spacing, xs, sx 등이 있다.

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


### 3. Stack Component

Grid와 마찬가지로 자주 쓰이는 레이아웃 컴포넌트이다.
말그대로 스택처럼 자식 컴포넌트들을 배치하게 된다.

props로 spacing, direction, sx, divider등이 있다.

```javascript
import { Stack, Divider, Button } from "@mui/material";
<Stack
  direction="row"
  divider={<Divider orientation="vertical" flexItem />}
  spacing={2}
>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Stack>
```

![image](https://user-images.githubusercontent.com/90179555/161439010-55fa2f08-af9d-49e0-96d9-1e5f907d2cf8.png)

spacing 은 자식 컴포넌트들 끼리 사이 공백을 주는 props이다.
directions은 기본적으로 column이다. 값을 주지 않으면 사진과 다르게 세로로 쌓이게 된다.
divider로 자식 컴포넌트 간 구분을 확실하게 해줄 수 있다. 

https://mui.com/components/stack/


### 4. Button Component

가장 흔하게 사용되는 Button 컴포넌트 이다.

props로 variant, disabled, sx, onClick, startIcon, endIcon등이 존재한다.

```javascript
import { Button } from "@mui/material";
<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
```

![image](https://user-images.githubusercontent.com/90179555/161439331-123bbbd7-42cd-4f3f-960b-f70c103525fe.png)

variant값으로 버튼의 종류를 결정하게 된다. 
가장 흔한 text만 있는 text부터 배경색이 있는 contained, 버튼 밖에 border가 존재하는 outlined가 있다.
disabled 를 props로 주면 비활성화 된 버튼이 생긴다. 이 버튼은 누를 수 없다.
onClick props로 이벤트를 줄 수 있다.
startIcon은 버튼 앞에, endIcon은 버튼 끝에 아이콘을 삽입한다.
아이콘은 MUI에서 제공하는 아이콘을 이용하면 된다.

https://mui.com/components/buttons/


### 5. createTheme, ThemeProvider Component

MUI기본 테마 외에 테마를 만들고 적용시켜주는 컴포넌트이다.
MUI는 기본 Primary테마로 파란색을, Secondary테마로 보라색이 지정되어 있는데
이것을 원하는대로 바꿀 수 있다.
전역에 지정할 수 있는 테마를 사용할 수도, 컴포넌트 별 지정할 수도 있다

우선 createTheme이다.

```javascript
import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const primaryColor = purple[600];
const secondaryColor = purple[50];
const dangerColor = purple[100];

const customTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: dangerColor,
    },
  },
  components: {
    MuiFab: {
      styleOverrides: {
        // root수준에서 바꾸면 모든 항목이 바뀐다. 조심히 사용
        // 모든 Fab button이 바뀜
        root: {
          backgroundColor: "red",
        },
        // font-size가 small인 것에 대해 바뀜
        sizeSmall: {
          backgroundColor: "red",
        },
        // color:가 secondary로 지정된 것에 대해 바뀜
        secondary: {
          backgroundColor: "red",

          // 마우스를 올렸을 때 바뀌는 색을 white로 지정
          "&:hover": {
            color: "white",
          },
        },
      },
    },
  },
});

export default customTheme;
```

palette로 지정하면 sx Props로 색을 지정하지 않고
컴포넌트 자체 color Props로 색을 지정할 수 있다.
ex) <Typography color="primary"> Text </Typography>
primary로 지정된 색깔로 Text가 나타나게 된다.
이처럼 primary, secondary, error와 같이 상황별 색을 지정할 수 있게 된다.

components 내부에 자신이 지정하고자 하는 component 이름을
Mui + 컴포넌트이름 으로 선언하고 styleoverride가 가능하다.
root값으로 스타일을 변경하면 지정한 모든 컴포넌트가 바뀌기 때문에 신중히 사용한다.
그 외에 다른 조건들을 주어서 조건에 맞는 특정 컴포넌트의 스타일만도 바꿀 수 있다.
추가로 hover는 마우스가 컴포넌트에 올라가 있을 때 발생하는 이벤트이고 그 때만 스타일을 
바꿀 때 유용하게 사용할 수 있다.

Color는 지정해서 사용할 수 있다. 매우 다양한 색을 제공하므로
다양한 색을 사용하고자 한다면
https://mui.com/customization/color/#main-content  링크에서 볼 수 있다.


ProviderTheme은 자신이 만든 테마를 적용하고자 하는 컴포넌트 밖에 
부모태그로 감싸주면 된다.

```javascript
import { ThemeProvider, Button } from "@mui/material";

<ThemeProvider theme={customTheme}>
  <Button></Button>
</ThemeProvider>
```

이렇게 사용하면 Button에만 자신이 만든 테마를 적용시킬 수 있다.


### 6. Card, CardMedia, CardContent Component

Mui에서 사진을담고 설명을 쓸 수 있다.
전체적으로 Card안에 Media와 Content를 담는다.

```javascript
import { Card, CardMedia, CardContent, Typography } from '@mui/material;

<Card sx={{ maxWidth: 345 }}>
  <CardMedia
    component="img"
      height="140"
      image="이미지파일 경로"
      alt="사진 설명"
    />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Lizard
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica
    </Typography>
  </CardContent>
</Card>
```

CardContent의 component Props로 img, audio, video등을 올릴 수 있다.
아래쪽에 CardContent로 부연설명을 추가해 줄 수 있다.

![image](https://user-images.githubusercontent.com/90179555/161923223-46df81e0-6c0b-4314-9369-b3c587958a0d.png)

https://mui.com/components/cards/


### useMediaQuery Component

CSS기능인 mediaQuery를 MUI에서 지원한다.
반응형 웹을 구현할 때 사용된다.

```javascript
import { useMediaQuery } from '@mui/material;

const mediaQuery = useMediaQuery("(min-width: 1200px)");
```
이렇게 사용하면 최소 너비가 1200px일 때 true를 리턴합니다.
이것을 이용하여

```javascript
const isShowComponent = () => {
  return mediaQuery ? "visible" : "hidden";
};
```
mediaQuery가 true일때 visible을 주고 false일 때 hidden을 줌으로써
사용하고자 하는 컴포넌트의 sx Props의 visibility값을 유동적으로 주면
1200px 이상일 때는 컴포넌트가 보이고, 그보다 작아지면 컴포넌트가 숨겨지는 효과를 낼 수 있습니다.

```javascript
<Button sx={{ visibility : isShowComponent }}
```

Button 컴포넌트가 보여졌다 사라졌다 하는 효과를 낼 수 있습니다.

https://mui.com/components/use-media-query/
