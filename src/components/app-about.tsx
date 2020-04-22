import { Component, h } from '@stencil/core';

@Component({
  tag: 'ip-app-about'
})
export class IpAppAbout {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <stencil-route-link url="/">Go to home page</stencil-route-link>
      </div>
    );
  }
}
