import { DeviceInfo as TDeviceInfo } from "../api/deviceInfo/DeviceInfo";

export const DEVICEINFO_TITLE_FIELD = "id";

export const DeviceInfoTitle = (record: TDeviceInfo): string => {
  return record.id?.toString() || String(record.id);
};
