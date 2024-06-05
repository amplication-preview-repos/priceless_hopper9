import { Route as TRoute } from "../api/route/Route";

export const ROUTE_TITLE_FIELD = "id";

export const RouteTitle = (record: TRoute): string => {
  return record.id?.toString() || String(record.id);
};
