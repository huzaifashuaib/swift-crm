"use client";
import Image from "next/image";
import ModalForm from "../../modalForm/ModalForm";
import useAddProductForm from "./useAddProductForm";

const AddProductForm = () => {
  const {
    isOpen,
    toggleModal,
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    FaSpinner,
    IoMdAdd,
    FaPlus,
    handleUpload,
    CldUploadButton,
  } = useAddProductForm();

  return (
    <div>
      <div
        onClick={toggleModal}
        className="px-20 py-[7.5px] border border-btnColor rounded-[3.2px] bg-themeLight flex justify-between items-center cursor-pointer hover:bg-btnColor text-btnColor hover:text-themeLight"
      >
        <div className="text-sm font-semibold flex items-center gap-2">
          <div className="text-lg">
            <IoMdAdd />
          </div>
          <div>Add Product</div>
        </div>
      </div>

      <ModalForm
        isOpen={isOpen}
        toggleModal={toggleModal}
        title="Create New Product"
      >
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 mb-4 grid-cols-2">
           
              <div className="flex justify-center items-center my-4 col-span-2">
                <CldUploadButton
                  uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET_KEY}
                  className={`bg-gray-100 h-28 w-28  border-4 border-btnColor shadow-sm rounded-full relative ${
                    formData.imgUrl
                  }`}
                  onSuccess={handleUpload}
                >
                  <div className="flex justify-center items-center">
                    <FaPlus className="text-cardHead " />
                  </div>
                  <div>
                    {formData.imgUrl && (
                      <Image
                        src={formData.imgUrl}
                        alt=""
                        fill
                        className="absolute object-cover inset-0 h-24 w-24 rounded-full"
                      />
                    )}
                  </div>
                </CldUploadButton>
              </div>
            
            <div className="col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-semibold text-btnColor"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white border border-btnColor text-sm rounded-lg focus:ring-btnColor focus:border-btnColor block w-full p-2.5 placeholder-btnColor text-black"
                placeholder="Type product name"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-semibold text-btnColor"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={formData.price}
                onChange={handleChange}
                className="bg-white border border-btnColor text-black text-sm rounded-lg focus:ring-btnColor focus:border-btnColor block w-full p-2.5 placeholder-btnColor"
                placeholder="$2999"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-semibold text-btnColor"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="bg-white border border-btnColor text-btnColor text-sm rounded-lg focus:ring-btnColor focus:border-btnColor block w-full p-2.5"
              >
                <option value="">Select category</option>
                <option value="TV">TV/Monitors</option>
                <option value="PC">PC</option>
                <option value="GA">Gaming/Console</option>
                <option value="PH">Phones</option>
              </select>
            </div>

            <div className="col-span-2 sm:col-span-2">
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-semibold text-btnColor"
              >
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="bg-white border border-btnColor text-black text-sm rounded-lg focus:ring-btnColor focus:border-btnColor block w-full p-2.5 placeholder-btnColor"
                placeholder="0"
                required
              />
            </div>

            <div className="col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-semibold text-btnColor"
              >
                Product Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm bg-white border border-btnColor rounded-lg placeholder-btnColor text-black focus:ring-btnColor focus:border-btnColor"
                placeholder="Write product description here"
              ></textarea>
            </div>
          </div>
          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="text-white inline-flex items-center bg-btnColor hover:bg-dark-btnColor focus:ring-4 focus:outline-none focus:ring-btnColor font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {isLoading ? (
                <FaSpinner className="animate-spin mr-2 inline-block" />
              ) : (
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              Add New Product
            </button>
          </div>
        </form>
      </ModalForm>
    </div>
  );
};

export default AddProductForm;
