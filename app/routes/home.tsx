
import { DisplayItemType, type DisplayItem } from "~/constants/Items";
import type { Route } from "./+types/home";
import Carousel from "~/components/carousel/Carousel";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vibez" },
    { name: "Home", content: "Your music, your vibe" },
  ];
}

export default function Home() {

  // TESTING: Topics Display
  const testItems: DisplayItem[] = [
    {
      id: "1",
      title: "Test Item 1",
      type: DisplayItemType.Album,
    },
    {
      id: "2",
      title: "Test Item 2",
      type: DisplayItemType.Album,
    },
    {
      id: "3",
      title: "Test Item 3",
      type: DisplayItemType.Album,
    },
    {
      id: "4",
      title: "Test Item 4",
      type: DisplayItemType.Album,
    },
    {
      id: "5",
      title: "Test Item 5",
      type: DisplayItemType.Album,
    },
    {
      id: "6",
      title: "Test Item 6",
      type: DisplayItemType.Album,
    },
    {
      id: "7",
      title: "Test Item 7",
      type: DisplayItemType.Album,
    },
  ]



  const topicDisplay = (title: string, content?: DisplayItem[]) => {
    return (
      <div className="flex flex-1 flex-col h-1/5 w-5/6 border-2 border-white rounded-lg shadow-lg p-4">
        <h2 className="text-white text-2xl m-auto">{title}</h2>
        <div className="flex flex-1 flex-row h-full w-full m-auto">
          {content && 
            <Carousel items={content} />
          }
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-1 h-full w-full bg-black">
      <div className="relative top-0 h-full w-full mt-5">
        <div className="flex flex-1 flex-col min-h-full w-5/6 top-0 bg-gray-900 m-auto border-2 border-white rounded-lg shadow-lg">
          <h1 className="text-white text-4xl m-auto underline">Welcome to Vibez</h1>
          <div id="topics" className="flex flex-1 flex-col h-full w-full m-auto gap-4 overflow-y-auto justify-center align-middle items-center">
            {topicDisplay("Trending Albums", testItems)}
          </div>
        </div>
      </div>
    </div>
  );
}
