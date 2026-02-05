import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer>
      <div className="footer_i">
        <ul className="fnb">
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>위치기반서비스이용약관</li>
          <li>영상정보처리기기운영방침</li>
          <li>이메일무단수집거부</li>
        </ul>
        <div className="foot_content">
          <div className="foot_info">
            <img src="./bhcimg/bhc_logo.png" alt="풋로고" />
            <p>주소 서울시 송파구 올림픽로 300, 19층(신천동)</p>
            <p>
              대표 송호섭 사업자등록번호 215-86-61559 <br className="mobile"/>통신판매업 제
              2014-서울송파-0593호
            </p>
            <p>문의 전화 05-6204-3406 FAX 02-6988-2199</p>
          <p className="copy">Copyright©2024.다이닝브랜즈그룹 주식회사.All Rights reserved.</p>
          </div>
          <div className="foot_site">
            <ul className="foot_sns">
              <li><FontAwesomeIcon icon={faYoutube} /></li>
              <li><FontAwesomeIcon icon={faInstagram}/> </li>
              <li><FontAwesomeIcon icon={faFacebook}/> </li>
            </ul>
            <select className="foot_select">
              <option value="1">Family Site</option>
              <option value="2">1</option>
              <option value="3">2</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
