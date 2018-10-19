import { Component, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'ip-app-about'
})
export class IpAppAbout implements ComponentInterface {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <stencil-route-link url="/">Go to home page</stencil-route-link>
      </div>
    );
  }
}
