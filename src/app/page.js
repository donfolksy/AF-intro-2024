import Image from "next/image";
import { IoCloudUploadOutline } from "react-icons/io5";
export default function Home() {
  return (
    <section className="font-serif bg-gray min-h-screen xl:px-[5rem] xl:py-7">
      <div className=" xl:flex gap-[3rem] items-center">
        <img className="xl:h-[40rem]" src={"/AF.jpg"} alt="" />
        <div className="flex flex-col items-center">
          <h1 className="xl:text-4xl pt-5 font-bold ">
            We'd love to see this day through your eyes.
          </h1>
          <p className="xl:text-lg text-center font-semibold pt-5">
            Your photos are a treasured gift to us. Please upload them here.
          </p>

          <div className="pt-8 flex flex-col items-center">
            <label className="flex flex-col items-center cursor-pointer">
              <IoCloudUploadOutline className="w-[3rem] h-[3rem]" />
              <h5 className="text-center mt-4">
                Drag and drop or click to upload
              </h5>
              <input type="file" accept="image/*" multiple className="hidden" />
            </label>
            <p className="py-8 text-center">Image upload status</p>
          </div>
        </div>
      </div>
    </section>
  );
}
