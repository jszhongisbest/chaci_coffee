# 一頁式形象網頁

---
## ==關於我們== 
<h4>從一顆生豆 ‧ 到一杯咖啡</h4>
<p>晨曦咖啡是全台唯一農場直營,並且產銷合一的連鎖咖啡品牌，我們的咖啡豆來自世界各國的,包含中南美洲、非洲、阿拉伯半島、亞洲等各個產區，晨曦咖啡始終堅持緩慢烘焙工藝,唯有如此才能確保咖啡豆發揮出它最天然的口感和香味</p>            
 <p>在咖啡豆的選取、儲存、混合、烘焙、研磨到咖啡的製作,所有步驟皆自主獨立完成，晨曦咖啡每一批咖啡豆,都是由頂級烘焙機及具十年以上烘焙經驗的烘焙大師所完成,每顆咖啡豆即是大師級的心血傑作</p>
<p>喝咖啡是件美好的事，晨曦咖啡希望除了將這份美好端至你手中外，也希望讓這份美好延伸回溯至源頭，所以晨曦建立公開透明化的商業網絡機制，讓消費者清楚追溯產品的來源，透過產區履歷讓消費者喝的安心 ，並鼓勵豆農使用永續的生產種植方式，尊重自然環境減少水土流失等災害發生</p>

### HTML :mega:
```html
 <!-- 關於我們 開始 -->
    <section>
        <div class="section-title">
            <h4>關於我們</h4>
        </div>
        <div class="container-fluid py-5 bg-light text-white" style="position: relative">
            <div class="row">
                <div class="col-md-5 bg-cover" style="
        position: absolute; top: 0; bottom: 0;
        background-image: url(img/aboutus.jpg)"></div>
            </div>
            <div class="container">
                <div class="row justify-content-end text-md-dark">
                    <div class="col-md-7">
                        <h4>從一顆生豆 ‧ 到一杯咖啡</h4>
                        <p>晨曦咖啡是全台唯一農場直營,並且產銷合一的連鎖咖啡品牌，我們的咖啡豆來自世界各國的,包含中南美洲、非洲、阿拉伯半島、亞洲等各個產區，晨曦咖啡始終堅持緩慢烘焙工藝,唯有如此才能確保咖啡豆發揮出它最天然的口感和香味
                        </p>
                        <p>在咖啡豆的選取、儲存、混合、烘焙、研磨到咖啡的製作,所有步驟皆自主獨立完成，晨曦咖啡每一批咖啡豆,都是由頂級烘焙機及具十年以上烘焙經驗的烘焙大師所完成,每顆咖啡豆即是大師級的心血傑作
                        </p>
                        <p>喝咖啡是件美好的事，晨曦咖啡希望除了將這份美好端至你手中外，也希望讓這份美好延伸回溯至源頭，所以晨曦建立公開透明化的商業網絡機制，讓消費者清楚追溯產品的來源，透過產區履歷讓消費者喝的安心 ，並鼓勵豆農使用永續的生產種植方式，尊重自然環境減少水土流失等災害發生
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
<!-- 關於我們 結束 -->
```
### CSS :fire:
```css
/*關於我們*/
@media (min-width: 768px) { 
    .text-md-dark{
        color: #333;
    }
 }
```
## ==表單 (Forms)== 
### HTML :mega:
```html
<!-- 表單Forms 開始 -->
    <section>
        <div class="container">
            <div class="section-title">
                <h4>聯絡我們</h4>
            </div>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">*姓名</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="請輸入姓名">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">*電話</label>
                        <input type="tel" class="form-control" id="inputPassword4" placeholder="請輸入電話">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">*E-mail</label>
                    <input type="email" class="form-control" id="inputAddress" placeholder="請輸入E-MAIL">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">詢問主題</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>請選擇</option>
                        <option>餐點</option>
                        <option>服務</option>
                        <option>環境</option>
                        <option>價格</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">詢問內容</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="請輸入詢問內容"></textarea>
                </div>
                <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary text-center">送出</button>
                </div>
            </form>
        </div>
    </section>
<!-- 表單Forms 結束 -->
```
## ==頁尾 (Footer)== 
### HTML :mega:
```html
<!-- 頁尾 開始 -->
    <footer class="py-4 mt-3" style="background-color: #7CA912;">
        <div class="container d-flex justify-content-between text-food">
            <div>
                © 2018 晨曦咖啡.All rights reserved.
            </div>
            <div class="text-food">
                <a href="#" class="mr-3">
                    <i class="fab fa-facebook-square fa-lg"></i>
                </a>
                <a href="#" class="mr-3">
                    <i class="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#">
                    <i class="fab fa-line fa-lg"></i>
                </a>
            </div>
        </div>
    </footer>
    <!-- 頁尾 結束 -->
```
### CSS :fire:
```css
/*footer*/

.text-food {
    color: rgb(126, 85, 10);
    font-size: 20px;
}

.text-food a {
    color: rgb(255, 255, 255);
}

.text-food a:hover {
    color: #04BFBF;
    text-decoration: none;
}
```
## ==選單點選滑動效果== 
### JAVASCRIPT :zap:
```javascript
//選單點選滑動效果 開始
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top - 70
        }, 1000);
    });
});
```


## ==滑動回到頁首按鈕(gotop)== 
### HTML :mega:
```html
<!-- 滑動回到頁首按鈕(gotop) 開始 -->
    <div id="gotop">
    </div>
<!-- 滑動回到頁首按鈕(gotop) 結束 -->
```
### JAVASCRIPT :zap:
```javascript
if ($(this).scrollTop()) { //如果捲軸拉到了最上方，按鈕淡出
        $('#gotop').fadeIn();
    } else { //如果捲軸拉開了最上方，按鈕淡入
        $('#gotop').fadeOut();
    }

//點選按鈕頁面自動捲到最上方
$("#gotop").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});
```
