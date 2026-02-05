import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { fa1,fa2,fa3,fa4 } from '@fortawesome/free-solid-svg-icons';

const StartUp = () => {
  return (
    <div className='startup'>
      <div className='startup_img'>
        <div className='startup_img_text'>
        </div>
      </div>
      <div className='startup_content'>
        <div className='startup_content_i'>
            <div className='sec first'>
              <h3>치킨 업계 1위,<br className='startup_br' />  BHC</h3>
              <p>국내 치킨 프랜차이즈 매출 1위로 꾸준한 성장과 혁신 메뉴로 업계를 선도하고 있습니다.</p>
              <div className='first_con'>
                <div className='first_box'>
                  <span> <FontAwesomeIcon icon={fa1} /></span>
                  <h4>투자대비 높은 수익성</h4>
                  <p>효율적인 운영 구조와 안정적인 매출로 <br />
                  가맹점의 높은 수익성을 실현합니다.
                  </p>
                </div>
                <div className='first_box'>
                   <span><FontAwesomeIcon icon={fa2} /></span>
                  <h4>지속적인 성장력</h4>
                  <p>검증된 시스템과 지속적인 시장확대를 톨해 <br />
                  장기적인 성장을 보장합니다.
                  </p>
                </div>
                <div className='first_box'>
                   <span><FontAwesomeIcon icon={fa3} /></span>
                  <h4>탄탄한 브랜드 인지도</h4>
                  <p>업계 1위 브랜드 파워로 꾸준한 고객 신뢰와 <br />
                  안정적인 운영 기반을 제공합니다.</p>
                </div>
                <div className='first_box'>
                   <span><FontAwesomeIcon icon={fa4} /></span>
                  <h4>차별화된 경쟁력</h4>
                  <p>트랜드를 선도하는 메뉴 개발로<br />
                  지속적인 경쟁 우위를 확보합니다.</p>
                </div>
              </div>
            </div>
            <div className='sec taste'>
              <h3>맛의 비밀,<br className='startup_br' /> 연구와 정성</h3>
              <p>BHC제품은 30여 가지 천연재료를 이용해 만듭니다.</p>
              <div className='taste_con'>
                <div className='taste_box box1'>
                  <h4>30여 가지의 천연재료</h4>
                  <p>천연 재료를 사용하여 <br />
                  양념한 BHC만의 독창적인 맛</p>
                </div>
                <div className='taste_box box2'>
                  <h4>24시간 냉장 숙성</h4>
                  <p>24시간 냉장 숙성 공법을 통한 <br />
                  Slow Process로 깊은 풍미 제공</p>
                </div>
                <div className='taste_box box3'>
                  <h4>건강하고 깔끔한 맛</h4>
                  <p>Hi-Oleic 해바라기유 사용으로  <br />
                  건강하고 깔끔한 맛 구현</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default StartUp
