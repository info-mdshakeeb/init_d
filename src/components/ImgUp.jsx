import { GrCloudUpload } from "react-icons/gr";


const ImgUp = ({ file, setFile, name }) => {

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        setFile({
          ...file, [name]: {
            dataURL: reader.result,
            updateFile: selectedFile,
            type: selectedFile.type
          }
        });
      };
    }
  };

  if (!name) return alert("Please provide a name for the file");

  return (
    <div className="flex flex-col items-center justify-center">
      <label

        htmlFor={name}
        className="relative flex items-center justify-center w-full h-[150px] cursor-pointer border-2 border-gray-300 border-dashed rounded-md"
      >
        {(!file[name] && !file[name]?.dataURL) ? (
          <div className="flex flex-col items-center justify-center gap-3">
            <GrCloudUpload className="w-10 h-10 text-gray-400" />
            <p className="font-semibold text-gray-500">Drop or Click To upload</p>
          </div>
        ) :
          (file[name] && typeof file[name] === 'string') && (
            <img src={file[name]} alt="image" className="h-[146px] w-full object-contain" />
          )
        }
        {file[name] && file[name].dataURL && (
          <div>
            {file[name]?.type.startsWith("image/") && (
              <img src={file[name].dataURL || file[name]} alt="image" className=" h-[146px] w-full object-contain" />
            )}
          </div>
        )}
        <input
          onChange={(e) => (setFile(
            { ...file, [name]: { dataURL: "", updateFile: "", type: "" } },
            console.log(file)

          ), handleFile(e))}
          id={name}
          type="file"
          name={name}
          accept={'image/*'}
          className="hidden border-6"
        />
      </label>
    </div>
  );
};

export default ImgUp;
