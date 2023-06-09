import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./About.css"
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="about">
      <Header />
      <div className="about__img">
        <img src="https://cdn.shopify.com/s/files/1/1295/7985/files/aboutus-banner_1024x1024.jpg?v=1481665987" />
      </div>
     
      <div className="about__container">
      <h1>Khói Lửa Store</h1>
        <p>Zippo thương hiệu bật lửa nổi tiếng trên thế giới, được thành lập năm 1932 bởi George G. Blaisdell tại bang Bradford, Pennsylvania, Mỹ. Ngày nay, George B. Duke cháu trai của Mr. Blaidell’s là chủ sở hữu duy nhất và cũng là Chủ tịch hội đồng quản trị của Zippo. Các dòng sản phẩm của Zippo tiếp tục được đa dạng hóa và phát triển, đến nay gồm: bật lửa, phụ kiện bật lửa, bật lửa gas butan đa năng, nước hoa dành cho nam giới và nữ giới, phụ kiện thời trang, mắt kính và các sản phẩm dành cho người đam mê dã ngoại.
          Có rất nhiều các nhà sưu tầm Zippo trên thế giới. Sự nhiệt tình và cống hiến của họ dành cho thương hiệu là không thể so sánh được. Để nâng cao các trải nghiệm sưu tầm, các câu lạc bộ Zippo trên toàn thế giới tổ chức các cuộc hội tụ và nhiều sự kiện khác xuyên suốt cả năm.
          Các công ty trên toàn thế giới tiếp tục sử dụng bật lửa Zippo như là một công cụ quảng cáo và tiếp thị. Những chiếc bật lửa quảng cáo này tiếp tục nằm trong sự yêu thích của các nhà sưu tầm.
          Trong một thế giới mà hầu hết các sản phẩm chỉ đơn giản là dùng một lần hoặc bảo hành có giới hạn, Zippo vẫn di trùy chế độ bảo hành trọn đời cho các sản phẩm của mình. Trong hơn 90 năm, không ai tốn bất cứ một đồng chi phí nào cho việc sửa chữa cơ khí cho một chiếc bật lửa Zippo bất kể chiếc bật lửa đó ra đời bao nhiêu năm và trong bất cứ điều kiện sử dụng nào. Chiếc bật lửa đã ăn sâu vào nền văn hóa Mỹ và là biểu tượng toàn cầu của sự tin cậy và bền bỉ.</p>
        <p>Ở Việt Nam bât lửa Zippo được biết đến thông qua các thời kỳ chiến tranh, qua các giai đoạn này bật lửa Zippo theo chân hành trang cùng hàng trăm ngàn lính Mỹ du nhập vào Việt Nam, và từ đây thương hiệu Zippo được biết đến. Kể từ khi Mỹ gỡ bỏ cấm vận Việt Nam và bình thường hóa quan hệ hai nước năm 1994, sau 5 năm tìm hiểu và thăm dò thị trường Zippo đã chính thức thâm nhập vào thị trường Việt Nam năm 1999.Sau hơn 5 năm xây dựng và phát triển với hệ thống cửa hàng trên toàn quốc và hệ thống bán hàng online Zippo  đã và đang mang các sản phẩm chất lượng của Zippo đến với tay người tiêu dùng trên toàn quốc.</p>
        <div>
          <h1>Hệ thống cửa hàng</h1>
          <li>72 Võ Thị Sáu tỉnh Bà Rịa-Vũng Tàu</li>
        </div>
        <div className="about__link">
          <h5>
            Email:

            <Link to=''>
              <span>Khatran090201@gmail.com</span>
            </Link>
          </h5>
          <h5>Hotline/Zalo: 0395678343</h5>
        </div>
      </div>
      <Footer />
    </div>
  );
}
