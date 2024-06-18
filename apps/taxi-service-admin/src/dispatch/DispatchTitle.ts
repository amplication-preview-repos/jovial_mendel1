import { Dispatch as TDispatch } from "../api/dispatch/Dispatch";

export const DISPATCH_TITLE_FIELD = "id";

export const DispatchTitle = (record: TDispatch): string => {
  return record.id?.toString() || String(record.id);
};
