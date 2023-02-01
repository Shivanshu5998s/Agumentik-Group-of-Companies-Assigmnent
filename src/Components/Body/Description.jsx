import React from "react";

const Description = () => {
  return (
    <>
      <div className="DriBodyCon-desc">
        <p>Yo, what's up guys! 🥳</p>

        <p>
          It's tiring to write a different description for each shot, just like
          the shot and move on, love ya! 😘
        </p>

        <p>
          Let's create something amazing together! 🧑&zwj;🎨
          <br />
          Feel free to contact me -{" "}
          <a href="#">
            ShivanshuChobey@gmail.com
          </a>
        </p>
      </div>
      <div className="DriBodyCon-contact">
        <div className="avatar">
          <span></span>
          <a class="url" rel="contact" title="Shivanshu ツ" href="#">
            <picture>
              <img
                alt="Eren ツ"
                src="https://cdn.dribbble.com/users/8758961/avatars/small/c392f9fb3a6ad2b2c1e06929f59745a8.jpeg?1656009684"
              />
            </picture>
          </a>
          <span></span>
        </div>
        <a class="name" href="#">
          Shivanshu Chobey ツ
        </a>
        <div className="details">let's create something amazing together →</div>
        <div className="driPink-btn hire">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            role="img"
            class="icon "
          >
            <path d="m12 13.595c-.715 0-1.43-.153-2.095-.46l-9.905-4.572v11.437c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2v-11.437l-9.905 4.572c-.665.307-1.38.46-2.095.46zm10-11.595h-20c-1.105 0-2 .895-2 2v2.36l10.743 4.958c.799.368 1.716.369 2.515 0l10.742-4.958v-2.36c0-1.105-.895-2-2-2z"></path>
          </svg>
          <span>Hire Me</span>
        </div>
      </div>
    </>
  );
};

export default Description;
