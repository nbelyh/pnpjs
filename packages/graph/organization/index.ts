import { GraphFI } from "../fi.js";
import { IOrganization, Organization } from "./types.js";

export {
    IOrganization,
    Organization,
} from "./types.js";

declare module "../fi.js" {
    interface GraphFI {
        readonly organization: IOrganization;
    }
}

Reflect.defineProperty(GraphFI.prototype, "organization", {
    configurable: true,
    get: function (this: GraphFI) {
        return this.create(Organization);
    },
});
