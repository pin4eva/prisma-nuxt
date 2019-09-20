"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Report",
    embedded: false
  },
  {
    name: "Vol",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Question",
    embedded: false
  },
  {
    name: "Faq",
    embedded: false
  },
  {
    name: "Judge",
    embedded: false
  },
  {
    name: "Counsel",
    embedded: false
  },
  {
    name: "Contents",
    embedded: false
  },
  {
    name: "Ratios",
    embedded: false
  },
  {
    name: "Issues",
    embedded: false
  },
  {
    name: "Cases",
    embedded: false
  },
  {
    name: "Location",
    embedded: false
  },
  {
    name: "Sub",
    embedded: false
  },
  {
    name: "isActive",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
