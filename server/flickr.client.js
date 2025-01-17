"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var cross_fetch_1 = require("cross-fetch");
var FLICKR_USER_ID = '186053014@N08';
var FLICKR_API_KEY = '94605427e60f55f26a25b219a11b099a';
var FlickrClient = /** @class */ (function () {
    function FlickrClient() {
    }
    FlickrClient.flickrUrl = function (_a) {
        var method = _a.method, params = _a.params;
        return "https://api.flickr.com/services/rest/?method=" + method + "&api_key=" + FLICKR_API_KEY + "&user_id=" + FLICKR_USER_ID + "&" + params + "&format=json&nojsoncallback=1";
    };
    FlickrClient.getAlbums = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, resp, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        url = FlickrClient.flickrUrl({ method: 'flickr.photosets.getList', params: '&primary_photo_extras=url_z' });
                        return [4 /*yield*/, cross_fetch_1["default"](url)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        resp = _a.sent();
                        if (resp.stat !== 'ok') {
                            throw Error('Ошибка при попытке загрузить фотографии из меню');
                        }
                        res.status(200).send(resp);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        res.status(404).json({ error: e_1 });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FlickrClient.getPhotoset = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, resp, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        url = FlickrClient.flickrUrl({
                            method: 'flickr.photosets.getPhotos',
                            params: "&photoset_id=" + req.params.photosetId
                        });
                        return [4 /*yield*/, cross_fetch_1["default"](url)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        resp = _a.sent();
                        if (resp.stat !== 'ok') {
                            throw Error('Ошибка при попытке загрузить блюда');
                        }
                        res.status(200).send(resp);
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        res.status(404).json({ error: e_2 });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return FlickrClient;
}());
exports.FlickrClient = FlickrClient;
