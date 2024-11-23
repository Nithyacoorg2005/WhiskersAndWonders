import React, { useState } from "react";
import "./FoodMarketplace.css";

const FoodMarketplace = ({ addToCart }) => {
  const foodCategories = [
    {
      id: 1,
      logo: "https://cdn.shopify.com/s/files/1/0565/8021/0861/t/617/assets/img-1-4-1700034888540_800x.jpg?v=1700034889",
      name: "Whiskas",
      items: [
        {
          id: 2,
          imgUrl:
            "https://www.petwarehouse.ph/17274/whiskas-junior-tuna-80g-cat-wet-food.jpg",
          name: "Whiskas (2-12 Months) Mackeral 0.45 kg Dry Young Cat Food",
          price: 190,
        },
        {
          id: 3,
          imgUrl:
            "https://rukminim2.flixcart.com/image/312/312/xif0q/pet-food/v/s/k/-original-imagjh9patzyajs6.jpeg?q=70&crop=false",
          name: "Whiskas (+1 year) Tuna 1.02 kg (12x0.09 kg) Wet Adult Cat Food",
          price: 516,
        },
        {
          id: 4,
          imgUrl:
            "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/i/u/x/-original-imah4hrmy5c6qtyg.jpeg?q=70",
          name: "Whiskas (2-12 Months) Mackeral 1.1 Kg Dry Young Cat Food",
          price: 407,
        },
        {
          id: 5,
          imgUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/l/h/9/1120-cat-8-28853301016036-whiskas-original-imah5arukxtyz7pz.jpeg?q=70",
          name: "Whiskas (1+ Years) Chicken 1.12 kg (14x0.08 kg) Wet Adult Cat Food",
          price: 516,
        },
        {
          id: 6,
          imgUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/s/z/u/1120-cat-8-28853301015947-whiskas-original-imah5arz8c7ayyyq.jpeg?q=70",
          name: "Whiskas Kitten (2-12 months) Tuna 1.02 kg (12x0.09 kg) Wet New Born Cat Food",
          price: 516,
        },
        {
          id: 7,
          imgUrl:"https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/c/a/d/-original-imah4hrhvvddre6g.jpeg?q=70",
          name: "Whiskas (1+ Years) Chicken 1.2 kg Dry Adult Cat Food",
          price: 386,
        },
      ],
    },
    {
      id: 8,
      logo: "https://5.imimg.com/data5/SELLER/Default/2021/12/FZ/BE/NW/143332837/purepet-adult-1-year-mackerel-dry-cat-food-500x500.jpg",
      name: "PurePet",
      items: [
        {
          id: 9,
          imgUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/c/x/e/2-8-cat-1-9950785-purepet-original-imagqgk5auruz6xy.jpeg?q=70",
          name: "purepet Ocean Fish 2.8 kg Dry Adult Cat Food",
          price: 381,
        },
        {
          id: 10,
          imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/o/m/i/6-cat-1-9950645-purepet-original-imagjsbfpevsrcgy.jpeg?q=70",
          name: "purepet Tuna and Salmon 6 kg Dry Adult Cat Food",
          price: 848,
        },
        {
          id: 11,
          imgUrl: "https://rukminim2.flixcart.com/image/612/612/krp94sw0/pet-food/h/k/w/1-cat-kansal081-drools-original-imag5fnqwggn56yb.jpeg?q=70",
          name: "Drools Purepet Wet Cat Food, Real Tuna and Chicken Liver in Gravy, 24 Pouches (24 x 70g) Tuna 1 kg Dry Adult Cat Food",
          price: 720,
        },
        {
          id: 12,
          imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/k/v/m/1-5-cat-30-9950910-purepet-original-imagwzggp4vv4dky.jpeg?q=70",
          name: "purepet Real Chicken Liver and Chunks of Chicken 1.5 kg (30x0.05 kg) Wet Adult Cat Food",
          price: 637,
        },
        {
          id: 13,
          imgUrl: "https://rukminim2.flixcart.com/image/612/612/khdqnbk0/pet-food/x/t/t/7-cat-8906043145444-purepet-original-imafxeycg2hf7zxg.jpeg?q=70",
          name: "purepet Nutritional Sea Food 7 kg Dry Adult Cat Food",
          price: 720,
        },
        {
          id: 14,
          imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/r/l/h/3-6-cat-3-m-882-purepet-original-imagmg65zw6jap6w.jpeg?q=70",
          name: "purepet CAT Kitten Food Collection 3 in 1 Combo Fish 3.6 kg (3x1.2 kg) Dry Young, New Born Cat Food",
          price: 1499,
        },
      ],
    },
    {
      id: 15,
      logo: "https://cdn.shopify.com/s/files/1/0565/8021/0861/t/617/assets/img-3-5-1700035038473_800x.jpg?v=1700035039",
      name: "Royal Canin",
      items: [
        {
          id: 16,
          imgUrl: "https://rukminim2.flixcart.com/image/612/612/jq8dgnk0/pet-food/g/b/t/0-4-cat-3182550721202-royal-canin-original-imafcafjd3kjdhfj.jpeg?q=70",
          name: "Royal Canin Persian 0.4 kg Dry Young Cat Food",
          price: 480,
        },
        {
          id: 17,
          imageUrl: "https://rukminim2.flixcart.com/image/612/612/jq8dgnk0/pet-food/g/h/s/0-4-cat-3182550707305-royal-canin-original-imafcaf5wfnghgkf.jpeg?q=70",
          name: "Royal Canin Mother and Babycat 2 kg Dry New Born Cat Food",
          price: 2450,
        },
        {
          id: 18,
          imgUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/m/x/s/0-085-cat-1-otrfo2270-royal-canin-original-imah5hep4ax5qfg9.jpeg?q=70",
          name: "Royal Canin Instinctive Loaf Adult Wet Cat Food - 85 gm 0.085 kg Wet Adult Cat Food",
          price: 105,
        },
        {
          id: 19,
          imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/b/z/n/1-dog-1-otrfo1762-royal-canin-original-imah46zd8gbpa8gf.jpeg?q=70",
          name: "Royal Canin Sterilised 37 Adult Dry Cat Food - 400 gm 0.4 kg Dry Adult Cat Food",
          price: 500,
        },
        {
          id: 20,
          imgUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/c/z/e/0-085-cat-1-otrfo2959-royal-canin-original-imah5hezkgfw5eg8.jpeg?q=70",
          name: "Royal Canin G-INTESTINAL CAT 85GM 0.085 kg Wet Adult Cat Food",
          price: 230,
        },
        {
          id: 21,
          imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/w/v/k/2-cat-1-otrfo1737-royal-canin-original-imah47xgtshnvawh.jpeg?q=70",
          name: "Royal Canin Urinary Care Adult Dry Cat Food 2 kg Dry Adult Cat Food",
          price: 2600,
        },
      ],
    },
    {
      id: 22,
      logo: "https://www.bigbasket.com/media/uploads/p/l/40171055_10-drools-drools-100-vegetarian-adult-dog-food-65kg-free-12kg-extra-insidelimited-stock.jpg",
      name: "drools",
      items: [
        {
          id: 23,
          imgUrl: "https://rukminim2.flixcart.com/image/612/612/kidgnm80-0/pet-food/s/g/q/cat-931058-drools-original-imafy6dzprffve5j.jpeg?q=70",
          name: "Drools Ocean Fish 4 kg Dry Young Cat Food",
          price: 848,
        },
        {
          id: 24,
          imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/h/b/u/0-375-cat-1-cat-creamy-treats-375-090224-drools-original-imagxynv4qtm8dxc.jpeg?q=70",
          name: "Drools Drools Creamy Treats for Cat Real Chicken - 25 Pieces Chicken 0.375 kg Dry Adult, New Born, Young, Senior Cat Food",
          price: 449,
        },
        {
          id: 25,
          imgUrl: "https://rukminim2.flixcart.com/image/612/612/kykgb680/pet-food/3/o/h/0-2-cat-1-gpl145-drools-original-imagarzyvuftfhgx.jpeg?q=70",
          name: "Drools Drools Absolute Salmon Oil for cat 150Ml Cat Supplement Salmon 0.2 kg Wet New Born Cat Food",
          price: 250,
        },
        {
          id: 26,
          imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/h/h/e/1-2-cat-1-ocean-fish-1-2kg-drools-original-imah5us9gqcjpucy.jpeg?q=70",
          name: "Drools Kitty Yums Ocean Fish 1.2 kg Dry Adult Cat Food",
          price: 648,
        },
        {
          id: 27,
          imgUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/p/o/b/1-2-cat-1-cat-food-1-2-drools-original-imagz5dwyghqpr3z.jpeg?q=70",
          name: "Drools Kitty Yums Kitten Ocean Fish 1.2 kg Dry New Born, Young Cat Food",
          price: 585,
        },
        {
          id: 28,
          imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/r/k/h/0-4-cat-1-1-drools-original-imagvqe9aannjzfh.jpeg?q=70",
          name: "Drools Creamy Treats Crab & Chicken,Cat Treat 25Pcs Chicken 0.4 kg Wet Young Cat Food",
          price: 429,
        },
      ],
    },
    {
      id: 29,
      logo: "https://cdn.shopify.com/s/files/1/0565/8021/0861/t/617/assets/img-5-3-1700035073368_800x.jpg?v=1700035075",
      name: "Me-O",
      items: [
        {
          id: 30,
          imgUrl: "https://rukminim2.flixcart.com/image/612/612/jxw5g280/pet-food/f/u/h/300-cat-ptl7-mahisfashions-original-imafgyc5ddmwtcvf.jpeg?q=70",
          name: "Me-O Salmon Treat Salmon 0.3 kg (20x0.01 kg) Wet Adult, New Born, Young, Senior Cat Food",
          price: 589,
        },
        {
          id: 31,
          imageUrl: "https://rukminim2.flixcart.com/image/612/612/kt1u3rk0/pet-food/w/y/r/0-800-cat-10-5644-meo-original-imag6hpmqmjuzxpw.jpeg?q=70",
          name: "Me-O meo kitten jelly combo of 10pcs by Footwear Junction ( 4pcs meo tuna in jelly 80g each)&(6 pcs of meo kitten tuna with sardine in jelly 80 gm each) Tuna 0.8 kg (10x0.08 kg) Wet Young, Young Cat Food",
          price: 651,
        },
        {
          id: 32,
          imgUrl: "https://rukminim2.flixcart.com/image/612/612/kt1u3rk0/pet-food/x/s/e/0-180-cat-12-667788-meo-original-imag6hmund6yve2g.jpeg?q=70",
          name: "Me-O meo treats combo 12pcs by footwear juntion 15g each in 4 flavour crab, salmon, bonito and chicken & liver Chicken, Crab, Salmon, Fish 0.18 kg (12x0.01 kg) Wet Adult, Senior, Young Cat Food",
          price: 424,
        },
        {
          id: 33,
          imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/f/j/q/0-96-cat-12-cat-1500-me-o-original-imagyjghxbvrvefd.jpeg?q=70",
          name: "Me-O Me-O Wet Cat Food Tuna with Chicken in Jelly (Pack of 12) Chicken 0.96 kg (12x0.08 kg) Wet Adult Cat Food",
          price: 861,
        },
        {
          id: 34,
          imgUrl: "https://rukminim2.flixcart.com/image/612/612/kt8zb0w0/pet-food/c/8/y/0-280-cat-7-2334-me-o-original-imag6n6d3uqaru3e.jpeg?q=70",
          name: "Me-O meo adult jelly & treat combo of 7pcs by footwear junction(3pcs of tuna with chicken flake in jelly 70g each )&(4meo creamy treat 15g each in 4 flavors crab, bonito, salmon& chicken) 0.28 kg (7x0.04 kg) Wet Adult, Senior Cat Food",
          price: 599,
        },
        {
          id: 35,
          imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/o/6/b/0-360-cat-6-chicken-liver-me-o-original-imagxtxgcvh5fsgq.jpeg?q=70",
          name: "Me-O creamy treat Chicken & Liver 60gm Each pack of 6 Chicken, Liver 0.36 kg (6x0.06 kg) Dry Adult Cat Food",
          price:755 ,
        },
      ],
    },
    {
      id: 36,
      logo: "https://cdn.shopify.com/s/files/1/0565/8021/0861/t/617/assets/img-6-1700035092885_800x.jpg?v=1700035093",
      name: "Sheba",
      items: [
        {
          id: 37,
          imgUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/p/a/j/-original-imagzhf34hzb2arw.jpeg?q=70",
          name: "Sheba Premium with Sasami in Gravy Sea Food, Fish 0.42 kg (12x0.03 kg) Wet Adult Cat Food",
          price: 516,
        },
        {
          id: 38,
          imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/k/6/c/-original-imagjmgrw2g6ewdt.jpeg?q=70",
          name: "Sheba Premium Succulent Breast in Gravy Chicken 0.34 kg (4x0.09 kg) Dry Adult Cat Food",
          price: 510,
        },
        {
          id: 39,
          imgUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/h/h/0/1-5-cat-1-6914973706309-sheba-original-imagzypn5fz2y7pv.jpeg?q=70",
          name: "Sheba Salmon 1.5 kg Dry Adult, Young Cat Food",
          price: 1309,
        },
        {
          id: 40,
          imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/h/g/y/0-42-cat-1-otrfo1961-sheba-original-imah5fbupzagdzkf.jpeg?q=70",
          name: "Sheba Sheba Rich Fish with Sasami Premium Wet Cat Food - 35 gm (Pack Of 12) Fish 0.42 kg Dry Adult Cat Food",
          price: 600,
        },
        {
          id: 41,
          imgUrl: "https://rukminim2.flixcart.com/image/612/612/kt7jv680/pet-food/n/y/n/0-280-cat-4-457-sheba-original-imag6hx4g5vgchwh.jpeg?q=70",
          name: "Sheba sheba kitten gravy combo of 4 pcs by footwear junction 70g each Chicken 0.28 kg (4x0.07 kg) Wet Young Cat Food",
          price: 380,
        },
        {
          id: 42,
          imageUrl: "https://rukminim2.flixcart.com/image/612/612/kt7jv680/pet-food/i/w/q/0-192-cat-4-456-sheba-original-imag6huhcnadydaz.jpeg?q=70",
          name: "Sheba sheba adult cat treat combo of 4pack by footwer Footwear Junction Chicken, Fish 0.192 kg (4x0.05 kg) Wet Adult, Young, Senior Cat Food",
          price: 1050,
        },
      ],
    },
    {
      id: 43,
      logo: "https://cdn.shopify.com/s/files/1/0565/8021/0861/t/617/assets/img-8-1700035131070_800x.jpg?v=1700035133",
      name: "Friskies",
      items: [
        {
          id: 44,
          imgUrl: "https://rukminim2.flixcart.com/image/612/612/l572ufk0/pet-food/z/a/x/1-1-cat-1-12385498-purina-original-imagfxbkjpghyqhy.jpeg?q=70",
          name: "purina FRISKIES Kitten Discoveries Baby Cat Food, Tuna Chicken Milk, Whole Grain, 1.1kg Chicken 1.1 kg Dry Young Cat Food",
          price: 549,
        },
        
      ],
    },
    
  ];

  const [selectedFoodCategory, setSelectedFoodCategory] = useState(null);

  const handleLogoClick = (category) => {
    setSelectedFoodCategory(category);
  };

  return (
    <div className="marketplace-container">
      <h1 style={{ marginTop: "100px", fontSize: "30px" }}>Food Marketplace</h1>
      <div style={{ marginTop: "60px" }} className="logo-grid">
        {foodCategories.map((category) => (
          <div key={category.id} className="food-logo">
            <img
              src={category.logo}
              alt={category.name}
              onClick={() => handleLogoClick(category)}
            />
            <h3 style={{ marginLeft: "-200px", marginTop: "15px" }}>
              {category.name}
            </h3>
          </div>
        ))}
      </div>

      {selectedFoodCategory && (
        <div className="food-items">
          <h2>{selectedFoodCategory.name}</h2>
          <div style={{ marginTop: "60px" }} className="item-list">
            {selectedFoodCategory.items.map((item) => (
              <div key={item.id} className="food-item">
                <img src={item.imgUrl} alt={`${item.name}`} />
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                
              <button style={{width:"130px",height:"38px"}} onClick={() => {
    addToCart(item);
    alert(`Item ${item.name} added to cart`);
}}> Add to Cart</button>

             
              </div>
            ))}
          </div>
        </div>
      )}
       
    </div>
   
  );
};

export default FoodMarketplace;
