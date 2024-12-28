const testimonials = [
    {name: "black car",
    photoUrl :
     "https://images.pexels.com/photos/25634643/pexels-photo-25634643/free-photo-of-lowered-ford-mustang-gt-at-the-car-show-in-the-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text:      "This is the best car I've ever seen. It's sleek, stylish, and has a great fuel efficiency. I would recommend it to anyone looking to buy a cars Flat Rock Assembly Plant in Michigan: , owner of My Car", },

    {
        name: "blue car",
        photoUrl: "https://www.wsupercars.com/wallpapers-wide/Formula-1/Alpine/2021-Formula1-Alpine-A521-003-1080w.jpg",
        text: "this is blue alpine A521 2021",
    },
    {
        name : "red car",
        photoUrl: "https://www.wsupercars.com/wallpapers-regular/Formula-1/Scuderia-Ferrari/2018-Formula1-Ferrari-SF71H-004-1080.jpg",
        text: "this is red ferrari SF71H 2018",
    },
  ];
  
  const imgC = document.querySelector("img");
  const textEl = document.querySelector(".text");
  const usernameEl = document.querySelector(".username");

  let index = 0;
    update_information_of_car();
  function update_information_of_car() {
    const { name,photoUrl,text} = testimonials[index];
    imgC.src = photoUrl;
    textEl.innertext = text;
    usernameEl.innerText = name;
    index++;
    if (index == testimonials.length) {
      index = 0;
    }
    setTimeout(() => {
        update_information_of_car();
    },2000 );


  }
  
 
