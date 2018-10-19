import { Component, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'ip-app-home'
})
export class IpAppHome implements ComponentInterface {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <stencil-route-link url="/about">Go to about page</stencil-route-link>
      </div>
    );
  }
}
