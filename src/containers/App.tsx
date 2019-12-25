/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core";
import { Classes, Button, Intent, Colors } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

const globalStyle = css`
  body {
    background-color: ${Colors.LIGHT_GRAY5};
    font-size: 14px;
  }
`;

const appStyle = css`
  margin: 0 auto;
  width: 1200px;
`;

export const App = () => (
  <section css={appStyle}>
    <Global styles={globalStyle} />
    <h1 className={Classes.HEADING}>Hello, world!</h1>
    <Button large icon={IconNames.THUMBS_UP} intent={Intent.SUCCESS}>
      LGTM
    </Button>
  </section>
);
