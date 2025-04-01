import React, { useState } from "react";
import "./AddRestaurant.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddRestaurant() {
  const [resName, setResName] = useState("");
  const [resAddress, setResAddress] = useState("");
  const [resNumber, setResNumber] = useState("");
  const [resOperationalHours, setResOperationalHours] = useState("");
  const [restaurantTypes, setRestaurantTypes] = useState([]);
  const [resImage, setResImages] = useState([]);

//   const navigate = useNavigate();

//   const handleImageChange = (e) => {
//     setResImages(prevImages => [...prevImages, ...Array.from(e.target.files)]);
//   };
//   const handleTypeChange = (e) => {
//     const { value, checked } = e.target;
//     setRestaurantTypes((prevTypes) =>
//       checked
//         ? [...prevTypes, value]
//         : prevTypes.filter((type) => type !== value)
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3001/Restaurant/addRestaurant", {
//         resName,
//         resAddress,
//         resNumber,
//         resOperationalHours,
//         restaurantTypes,
//         resImage,
//       })
//       .then((result) => {
//         console.log(result);
//         navigate("/Restaurant/restaurantHome");
//       })
//       .catch((err) => {
//         if (err.response && err.response.status === 400) {
//           alert(err.response.data.message);
//         } else {
//           console.error(err);
//         }
//       });
//   };
//   return (
//     <>
//       <div className="containerr mb-3">
//         <div className="intro mb-3">
//           <h2>Unlock a new revenue stream.</h2>
//           <br></br>
//           <br></br>
//           <h4>
//             Potato's global platform gives you the flexibility, visibility and
//             customer insights you need to connect with more customers. Partner
//             with us today
//           </h4>
//         </div>
//         <div>
//           <form onSubmit={handleSubmit}>
//             <h4>Restaurant Details</h4>
//             <div className="form-floating mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="floatingName"
//                 placeholder="Pizza Hut - Vaishali Nagar"
//                 value={resName}
//                 onChange={(e) => setResName(e.target.value)}
//               />
//               <label for="floatingInput">Store Name</label>
//             </div>
//             <div className="form-floating mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="floatingAddress"
//                 placeholder="Address"
//                 value={resAddress}
//                 onChange={(e) => setResAddress(e.target.value)}
//               />
//               <label for="floatingPassword">Store Address</label>
//             </div>
//             <div className="form-floating mb-3">
//               <input
//                 type="number"
//                 className="form-control"
//                 id="floatingTel"
//                 placeholder="Telephone number"
//                 value={resNumber}
//                 onChange={(e) => setResNumber(e.target.value)}
//               />
//               <label for="floatingInput">Contact Details</label>
//             </div>
//             <div className="form-floating mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="floatingBrand"
//                 placeholder="10am - 12pm"
//                 value={resOperationalHours}
//                 onChange={(e) => setResOperationalHours(e.target.value)}
//               />
//               <label for="floatingInput">Operational Hours</label>
//             </div>
//             <h4>Restaurant Type</h4>
//             <div>
//               <div className="resType">
//                 {[
//                   "Asian",
//                   "Punjabi",
//                   "BBQ",
//                   "Bar",
//                   "Bakery and Cake",
//                   "Breakfast",
//                   "Fast Foods",
//                   "Chinese",
//                   "Korean",
//                   "Desserts and IceCream",
//                   "Seafood",
//                   "North Indian",
//                   "Juice and Shakes",
//                   "Mexican",
//                   "Pizza",
//                   "Snacks & Sandwiches",
//                   "Chaat",
//                   "South Indian",
//                 ].map((type) => (
//                   <div className="form-check" key={type}>
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value={type}
//                       id={type.toLowerCase().replace(/ /g, "")}
//                       onChange={handleTypeChange}
//                     />
//                     <label
//                       className="form-check-label"
//                       htmlFor={type.toLowerCase().replace(/ /g, "")}
//                     >
//                       {type}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {/* <h4 className="mb-3">Upload document</h4>
//             <div className="input-group mb-3">
//               <label className="input-group-text" for="fssaiLicence">
//                 FSSAI license copy
//               </label>
//               <input
//                 type="file"
//                 className="form-control"
//                 id="fssaiLicenseCopy"
//               />
//             </div>
//             <div className="input-group mb-3">
//               <label className="input-group-text" for="bankAccountDetails">
//                 Bank Account Details
//               </label>
//               <input
//                 type="file"
//                 className="form-control"
//                 id="bankAccountDetails"
//               />
//             </div>
//             <div className="input-group mb-3">
//               <label className="input-group-text" for="panCardCopy">
//                 PAN card copy
//               </label>
//               <input type="file" className="form-control" id="panCardCopy" />
//             </div>
//             <div className="input-group mb-3">
//               <label className="input-group-text" for="gstin">
//                 Regular GSTIN
//               </label>
//               <input type="file" className="form-control" id="gstin" />
//             </div> */}
//             <h4 className="mb-3">Three Restaurant Images</h4>
//             {Array.from({ length: 3 }).map((_, index) => (
//               <div className="input-group mb-3" key={index}>
//                 <label
//                   className="input-group-text"
//                   htmlFor={`image${index + 1}`}
//                 >
//                   Restaurant Image {index + 1}
//                 </label>
//                 <input
//                   type="file"
//                   className="form-control"
//                   id={`image${index + 1}`}
//                   onChange={handleImageChange}
//                   multiple
//                 />
//               </div>
//             ))}
//             <button type="submit">Register Restaurant</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
const navigate = useNavigate();

