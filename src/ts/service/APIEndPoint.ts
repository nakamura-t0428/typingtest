/// <reference path="../../../typings/tsd.d.ts"/>

import IResourceService = ng.resource.IResourceService;
import {Constants} from '../config/Constants';

export class APIEndPoint {
  constructor(
    private $resource:IResourceService
  ) {}

  public get myinfoResource() {
    return this.$resource(Constants.apiPref + '/myinfo');
  }

  public static factory(
    $resource:IResourceService
  ):APIEndPoint {
    return new APIEndPoint($resource);
  }
}
