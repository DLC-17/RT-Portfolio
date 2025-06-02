
import ContentLayout from "./layout";
import { ColumnsPhotoAlbum} from "react-photo-album";
import "react-photo-album/columns.css";


// Photo data with captions
const photos = [
  { src: "Gallery/B_Grad.jpg", width: 1400, height: 900 },
  { src: "GroupShot.jpg", width: 1400, height: 900 },
  { src: "Aj.jpg", width: 1400, height: 900 },
  { src: "Rigo.jpg", width: 1400, height: 900 },
  { src: "/Gallery/Black_Grad_P-lo.jpg", width: 1400, height: 900 },
  { src:"/Gallery/Research.jpg", width: 1400, height: 900 },
];


const MainPage = () => {
  return (
    <ContentLayout>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl font-bold mb-4 justify-left text-black">Gallery</h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore my photography collection.
        </p>
        <ColumnsPhotoAlbum photos={photos} columns={3} />
      </div>
    </ContentLayout>
  );
};

export default MainPage;
