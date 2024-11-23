import React, { useState, useRef } from "react";
import "./AdoptPage.css"; // Custom CSS for layout and form styling
import qrcode from '../../images/image copy.png'

const AdoptPage = () => {
  const [selectedCat, setSelectedCat] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const modalRef = useRef(null);

  const breeds = [
    {
      name: "Persian Cats",
      cats: [
        {
          id: 1,
          name: "Fluffy",
          price: "$9150",
          imageUrl: "https://images.pexels.com/photos/7445032/pexels-photo-7445032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 2,
          name: "Snowy",
          price: "$8170",
          imageUrl: "https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            name: "Harry",
            price: "$9150",
            imageUrl: "https://images.pexels.com/photos/28086565/pexels-photo-28086565/free-photo-of-grey-and-white-cat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            id: 4,
            name: "Quira",
            price: "$8970",
            imageUrl: "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            id: 5,
            name: "Zamyi",
            price: "$8956",
            imageUrl: "https://images.pexels.com/photos/9384329/pexels-photo-9384329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
      ],
    },
    {
      name: "Siamese Cats",
      cats: [
        {
          id: 6,
          name: "Shadow",
          price: "$8200",
          imageUrl: "https://images.pexels.com/photos/15704212/pexels-photo-15704212/free-photo-of-a-cat-lying-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 7,
          name: "Tiger",
          price: "$9180",
          imageUrl: "https://images.pexels.com/photos/7019202/pexels-photo-7019202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 8,
          name: "Cleo",
          price: "$9180",
          imageUrl: "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 9,
          name: "Gizma",
          price: "$9180",
          imageUrl: "https://images.pexels.com/photos/747795/pexels-photo-747795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 10,
          name: "Salem",
          price: "$8180",
          imageUrl: "https://images.pexels.com/photos/6031708/pexels-photo-6031708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    {
        name: "Bengal Cats",
        cats: [
          {
            id: 11,
            name: "Oliver",
            price: "$9150",
            imageUrl: "https://images.pexels.com/photos/6054848/pexels-photo-6054848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            id: 12,
            name: "Nala",
            price: "$8170",
            imageUrl: "https://images.pexels.com/photos/27591684/pexels-photo-27591684/free-photo-of-chat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
              id: 13,
              name: "Mochi",
              price: "$9170",
              imageUrl: "https://images.pexels.com/photos/6869553/pexels-photo-6869553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
              id:14,
              name: "Willow",
              price: "$170",
              imageUrl: "https://images.pexels.com/photos/220850/pexels-photo-220850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
              id: 15,
              name: "Pudding",
              price: "$8170",
              imageUrl: "https://images.pexels.com/photos/5104118/pexels-photo-5104118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
        ],
      },
      {
        name: "British ShortHair",
        cats: [
          {
            id: 16,
            name: "Ziggy",
            price: "$9150",
            imageUrl: "https://images.pexels.com/photos/4263125/pexels-photo-4263125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            id: 17,
            name: "Jasper",
            price: "$9170",
            imageUrl: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
              id: 18,
              name: "Peanut",
              price: "$8170",
              imageUrl: "https://images.pexels.com/photos/20215953/pexels-photo-20215953/free-photo-of-close-up-of-ginger-cat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
              id: 19,
              name: "Oreo",
              price: "$9170",
              imageUrl: "https://images.pexels.com/photos/923360/pexels-photo-923360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
              id: 20,
              name: "Muffin",
              price: "$8170",
              imageUrl: "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
        ],
      },
      {
        name: "Maine Coon",
        cats: [
          {
            id: 21,
            name: "Marble",
            price: "$8966",
            imageUrl: "https://images.pexels.com/photos/8128941/pexels-photo-8128941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            id: 22,
            name: "Pepper",
            price: "$8995",
            imageUrl: "https://images.pexels.com/photos/16987749/pexels-photo-16987749/free-photo-of-a-kitten-sitting-on-the-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
              id: 23,
              name: "Cosmo",
              price: "$6170",
              imageUrl: "https://images.pexels.com/photos/28076016/pexels-photo-28076016/free-photo-of-a-cat-sitting-inside-a-cat-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
              id: 24,
              name: "Pixie",
              price: "$8170",
              imageUrl: "https://images.pexels.com/photos/9880691/pexels-photo-9880691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
              id: 25,
              name: "Buttons",
              price: "$9170",
              imageUrl: "https://images.pexels.com/photos/29045222/pexels-photo-29045222/free-photo-of-close-up-portrait-of-a-ginger-cat-with-white-fur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
        ],
      },
      {
        name: "Sphynx",
        cats: [
          {
            id: 26,
            name: "Popin",
            price: "$8150",
            imageUrl: "https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            id: 27,
            name: "Carela",
            price: "$6170",
            imageUrl: "https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
              id: 28,
              name: "Foxy",
              price: "$8170",
              imageUrl: "https://images.pexels.com/photos/1931371/pexels-photo-1931371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
              id: 29,
              name: "Madelone",
              price: "$9610",
              imageUrl: "https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
              id: 30,
              name: "Carryie",
              price: "$5260",
              imageUrl: "https://images.pexels.com/photos/19141782/pexels-photo-19141782/free-photo-of-a-cat-lying-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
        ],
      },
  ];

  const handleAdoptClick = (cat) => {
    setSelectedCat(cat);
    setIsFormOpen(true);
    setSubmissionMessage(""); // Clear any previous submission messages
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Log form data to the console
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log("Form Submitted Successfully!", formValues);

    // Set the success message (200 characters)
    setSubmissionMessage(
      `Thank you for submitting the adoption form for ${selectedCat.name}! We are excited to help you adopt a cat. 
      Our team will contact you shortly via the email or phone number you provided. Once the payment is completed 
      using the QR code, the adoption process will begin. We appreciate your love for cats and are sure that ${selectedCat.name} 
      will bring joy and happiness to your home.`
    );

    setIsFormOpen(false); // Close the form after submission
  };
//   setTimeout(() => {
//     setSubmissionMessage(""); // Clear the message after 7 seconds
//   }, 7000);
// };

  const closeModal = (e) => {
    if (modalRef.current && modalRef.current === e.target) {
      setIsFormOpen(false);
    }
  };

  return (
    <div className="adopt-page">
      <h1 style={{marginTop:"120px",fontSize:"50px"}}>Adopt a Cat ??</h1>

      {/* Display the success message */}
      {submissionMessage && <div className="submission-message">{submissionMessage}</div>}

      {/* Display each breed with their cats */}
      {breeds.map((breed) => (
        <div key={breed.name} className="breed-section">
          <h2 style={{fontSize:"28px",marginLeft:"-80px"}}>{breed.name}</h2>
          <div className="cat-list">
            {breed.cats.map((cat) => (
              <div key={cat.id} className="cat-item">
                <img src={cat.imageUrl} alt={cat.name} className="cat-image" />
                <h3>{cat.name}</h3>
                <p>Price: {cat.price}</p>
                <button style={{backgroundColor:"#ff5757",borderRadius:"10px",width:"100px"}} onClick={() => handleAdoptClick(cat)}>Adopt Now</button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* If form is open, show the form modal */}
      {isFormOpen && (
        <div   className="modal" ref={modalRef} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 style={{marginTop:"80px"}}>Adopt {selectedCat.name} for {selectedCat.price}</h3>
            <form onSubmit={handleFormSubmit} className="adopt-form">
              {/* Basic Information */}
              <label>
                Your Name: <input type="text" name="name" required />
              </label>
              <label>
                Email: <input type="email" name="email" required />
              </label>
              <label>
                Phone: <input type="tel" name="phone" required />
              </label>
              <label>
                Address: <input type="text" name="address" required />
              </label>

              {/* Additional Questions */}
              <label>
                Why do you want to adopt a cat?
                <textarea name="adoptionReason" required></textarea>
              </label>

              {/* Payment Section */}
              <div className="payment-section">
                <p>Total Amount: {selectedCat.price}</p>
                <img style={{marginLeft:"180px",width:"150px",height:"150px"}}
                  src={qrcode}                  alt="QR code to scan for payment"
                  className="qr-code"
                />
                <p>Scan the QR code to pay.</p>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdoptPage;
