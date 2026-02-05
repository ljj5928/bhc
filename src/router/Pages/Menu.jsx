import React from "react";
import { useState } from "react";

const Menu = () => {
  const [menus, setMenus] = useState([
    { id: 1, name: "콰삭톡 한마리", engName: "Kwasak Tok", img: "./bhcimg/c1.png" },
    { id: 2, name: "콰삭톡 콤보", engName: "Kwasak Tok", img: "./bhcimg/c2.png" },
    { id: 3, name: "콰삭톡 순살", engName: "Kwasak Tok", img: "./bhcimg/c3.png" },
    { id: 4, name: "콰삭톡 윙", engName: "Kwasak Tok", img: "./bhcimg/c4.png" },
    { id: 5, name: "콰삭톡 스틱", engName: "Kwasak Tok", img: "./bhcimg/c5.png" },
    {
      id: 6,
      name: "콰삭킹 한마리",
      engName: "Kwasak King",
      img: "./bhcimg/c6.png",
    },
    { id: 7, name: "콰삭킹 콤보", engName: "Kwasak King", img: "./bhcimg/c7.png" },
    { id: 8, name: "콰삭킹 순살", engName: "Kwasak King", img: "./bhcimg/c8.png" },
    { id: 9, name: "콰삭킹 윙", engName: "Kwasak King", img: "./bhcimg/c9.png" },
    {
      id: 10,
      name: "콰삭킹 스틱",
      engName: "Kwasak King",
      img: "./bhc/c10.png",
    },
  ]);

  return (
    <div className="menu">
      <div className="menu_img">
        <h2 className="menu_title">Menu</h2>
      </div>
      <div className="menu_content">
        <div className="menu_content_i">
          <ul className="menu_nav">
            <li className="active">후라이드</li>
            <li>양념</li>
            <li>뿌링클</li>
            <li>킹시리즈</li>
            <li>핫시리즈</li>
            <li>세트메뉴</li>
          </ul>
          <div className="menu_container">
            {menus.map((menu) => (
              <div key={menu.id} className="menu_item">
                <figure>
                  <img src={menu.img} alt={menu.name} />
                </figure>
                <h3>{menu.name}</h3>
                <p>{menu.engName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
