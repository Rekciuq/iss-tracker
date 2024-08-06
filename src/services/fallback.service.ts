import fs from "fs";
import path from "path";

type TDataType = "people" | "position";

const filePath = path.join(process.cwd(), "public", "data.json");

export const FallbackService = {
  updateRecords: (dataType: TDataType, data: any) => {
    const fileData = fs.readFileSync(filePath, "utf8");
    let jsonData = JSON.parse(fileData);
    if (dataType === "people") {
      if (data.number > jsonData.peopleInSpace.number) {
        jsonData.peopleInSpace = data;
      }
    }
    if (dataType === "position") {
      if (data.timestamp > jsonData.ISSPosition.timestamp) {
        jsonData.ISSPosition = data;
      }
    }
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), "utf8");
  },
  readRecords: (dataType: TDataType) => {
    const fileData = fs.readFileSync(filePath, "utf8");
    const jsonData = JSON.parse(fileData);

    if (dataType === "people") {
      return jsonData.peopleInSpace;
    }
    if (dataType === "position") {
      return jsonData.ISSPosition;
    }
  },
};
