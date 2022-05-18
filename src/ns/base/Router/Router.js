var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { commonEvents } from "ns/common/events";
import { LifeCycleEvents } from "ns/common/lifecycle";
;
;
var NSRouterView = /** @class */ (function () {
    function NSRouterView() {
        this._nsExchangeState = 0;
        this._nsRouteViewEvents = new commonEvents();
        this._nsRouteViewExchangeCallback = null;
    }
    ;
    NSRouterView.prototype.listenForExchangeViewCallbackEvents = function (callback) {
        this._nsRouteViewEvents.addListener("didFireRegisteredExchange", callback);
    };
    NSRouterView.prototype.registerRouteViewExchangeCallback = function (callback) {
        this._nsRouteViewExchangeCallback = callback;
    };
    ;
    NSRouterView.prototype.invokeRouteViewExchanageCallback = function () {
        if (this._nsRouteViewExchangeCallback) {
            this._nsRouteViewExchangeCallback();
            this._nsRouteViewEvents.emit("didFireRegisteredExchange", this._nsExchangeState);
        }
    };
    NSRouterView.prototype.getViewComponent = function (attribute) {
        var _component = document.querySelector("[ns-view=".concat(attribute, "]"));
        return _component;
    };
    ;
    NSRouterView.prototype.getActiveRouteComponent = function () {
        var _activeComponent = document.querySelector("[ns-route=active]");
        return _activeComponent;
    };
    ;
    NSRouterView.prototype.toggleRouteExchange = function (component, initialLoad) {
        if (initialLoad) {
            this.invokeRouteViewExchanageCallback();
            component.setAttribute("ns-route", "active");
            this.invokeRouteViewExchanageCallback();
        }
        else {
            var activeRouteComponent = this.getActiveRouteComponent();
            if (activeRouteComponent) {
                this.invokeRouteViewExchanageCallback();
                activeRouteComponent.setAttribute("ns-route", "inactive");
                this.invokeRouteViewExchanageCallback();
                component.setAttribute("ns-route", "active");
            }
            else {
                this.invokeRouteViewExchanageCallback();
                this.invokeRouteViewExchanageCallback();
                component.setAttribute("ns-route", "active");
            }
        }
    };
    return NSRouterView;
}());
;
var NSRouter = /** @class */ (function (_super) {
    __extends(NSRouter, _super);
    function NSRouter(ROutes) {
        var _this = _super.call(this) || this;
        _this._nsStack = { backwardStack: [], forwardStack: [] };
        _this._nsCurrrentRoute = "home";
        _this._nsRouteNavigationState = "static";
        _this._nsRouterAfterNavigationCallback = null;
        _this._nsRouterBeforeNavigationCallback = null;
        _this._nsSnychronousOptions = null;
        _this._nsRouteErrorHandler = null;
        _this._nsRouterLifeCycle = 0 /* Initializing */;
        _this._nsRouteNavigationHooks = new Map();
        _this._nsRouteStorage = new Map();
        _this._nsRoutesArray = ROutes;
        _this.registerForLifecyclEvents();
        return _this;
    }
    ;
    NSRouter.prototype.registerForLifecyclEvents = function () {
        LifeCycleEvents.onPhaseDidChange.subscribe(this._listenerForLifecyclEvents.bind(this));
    };
    ;
    NSRouter.prototype._listenerForLifecyclEvents = function (phase) {
        if (phase == 3 /* Restored */) {
            this.nsRouteInitialization();
        }
    };
    NSRouter.prototype.nsRouteInitialization = function () {
        this._createStorageFoundationForAllRoutes();
        this.listenerForNsExchangeEvent();
        this._nsRouterLifeCycle = 1 /* Loading */;
        this._loadContentOFPage();
        this._nsRouterLifeCycle = 2 /* Restored */;
        this._registerEventListenerForHashDidChange();
        LifeCycleEvents.phase = 2 /* Ready */;
    };
    NSRouter.prototype.BeforeRouteNavigationEvent = function (callback) {
        if (this._nsRouterBeforeNavigationCallback == null) {
            this._nsRouterBeforeNavigationCallback = callback;
        }
    };
    NSRouter.prototype.AfterRouteNavigationEvent = function (callback) {
        if (this._nsRouterAfterNavigationCallback == null) {
            this._nsRouterAfterNavigationCallback = callback;
        }
        this.callNavigationHooks();
    };
    NSRouter.prototype.RouterNavigationHook = function (RouteId, callback) {
        if (!this._nsRouteNavigationHooks.has(RouteId)) {
            this._nsRouteNavigationHooks.set(RouteId, callback);
        }
    };
    NSRouter.prototype.NavigateToRoute = function (RouteId, data) {
        if (this.isHashPresent(RouteId)) {
            this._writeSynchronousRouterOptions(RouteId, data);
            this._setLocationHash(RouteId);
            this._nsCurrrentRoute = RouteId;
        }
    };
    ;
    NSRouter.prototype.pushToStack = function (RouteID, stack) {
        if (stack == "backwardStack") {
            this._nsStack.backwardStack.push(RouteID);
        }
        else {
            this._nsStack.forwardStack.push(RouteID);
        }
    };
    ;
    NSRouter.prototype.disposeFromStack = function (RouteID, stack) {
        if (stack == "backwardStack") {
            var _index = this._nsStack.backwardStack.indexOf(RouteID);
            this._nsStack.backwardStack.splice(_index, 1);
        }
        else {
            var _index = this._nsStack.forwardStack.indexOf(RouteID);
            this._nsStack.forwardStack.splice(_index, 1);
        }
    };
    NSRouter.prototype.callNavigationHooks = function () {
        if (this._nsRouteNavigationHooks.has(this._nsCurrrentRoute)) {
            this._nsRouteNavigationHooks.get(this._nsCurrrentRoute)({ data: this._nsSnychronousOptions.data, navigationState: "towards" });
            this._disposeSynchronousRouterOptions();
        }
    };
    NSRouter.prototype.RouteErrorHandler = function (callback) {
        throw new Error("Method not implemented.");
    };
    ;
    NSRouter.prototype.listenerForNsExchangeEvent = function () {
        var _this = this;
        //Initial Load;
        this.reCreateNavigationExchangeCall("Before");
        this.listenForExchangeViewCallbackEvents(function (args) {
            if (args == 0) {
                _this.reCreateNavigationExchangeCall("After");
            }
        });
    };
    NSRouter.prototype.reCreateNavigationExchangeCall = function (state) {
        if (state == "Before") {
            this.registerRouteViewExchangeCallback(this.BeforeRouteNavigationEvent.bind(this));
        }
        else if (state == "After" && this._nsRouterAfterNavigationCallback) {
            this.registerRouteViewExchangeCallback(this.AfterRouteNavigationEvent.bind(this));
        }
    };
    NSRouter.prototype._disposeSynchronousRouterOptions = function () {
        if (this._nsSnychronousOptions) {
            delete this._nsSnychronousOptions["data"];
        }
    };
    NSRouter.prototype._writeSynchronousRouterOptions = function (routeID, data) {
        if (this._nsSnychronousOptions) {
            if (this._nsSnychronousOptions["RouteId"] == undefined) {
                this._nsSnychronousOptions["RouteId"] = routeID;
                this._nsSnychronousOptions["data"] = data;
            }
        }
    };
    NSRouter.prototype._setLocationHash = function (routeid) {
        window.location.hash = routeid;
    };
    NSRouter.prototype._registerEventListenerForHashDidChange = function () {
        window.addEventListener("hashchange", this.listenerForHashDidChange.bind(this));
    };
    ;
    NSRouter.prototype.listenerForHashDidChange = function (ev) {
        this._loadContentOFPage();
    };
    NSRouter.prototype._readCurrentAvailablHash = function () {
        var _hash = window.location.hash;
        return _hash.substring(1);
    };
    ;
    NSRouter.prototype._loadContentOFPage = function () {
        var _currentHashTitle = this._readCurrentAvailablHash();
        if (_currentHashTitle == "") {
            var _viewAttribute = this.getViewAttriubte("home");
            this.toggleRouteExchange(this.getViewComponent(_viewAttribute), true);
        }
        else {
            if (this.isHashPresent(_currentHashTitle)) {
                var _viewAttribute = this.getViewAttriubte(_currentHashTitle);
                this.toggleRouteExchange(this.getViewComponent(_viewAttribute), false);
            }
        }
    };
    NSRouter.prototype.getViewAttriubte = function (hashTitle) {
        var __hash__ = "/" + hashTitle;
        return this._nsRouteStorage.get(__hash__);
    };
    NSRouter.prototype.isHashPresent = function (hash) {
        var __hash__ = "/" + hash;
        if (this._nsRouteStorage.has(__hash__)) {
            return true;
        }
        else {
            return false;
        }
    };
    NSRouter.prototype._createStorageFoundationForAllRoutes = function () {
        for (var i = 0; i < this._nsRoutesArray.length; i++) {
            if (!this._nsRouteStorage.has(this._nsRoutesArray[i].routeLocation)) {
                this._nsRouteStorage.set(this._nsRoutesArray[i].routeLocation, this._nsRoutesArray[i].routeViewAttribute);
            }
        }
    };
    return NSRouter;
}(NSRouterView));
export { NSRouter };
;
