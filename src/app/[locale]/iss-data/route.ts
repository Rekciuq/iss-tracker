import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

import { FallbackService } from "@/services/fallback.service";

const peopleInSpaceAPI = "http://api.open-notify.org/astros.json";
const ISSPositionAPI = "http://api.open-notify.org/iss-now.json";
type TDataType = "people" | "position";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  try {
    let apiURL;
    if (type === "people") {
      apiURL = peopleInSpaceAPI;
    } else if (type === "position") {
      apiURL = ISSPositionAPI;
    } else {
      return NextResponse.json(
        { error: "Invalid request type" },
        { status: 400 }
      );
    }

    const response = await axios.get(apiURL);

    FallbackService.updateRecords(type, { ...response.data });
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    const fallbackData = FallbackService.readRecords(type as TDataType);
    return NextResponse.json({ fallbackData }, { status: 500 });
  }
}