const handleImageChange = (e) => {
  setResImages(prevImages => [...prevImages, ...Array.from(e.target.files)]);
};

const handleTypeChange = (e) => {
  const { value, checked } = e.target;
  setRestaurantTypes((prevTypes) =>
    checked
      ? [...prevTypes, value]
      : prevTypes.filter((type) => type !== value)
  );
};

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("resName", resName);
  formData.append("resAddress", resAddress);
  formData.append("resNumber", resNumber);
  formData.append("resOperationalHours", resOperationalHours);
  formData.append("restaurantTypes", JSON.stringify(restaurantTypes));
  
  resImage.forEach((file) => {
    formData.append("resImage", file);
  });

  axios
    .post("http://localhost:3001/Restaurant/addRestaurant", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((result) => {
      console.log(result);
      navigate("/Restaurant/restaurantHome");
    })
    .catch((err) => {
      if (err.response && err.response.status === 400) {
        alert(err.response.data.message);
      } else {
        console.error(err);
      }
    });
};

return (
  <>
    <div className="containerr mb-3">
      <div className="intro mb-3">
        <h2>Unlock a new revenue stream.</h2>
        <br></br>
        <br></br>
        <h4>
          Potato's global platform gives you the flexibility, visibility and
          customer insights you need to connect with more customers. Partner
          with us today
        </h4>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h4>Restaurant Details</h4>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="Pizza Hut - Vaishali Nagar"
              value={resName}
              onChange={(e) => setResName(e.target.value)}
            />
            <label htmlFor="floatingInput">Store Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingAddress"
              placeholder="Address"
              value={resAddress}
              onChange={(e) => setResAddress(e.target.value)}
            />
            <label htmlFor="floatingPassword">Store Address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="floatingTel"
              placeholder="Telephone number"
              value={resNumber}
              onChange={(e) => setResNumber(e.target.value)}
            />
            <label htmlFor="floatingInput">Contact Details</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingBrand"
              placeholder="10am - 12pm"
              value={resOperationalHours}
              onChange={(e) => setResOperationalHours(e.target.value)}
            />
            <label htmlFor="floatingInput">Operational Hours</label>
          </div>
          <h4>Restaurant Type</h4>
          <div>
            <div className="resType">
              {[
                "Asian",
                "Punjabi",
                "BBQ",
                "Bar",
                "Bakery and Cake",
                "Breakfast",
                "Fast Foods",
                "Chinese",
                "Korean",
                "Desserts and IceCream",
                "Seafood",
                "North Indian",
                "Juice and Shakes",
                "Mexican",
                "Pizza",
                "Snacks & Sandwiches",
                "Chaat",
                "South Indian",
              ].map((type) => (
                <div className="form-check" key={type}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={type}
                    id={type.toLowerCase().replace(/ /g, "")}
                    onChange={handleTypeChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={type.toLowerCase().replace(/ /g, "")}
                  >
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <h4 className="mb-3">Three Restaurant Images</h4>
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="input-group mb-3" key={index}>
              <label
                className="input-group-text"
                htmlFor={`image${index + 1}`}
              >
                Restaurant Image {index + 1}
              </label>
              <input
                type="file"
                className="form-control"
                id={`image${index + 1}`}
                onChange={handleImageChange}
                multiple
              />
            </div>
          ))}
          <button type="submit">Register Restaurant</button>
        </form>
      </div>
    </div>
  </>
);
}
