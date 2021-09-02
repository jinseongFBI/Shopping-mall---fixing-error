// components/Prototypes.jsx
import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";
import useActions from "../hooks/useActions";
import usePrototypes from "../hooks/usePrototypes";



// components/Prototypes.jsx

 

export default function Prototypes() {
  const prototypes =usePrototypes();
  // AppStateContext을 통해서 useContext을 가져오게 되면 prototypes 이동 키로 사용
  //hook으로 다시설정
  const {addToOrder}=useActions();
  return (
    <main>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, thumbnail, title, price, desc, pieUrl } = prototype;
          const click=()=>{
            addToOrder(id);
          }
          return (
            <div className="prototype" key={id}>
              <a href={pieUrl} target="_BLANK" rel="noreferrer">
                <div
                  style={{
                    padding: "25px 0 33px 0",
                  }}
                >
                  <video
                    autoPlay
                    loop
                    playsInline
                    className="prototype__artwork prototype__edit"
                    style={{
                      objectFit: "contain",
                    }}
                    src={thumbnail}
                  />
                </div>
              </a>
                    {/* 상품정보 */}
              <div className="prototype__body">
                <div className="prototype__title">
                  <div className="btn btn--primary float--right"
                   onClick={click}>
                    <i className="icon icon--plus" />
                  </div>
                    {/* 상세설명 */}
                  {title}
                </div>
                <p className="prototype__price">$ {price}</p>
                <p className="prototype__desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

