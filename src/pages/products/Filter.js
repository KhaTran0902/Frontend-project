import { useContext } from "react";
import "./Filter.css";
import { AppConText } from "../../AppContext";
import { ZippoAll } from "../../assets/fake-data/ListProducts";
export default function Filters() {
  const { gallery__filter, setData, collection, data } = useContext(AppConText);
  return (
    <div className="fillter-container">
      <div className="galleryWrapper">
        <div className="filterItems">
          <ul>
            <li>
              <button onClick={() => setData(ZippoAll)}>Tất cả sản phẩm</button>
            </li>
            {collection.map((item) => (
              <li>
                <button
                  onClick={() => {
                    gallery__filter(item);
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
