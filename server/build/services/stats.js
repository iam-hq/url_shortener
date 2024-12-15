"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = void 0;
const knex_1 = __importDefault(require("../config/knex"));
const getStats = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, knex_1.default)("urls")
        .where({ user_id })
        .leftJoin("visits", "urls.id", "visits.url_id")
        .select("user_id", knex_1.default.raw("count(visits.id) as visits_count"), knex_1.default.raw("count(urls.id) as url_count"), knex_1.default.raw("count(distinct visits.ip) as visitor_count"))
        .groupBy("user_id");
    return results;
});
exports.getStats = getStats;
