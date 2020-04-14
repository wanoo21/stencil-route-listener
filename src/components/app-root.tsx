import { Component, h, Listen, State } from '@stencil/core';
import { LocationSegments } from '@stencil/router';

@Component({
  tag: 'ip-app-root'
})
export class IpAppRoot {
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
              routeRender={props => <ip-stencil-route-listener props={props} />}
            />
            <stencil-route
              url="/about"
              exact={true}
              component="ip-app-about"
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
}
