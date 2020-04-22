import {
  Component,
  Prop,
  Event,
  EventEmitter,
  h
} from '@stencil/core';
import { RouteRenderProps, LocationSegments } from '@stencil/router';

let lastKey = '';
let lastEvent = '';
let props: RouteRenderProps;

@Component({
  tag: 'ip-stencil-route-listener'
})
export class IpStencilRouteListener {
  @Prop() props: RouteRenderProps | undefined;

  @Event()
  pageEnter: EventEmitter<LocationSegments>;
  @Event()
  pageLeave: EventEmitter<LocationSegments>;

  private localPageSegments: LocationSegments | null = null;

  private get currentPageLocation(): LocationSegments {
    return (this.props || props).history.location;
  }

  private _callEvent(
    event: 'pageLeave' | 'pageEnter',
    location: LocationSegments
  ) {
    if (lastEvent === event && lastKey === location.key) return;
    if (event === 'pageEnter') {
      this.pageEnter.emit(location);
    } else if (event === 'pageLeave') {
      this.pageLeave.emit(location);
    }
    lastEvent = event;
    lastKey = location.key;
  }

  componentWillLoad() {
    if (!this.props) {
      throw Error('Please add props to <ip-stencil-route-listener />!');
    }
    props = this.props;
    this.localPageSegments = this.currentPageLocation;
    lastKey = this.currentPageLocation.key;
  }

  componentDidLoad() {
    if (lastKey === this.currentPageLocation.key) {
      this._callEvent('pageEnter', this.currentPageLocation);
    }
  }

  componentDidUnload() {
    if (lastKey !== this.currentPageLocation.key) {
      this._callEvent('pageLeave', this.localPageSegments);
    }
  }

  componentWillUpdate() {
    if (lastKey !== this.currentPageLocation.key) {
      this._callEvent('pageLeave', this.localPageSegments);
    }
  }

  componentDidUpdate() {
    if (lastKey !== this.currentPageLocation.key) {
      this._callEvent('pageEnter', this.currentPageLocation);
      this.localPageSegments = this.currentPageLocation;
      lastKey = this.currentPageLocation.key;
    }
  }

  render() {
    return <this.props.component {...this.props} />;
  }
}
