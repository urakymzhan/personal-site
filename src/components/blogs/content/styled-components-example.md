## Styled Components Example with ReactJS

| Date             | Author |
| :--------------- | -----: |
| January 19, 2022 |   Ulan |

<!-- - **Date:** January 19, 2022 -->

Styled Components is one of the great ways to apply CSS into React apps. So we are going to do that in this blog.

##### Prerequisites:

- ReactJS, CSS, JS, HTML knowledge is required.

Imagine if you wanted to build something like this using styled components:

![cards](/images/st-cp.png)

How would you do that?

Image contains

- Icon
- Stats: String
- Comment: String
- Progress Bar: Input

**Ceveats:** We want to show/hide progress bar depending on some codition.

For that reason, lets create 4 cards data and store it inside an array.

I am going to use **[react-icons](https://react-icons.github.io/react-icons/icons?name=bs)** for our icons.

Create a new app:

- `npx create-react-app <app-name>`

Install required libraires:

- `npm install styled-components react-icons`

Cleanup `App.js` and import required icons on top:

```js
import {
  BsBadgeVrFill,
  BsBadge4KFill,
  BsCollectionPlayFill,
  BsBadgeHdFill,
} from "react-icons/bs";
```

Then create our 4 data for cards:

```js
const cards = [
  {
    id: 1,
    icon: <BsBadge4KFill />,
    stats: 278,
    comment: "New Posts",
    left: true,
    progresbar: true,
    value: 80,
  },
  {
    id: 2,
    icon: <BsBadgeVrFill />,
    stats: 156,
    comment: "New Posts",
    left: true,
    progresbar: true,
    value: 50,
  },
  {
    id: 3,
    icon: <BsCollectionPlayFill />,
    stats: "64.89%",
    comment: "Bounce Rate",
    left: true,
    progresbar: true,
    value: 10,
  },
  {
    id: 4,
    icon: <BsBadgeHdFill />,
    stats: 423,
    comment: "Total Visits",
    left: true,
    progresbar: false,
    value: 90,
  },
];
```

Then create a `styled.js` file inside **src** folder.

Put below code inside:

```js
import styled, { createGlobalStyle } from "styled-components";

// Global Style
export const GlobalStyle = createGlobalStyle`
  svg {
    height: 60px;
    width: 60px; 
  }
`;

export const AppDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
`;
```

On the above we also handling our icon sizes. To use **GlobaStyle** import it insie `index.js` and put below `<App/>`

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styled";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle /> // <= put here
  </React.StrictMode>,
  document.getElementById("root")
);
```

Then impot `AppDiv` inside `App.js` and use it as below:

```js
function App() {
  return <AppDiv> ...</AppDiv>;
}
```

Your final `App.js` should look like below:

```js
import {
  BsBadgeVrFill,
  BsBadge4KFill,
  BsCollectionPlayFill,
  BsBadgeHdFill,
} from "react-icons/bs";
import Card from "./components/Card";
import { AppDiv } from "./styled";

const cards = [
  {
    id: 1,
    icon: <BsBadge4KFill />,
    stats: 278,
    comment: "New Posts",
    left: true,
    progresbar: true,
    value: 80,
  },
  {
    id: 2,
    icon: <BsBadgeVrFill />,
    stats: 156,
    comment: "New Posts",
    left: true,
    progresbar: true,
    value: 50,
  },
  {
    id: 3,
    icon: <BsCollectionPlayFill />,
    stats: "64.89%",
    comment: "Bounce Rate",
    left: true,
    progresbar: true,
    value: 10,
  },
  {
    id: 4,
    icon: <BsBadgeHdFill />,
    stats: 423,
    comment: "Total Visits",
    left: true,
    progresbar: false,
    value: 90,
  },
];

function App() {
  return (
    <AppDiv>
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </AppDiv>
  );
}

export default App;
```

As you can see we don't have `Card.js` yet.

Let's work on that next.

Create `components` folder ad create `Card.js` and `styled.js` files inside.

Inside we will be creating all our required styled elements with some css. Put below code inside:

```js
import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid;
  height: auto;
  width: 300px;
  text-align: center;
  padding: 20px;
`;

export const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const Stats = styled.h1`
  color: darkgreen;
  margin-bottom: 0;
`;
export const Comment = styled.p`
  color: gray;
  margin-top: 5px;
`;
export const ProgressBar = styled.progress`
  width: 100%;
  opacity: ${(props) => props.progresbar === false && 0};
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
```

As you can see above `ProgressBar` opacity (you can use display etc) will depend or **progresbar prop**. So we have to pass it inside `Card.js`

Now put below code inside `Card.js`:

```js
import Icon from "./Icon";
import {
  CardContainer,
  Comment,
  MainDiv,
  ProgressBar,
  Stats,
  IconWrapper,
} from "./styled";

function Card({ card }) {
  return (
    <CardContainer>
      <MainDiv>
        <IconWrapper>{card.icon}</IconWrapper>
        <div>
          <Stats>{card.stats}</Stats>
          <Comment>{card.comment}</Comment>
        </div>
      </MainDiv>
      <ProgressBar
        progresbar={card.progresbar} // <= here we passing prop to styled components
        value={card.value}
        max={"100"}
      />
    </CardContainer>
  );
}

export default Card;
```

If you run your app final result should look like this:

![cards final](/images/st-final.png)

As a final word. You can practice to shift **orders** of `Icon` and `Stats/Comment` using `left: true/false` boolean from our **data above**.
