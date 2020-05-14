# IP Stencil Route Listener

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

A simple listener around [Stencil router](https://github.com/ionic-team/stencil-router).

## Installing

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/ip-stencil-route-listener@2.0.0/dist/ip-stencil-route-listener.js'></script>` in the head of your index.html

### In a stencil-starter app

- Run `npm install ip-stencil-route-listener --save`
- Add an import to the npm packages `import 'ip-stencil-route-listener';`

## Using Example

Check out this [demo](https://stencil-route-listener.netlify.com/)

```js
  @State()
  pageState: string[] = [];

  @Listen('pageEnter')
  onPageEnter(e: CustomEvent<LocationSegments>) {
    this.pageState = [...this.pageState, `Page enter ${e.detail.pathname}`];
  }

  @Listen('pageLeave')
  onPageLeave(e: CustomEvent<LocationSegments>) {
    this.pageState = [...this.pageState, `Page leave ${e.detail.pathname}`];
  }

  render() {
    return (
      <main>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route
              url="/"
              component="ip-app-home"
              exact={true}
              // The Magic happens here
              routeRender={props => <ip-stencil-route-listener props={props} />}
            />
            <stencil-route
              url="/about"
              exact={true}
              component="ip-app-about"
              // The Magic happens here
              routeRender={props => <ip-stencil-route-listener props={props} />}
            />
          </stencil-route-switch>
        </stencil-router>
        <ul>
          {this.pageState.map(page => (
            <li>{page}</li>
          ))}
        </ul>
      </main>
    );
  }
```
## Contributors :sparkles:
<table>
<tr>
                <td align="center">
                    <a href="https://github.com/wanoo21">
                        <img src="https://avatars1.githubusercontent.com/u/6537167?v=4" width="100;" alt="wanoo21"/>
                        <br />
                        <sub><b>Ion Prodan</b></sub>
                    </a>
                </td></tr>
</table>

