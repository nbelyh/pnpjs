import { Organization as IOrganizationType } from "@microsoft/microsoft-graph-types";
import { graphInvokableFactory, _GraphQueryableInstance } from "../graphqueryable.js";

export class _Organization<GetType = IOrganizationType> extends _GraphQueryableInstance<GetType> {
}

export interface IOrganization extends _Organization { }
export const Organization = graphInvokableFactory<IOrganization>(_Organization);
