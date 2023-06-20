import { useContext, useEffect, useState } from "react";
import { ZippoAll } from "../../assets/fake-data/ListProducts";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import { AppConText } from "../../AppContext";
import { params } from "react-router-dom";
import zip1 from "../../assets/images/zip1.png";
import "./Detail.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Support from "../../components/footer/Support";
const Details = () => {
  const { DollarUsd, handleAddProduct } = useContext(AppConText);
  const params = useParams();
  let productData = null;
  if (params.id === "01") {
    productData = {
      id: "01",
      title: "Floral Gorilla Design",
      price: 36.95,
      img: zip1,
      content:
        "Biểu thị sức mạnh, trí tuệ và tinh thần nuôi dưỡng, một con khỉ đột dũng mãnh nhưng yên tĩnh là trọng tâm của chiếc bật lửa Flat Grey mượt mà này. Người khổng lồ hiền lành được bao quanh bởi những bông hoa và thực vật tinh tế trong thiết kế Hình ảnh màu hai mặt nhẹ nhàng này. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "02") {
    productData = {
      id: "02",
      title: "Butterfly Design",
      price: 40.45,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/files/atlls9agqjqjjhh5kgvr_large.jpg?v=1682605243",
      content:
        "Sẵn sàng cho chuyến bay đầu tiên, một con bướm tuyệt đẹp tinh tế mở rộng đôi cánh của nó xung quanh tất cả các mặt của chiếc bật lửa 540 tuyệt đẹp này. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "03") {
    productData = {
      id: "03",
      title: "Tree Life Design",
      price: 35.5,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/files/lloekx546n7mlxdobvia_large.jpg?v=1682605236",
      content:
        "Quy trình In Kết cấu mang tính biểu tượng của chúng tôi mang lại cho Cây Sự sống sống động trên chiếc bật lửa White Matte này. Những chiếc lá tươi tốt nhường chỗ cho rễ cây sống động như thật trong thiết kế ba chiều hữu cơ thú vị này. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "04") {
    productData = {
      id: "04",
      title: "Red Moon Desgin ",
      price: 28.95,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/files/s8kq1msyny8roupjppy6_large.jpg?v=1682605111",
      content:
        "Một mặt trăng màu nước tuyệt đẹp rực sáng đằng sau một họa tiết hoa tinh tế trên chiếc bật lửa White Matte cổ điển này. Một vài đám mây kéo dài và những con chim kỳ quái nhấn mạnh thiết kế Hình ảnh màu thanh bình. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "05") {
    productData = {
      id: "05",
      title: "Howdy Cowboy",
      price: 32.95,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/t6htkg7u2qju0jpgar0y_large.jpg?v=1681234446",
      content:
        "Chiếc bật lửa White Matte cổ điển này đã sẵn sàng cho thời gian vui vẻ của boot-scootin. Đôi đá yêu thích của bạn, một chiếc mũ mới sắc nét và một quả bóng disco rực rỡ xuất hiện trong thiết kế Hình ảnh màu và Khắc laser, vì vậy bạn có thể mang cuốc xuống bất cứ nơi nào bạn đi lang thang. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "06") {
    productData = {
      id: "06",
      title: "Lizard Fusion",
      price: 32.95,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/xwiuua3zulrvccxhmuuh_large.jpg?v=1681234331",
      content:
        "Một con thằn lằn nhàn nhã trên bề mặt chiếc bật lửa High Polish Brass rực rỡ này. Quy trình Fusion của chúng tôi được sử dụng để mô tả loài bò sát thư giãn với màu sắc rực rỡ với các vết phá vỡ kim loại đặc trưng cho hiệu ứng ánh kim, lung linh. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "07") {
    productData = {
      id: "07",
      title: "Abstract Faces Design",
      price: 40.45,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/dmqtwyjvi9xfxolzuwqi_large.jpg?v=1681234334",
      content:
        "This 540 Color lighter showcases a seamless series of abstract line portraits and botanicals over a soothing watercolor backdrop for a contemporary take on a timeless genre. Comes packaged in a gift box. For optimal performance, fill with Zippo lighter fuel.",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "08") {
    productData = {
      id: "08",
      title: "Boxing Design",
      price: 32.95,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/frzimbpzn0gng5qcf82w_large.jpg?v=1645131172",
      content:
        "Chiếc bật lửa này gói một cú đấm. Cho dù bạn tham gia vào môn thể thao này hay chỉ chiêm ngưỡng những người vĩ đại, thiết kế trên chiếc bật lửa White Matte này sẽ khiến bạn nổi như một con bướm. Một đôi găng tay ba chiều nhô lên khỏi bề mặt bằng cách sử dụng các quy trình In kết cấu và Hình ảnh màu của chúng tôi. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "09") {
    productData = {
      id: "09",
      title: "Graffiti Peace Design",
      price: 28.95,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/gzrlv5eyxi8x1evvgxot_large.jpg?v=1680785281",
      content:
        "Graffiti đang đi từ đường phố đến bật lửa chống gió yêu thích của bạn. Thiết kế nghệ thuật này miêu tả một bàn tay đưa ra dấu hiệu hòa bình, đã được chụp ảnh màu trên bật lửa Iron Stone gồ ghề, giống như nghệ thuật đường phố trên một bức tường đá. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.      ",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "10") {
    productData = {
      id: "10",
      title: "18 Kt.gold",
      title1: "Cao cấp",
      price: 200.033,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/195_MAIN_large.jpg?v=1617104296",
      content:
        "Đó là niềm đam mê tột bậc. Với sự sang trọng tinh tế, chiếc bật lửa chống gió Zippo này với vỏ vàng nguyên khối 18kt cho cảm giác chắc chắn, trông đáng kể và hoàn toàn tuyệt đẹp. Bao gồm một miếng lót bật lửa mạ vàng và hộp quà quả thủ công tùy chỉnh với giấy chứng nhận đăng ký.",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "11") {
    productData = {
      id: "11",
      title: "Bimetall (Copper Bottom)",
      title1: "Cao cấp",
      price: 300.0,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/files/flmqdmaemoeshqbbczv6_large.jpg?v=1683128914",
      content:
        "Tiếp nối thành công của chương trình Vỏ đồng rắn, Zippo rất vui mừng lần đầu tiên giới thiệu bật lửa Bimetal Case. Được xây dựng bằng cả đồng nguyên khối và bạc sterling rắn và được đánh bóng cao, màn trình diễn tuyệt đẹp này đánh dấu bước đột phá thứ hai của Zippo vào các trường hợp hybrid trong lịch sử của nó - lần đầu tiên là chạy thử nghiệm cực kỳ hạn chế vào năm 2007.",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "12") {
    productData = {
      id: "12",
      title: "Luxury Diamond Design",
      title1: "Cao cấp",
      price: 230.0,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/b0e0191e55b664c3f1e8a3de45e3de9ad93f88f4_large.jpg?v=1672578612",
      content:
        "Các lớp kết cấu bao bọc tấm vàng Armor® High Polish Gold Plate này Quy trình khắc MultiCut 360 ° của Zippo tạo ra một mô hình thanh lịch của kim cương và các đường nét rạng rỡ, với sự hoàn thiện của hình dạng kim cương chứa đầy epoxy màu đỏ mờ được đặt vào bên cạnh bật lửa Một miếng mạ vàng tôn vinh và hoàn thiện vẻ ngoài cao cấp và bao bì sang trọng làm nổi bật thiết kế bọc. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "13") {
    productData = {
      id: "13",
      title: "Currency Design",
      title1: "Cao cấp",
      price: 210.0,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/olwypri8djgg5weqtft8_large.jpg?v=1672578784",
      content:
        "Một khoản đầu tư được đảm bảo để duy trì sự vững chắc. Thiết kế lấy cảm hứng từ tiền điện tử toát lên sự sang trọng trên tất cả các mặt của chiếc bật lửa Armor® High Polish Gold này nhờ quy trình MultiCut Deep Carve của chúng tôi. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "14") {
    productData = {
      id: "14",
      title: "Armor® Tree of Life",
      title1: "Cao cấp",
      price: 97.0,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/05a40faf16fa70fd036e6f216e1e2de94a088fc9_large.jpg?v=1672578605",
      content:
        "Thiết kế MultiCut hài hòa này được đặt trên bật lửa Armor® Antique Silver có Cây Sự sống, kết nối mọi sinh vật sống, quá khứ, hiện tại và tương lai với Trái đất. Bông hoa sự sống, một trong những ví dụ sớm nhất về hình học thiêng liêng, đại diện cho mối liên hệ vĩnh cửu giữa không gian và thời gian được thể hiện ở mặt sau của chiếc bật lửa này. Bao bì sang trọng cho thấy các yếu tố góc lấy cảm hứng từ Art Nouveau bọc ở hai bên bật lửa cho phép xem rõ hơn các chi tiết nhẹ hơn này. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "15") {
    productData = {
      id: "15",
      title: "Armor® High Polish Blue Diamonds",
      title1: "Cao cấp",
      price: 115.0,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/0d519de12b9c9391368e93cd9e834a72eeebcbe7_large.jpg?v=1672578628",
      content:
        "Các phương pháp điều trị chạm khắc sâu và MultiCut rực rỡ trên chiếc bật lửa đánh bóng cao này, thêm nhiều tia sáng màu sắc rực rỡ hơn. Chiếc bật lửa Armor® High Polish Blue này đã được chạm khắc sâu ở mặt trước và mặt sau, tạo ra một hoa văn kim cương jacquard thanh lịch. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "16") {
    productData = {
      id: "16",
      title: "Armor® Fleur-de-lis Design",
      title1: "Cao cấp",
      price: 140.25,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/94ef3847d4fc58a6336ca0e16a8256cd866d1c8b_large.jpg?v=1680098100",
      content:
        "Biểu tượng Fleur-De-Lis biểu thị cuộc sống, ánh sáng và sự hoàn hảo. Dựa trên hoa huệ truyền thống, biểu tượng này đã được khắc xung quanh bật lửa Tấm vàng Ba Lan cao bằng quy trình MultiCut. Vòng tròn màu xanh lá cây ở trung tâm của bông hoa mang lại một màu sắc nổi bật cho thiết kế bằng phương pháp khảm epoxy. Bao bì sang trọng cho phép xem nhiều hơn các chi tiết thiết kế MultiCut, cho phép thiết kế cao cấp này nổi bật trong đám đông. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "17") {
    productData = {
      id: "17",
      title: "Founder's Day Collectible",
      title1: "Cao cấp",
      price: 120.0,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/files/ffdjxypl3ktjsaum2nu9_large.jpg?v=1684182773",
      content:
        "Xây dựng sản phẩm của bạn với sự chính trực, đứng đằng sau nó 100%, và thành công sẽ theo sau. Lời khuyên đơn giản này, được đưa ra bởi người sáng lập Zippo George G. Blaisdell, đã hướng dẫn sự cống hiến của Zippo về chất lượng và dịch vụ kể từ khi thành lập vào năm 1932 - và là lý do chính khiến Zippo vẫn là một trong những thương hiệu được yêu thích nhất trên thế giới hiện nay.",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "18") {
    productData = {
      id: "18",
      title: "SunBeam Pendant",
      title1: "Cao cấp",
      price: 76.5,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/tebzv8anb5lgfhukgvkh_large.jpg?v=1681234343",
      content:
        "Chiếc bật lửa Armor® High Polish Brass này duyên dáng nắm bắt vẻ đẹp của mặt trời trên mặt nước thanh bình trong thiết kế Deep Carve hai mặt sang trọng. Đi kèm đóng gói trong một hộp quà tặng. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu nhẹ hơn Zippo.",
      height: "2.25″ ",
      width: "0.5″",
    };
  } else if (params.id === "19") {
    productData = {
      id: "19",
      title: "Rechargeable Candle Lighter",
      title1: "Zippo Đa năng",
      price: 25.45,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/1e0716cc00caf63a2bfdd38be22c5b86e00b88ca_large.jpg?v=1624458311",
      content:
        "Bật lửa nến có thể sạc lại mới của Zippo không cần nạp lại và không cần butan. Bật lửa chùm tia đơn cung cấp hồ quang chống gió và có thể dễ dàng sạc lại bằng dây sạc đi kèm. Đi kèm đóng gói trong một hộp.",
      height: "10.2″ ",
      width: " 0.85″",
    };
  } else if (params.id === "20") {
    productData = {
      id: "20",
      title: "Flex Neck XL Utility Lighter",
      title1: "Zippo Đa năng",
      price: 24.45,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/fd6d32c8c09209df9eece941aba040516804e644_large.jpg?v=1624299978",
      content:
        "Its bendable 13” neck, dual flame and all metal construction gives you the power and flexibility to fit into tight spots and flame through stiff winds. They’re great for lighting camping stoves, lanterns, water heaters, candles, BBQ grills and more. Comes packaged in a blister pack.",
      height: " 19.5″",
      width: "1.2″",
    };
  } else if (params.id === "21") {
    productData = {
      id: "21",
      title: "Flex Neck Utility Lighter",
      title1: "Zippo Đa năng",
      price: 21.95,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/sejqat8evyqdxw56kzv2_large.jpg?v=1624300218",
      content: "Không có cách nào tốt hơn để bắt đầu đám cháy trong một cơn gió mạnh. Công nghệ ngọn lửa kép giữ cho ngọn lửa cháy mạnh và cổ linh hoạt định vị chính xác nhiệt theo bất kỳ hướng nào. Đầu khổ hẹp đủ nhỏ để tiếp cận các điểm chật hẹp trong đèn lồng và bếp cắm trại. Chúng rất tuyệt vời để thắp nến, vỉ nướng BBQ và hơn thế nữa. Cứng cáp, tất cả đều được xây dựng bằng kim loại. Cổ Flex này không được lấp đầy. Để có hiệu suất tối ưu, hãy đổ đầy nhiên liệu butan Zippo. Đi kèm đóng gói trong một vỉ.",
      height: " 19.5″",
      width: "1.2″",
    };
  }

  return (
    <div className="details__page">
      <Header />

      <div className="details__container">
        {/* <img src={product.img} alt={product.title} fluid />
      <h3>{product.title}</h3> */}

        {productData != null ? (
          <>
            <div className="details">
              <div className="big-img">
                <img src={productData.img} alt={productData.title} />
              </div>
              <div className="box__details">
                <div className="row__details">
                  <h2> {productData.title}</h2>
                  <span>{DollarUsd.format(productData.price)}</span>
                </div>
                <p>{productData.content}</p>
                <p>Lighter Specs</p>
                <ul>
                  <li>Heigh: {productData.height}</li>
                  <li>Width: {productData.width}</li>
                </ul>
                <div className="details__btn">
                  <button
                    className="detail__btn"
                    onClick={() => handleAddProduct(productData)}
                  >
                    Thêm vào giỏ
                  </button>
                  <button className="detail__btn">
                    <Link to="/products">


                      Tiếp tục mua sắm
                    </Link></button>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

      </div>
      <div className="details__sp"><span></span></div>
      <div>
        <h1>CÓ THỂ BẠN SẼ THÍCH</h1>

      </div>
      <div class="row row-cols-2 row-cols-md-4 g-6 details__card">
  <div class="col detail__card">
    <div class="card">
      <img src="https://zippo.vn/wp-content/uploads/2023/02/fjgxlpzxwwkco9bnhren_1024x1024.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://zippo.vn/wp-content/uploads/2023/02/fjgxlpzxwwkco9bnhren_1024x1024.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://zippo.vn/wp-content/uploads/2023/02/fjgxlpzxwwkco9bnhren_1024x1024.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://zippo.vn/wp-content/uploads/2023/02/fjgxlpzxwwkco9bnhren_1024x1024.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
      <Support />
      <Footer />
    </div>
  );
};
export default Details;
