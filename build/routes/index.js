"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getAllListings = require("./getAllListings");

var _getListing = require("./getListing");

var _addViewToListing = require("./addViewToListing");

var _getUserListings = require("./getUserListings");

var _createNewListing = require("./createNewListing");

var _updateListing = require("./updateListing");

var _deleteListing = require("./deleteListing");

var _default = [_addViewToListing.addViewToListingRoute, _createNewListing.createNewListingRoute, _deleteListing.deleteListingRoute, _getAllListings.getAllListingsRoute, _getListing.getListingRoute, _getUserListings.getUserListingsRoute, _updateListing.updateListingRoute];
exports["default"] = _default;