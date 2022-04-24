
/**
 * The Route Defines a location and a view component attribute
 */

interface IRoute {
    viewlocation: string;
    viewAttribute: string;
};

export class Route {

    private _sourceLocation: string;
    private _viewAttribute: string;
    constructor(RouteOptions: IRoute) {
        this._sourceLocation = RouteOptions.viewlocation;
        this._viewAttribute = RouteOptions.viewAttribute;
    };

    public get routeLocation(): string{
        return this._sourceLocation;
    };
    public get routeViewAttribute() : string {
        return this._viewAttribute;
    }
    
};